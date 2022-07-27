import { useQuery } from "@tanstack/react-query"
import { useRef, useState, useEffect } from "react"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { IconCard } from "../components/IconCard"
import SelectMenu from "../components/SelectMenu"
import { categoriesMessages } from "../data/categories"
import type { Server, Category, Language } from "../types/api"
import SVG from "react-inlinesvg"

const apiBase = `https://api.joinmastodon.org/`
const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`

const Servers = ({ filterList }) => {
  const intl = useIntl()
  const [filters, setFilters] = useState({ language: "", category: "" })

  // stores filter list to be passed at placeholder data in the next API fetch
  const cachedLanguages = useRef(filterList.language)
  const cachedCategory = useRef(filterList.category)

  const params = new URLSearchParams(filters)
  const queryOptions = {
    cacheTime: 30 * 60 * 1000, // 30 minutes
  }
  const fetchEndpoint = async function (endpoint): Promise<any[]> {
    const res = await fetch(getApiUrl(endpoint, params.toString()))
    return await res.json()
  }

  const apiCategories = useQuery<Category[]>(
    ["categories", filters.language],
    () => fetchEndpoint("categories"),
    { ...queryOptions, placeholderData: cachedCategory.current }
  )
  const apiLanguages = useQuery<Language[]>(
    ["languages", filters.category],
    () => fetchEndpoint("languages"),
    { ...queryOptions, placeholderData: cachedLanguages.current }
  )

  /**
   * To keep the list stable when we get category data from the API,
   * we need to update the full list of filters' `servers_count` with
   * the new data, or 0 if it's not in the API's list */
  const updateCategoriesWithServersCount = (categories, newCategories) => {
    return categories.map((localItem) => ({
      ...localItem,
      servers_count:
        newCategories.find(
          (remoteItem) => remoteItem.category === localItem.category
        )?.servers_count ?? 0,
    }))
  }
  const updatedCategoryList = updateCategoriesWithServersCount(
    filterList.category,
    apiCategories.data
  )

  cachedLanguages.current = apiLanguages.data
  cachedCategory.current = updatedCategoryList

  const servers = useQuery<Server[]>(
    ["servers", filters.language, filters.category],
    () => fetchEndpoint("servers"),
    queryOptions
  )

  return (
    <div className="grid py-40">
      <section className="order-0">
        <h1>Servers page placeholder</h1>
      </section>

      <GettingStartedCards />

      <div className="order-2 my-4 flex flex-wrap justify-between lg:my-8 ">
        <h2 className="flex items-center gap-2">
          <SVG className="text-gray-2" src="/ui/filters.svg" />
          <span className="text-gray-1">
            <FormattedMessage id="wizard.filter" defaultMessage="Filter" />
          </span>
        </h2>

        <SelectMenu
          label={
            <FormattedMessage
              id="wizard.filter_by_language"
              defaultMessage="Filter by language"
            />
          }
          onChange={(v) => {
            console.log("CHANGE", v)
            setFilters({ ...filters, language: v })
          }}
          value={filters.language}
          options={[
            {
              value: "",
              label: intl.formatMessage({
                id: "wizard.filter.all_languages",
                defaultMessage: "All languages",
              }),
            },
            ...apiLanguages.data
              .filter((language) => language.language && language.locale)
              .map((language) => ({
                label: language.language,
                value: language.locale,
              })),
          ]}
        />
      </div>

      <div className="order-3 grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <ServerFilters
          filterList={{ category: updatedCategoryList }}
          filters={filters}
          setFilters={setFilters}
        />
        <ServerList servers={servers} />
      </div>
    </div>
  )
}

const GettingStartedCards = () => {
  const [visited, setVisited] = useState(false)
  useEffect(function () {
    let visits = localStorage.getItem("visited")

    // on first visit, set localStorage.visited = true
    if (!visits) {
      localStorage.setItem("visited", "true")
    } else {
      setVisited(true) // on subsequent visits
    }
  }, [])

  return (
    <section className={classnames("mb-8", visited ? "order-4" : "order-0")}>
      <h2 className="h3 mb-8 text-center">
        <FormattedMessage
          id="servers.getting_started.headline"
          defaultMessage="Getting started with Mastodon is easy"
        />
      </h2>
      <div className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-4">
        <IconCard
          title={<FormattedMessage id="servers" defaultMessage="Servers" />}
          icon="decentralized"
          copy={
            <FormattedMessage
              id="servers.getting_started.servers"
              defaultMessage="The first step is deciding which network you’d like to be a part of. Every server is operated by an independent organization or individual and the server you choose will host your account."
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
          icon="decentralized"
          copy={
            <FormattedMessage
              id="servers.getting_started.feed.body"
              defaultMessage="Once you join a server, you can curate your home feed by browsing locally, following and talking with people from other servers, or explore trending posts from any publically available server."
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
          icon="decentralized"
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
          icon="decentralized"
          copy={
            <FormattedMessage
              id="servers.getting_started.safe_for_all.body"
              defaultMessage="Actively working to eliminate hate speech, Mastodon will only list servers that are consistently committed to moderation again racism, sexism, and transphobia."
            />
          }
        />
      </div>
    </section>
  )
}

const ServerList = ({ servers }) => {
  if (servers.isLoading) {
    return <p>Loading...</p>
  }

  if (servers.isError) {
    return <p>Oops, something went wrong.</p>
  }

  const featuredServers = null

  return (
    <div className="col-span-4 lg:col-start-4 lg:col-end-13 ">
      {featuredServers && (
        <h3 className="h5 mb-6">
          <FormattedMessage
            id="servers.browse_all"
            defaultMessage="Browse all"
          />
        </h3>
      )}
      <div className="grid gap-gutter md:grid-cols-2  xl:grid-cols-3">
        {servers.data.map((server) => (
          <ServerCard key={server.domain} server={server} />
        ))}
      </div>
    </div>
  )
}

const ServerFilters = ({
  filters,
  setFilters,
  filterList,
}: {
  filters: any
  setFilters: any
  filterList: any
}) => {
  const intl = useIntl()
  const filterGroupMessages = defineMessages({
    category: { id: "server.filter_by.category", defaultMessage: "Topic" },
    language: {
      id: "server.filter_by.language",
      defaultMessage: "Language",
    },
    server_size: {
      id: "server.filter_by.server_size",
      defaultMessage: "Server size",
    },
  })

  return (
    <div className="col-span-3">
      {Object.keys(filterList).map((group, i) => {
        const totalServersCount =
          filterList[group]?.reduce((acc, el) => acc + el.servers_count, 0) ?? 0
        const allOption = {
          category: "",
          servers_count: totalServersCount,
        }
        const options = [allOption, ...filterList[group]]
        return (
          <div className="mb-8" key={i}>
            <h3 className="h5 mb-2" id={`${group}-group-label`}>
              {intl.formatMessage(filterGroupMessages[group])}
            </h3>
            <ul>
              {options.map((item, i) => {
                const isActive = filters.category === item.category
                return (
                  <li key={i}>
                    <label
                      className={classnames(
                        "b2 flex cursor-pointer gap-1 rounded focus-within:outline focus-within:outline-2 focus-within:outline-accent-blurple",
                        isActive && "!font-800",
                        item.servers_count === 0 && "text-gray-2"
                      )}
                    >
                      <input
                        className="sr-only"
                        type="checkbox"
                        name={`filters-${group}`}
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

                      <span className="text-gray-2">
                        ({item.servers_count})
                      </span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const categoryRes = await fetch(getApiUrl("categories"))
  let category = await categoryRes.json()

  const langaugeRes = await fetch(getApiUrl("languages"))
  const language = await langaugeRes.json()

  return {
    props: {
      filterList: {
        category,
        language,
      },
    },
  }
}

export default Servers
