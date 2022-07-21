import { useQuery } from "@tanstack/react-query"
import { FormattedMessage, defineMessages } from "react-intl"
import ServerCard from "../components/ServerCard"
import type Server from "../types/server"

export const categoriesMessages = defineMessages({
  academia: { id: "server.category.academia", defaultMessage: "Academia" },
  activism: { id: "server.category.activism", defaultMessage: "Activism" },
  adult: {
    id: "server.category.adult_content",
    defaultMessage: "Adult content",
  },
  art: { id: "server.category.art", defaultMessage: "Art" },
  books: { id: "server.category.books", defaultMessage: "Books" },
  food: { id: "server.category.food", defaultMessage: "Food" },
  furry: { id: "server.category.furry", defaultMessage: "Furry" },
  games: { id: "server.category.gaming", defaultMessage: "Gaming" },
  general: { id: "server.category.general", defaultMessage: "General" },
  humor: { id: "server.category.humor", defaultMessage: "Humour" },
  journalism: {
    id: "server.category.journalism",
    defaultMessage: "Journalism",
  },
  lgbt: { id: "server.category.lgbt", defaultMessage: "LGBTQ+" },
  music: { id: "server.category.music", defaultMessage: "Music" },
  regional: { id: "server.category.regional", defaultMessage: "Regional" },
  sports: { id: "server.category.sports", defaultMessage: "Sports" },
  tech: { id: "server.category.technology", defaultMessage: "Technology" },
})

const Servers = () => {
  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-3">checkboxes go here</div>

        <ServerList />
      </div>
    </div>
  )
}

const ServerList = () => {
  const servers = useQuery(
    ["servers"],
    async function (): Promise<Server[]> {
      const res = await fetch("https://api.joinmastodon.org/servers")
      return await res.json()
    },
    { cacheTime: 30 * 60 * 1000 } // 30 minutes
  )

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
        {servers.data?.map((server) => (
          <ServerCard key={server.domain} server={server} />
        ))}
      </div>
    </div>
  )
}
export default Servers
