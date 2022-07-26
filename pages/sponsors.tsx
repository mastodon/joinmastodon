import classnames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import SponsorGroup from "../components/SponsorGroup"
import LinkButton from "../components/LinkButton"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"

function Sponsors() {
  return (
    <>
      <section className="full-width-bg hero h-[80vh] bg-main-blurple pt-[var(--header-area)] text-white">
        <div className="full-width-bg__inner grid lg:grid-cols-12">
          <h1 className="h1 mb-2 lg:col-start-2">
            <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
          </h1>
          <p className="sh1 lg:col-start-2 lg:col-end-6">
            <FormattedMessage
              id="sponsors.hero.body"
              defaultMessage="You can back us on a monthly basis through Patreon or pledge to become a sponsor through our link below. We are grateful for the companies and people who make mastodon possible."
            />
          </p>
        </div>
      </section>

      <section className="my-24 my-32 grid gap-gutter md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-2">
          <SVG className="mb-2 text-accent-blurple" src={`/icons/donate.svg`} />
          <h3 className="h4 mb-6">
            <FormattedMessage
              id="sponsors.sponsorship.title"
              defaultMessage="Sponsorship"
            />
          </h3>
          <p className="mb-8">
            <FormattedMessage
              id="sponsors.sponsorship.body"
              defaultMessage="If you would like to see your company's logo with a go follow link on this site, you can become a sponsor directly through our own platform!"
            />
          </p>
          <LinkButton href="https://sponsor.joinmastodon.org/" size="medium">
            <FormattedMessage
              id="sponsors.become_a_sponsor"
              defaultMessage="Become a sponsor"
            />
          </LinkButton>
        </div>

        <div className="lg:col-span-4 lg:col-start-8">
          <SVG
            className="mb-2 text-accent-blurple"
            src="/icons/donate-box.svg"
          />
          <h3 className="h4 mb-6">
            <FormattedMessage
              id="sponsors.patreon.title"
              defaultMessage="Support us on Patreon"
            />
          </h3>
          <p className="mb-8">
            <FormattedMessage
              id="sponsors.patreon.body"
              defaultMessage="Making a contribution through our Patreon will reward you with access to our development Discord and your name listed on this page."
            />
          </p>
          <LinkButton href="https://patreon.com/mastodon" size="medium">
            <FormattedMessage
              id="sponsors.patreon.cta"
              defaultMessage="Go to Patreon"
            />
          </LinkButton>
        </div>
      </section>

      <section className="platinum-gold-sponsors">
        <h2 className="h4 mb-10 text-center">
          <FormattedMessage
            id="sponsors.supported_by"
            defaultMessage="Supported by"
          />
        </h2>
        <SponsorGroup
          sponsors={[...sponsorData.platinum, ...sponsorData.gold]}
        />
      </section>

      <section className="silver-sponsors mb-32">
        <h2 className="h5 mb-8">
          <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
        </h2>
        <div className="grid gap-y-8 lg:grid-cols-4 lg:gap-x-5">
          {sponsorData.silver.map((sponsor) => {
            if (sponsor.url) {
              return (
                <Link href={sponsor.url}>
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
        <div className="grid gap-y-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-6">
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

const SponsorCard = ({ sponsor, tier }) => {
  return (
    <div
      className={classnames(
        "grid grid-cols-[auto_1fr] gap-4 rounded p-4 shadow",
        tier === "generalHighlighted" && "bg-gray-3"
      )}
    >
      {tier === "silver" &&
        (sponsor.logo ? (
          <Image src={sponsor.logo} width="56" height="56" />
        ) : (
          <div className="h-[56px] w-[56px] bg-blurple-gradient" />
        ))}

      <div className="flex flex-col justify-center">
        <span className="c2 !leading-[1.5] text-gray-1">
          {tier === "silver" ? (
            <FormattedMessage
              id="silver_sponsor"
              defaultMessage="Silver sponsor"
            />
          ) : (
            <FormattedMessage id="sponsor" defaultMessage="Sponsor" />
          )}
        </span>

        <p className="b3">{sponsor.name || sponsor}</p>
      </div>
    </div>
  )
}
