import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { FormattedMessage, FormattedDate, useIntl } from "react-intl"
import SVG from "react-inlinesvg"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import Statistic from "../components/Statistic"
import { categoriesMessages } from "../data/categories"
import type { Server, Category, Language, Day } from "../types/api"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import { formatNumber } from "../utils/numbers"

import serverHeroMobile from "../public/illustrations/servers_hero_mobile.png"
import serverHeroDesktop from "../public/illustrations/servers_hero_desktop.png"
import SkeletonText from "../components/SkeletonText"
import Head from "next/head"
import Layout from "../components/Layout"

const apiBase = `https://api.joinmastodon.org/`
const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`
const DUNBAR = Math.log(800);

const Servers = () => {
  const intl = useIntl()
  const { locale } = useRouter()
  const [filters, setFilters] = useState({ language: locale, category: "general" })

  const params = new URLSearchParams(filters)
  const queryOptions = {
    cacheTime: 30 * 60 * 1000, // 30 minutes
  }
  const fetchEndpoint = async function (endpoint, params): Promise<any[]> {
    const res = await fetch(getApiUrl(endpoint, params.toString()))
    return await res.json()
  }

  const allCategories = useQuery<Category[]>(
    ["categories", ""],
    () => fetchEndpoint("categories", {}),
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
    ["servers", filters.language, filters.category],
    () => fetchEndpoint("servers", params),
    queryOptions
  )

  const days = useQuery<Day[]>(
    ["statistics"],
    () => fetchEndpoint("statistics", params),
    queryOptions
  )

  return (
    <Layout>
      <Hero mobileImage={serverHeroMobile} desktopImage={serverHeroDesktop}>
        <h1 className="h1 mb-5">
          <FormattedMessage id="servers" defaultMessage="Servers" />
        </h1>

        <p className="sh1 mb-14 max-w-[36ch]">
          <FormattedMessage
            id="servers.hero.body"
            defaultMessage="Find where to sign up here on the servers page. New here? <b>Check out the help section below.</b>"
            values={{
              b: (text) => <b>{text}</b>,
            }}
          />
        </p>
      </Hero>

      <div className="grid gap-20 pb-40">
        <GettingStartedCards />
        <div className="grid grid-cols-4 gap-gutter md:grid-cols-12">
          <div className="col-span-full mb-2 flex md:justify-end">
            {
              <SelectMenu
                label={
                  <FormattedMessage
                    id="wizard.filter_by_language"
                    defaultMessage="Filter by language"
                  />
                }
                onChange={(v) => {
                  setFilters({ ...filters, language: v })
                }}
                value={filters.language}
                options={apiLanguages.data || [defaultOption]}
              />
            }
          </div>
          <div className="col-span-4 md:col-span-3">
            <ServerFilters
              initialCategories={allCategories.data}
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
          {intl.formatMessage({
            id: "servers.page_title",
            defaultMessage: "Servers",
          })}{" "}
          - Mastodon
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "servers.page_title",
            defaultMessage: "Servers of Mastodon",
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
        <div className="b2 rounded bg-gray-5 p-4 text-gray-1 md:p-8">
          <p className="max-w-[48ch]">
            <FormattedMessage
              id="wizard.no_results"
              defaultMessage="Seems like there are currently no servers that fit your criteria. Try a different category or a different language filter!"
            />
          </p>
        </div>
      ) : (
        <div className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-3">
          {servers.isLoading
            ? Array(8)
                .fill(null)
                .map((_el, i) => <ServerCard key={i} />)
            : servers.data.sort((a, b) => {
              const aa = Math.abs(DUNBAR - Math.log(a.last_week_users));
              const bb = Math.abs(DUNBAR - Math.log(b.last_week_users));

              return aa > bb ? 1 : (aa < bb ? -1 : 0);
            }).map((server) => (
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

  const currentDay = days.data[days.data.length - 2]
  const compareDay = days.data[0]

  return (
    <div>
      <h3 className="h5 mb-4">
        <FormattedMessage
          id="stats.network"
          defaultMessage="Network health"
        />
      </h3>

      <div className="space-y-4">
        <Statistic
          key="mau"
          icon="/ui/person.svg"
          label={<FormattedMessage id="stats.monthly_active_users" defaultMessage="Monthly Active Users" />}
          currentValue={currentDay.active_user_count}
          prevValue={compareDay.active_user_count}
        />

        <Statistic
          key="servers"
          icon="/ui/filters.svg"
          label={<FormattedMessage id="stats.servers" defaultMessage="Servers Up" />}
          currentValue={currentDay.server_count}
          prevValue={compareDay.server_count}
        />
      </div>

      <p className="b3 mt-4 text-gray-2"><FormattedMessage id="stats.disclaimer" defaultMessage="Data collected by crawling all accessible Mastodon servers on {date}." values={{ date: <FormattedDate value={currentDay.period} year="numeric" month="short" day="2-digit" /> }} /></p>
    </div>
  )
}

const ServerFilters = ({
  filters,
  setFilters,
  categories,
  initialCategories,
}: {
  filters: any
  setFilters: any
  categories: Category[]
  initialCategories: Category[]
}) => {
  const intl = useIntl()
  return (
    <div className="md:mb-8">
      <h3 className="h5 mb-4" id="category-group-label">
        <FormattedMessage
          id="server.filter_by.category"
          defaultMessage="Topic"
        />
      </h3>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-1 md:gap-x-3 md:grid-cols-1 md:-ml-3">
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
                      : intl.formatMessage(categoriesMessages[item.category])}

                    <span className={isActive ? "text-nightshade-100" : "text-gray-2"}>({item.servers_count})</span>
                  </label>
                </li>
              )
            })}
      </ul>
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}

export default Servers
