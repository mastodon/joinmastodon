import SponsorGroup from "../components/SponsorGroup"
import sponsorData from "../data/sponsors"

function Sponsors() {
  return (
    <div>
      <h1>Sponsors page placeholder</h1>

      <SponsorGroup sponsors={[...sponsorData.platinum, ...sponsorData.gold]} />
    </div>
  )
}

export default Sponsors
