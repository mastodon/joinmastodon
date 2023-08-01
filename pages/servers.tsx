import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { FormattedMessage, FormattedDate, useIntl } from "react-intl"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import Statistic from "../components/Statistic"
import { categoriesMessages } from "../data/categories"
import type { Server, Category, Language, Day, Region } from "../types/api"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { formatNumber } from "../utils/numbers"
import { fetchEndpoint } from "../utils/api"

import serverHeroMobile from "../public/illustrations/servers_hero_mobile.png"
import serverHeroDesktop from "../public/illustrations/servers_hero_desktop.png"
import PersonIcon from "../public/ui/person.svg?inline"
import FiltersIcon from "../public/ui/filters.svg?inline"
import SkeletonText from "../components/SkeletonText"
import Head from "next/head"
import Layout from "../components/Layout"
import Link from "next/link"

const DUNBAR = Math.log(800)

const Servers = () => {
  const intl = useIntl()
  const { locale } = useRouter()
  const [filters, setFilters] = useState({
    language: locale === "en" ? "en" : "",
    category: "general",
    region: "",
    ownership: "",
    registrations: "",
  })

  const params = new URLSearchParams(filters)

  const queryOptions = {
    cacheTime: 30 * 60 * 1000, // 30 minutes
  }

  const allCategories = useQuery<Category[]>(
    ["categories", ""],
    () => fetchEndpoint("categories"),
    { select: (data) => _orderBy(data, "servers_count", "desc") }
  )

  const apiCategories = useQuery<Category[]>(
    ["categories", filters.language],
    () => fetchEndpoint("categories", params),
    {
      ...queryOptions,
      keepPreviousData: true,
      select: (data) => {
        let updated = allCategories.data.map(({ category }) => {
          let match = data.find((el) => {
            return el.category === category
          })

          return { category, servers_count: match ? match.servers_count : 0 }
        })

        const totalServersCount =
          updated?.reduce((acc, el) => acc + el.servers_count, 0) ?? 0

        updated = [
          { category: "", servers_count: totalServersCount },
          ...updated,
        ]

        return updated
      },
    }
  )

  let defaultOption = {
    value: "",
    label: intl.formatMessage({
      id: "wizard.filter.all_languages",
      defaultMessage: "All languages",
    }),
  }

  const registrationsOptions = [
    {
      value: "",
      label: intl.formatMessage({
        id: "wizard.filter.sign_up.all",
        defaultMessage: "All",
      }),
    },
    {
      value: "instant",
      label: intl.formatMessage({
        id: "wizard.filter.sign_up.instant",
        defaultMessage: "Instant",
      }),
    },
    {
      value: "manual",
      label: intl.formatMessage({
        id: "wizard.filter.sign_up.manual",
        defaultMessage: "Manual review",
      }),
    },
  ]

  const ownershipOptions = [
    {
      value: "",
      label: intl.formatMessage({
        id: "wizard.filter.ownership.all",
        defaultMessage: "All",
      }),
    },
    {
      value: "juridicial",
      label: intl.formatMessage({
        id: "wizard.filter.ownership.juridicial",
        defaultMessage: "Public organization",
      }),
    },
    {
      value: "natural",
      label: intl.formatMessage({
        id: "wizard.filter.ownership.natural",
        defaultMessage: "Private individual",
      }),
    },
  ]

  const apiLanguages = useQuery<any[]>(
    ["languages", filters.category],
    () => fetchEndpoint("languages", params),
    {
      ...queryOptions,
      select: (data) => {
        let updated = data
          .filter((language) => language.language && language.locale)
          .map((language) => ({
            label: language.language,
            value: language.locale,
          }))

        updated = [defaultOption, ...updated]
        return updated
      },
    }
  )

  const servers = useQuery<Server[]>(
    [
      "servers",
      filters.language,
      filters.category,
      filters.ownership,
      filters.registrations,
      filters.region,
    ],
    () => fetchEndpoint("servers", params),
    queryOptions
  )

  const days = useQuery<Day[]>(
    ["statistics"],
    () => fetchEndpoint("statistics"),
    queryOptions
  )

  const regions = [
    {
      value: "",
      label: intl.formatMessage({
        id: "server.regions.all",
        defaultMessage: "All regions",
      }),
    },
    {
      value: "europe",
      label: intl.formatMessage({
        id: "server.regions.europe",
        defaultMessage: "Europe",
      }),
    },
    {
      value: "north_america",
      label: intl.formatMessage({
        id: "server.regions.north_america",
        defaultMessage: "North America",
      }),
    },
    {
      value: "south_america",
      label: intl.formatMessage({
        id: "server.regions.south_america",
        defaultMessage: "South America",
      }),
    },
    {
      value: "africa",
      label: intl.formatMessage({
        id: "server.regions.africa",
        defaultMessage: "Africa",
      }),
    },
    {
      value: "asia",
      label: intl.formatMessage({
        id: "server.regions.asia",
        defaultMessage: "Asia",
      }),
    },
    {
      value: "oceania",
      label: intl.formatMessage({
        id: "server.regions.oceania",
        defaultMessage: "Oceania",
      }),
    },
  ]

  return (
    <Layout>
      <Hero mobileImage={serverHeroMobile} desktopImage={serverHeroDesktop}>
        <h1 className="h2 mb-5">
          <FormattedMessage id="servers" defaultMessage="Servers" />
        </h1>

        <p className="sh1 mb-14 max-w-[36ch]">
          <FormattedMessage
            id="servers.hero.body"
            defaultMessage="Mastodon is not a single website. To use it, you need to make an account with a provider—we call them <b>servers</b>—that lets you connect with other people across Mastodon."
            values={{
              b: (text) => <b>{text}</b>,
            }}
          />
        </p>
      </Hero>

      <div className="grid gap-20 pb-40">
        <GettingStartedCards />
        <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
          <div className="col-span-full mb-4 flex flex-wrap gap-gutter md:mb-2 md:justify-end">
            <SelectMenu
              label={
                <FormattedMessage
                  id="wizard.filter_by_language"
                  defaultMessage="Language"
                />
              }
              onChange={(v) => {
                setFilters({ ...filters, language: v })
              }}
              value={filters.language}
              options={apiLanguages.data || [defaultOption]}
            />

            <SelectMenu
              label={
                <FormattedMessage
                  id="wizard.filter_by_registrations"
                  defaultMessage="Sign-up process"
                />
              }
              onChange={(v) => {
                setFilters({ ...filters, registrations: v })
              }}
              value={filters.registrations}
              options={registrationsOptions}
            />

            <SelectMenu
              label={
                <FormattedMessage
                  id="wizard.filter_by_structure"
                  defaultMessage="Legal structure"
                />
              }
              onChange={(v) => {
                setFilters({ ...filters, ownership: v })
              }}
              value={filters.ownership}
              options={ownershipOptions}
            />
          </div>
          <div className="col-span-4 mb-8 md:col-span-3 md:mb-0">
            <h3 className="h5 mb-4">
              <FormattedMessage id="server.safety" defaultMessage="Safety" />
            </h3>

            <p className="b2 mb-8 text-gray-1">
              <FormattedMessage
                id="covenant.learn_more"
                defaultMessage="All servers listed here have committed to the <link>Mastodon Server Covenant</link>."
                values={{
                  link: (chunks) => (
                    <Link href="/covenant" className="underline">
                      {chunks}
                    </Link>
                  ),
                }}
              />
            </p>

            <ServerFilters
              initialCategories={allCategories.data}
              regions={regions}
              categories={apiCategories.data}
              filters={filters}
              setFilters={setFilters}
            />

            <ServerStats days={days} />
          </div>
          <div className="col-span-4 md:col-start-4 md:col-end-13">
            <ServerList servers={servers} />
          </div>
        </div>
      </div>
      <Head>
        <title>
          {`${intl.formatMessage({
            id: "servers.page_title",
            defaultMessage: "Servers",
          })} - Mastodon`}
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "servers.page_title",
            defaultMessage: "Servers",
          })}
        />
        <meta
          name="description"
          content={intl.formatMessage({
            id: "servers.page_description",
            defaultMessage:
              "Find where to sign up for the decentralized social network Mastodon.",
          })}
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "servers.page_description",
            defaultMessage:
              "Find where to sign up for the decentralized social network Mastodon.",
          })}
        />
      </Head>
    </Layout>
  )
}

const GettingStartedCards = () => {
  const [visited, setVisited] = useState(false)
  useEffect(function checkVisited() {
    let visits = localStorage.getItem("visited")

    // on first visit, set localStorage.visited = true
    if (!visits) {
      localStorage.setItem("visited", "true")
    } else {
      setVisited(true) // on subsequent visits
    }
  }, [])

  return (
    <section className={classnames("mb-8", visited ? "order-1" : "order-0")}>
      <h2 className="h3 mb-8 text-center">
        <FormattedMessage
          id="servers.getting_started.headline"
          defaultMessage="Getting started with Mastodon is easy"
        />
      </h2>
      <div className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-4">
        <IconCard
          title={<FormattedMessage id="servers" defaultMessage="Servers" />}
          icon="servers"
          className="md:border md:border-gray-3"
          copy={
            <FormattedMessage
              id="servers.getting_started.servers"
              defaultMessage="The first step is deciding which server you’d like to make your account on. Every server is operated by an independent organization or individual and may differ in moderation policies."
            />
          }
        />
        <IconCard
          title={
            <FormattedMessage
              id="servers.getting_started.feed.title"
              defaultMessage="Your feed"
            />
          }
          icon="feed"
          className="md:border md:border-gray-3"
          copy={
            <FormattedMessage
              id="servers.getting_started.feed.body"
              defaultMessage="With an account on your server, you can follow any other person on the network, regardless of where their account is hosted. You will see their posts in your home feed, and if they follow you, they will see yours in theirs."
            />
          }
        />
        <IconCard
          title={
            <FormattedMessage
              id="servers.getting_started.flexible.title"
              defaultMessage="Flexible"
            />
          }
          icon="move-servers"
          className="md:border md:border-gray-3"
          copy={
            <FormattedMessage
              id="servers.getting_started.flexible.body"
              defaultMessage="Find a different server you'd prefer? With Mastodon, you can easily move your profile to a different server at any time without losing any followers. To be in complete control, you can create your own server."
            />
          }
        />
        <IconCard
          title={
            <FormattedMessage
              id="servers.getting_started.safe_for_all.title"
              defaultMessage="Safe for all"
            />
          }
          icon="safety-1"
          className="md:border md:border-gray-3"
          copy={
            <FormattedMessage
              id="servers.getting_started.safe_for_all.body"
              defaultMessage="We can't control the servers, but we can control what we promote on this page. Our organization will only point you to servers that are consistently committed to moderation against racism, sexism, and transphobia."
            />
          }
        />
      </div>
    </section>
  )
}

const ServerList = ({ servers }) => {
  if (servers.isError) {
    return (
      <p>
        <FormattedMessage
          id="wizard.error"
          defaultMessage="Oops, something went wrong. Try refreshing the page."
        />
      </p>
    )
  }

  return (
    <div className="col-span-4 md:col-start-4 md:col-end-13">
      {servers.data?.length === 0 ? (
        <div className="b2 flex justify-center rounded bg-gray-5 p-4 text-gray-1 md:p-8 md:py-20">
          <p className="max-w-[48ch] text-center">
            <FormattedMessage
              id="wizard.no_results"
              defaultMessage="Seems like there are currently no servers that fit your search criteria. Mind that we only display a curated set of servers that currently accept new sign-ups."
            />
          </p>
        </div>
      ) : (
        <div className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-3">
          {servers.isLoading
            ? Array(8)
                .fill(null)
                .map((_el, i) => <ServerCard key={i} />)
            : servers.data
                .sort((a, b) => {
                  if (a.approval_required === b.approval_required) {
                    return b.last_week_users - a.last_week_users
                  } else if (a.approval_required) {
                    return 1
                  } else if (b.approval_required) {
                    return -1
                  } else {
                    return b.last_week_users - a.last_week_users
                  }
                })
                .map((server) => (
                  <ServerCard key={server.domain} server={server} />
                ))}
        </div>
      )}
    </div>
  )
}

const ServerStats = ({ days }) => {
  const intl = useIntl()

  if (days.isError) {
    return null
  }

  if (days.isLoading) {
    return (
      <div>
        <h3 className="h5 mb-4">
          <FormattedMessage
            id="stats.network"
            defaultMessage="Network health"
          />
        </h3>

        <div className="space-y-4">
          <Statistic key="mau" />
          <Statistic key="servers" />
        </div>

        <p className="b3 mt-4 text-gray-2">
          <SkeletonText className="w-[20ch]" />
          <br />
          <SkeletonText className="w-[16ch]" />
        </p>
      </div>
    )
  }

  if (days.data.length < 3) {
    return null
  }

  const currentDay = days.data[days.data.length - 2]
  const compareDay = days.data[0]

  return (
    <div>
      <h3 className="h5 mb-4">
        <FormattedMessage id="stats.network" defaultMessage="Network health" />
      </h3>

      <div className="space-y-4">
        <Statistic
          key="mau"
          Icon={PersonIcon}
          label={
            <FormattedMessage
              id="stats.monthly_active_users"
              defaultMessage="Monthly Active Users"
            />
          }
          currentValue={parseInt(currentDay.active_user_count)}
          prevValue={parseInt(compareDay.active_user_count)}
        />

        <Statistic
          key="servers"
          Icon={FiltersIcon}
          label={
            <FormattedMessage id="stats.servers" defaultMessage="Servers Up" />
          }
          currentValue={parseInt(currentDay.server_count)}
          prevValue={parseInt(compareDay.server_count)}
        />
      </div>

      <p className="b3 mt-4 text-gray-2">
        <FormattedMessage
          id="stats.disclaimer"
          defaultMessage="Data collected by crawling all accessible Mastodon servers on {date}."
          values={{
            date: (
              <FormattedDate
                value={currentDay.period}
                year="numeric"
                month="short"
                day="2-digit"
              />
            ),
          }}
        />
      </p>
    </div>
  )
}

const ServerFilters = ({
  filters,
  setFilters,
  categories,
  initialCategories,
  regions,
}: {
  filters: any
  setFilters: any
  categories: Category[]
  initialCategories: Category[]
  regions: Region[]
}) => {
  const intl = useIntl()
  return (
    <div className="mb-8">
      <h3 className="h5 mb-4" id="category-group-label">
        <FormattedMessage
          id="server.filter_by.region"
          defaultMessage="Region"
        />
      </h3>

      <p className="b3 mb-4 text-gray-2">
        <FormattedMessage
          id="server.filter_by.region.lead"
          defaultMessage="Where the provider is legally based."
        />
      </p>

      <ul className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-1 md:-ml-3 md:grid-cols-1 md:gap-x-3">
        {regions?.map((item, i) => {
          const isActive = filters.region === item.value

          return (
            <li key={i}>
              <label
                className={classnames(
                  "b2 flex cursor-pointer gap-1 rounded p-3 focus-visible-within:outline focus-visible-within:outline-2 focus-visible-within:outline-blurple-500",
                  isActive && "bg-nightshade-50 !font-extrabold"
                )}
              >
                <input
                  className="sr-only"
                  type="checkbox"
                  name="filters-region"
                  onChange={() => {
                    setFilters({
                      ...filters,
                      region: isActive ? "" : item.value,
                    })
                  }}
                />
                {item.label}
              </label>
            </li>
          )
        })}
      </ul>

      <h3 className="h5 mb-4" id="category-group-label">
        <FormattedMessage
          id="server.filter_by.category"
          defaultMessage="Topic"
        />
      </h3>

      <p className="b3 mb-4 text-gray-2">
        <FormattedMessage
          id="server.filter_by.category.lead"
          defaultMessage="Some providers specialize in hosting accounts from specific communities."
        />
      </p>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-1 md:-ml-3 md:grid-cols-1 md:gap-x-3">
        {!initialCategories
          ? new Array(11).fill(null).map((_, i) => (
              <li className="h-8 p-3" key={i}>
                <SkeletonText className="!h-full" />
              </li>
            ))
          : categories?.map((item, i) => {
              const isActive = filters.category === item.category

              return (
                <li key={i}>
                  <label
                    className={classnames(
                      "b2 flex cursor-pointer gap-1 rounded p-3 focus-visible-within:outline focus-visible-within:outline-2 focus-visible-within:outline-blurple-500",
                      isActive && "bg-nightshade-50 !font-extrabold",
                      item.servers_count === 0 && "text-gray-2"
                    )}
                  >
                    <input
                      className="sr-only"
                      type="checkbox"
                      name="filters-category"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          category: isActive ? "" : item.category,
                        })
                      }}
                    />
                    {item.category === ""
                      ? intl.formatMessage({
                          id: "wizard.filter.all_categories",
                          defaultMessage: "All topics",
                        })
                      : categoriesMessages[item.category]
                      ? intl.formatMessage(categoriesMessages[item.category])
                      : item.category}

                    <span
                      className={
                        isActive ? "text-nightshade-100" : "text-gray-2"
                      }
                    >
                      ({item.servers_count})
                    </span>
                  </label>
                </li>
              )
            })}
      </ul>
    </div>
  )
}

export const getStaticProps = withDefaultStaticProps()

export default Servers
