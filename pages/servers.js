import ServerCard from "../components/ServerCard"

function Servers() {
  return (
    <div className="py-40">
      <h1>Servers page placeholder</h1>

      <div className="grid grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-3">checkboxes go here</div>

        <div className="col-span-4 lg:col-start-4 lg:col-end-13 lg:grid lg:grid-cols-3 lg:gap-gutter">
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </div>
      </div>
    </div>
  )
}

export default Servers
