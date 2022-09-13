import Head from "next/head"
import { FormattedMessage, useIntl } from "react-intl"
import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import TwoUpFeature from "../components/TwoUpFeature"
import loadIntlMessages from "../utils/loadIntlMessages"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"

function Sponsors() {
  const intl = useIntl()
  return (
    <>
      <Hero>
        <h1 className="h1 mb-5 lg:col-start-2">
          <FormattedMessage id="sponsors" defaultMessage="Sponsors" />
        </h1>
        <p className="sh1 lg:col-start-2 lg:col-end-6">
          <FormattedMessage
            id="sponsors.hero.body"
            defaultMessage="You can back us on a monthly basis through Patreon or pledge to become a sponsor through our own platform. We are grateful for the companies and people who make Mastodon possible."
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-gutter">
          {sponsorData.silver.map((sponsor, i) => {
            if (sponsor.url) {
              return (
                <a key={i} href={sponsor.url} rel={sponsor.nofollow ? "nofollow" : undefined}>
                  <SponsorCard sponsor={sponsor} tier="silver" />
                </a>
              )
            } else {
              return <SponsorCard key={i} sponsor={sponsor} tier="silver" />
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
        <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-1">
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
      <Head>
        <title>
          {intl.formatMessage({
            id: "sponsors.page_title",
            defaultMessage: "Sponsors of Mastodon",
          })}{" "}
          - Mastodon
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "sponsors.page_title",
            defaultMessage: "Sponsors of Mastodon",
          })}
        />
        <meta
          name="description"
          content={intl.formatMessage({
            id: "sponsors.page_description",
            defaultMessage:
              "View people and companies who crowdfund the development of the decentralized, open-source social media platform Mastodon.",
          })}
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "sponsors.page_description",
            defaultMessage:
              "View people and companies who crowdfund the development of the decentralized, open-source social media platform Mastodon.",
          })}
        />
      </Head>
    </>
  )
}

export default Sponsors

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
