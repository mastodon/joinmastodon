import Head from "next/head"
import Image from "next/legacy/image"
import classNames from "classnames"
import Link from "next/link"
import { FormattedMessage, useIntl } from "react-intl"

import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"
import { DonatePopup } from "../donate/DonatePopup"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"

import MastodonInTheCloudsIllustration from "../public/illustrations/mastodon_in_the_clouds.png"
import MastodonWithLaptopIllustration from "../public/illustrations/mastodon_with_laptop.png"
import MasotodonFediverseIllustration from "../public/illustrations/mastodon_fediverse.png"
import MastodonsCheeringIllustration from "../public/illustrations/mastodons_cheering.png"
import previewImage from "../public/sponsors_preview.png"
import { DonateTabs } from "../components/DonateTabs"

interface DonateCardProps {
  title: React.ReactNode
  titleClassName?: string
  titleInnerClassName?: string
  className?: string
  copy: React.ReactNode
  cta: React.ReactNode
  ctaLink?: string
  ctaLight?: boolean
  isPopup?: boolean
}

const DonateCard = ({
  title,
  titleClassName = "",
  titleInnerClassName = "",
  className,
  copy,
  cta,
  ctaLink,
  ctaLight = false,
  isPopup = false,
}: DonateCardProps) => (
  <div
    className={classNames(
      "flex flex-col items-center text-center sm:items-start sm:text-left",
      className
    )}
  >
    <h3
      className={classNames(
        "h5 mb-5 flex flex-col max-sm:items-center md:items-start",
        "after:block after:h-1 after:rounded-md after:w-32 after:mt-2 after:bg-blurple-500",
        titleClassName
      )}
    >
      <span className={titleInnerClassName}>{title}</span>
    </h3>
    <p className="b2 mb-8 text-gray-1 grow">{copy}</p>
    {!!ctaLink && (
      <LinkButton light={ctaLight} size="medium" href={ctaLink}>
        {cta}
      </LinkButton>
    )}
    {isPopup && (
      <DonatePopup dark={!ctaLight} size="medium">
        {cta}
      </DonatePopup>
    )}
  </div>
)

const Emphasis = ({ children }) => <span className="font-bold">{children}</span>

function Sponsors() {
  const intl = useIntl()
  return (
    <Layout previewImage={previewImage}>
      <Hero>
        <h1 className="h2 xl:mt-8 mb-5 lg:col-start-2">
          <FormattedMessage
            id="sponsors.hero.title"
            defaultMessage="Reimagining online discourse"
          />
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
          <a id="donate" className="invisible block relative -top-32" />
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
          <div className="md:grid md:items-center md:gap-gutter md:grid-cols-12 pb-1">
            <DonateTabs className="md:col-span-12 md:col-start-1 xl:col-span-10 xl:col-start-2" />
          </div>
          <div className="md:grid md:items-center md:gap-gutter md:grid-cols-12 pb-16">
            <div className="md:col-span-12 md:col-start-1 xl:col-span-10 xl:col-start-2">
              <div className="b4 mt-4 text-gray-2 italic pr-4 text-left md:text-right">
                <FormattedMessage
                  id="sponsors.donate.footer.donor_policy"
                  defaultMessage={`To ensure you qualify to make a donation, please refer to our donor policies: <link_mastodon_inc>Mastodon, Inc</link_mastodon_inc> <middot></middot> <link_mastodon_ggmbh>Mastodon GmbH</link_mastodon_ggmbh>`}
                  values={{
                    link_mastodon_inc: (text) => (
                      <Link
                        className="hover:text-blurple-600 ml-0.5"
                        href="/donor-policy/mastodon-inc"
                        target="_blank"
                      >
                        {text}
                      </Link>
                    ),
                    link_mastodon_ggmbh: (text) => (
                      <Link
                        className="hover:text-blurple-600"
                        href="/donor-policy/mastodon-ggmbh"
                        target="_blank"
                      >
                        {text}
                      </Link>
                    ),
                    middot: () => <span className="px-0.5">&middot;</span>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-width-bg bg-gray-5">
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
                <LinkButton
                  size="large"
                  href="https://joinmastodon.org/reports/Mastodon%20Annual%20Report%202024.pdf"
                >
                  <FormattedMessage
                    id="sponsors.cta.annual_reports"
                    defaultMessage="Annual Report"
                  />{" "}
                  — 2024
                </LinkButton>
                <span className="font-semibold">PDF, 4MB</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="full-width-bg ">
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
              <LinkButton
                size="large"
                href={
                  "https://github.com/mastodon/.github/blob/main/CONTRIBUTING.md"
                }
              >
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
        <a id="supported_by" className="invisible block relative -top-32" />
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
                  <SponsorCard
                    sponsor={sponsor}
                    tier={sponsor.gold ? "gold" : "silver"}
                  />
                </a>
              )
            } else {
              return (
                <SponsorCard
                  key={i}
                  sponsor={sponsor}
                  tier={sponsor.gold ? "gold" : "silver"}
                />
              )
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
