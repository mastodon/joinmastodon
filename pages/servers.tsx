import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState, useEffect, useRef } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import SVG from "react-inlinesvg"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import { categoriesMessages } from "../data/categories"
import type { Server, Category, Language } from "../types/api"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"

import serverHeroMobile from "../public/illustrations/servers_hero_mobile.png"
import serverHeroDesktop from "../public/illustrations/servers_hero_desktop.png"
import SkeletonText from "../components/SkeletonText"
import Head from "next/head"

const apiBase = `https://api.joinmastodon.org/`
const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`

const Servers = () => {
  const intl = useIntl()
  const [filters, setFilters] = useState({ language: "", category: "general" })

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

  return (
    <div>
      <Hero mobileImage={serverHeroMobile} desktopImage={serverHeroDesktop}>
        <h1 className="h1 mb-5">
          <FormattedMessage id="servers" defaultMessage="Servers" />
        </h1>

        <p className="sh1 mb-14 max-w-[36ch]">
          <FormattedMessage
            id="servers.hero.body"
            defaultMessage="Find your community here on the servers page. New here? <b>Check out the help section below.</b>"
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
          </div>
          <div className="col-span-4 md:col-start-4 md:col-end-13">
            <ServerList servers={servers} />
          </div>
        </div>
      </div>
      <Head>
        <title>
          {intl.formatMessage({
            id: "wizard_navigation.choosing_a_community",
            defaultMessage: "Choosing a server",
          })}{" "}
          - Mastodon
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "wizard_navigation.choosing_a_community",
            defaultMessage: "Choosing a server",
          })}
        />
      </Head>
    </div>
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
          copy={
            <FormattedMessage
              id="servers.getting_started.safe_for_all.body"
              defaultMessage="We can't control the servers, but we can control what we promote on this page. Our organization will only point you to servers that are consistently committed to moderation again racism, sexism, and transphobia."
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
            : servers.data.map((server) => (
                <ServerCard key={server.domain} server={server} />
              ))}
        </div>
      )}
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
      <h3 className="h5 mb-2" id="category-group-label">
        <FormattedMessage
          id="server.filter_by.category"
          defaultMessage="Topic"
        />
      </h3>
      <ul className="flex flex-wrap gap-x-3 md:flex-col">
        {!initialCategories
          ? new Array(11).fill(null).map((_, i) => (
              <li className="h-8 py-2" key={i}>
                <SkeletonText className="!h-full" />
              </li>
            ))
          : categories?.map((item, i) => {
              const isActive = filters.category === item.category

              return (
                <li key={i}>
                  <label
                    className={classnames(
                      "b2 flex cursor-pointer gap-1 rounded py-1 focus-visible-within:outline focus-visible-within:outline-2 focus-visible-within:outline-accent-blurple",
                      isActive && "!font-extrabold",
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

                    <span className="text-gray-2">({item.servers_count})</span>
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
