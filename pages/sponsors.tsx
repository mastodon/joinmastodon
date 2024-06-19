import Link from "next/link"
import Head from "next/head"
import Image from "next/legacy/image"
import { FormattedMessage, useIntl } from "react-intl"
import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"

import MastodonInTheCloudsIllustration from "../public/illustrations/mastodon_in_the_clouds.png"
import MastodonsShakingHandsIllustration from "../public/illustrations/mastodons_shaking_hands.png"
import MastodonWithLaptopIllustration from "../public/illustrations/mastodon_with_laptop.png"
import MasotodonFediverseIllustration from "../public/illustrations/mastodon_fediverse.png"
import MastodonsCheeringIllustration from "../public/illustrations/mastodons_cheering.png"

import previewImage from "../public/sponsors_preview.png"

const DonateCard = ({ title, copy, cta, cta_link}) => (
  <div className="flex flex-col basis-full items-center text-center md:items-start md:text-left">
    <h3 className="h5 mb-5 after:block after:h-1 after:rounded-md after:w-32 after:mt-2 after:bg-blurple-500">
      {title}
    </h3>
    <p className="b2 mb-8 text-gray-1 grow">
      {copy}
    </p>
    <LinkButton size="medium" href={cta_link}>
      {cta}
    </LinkButton>
  </div>
);

const Emphasis = ({ children }) => (
  <span className="font-bold">{children}</span>
);

function Sponsors() {
  const intl = useIntl()
  return (
    <Layout previewImage={previewImage}>
      <Hero>
        <h1 className="h2 xl:mt-8 mb-5 lg:col-start-2">
          <FormattedMessage id="sponsors.hero.title" defaultMessage="Reimagining online discourse" />
        </h1>
        <p className="sh1 pb-20 lg:col-start-2 lg:col-end-6">
          <FormattedMessage
            id="sponsors.hero.body"
            defaultMessage="We develop and maintain software for the decentralized social web. No billionaires or mega-corporations here — we rely entirely on your support."
          />
        </p>
        <div className="flex gap-6">
          <LinkButton size="large" href="#donate">
            <FormattedMessage
              id="sponsors.hero.cta.donate"
              defaultMessage="Donate"
            />
          </LinkButton>
          <LinkButton size="large" light borderless href="#supported_by">
            <FormattedMessage
              id="sponsors.hero.cta.view_sponsors"
              defaultMessage="View our sponsors"
            />
          </LinkButton>
        </div>
      </Hero>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <section className="md:grid md:grid-cols-2 items-start md:gap-gutter lg:grid-cols-12 pb-16 lg:pb-20  lg:pt-8 xl:pt-0">
            <div className="row-span-full lg:col-span-6 lg:col-start-1 xl:col-span-5 xl:col-start-2 mx-auto pb-6 px-16 max-w-md md:pb-0 md:px-8 md:pt-20 lg:pt-0 lg:pr-8 lg:pl-0">
              <Image src={MastodonInTheCloudsIllustration} alt="" />
            </div>
            <div className="row-span-full lg:col-span-6 lg:col-start-7 xl:col-span-5">
              <h2 className="h4 md:h3 mb-5">
                <FormattedMessage
                  id="sponsors.support_us.title"
                  defaultMessage="Support us"
                />
              </h2>
              <p className="sh1 text-gray-1 whitespace-pre-line">
                <FormattedMessage
                  id="sponsors.support_us.body"
                  defaultMessage={`We’re rebuilding social media so everyone can build healthy communities locally, connect globally, and own their online presence.\n\nAs a nonprofit we lead development of Mastodon. We’re part of a vast network of organizations building on social web technology. Together, we’re retaking the digital town square for the people.\n\nHelp us build the social web for everyone.`}
                />
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <a id="donate" className="invisible block relative -top-32"/>
          <section className="md:grid md:items-center md:gap-gutter md:grid-cols-12 pb-8 lg:pb-12">
            <div className="md:col-start-1 md:col-span-5 xl:col-start-2 xl:col-span-4">
              <h2 className="h4 md:h3 mb-5">
                <FormattedMessage
                  id="sponsors.donate.title"
                  defaultMessage="Donate today"
                />
              </h2>
              <p className="sh1 text-gray-1 whitespace-pre-line">
                <FormattedMessage
                  id="sponsors.donate.body"
                  defaultMessage={`All donations go directly to Mastodon's development and operation. Recurring donations help us plan for the long term.\n\nWe're forever grateful for every dollar we receive — Thank you!`}
                />
              </p>
            </div>


            <div className="row-span-full md:col-start-6 md:col-span-6 mx-auto pt-8 md:pt-0 px-12 max-w-md md:pb-0 md:px-0">
              <Image src={MastodonsCheeringIllustration} alt="" />
            </div>
          </section>
        </div>
      </div>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <div className="md:grid md:items-center md:gap-gutter md:grid-cols-12 pb-16">
            <div className="md:col-span-12 md:col-start-1 xl:col-span-10 xl:col-start-2 border border-blurple-500 xl:p-16 px-12 py-12 sm:px-24 sm:py-16 md:p-12 rounded-md">
              <div className="flex flex-wrap md:flex-nowrap xl:gap-x-20 lg:gap-x-16 md:gap-x-8 gap-y-16">
                <DonateCard
                  title={(
                    <FormattedMessage
                      id="sponsors.donate_patreon.title"
                      defaultMessage="Patreon"
                    />
                  )}
                  copy={(
                    <FormattedMessage
                      id="sponsors.donate_patreon.copy"
                      defaultMessage="Patreon donors gain access to <emphasis>Mastodon’s Discord</emphasis> for developers, server admins, and social web supporters."
                      values={{
                        emphasis: (text) => (
                          <Emphasis>
                            {text}
                          </Emphasis>
                        ),
                      }}
                    />
                  )}
                  cta={(
                    <FormattedMessage
                      id="sponsors.donate_patreon.cta"
                      defaultMessage="Donate on Patreon"
                    />
                  )}
                  cta_link="https://patreon.com/mastodon"
                />
                <DonateCard
                  title={(
                    <FormattedMessage
                      id="sponsors.donate_github.title"
                      defaultMessage="GitHub"
                    />
                  )}
                  copy={(
                    <FormattedMessage
                      id="sponsors.donate_github.copy"
                      defaultMessage="GitHub Sponsors receive a Mastodon badge to their Org or Personal profile. Plus we don’t pay fees!"
                    />
                  )}
                  cta={(
                    <FormattedMessage
                      id="sponsors.donate_github.cta"
                      defaultMessage="Donate on GitHub"
                    />
                  )}
                  cta_link="https://github.com/sponsors/mastodon"
                />
                <DonateCard
                  title={(
                    <FormattedMessage
                      id="sponsors.donate_direct.title"
                      defaultMessage="Direct"
                    />
                  )}
                  copy={(
                    <FormattedMessage
                      id="sponsors.donate_direct.copy"
                      defaultMessage="Direct donations are welcome through Stripe. They make great gifts!"
                    />
                  )}
                  cta={(
                    <FormattedMessage
                      id="sponsors.donate_direct.cta"
                      defaultMessage="Donate directly"
                    />
                  )}
                  cta_link="https://donate.stripe.com/00g5l42h8ezY3YcaEE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-width-bg bg-gray-5">
        <div className="full-width-bg__inner">
          <section className="pt-14 pb-[4.5rem] md:grid md:items-center md:gap-gutter md:grid-cols-12">
            <div className="row-span-full xl:col-span-4 xl:col-start-2 lg:col-span-5 md:col-span-6 md:col-start-1 pb-6 px-16 mx-auto max-w-md md:max-w-none md:pb-0 md:px-8 lg:p-0">
              <Image src={MastodonsShakingHandsIllustration} alt="" />
            </div>

            <div className="row-span-full xl:col-span-5 xl:col-start-7 md:col-span-6 md:col-start-7">
              <h2 className="h4 md:h3 mb-2 md:mb-5">
                <FormattedMessage
                  id="sponsors.corporate_sponsorship.title"
                  defaultMessage="Corporate sponsorship & matching"
                />
              </h2>
              <p className="sh1 mb-8 text-gray-1 whitespace-pre-line">
                <FormattedMessage
                  id="sponsors.corporate_sponsorship.body"
                  defaultMessage={`We welcome donations from commercial sponsors to help continue our work. If you would like to see your company's logo with a link to your website, you can become a sponsor directly through our own platform! You can also use <benevity_link>Benevity</benevity_link> if your company provides corporate matching.\n\nWe’re grateful for everyone building the social web, especially <support_link>our sponsors</support_link>.`}
                  values={{
                    benevity_link: (text) => (
                      <Link 
                        href="https://causes.benevity.org/causes/276-5575947211653_d7e4"
                        className="text-blurple-500 font-semibold"
                      >
                        {text}
                      </Link>
                    ),
                    support_link: (text) => (
                      <Link
                        href="#supported_by"
                        className="text-blurple-500 font-semibold"
                      >
                        {text}
                      </Link>
                    ),
                  }}
                />
              </p>
              <LinkButton size="large" href={'https://sponsor.joinmastodon.org/'}>
                <FormattedMessage
                  id="sponsors.cta.become_a_sponsor"
                  defaultMessage="Become a sponsor"
                />
              </LinkButton>
            </div>
          </section>
        </div>
      </div>

      <div className="full-width-bg">
        <div className="full-width-bg__inner">
          <section className="pt-14 pb-[4.5rem] md:grid md:items-center md:gap-gutter md:grid-cols-12">
            <div className="row-span-full xl:col-span-4 xl:col-start-8 lg:col-span-5 lg:col-start-8 md:col-span-6 mx-auto pb-6 px-16 max-w-md md:max-w-none md:pb-0 md:px-8 md:col-start-7 lg:p-0">
              <Image src={MastodonWithLaptopIllustration} alt="" />
            </div>

            <div className="row-span-full xl:col-span-5 xl:col-start-2 md:col-span-6 md:col-start-1">
              <h2 className="h4 md:h3 mb-2 md:mb-5">
                <FormattedMessage
                  id="sponsors.how_we_use_donations.title"
                  defaultMessage="How we use donations"
                />
              </h2>
              <p className="sh1 mb-8 text-gray-1 whitespace-pre-line">
                <FormattedMessage
                  id="sponsors.how_we_use_donations.body"
                  defaultMessage={`Donations go towards software development, paying essential contributors like web developers, mobile app developers, and designers. Your donations also support legal and marketing expenses to advocate for and raise awareness about the social web and Mastodon. Additionally, we operate the two largest Mastodon servers, maintained through financial and in-kind contributions.\n\nFor details, take a look at our latest annual report.`}
                />
              </p>
              <div className="flex gap-4 items-center">
                <LinkButton size="large" href="/reports/Mastodon%20Annual%20Report%202022.pdf">
                  <FormattedMessage
                    id="sponsors.cta.annual_reports"
                    defaultMessage="Annual Report"
                  />
                </LinkButton>
                <span className="font-semibold">PDF, 6MB</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="full-width-bg bg-gray-5">
        <div className="full-width-bg__inner">
          <section className="pt-14 pb-16 md:grid md:items-center md:gap-gutter md:grid-cols-12">
            <div className="row-span-full xl:col-span-4 xl:col-start-2 lg:col-span-5 md:col-span-6 md:col-start-1 mx-auto pb-6 px-16 max-w-md md:max-w-none md:pb-0 md:px-8 lg:p-0">
              <Image src={MasotodonFediverseIllustration} alt="" />
            </div>

            <div className="row-span-full xl:col-span-5 xl:col-start-7 md:col-span-6 md:col-start-7">
              <h2 className="h4 md:h3 mb-2 md:mb-5">
                <FormattedMessage
                  id="sponsors.build_the_social_web.title"
                  defaultMessage="Build the social web"
                />
              </h2>
              <p className="sh1 mb-8 text-gray-1 whitespace-pre-line">
                <FormattedMessage
                  id="sponsors.build_the_social_web.body"
                  defaultMessage={`We’re looking for developers to help build the future of online communities with Mastodon. There’s a lot to do — we need help with new features, scaling operations, improving documentation, and more — but the work doesn’t stop here. We contribute to the decentralized social media protocol underlying Mastodon, ActivityPub, and collaborate with the social web community that uses it.\n\nJoin the social web revolution!`}
                />
              </p>
              <LinkButton size="large" href={'https://github.com/mastodon/mastodon/blob/main/CONTRIBUTING.md'}>
                <FormattedMessage
                  id="sponsors.cta.contribute_to_mastodon"
                  defaultMessage="Contribute to Mastodon"
                />
              </LinkButton>
            </div>
          </section>
        </div>
      </div>

      <section className="platinum-gold-sponsors mb-32 pt-16">
        <a id="supported_by" className="invisible block relative -top-32"/>
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

      <section className="silver-sponsors mb-32" id="sponsors">
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
          <FormattedMessage
            id="sponsors.sponsorship.statement"
            defaultMessage="Sponsorship does not equal influence. Mastodon is fully independent."
          />
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
              "Donate or become a sponsor and help us build the social web for everyone!",
          })}
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "sponsors.page_description",
            defaultMessage:
              "Donate or become a sponsor and help us build the social web for everyone!",
          })}
        />
      </Head>
    </Layout>
  )
}

export default Sponsors

export const getStaticProps = withDefaultStaticProps()
