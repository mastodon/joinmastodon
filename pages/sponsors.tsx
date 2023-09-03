import Head from "next/head"
import { FormattedMessage, useIntl } from "react-intl"
import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import TwoUpFeature from "../components/TwoUpFeature"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"
import Layout from "../components/Layout"

import DonateIcon from "../public/icons/donate.svg?inline"
import DonateBoxIcon from "../public/icons/donate-box.svg?inline"

function Sponsors() {
  const intl = useIntl()
  return (
    <Layout>
      <Hero>
        <h1 className="h1 mb-5 lg:col-start-2">
          <FormattedMessage id="sponsors.hero.title" defaultMessage="Donate" />
        </h1>
        <p className="sh1 lg:col-start-2 lg:col-end-6">
          <FormattedMessage
            id="sponsors.hero.body"
            defaultMessage="We develop and maintain the free and open-source software that powers the social web. There is no capital behind this—we rely entirely on your support through platforms like Patreon."
          />
        </p>
      </Hero>

      <TwoUpFeature
        padding="md:!pt-16"
        features={[
          {
            Icon: DonateIcon,
            title: (
              <FormattedMessage
                id="sponsors.sponsorship.title"
                defaultMessage="Commercial sponsorship"
              />
            ),
            copy: (
              <FormattedMessage
                id="sponsors.sponsorship.body"
                defaultMessage="If you would like to see your company's logo with a do-follow link on this site, you can become a sponsor directly through our own platform!"
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
            Icon: DonateBoxIcon,
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
                <a
                  key={i}
                  href={sponsor.url}
                  rel={sponsor.nofollow ? "nofollow" : undefined}
                >
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
          {sponsors.general.map((sponsor, i) => {
            return (
              <SponsorCard
                key={`sponsor-${i}`}
                sponsor={sponsor}
                tier="general"
              />
            )
          })}
        </div>

        <p className="mt-8 text-gray-2 lg:mt-16">
          Sponsorship does not equal influence. Mastodon is fully independent.
        </p>
      </section>
      <Head>
        <title>
          {`${intl.formatMessage({
            id: "sponsors.page_title",
            defaultMessage: "Donate to Mastodon",
          })} - Mastodon`}
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "sponsors.page_title",
            defaultMessage: "Donate to Mastodon",
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
    </Layout>
  )
}

export default Sponsors

export const getStaticProps = withDefaultStaticProps()
