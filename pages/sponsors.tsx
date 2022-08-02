import Link from "next/link"
import { FormattedMessage } from "react-intl"
import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import TwoUpFeature from "../components/TwoUpFeature"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"

function Sponsors() {
  return (
    <>
      <Hero>
        <h1 className="h1 mb-2 lg:col-start-2">
          <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
        </h1>
        <p className="sh1 lg:col-start-2 lg:col-end-6">
          <FormattedMessage
            id="sponsors.hero.body"
            defaultMessage="You can back us on a monthly basis through Patreon or pledge to become a sponsor through our link below. We are grateful for the companies and people who make mastodon possible."
          />
        </p>
      </Hero>

      <TwoUpFeature
        padding="md:!pt-16"
        features={[
          {
            icon: "/icons/donate.svg",
            title: (
              <FormattedMessage
                id="sponsors.sponsorship.title"
                defaultMessage="Sponsorship"
              />
            ),
            copy: (
              <FormattedMessage
                id="sponsors.sponsorship.body"
                defaultMessage="If you would like to see your company's logo with a go follow link on this site, you can become a sponsor directly through our own platform!"
              />
            ),
            cta: (
              <FormattedMessage
                id="sponsors.become_a_sponsor"
                defaultMessage="Become a sponsor"
              />
            ),
            cta_link: "https://sponsor.joinmastodon.org/",
          },
          {
            icon: "/icons/donate-box.svg",
            title: (
              <FormattedMessage
                id="sponsors.patreon.title"
                defaultMessage="Support us on Patreon"
              />
            ),
            copy: (
              <FormattedMessage
                id="sponsors.patreon.body"
                defaultMessage="Making a contribution through our Patreon will reward you with access to our development Discord and your name listed on this page."
              />
            ),
            cta: (
              <FormattedMessage
                id="sponsors.patreon.cta"
                defaultMessage="Go to Patreon"
              />
            ),
            cta_link: "https://patreon.com/mastodon",
          },
        ]}
      />

      <section className="platinum-gold-sponsors mb-32">
        <h2 className="h4 mb-10 text-center">
          <FormattedMessage
            id="sponsors.supported_by"
            defaultMessage="Supported by"
          />
        </h2>
        <SponsorLogoGroup
          sponsors={[...sponsorData.platinum, ...sponsorData.gold]}
        />
      </section>

      <section className="silver-sponsors mb-32">
        <h2 className="h5 mb-8">
          <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-y-8 gap-x-gutter">
          {sponsorData.silver.map((sponsor) => {
            if (sponsor.url) {
              return (
                <Link key={sponsor.url} href={sponsor.url}>
                  <a>
                    <SponsorCard sponsor={sponsor} tier="silver" />
                  </a>
                </Link>
              )
            } else {
              return <SponsorCard sponsor={sponsor} tier="silver" />
            }
          })}
        </div>
      </section>

      <section className="general-sponsors mb-96">
        <h2 className="h5 mb-8">
          <FormattedMessage
            id="sponsors.additional_thanks_to"
            defaultMessage="Additional thanks to"
          />
        </h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-y-4 gap-x-gutter">
          {sponsors.generalHighlighted.map((sponsor) => {
            return (
              <SponsorCard
                key={sponsor}
                sponsor={sponsor}
                tier="generalHighlighted"
              />
            )
          })}
          {sponsors.general.map((sponsor) => {
            return (
              <SponsorCard key={sponsor} sponsor={sponsor} tier="general" />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Sponsors
