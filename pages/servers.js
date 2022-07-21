import ServerCard from "../components/ServerCard"

const Servers = ({ servers }) => {
  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-3">checkboxes go here</div>

        <div className="col-span-4 grid gap-gutter md:grid-cols-2 lg:col-start-4 lg:col-end-13 xl:grid-cols-3">
          {servers.map((server) => (
            <ServerCard key={server.domain} server={server} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Servers

export async function getStaticProps() {
  const res = await fetch("https://api.joinmastodon.org/servers")
  const servers = await res.json()

  return { props: { servers } }
}
