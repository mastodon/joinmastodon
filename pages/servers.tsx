import { useQuery } from "@tanstack/react-query"
import ServerCard from "../components/ServerCard"
import type Server from "../types/server"

const Servers = () => {
  const servers = useQuery(["servers"], async function (): Promise<Server[]> {
    const res = await fetch("https://api.joinmastodon.org/servers")
    return await res.json()
  })

  console.log(servers.data)

  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-3">checkboxes go here</div>

        <div className="col-span-4 grid gap-gutter md:grid-cols-2 lg:col-start-4 lg:col-end-13 xl:grid-cols-3">
          {servers.data?.map((server) => (
            <ServerCard key={server.domain} server={server} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Servers

// export async function getStaticProps() {
//   const res = await fetch("https://api.joinmastodon.org/servers")
//   const servers = await res.json()

//   return {
//     props: { servers },
//     revalidate: 3600, // 1 hour
//   }
// }
