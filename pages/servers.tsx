import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { FormattedMessage, defineMessages, useIntl } from "react-intl"
import classnames from "classnames"
import { orderBy as _orderBy } from "lodash"
import ServerCard from "../components/ServerCard"
import { categoriesMessages } from "../data/categories"
import type Server from "../types/server"

const Servers = ({ filterList }) => {
  const [filters, setFilters] = useState({ language: "", topic: "" })

  const servers = useQuery(
    [`servers-${filters.language}-${filters.topic}`],
    async function (): Promise<Server[]> {
      const res = await fetch(
        `https://api.joinmastodon.org/servers?language=${filters.language}&category=${filters.topic}`
      )
      return await res.json()
    },
    { cacheTime: 30 * 60 * 1000 }
  ) // 30 minutes)

  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <ServerFilters
          filterList={filterList}
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
    topic: { id: "server.filter_by.topic", defaultMessage: "Topic" },
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
        return (
          <div className="mb-8" key={i}>
            <h3 className="h5 mb-2" id={`${group}-group-label`}>
              {intl.formatMessage(filterGroupMessages[group])}
            </h3>
            <ul>
              {filterList[group].map((item, i) => {
                return (
                  <li
                    className={classnames(
                      "b2 flex cursor-pointer gap-1",
                      (filters.language === item.locale ||
                        filters.topic === item.category) &&
                        "!font-800"
                    )}
                    key={i}
                    onClick={() => {
                      if (group === "topic") {
                        setFilters({ ...filters, topic: item.category })
                      }

                      if (group === "language") {
                        setFilters({ ...filters, language: item.locale })
                      }
                    }}
                  >
                    {group === "topic"
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
  const topicRes = await fetch("https://api.joinmastodon.org/categories")
  let topic = await topicRes.json()

  const langaugeRes = await fetch("https://api.joinmastodon.org/languages")
  const language = await langaugeRes.json()

  // const serversRes = await fetch("https://api.joinmastodon.org/servers")
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
        topic: _orderBy(topic, "servers_count", "desc"),
        language: _orderBy(language, "servers_count", "desc"),
        // server_size: serverCount,
      },
    },
  }
}

export default Servers
