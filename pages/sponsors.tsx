import Image from "next/image"
import { FormattedMessage } from "react-intl"
import SponsorGroup from "../components/SponsorGroup"
import sponsorData from "../data/sponsors"

function Sponsors() {
  return (
    <div>
      <h1>Sponsors page placeholder</h1>

      <section className="platinum-gold-sponsors">
        <SponsorGroup
          sponsors={[...sponsorData.platinum, ...sponsorData.gold]}
        />
      </section>

      <section className="silver-sponsors">
        <h2 className="h5">
          <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
        </h2>
        <div className="grid gap-y-8 lg:grid-cols-4 lg:gap-x-5">
          {sponsorData.silver.map((sponsor) => {
            return (
              <div className="grid grid-cols-[auto_1fr] gap-4 rounded p-4 shadow">
                {sponsor.logo ? (
                  <Image src={sponsor.logo} width="56" height="56" />
                ) : (
                  <div className="h-[56px] w-[56px] bg-blurple-gradient"></div>
                )}

                <div className="flex flex-col justify-center">
                  <span className="c2 !leading-[1.5] text-gray-1">
                    <FormattedMessage
                      id="silver_sponsor"
                      defaultMessage="Silver sponsor"
                    />
                  </span>

                  <p className="b3">{sponsor.name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Sponsors
