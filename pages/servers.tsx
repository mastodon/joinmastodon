import { useQuery } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { categoriesMessages } from "../data/categories"
import type { Server, Category, Language } from "../types/api"

const apiBase = `https://api.joinmastodon.org/`
const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`

// helps with standardizing property access and ID-matching from the API
const filterAccessKeys = [
  { groupKey: "category", idKey: "category" },
  { groupKey: "language", idKey: "locale" },
]

const Servers = ({ filterList }) => {
  const [filters, setFilters] = useState({ language: "", category: "" })

  // stores filter list to be passed at placeholder data in the next API fetch
  const cachedFilterList = useRef(filterList)

  const params = new URLSearchParams(filters)
  const queryOptions = {
    cacheTime: 30 * 60 * 1000, // 30 minutes
  }

  const fetchEndpoint = async function (endpoint): Promise<any[]> {
    const res = await fetch(getApiUrl(endpoint, params.toString()))
    return await res.json()
  }

  const apiCategories = useQuery(
    ["categories", filters.language],
    () => fetchEndpoint("categories"),
    { ...queryOptions, placeholderData: cachedFilterList.current.category }
  )
  const apiLanguages = useQuery(
    ["languages", filters.category],
    () => fetchEndpoint("languages"),
    { ...queryOptions, placeholderData: cachedFilterList.current.language }
  )
  const apiFilters = { category: apiCategories, language: apiLanguages }

  // when we get category/language data from the API, we need to update
  // the full list of filters' `servers_count` with the new data,
  // or 0 if it's not in the API's list
  let updatedFilterList = { ...filterList }
  filterAccessKeys.forEach(({ groupKey, idKey }) => {
    if (apiFilters[groupKey].data) {
      updatedFilterList[groupKey] = filterList[groupKey].map((localItem) => ({
        ...localItem,
        servers_count:
          apiFilters[groupKey].data.find(
            (remoteItem) => remoteItem[idKey] === localItem[idKey]
          )?.servers_count ?? 0,
      }))
    }
  })
  cachedFilterList.current = updatedFilterList

  const servers = useQuery(
    ["servers", filters.language, filters.category],
    () => fetchEndpoint("servers"),
    queryOptions
  )

  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <ServerFilters
          filterList={updatedFilterList}
          filters={filters}
          setFilters={setFilters}
        />
        <ServerList servers={servers} />
      </div>
    </div>
  )
}

const ServerList = ({ servers }) => {
  if (servers.isLoading) {
    return <p>Loading...</p>
  }

  if (servers.isError) {
    return <p>Oops, something went wrong.</p>
  }

  return (
    <div className="col-span-4 lg:col-start-4 lg:col-end-13 ">
      <h3 className="h5 mb-6">
        <FormattedMessage id="servers.browse_all" defaultMessage="Browse all" />
      </h3>
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
    category: { id: "server.filter_by.topic", defaultMessage: "Topic" },
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
        const accessKeys = filterAccessKeys.find((k) => k.groupKey === group)
        return (
          <div className="mb-8" key={i}>
            <h3 className="h5 mb-2" id={`${group}-group-label`}>
              {intl.formatMessage(filterGroupMessages[group])}
            </h3>
            <ul>
              {filterList[group].map((item, i) => {
                const isActive =
                  filters.language === item.locale ||
                  filters.category === item.category
                return (
                  <li
                    className={classnames(
                      "b2 flex cursor-pointer gap-1",
                      isActive && "!font-800",
                      item.servers_count === 0 && "text-gray-2"
                    )}
                    key={i}
                    onClick={() => {
                      setFilters({
                        ...filters,
                        [accessKeys.groupKey]: isActive
                          ? ""
                          : item[accessKeys.idKey],
                      })
                    }}
                  >
                    {group === "category"
                      ? intl.formatMessage(categoriesMessages[item.category])
                      : item.language || item.server_size}

                    <span className="text-gray-2">({item.servers_count})</span>
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

  // const serversRes = await fetch(getApiUrl("servers"))
  // const servers = await serversRes.json()

  // // matching data format of /categories and /languages
  // let serverCount = [
  //   {
  //     server_size: "1 - 1,000",
  //     servers_count: 0,
  //   },
  //   {
  //     server_size: "1,000 - 5,000",
  //     servers_count: 0,
  //   },
  //   {
  //     server_size: "5,000+",
  //     servers_count: 0,
  //   },
  // ]

  // servers.forEach((server) => {
  //   if (server.total_users < 1000) {
  //     serverCount[0].servers_count++
  //   } else if (server.total_users > 1000 && server.total_users <= 5000) {
  //     serverCount[1].servers_count++
  //   } else {
  //     serverCount[2].servers_count++
  //   }
  // })

  return {
    props: {
      // servers,
      filterList: {
        category,
        language,
        // server_size: serverCount,
      },
    },
  }
}

export default Servers
