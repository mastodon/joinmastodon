import { useState } from "react"
import Head from "next/head"
import Image from "next/legacy/image"
import NewImage from "next/image"
import classNames from "classnames"
import Link from "next/link"
import { FormattedMessage, useIntl, defineMessages } from "react-intl"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  BarElement,
  Title, } from "chart.js"
import { Doughnut, Bar } from 'react-chartjs-2';

import Hero from "../components/Hero"
import SponsorCard from "../components/SponsorCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import sponsors from "../data/sponsors"
import sponsorData from "../data/sponsors"
import { DonatePopup } from "../donate/DonatePopup"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"
import { DonateWidget } from "../components/donate/DonateWidget"

import appsHeroDesktop from "../public/illustrations/apps_hero_desktop.png"
import appsHeroMobile from "../public/illustrations/apps_hero_mobile.png"
import MastodonInTheCloudsIllustration from "../public/illustrations/mastodon_in_the_clouds.png"
import MastodonWithLaptopIllustration from "../public/illustrations/mastodon_with_laptop.png"
import MasotodonFediverseIllustration from "../public/illustrations/mastodon_fediverse.png"
import MastodonsCheeringIllustration from "../public/illustrations/mastodons_cheering.png"
import dpga from "../public/logos/dpga.png"
import w3c from "../public/logos/w3c-member.png"
import previewImage from "../public/sponsors_preview.png"
import deFlagIcon from "../public/german_flag_icon_round.svg"
import usFlagIcon from "../public/united_states_flag_icon_round.svg"
import gitHubLogo from "../public/logos/github.svg"
import patreonLogo from "../public/logos/patreon.svg"
import stripeLogo from "../public/logos/stripe.svg"
import benevityLogo from "../public/logos/benevity.svg"
import sponsorshipIcon from "../public/icons/corporate-sponsorship.svg"
import ExternalLinkIcon from "../public/ui/external-link.svg?inline"
import DropdownArrowIcon from "../public/icons/dropdown-arrow.svg?inline"
import { DonateTabs } from "../components/DonateTabs"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const budgetAllocationData = {
  labels: ['Technical hosting', 'Personnel', 'Other'],
  datasets: [{
    data: [84_000, 585_000, 106_000],
    rotation: 34,
    backgroundColor: [
      '#2f0c7a',
      '#858afa',
      '#563acc'
    ],
  }],
}

const competitorComparisonData = {
  labels: ['Mastodon', 'Bluesky', 'X', 'Threads'],
  datasets: [{
    label: 'Annual budget',
    data: [2_000_000, 30_000_000, 1_450_000_000, 2_000_000_000],
    backgroundColor: [
      '#2f0c7a',
      '#858afa',
      '#563acc',
    ],
  }],
}

const cardMessages = defineMessages({
  giveButterTitle: {
    id: "sponsors.donate_card.givebutter.title",
    defaultMessage: "From the United States",
  },
  giveButterCopy: {
    id: "sponsors.donate_card.givebutter.copy",
    defaultMessage:
      "Make a one-time or recurring donation to Mastodon Inc, our US 501c3 non-profit. Tax deductible for eligible US tax residents.*",
  },
  giveButterButton: {
    id: "sponsors.donate_card.givebutter.button",
    defaultMessage: "Donate through GiveButter",
  },
  giveButterImageAlt: {
    id: "sponsors.donate_card.givebutter.image_alt",
    defaultMessage: "USA Flag",
  },
  weAidTitle: {
    id: "sponsors.donate_card.weaid.title",
    defaultMessage: "From Germany",
  },
  weAidCopy: {
    id: "sponsors.donate_card.weaid.copy",
    defaultMessage:
      "Make a one-time donation through WE AID gGmbH, our German fiscal host. Tax deductible for eligible German tax residents.*",
  },
  weAidButton: {
    id: "sponsors.donate_card.weaid.button",
    defaultMessage: "Donate through WE AID",
  },
  weAidImageAlt: {
    id: "sponsors.donate_card.weaid.image_alt",
    defaultMessage: "German Flag",
  },
  patreonTitle: {
    id: "sponsors.donate_card.patreon.title",
    defaultMessage: "Patreon",
  },
  patreonCopy: {
    id: "sponsors.donate_card.patreon.copy",
    defaultMessage:
      "Patreon donors gain access to Mastodon’s Discord for developers, server admins, and social web supporters.",
  },
  patreonButton: {
    id: "sponsors.donate_card.patreon.button",
    defaultMessage: "Donate through Patreon",
  },
  gitHubTitle: {
    id: "sponsors.donate_card.github.title",
    defaultMessage: "GitHub",
  },
  gitHubCopy: {
    id: "sponsors.donate_card.github.copy",
    defaultMessage:
      "GitHub Sponsors receive a Mastodon badge to their Org or Personal profile. Plus we don’t pay fees!",
  },
  gitHubButton: {
    id: "sponsors.donate_card.github.button",
    defaultMessage: "Donate through GitHub",
  },
  stripeTitle: {
    id: "sponsors.donate_card.stripe.title",
    defaultMessage: "Stripe",
  },
  stripeCopy: {
    id: "sponsors.donate_card.stripe.copy",
    defaultMessage:
      "Make a one-time or recurring direct donation to Mastodon GmbH, from anywhere in the world.",
  },
  stripeButton: {
    id: "sponsors.donate_card.stripe.button",
    defaultMessage: "Donate through Stripe",
  },
  corpSponsorTitle: {
    id: "sponsors.donate_card.corporate_sponsor.title",
    defaultMessage: "Corporate sponsorship",
  },
  corpSponsorCopy: {
    id: "sponsors.donate_card.corporate_sponsor.copy",
    defaultMessage:
      "We welcome corporate sponsors! We’ll feature your company’s logo and a link to your website.",
  },
  corpSponsorButton: {
    id: "sponsors.donate_card.corporate_sponsor.button",
    defaultMessage: "Become a sponsor",
  },
  corpMatchTitle: {
    id: "sponsors.donate_card.corporate_matching.title",
    defaultMessage: "Corporate matching",
  },
  corpMatchCopy: {
    id: "sponsors.donate_card.corporate_matching.copy",
    defaultMessage:
      "Does your company provide corporate matching? If so, you can use Benevity to donate!",
  },
  corpMatchButton: {
    id: "sponsors.donate_card.corporate_matching.button",
    defaultMessage: "Donate on Benevity",
  },
  logoAlt: {
    id: "sponsors.donate_card.logo.alt",
    defaultMessage: "{name} Logo",
  },
})

const Emphasis = ({ children }) => <span className="font-bold">{children}</span>

interface DonateCardProps {
  title: string
  imageSrc?: string
  imageAlt?: string
  copy: string
  cta: string
  ctaAction: string | "popup"
}

const DonateCard = ({
  title,
  imageSrc,
  imageAlt = "",
  copy,
  cta,
  ctaAction,
}: DonateCardProps) => (
  <Link href={ctaAction} className="bg-white flex flex-col items-center text-center p-4 py-8 rounded-xl border-2 border-white hover:border-blurple-500">
    {imageSrc && (
      <Image
        src={imageSrc}
        className="aspect-square"
        width="40"
        height="40"
        alt={imageAlt}
      />
    )}
    <h3 className="text-b1 font-semibold mt-5 mb-2">{title}</h3>
    <p className="b2 grow text-gray-1">{copy}</p>
  </Link>
)

const FAQ = ({ question, children }: { question: string; children: string }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="b1 border-b border-gray-3">
      <button className="w-full py-4 font-bold cursor-pointer flex items-center justify-between gap-8" type="button" onClick={() => setOpen(x => !x)}>
        <div className="text-start">{question}</div>
        <DropdownArrowIcon className={`shrink-0 ${open && "rotate-180"}`} width={28} height={28} />
      </button>

      {open && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

function Sponsors() {
  const intl = useIntl()
  return (
    <Layout previewImage={previewImage}>
      <Hero desktopImage={appsHeroDesktop} mobileImage={appsHeroMobile} homepage>
        <div className="grid gap-x-gutter grid-cols-12">
          <div className="col-span-7 text-start">
            <h1 className="h1 mb-11">
              Support a better social web, today
            </h1>
            <p className="sh1">
              Since 2016, we're building social media that does what you want it to do instead of making you do what it wants. No billionaires, investors, or mega-corporations here—<Emphasis>we are a small team that relies entirely on your support.</Emphasis>
            </p>
          </div>
          <div className="col-span-5">
            <iframe
              className="w-full h-[40rem] bg-white rounded-xl"
              src="/donate"
            ></iframe>
          </div>
        </div>
      </Hero>

      <section className="full-width-bg">
        <div className="full-width-bg__inner">
          <section className="pt-14 pb-[4.5rem] grid items-center gap-x-gutter grid-cols-12">
            <div className="row-span-full col-span-5 col-start-8 flex gap-10 items-center justify-center">
              <Link className='flex' href='https://www.w3.org/' target='_blank'><NewImage src={w3c} alt="W3C Member" className="w-auto h-20" /></Link>
              <Link className='flex gap-3 items-center text-end font-semibold' href='https://digitalpublicgoods.net/' target='_blank'><span>A Registered Digital<br />Public Good</span><NewImage src={dpga} alt="Digital Public Goods Alliance" className="w-auto h-20" /></Link>
            </div>

            <div className="row-span-full col-span-6 col-start-1">
              <p className="b1 mb-4">
                Using this money we:
              </p>

              <ul className="b1 mb-4 list-disc pl-5 space-y-2">
                <li>Develop <Emphasis>open-source software</Emphasis> powering over 8,000 independent Mastodon servers&mdash;fixing bugs, patching security vulnerabilities, and delivering brand new features</li>
                <li>Develop <Emphasis>free official apps</Emphasis> on iOS and Android, ensuring that our latest features are available on mobile</li>
                <li>Provide a <Emphasis>free Mastodon service</Emphasis> at mastodon.social, so that there is always a trustworthy and safe place for new users to land</li>
                <li>Provide multiple auxillery <Emphasis>services for the ecosystem</Emphasis>, supporting third-party Mastodon app developers, fediverse platform developers, and administrators</li>
              </ul>

              <p className="b1 mb-4">Want more details? We publish a report every year:</p>

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
      </section>

      <section className="full-width-bg bg-gray-5 pt-20 pb-20">
        <div className="full-width-bg__inner">
          <h2 className="h4 mb-10 text-center">
            Other ways to give
          </h2>

          <div className="grid gap-4 grid-cols-3">
            <DonateCard
              title="Donate to our US non-profit"
              copy={intl.formatMessage(cardMessages.giveButterCopy)}
              cta={intl.formatMessage(cardMessages.giveButterButton)}
              ctaAction="https://givebutter.com/nAk74p"
              imageSrc={usFlagIcon}
              imageAlt={intl.formatMessage(cardMessages.giveButterImageAlt)}
            />
            <DonateCard
              title="Donate to our German non-profit"
              copy={intl.formatMessage(cardMessages.weAidCopy)}
              cta={intl.formatMessage(cardMessages.weAidButton)}
              ctaAction="https://donate.stripe.com/14A4gAfACaLg76zfKB1ZS07"
              imageSrc={deFlagIcon}
              imageAlt={intl.formatMessage(cardMessages.weAidImageAlt)}
            />
            <DonateCard
              title="Donate through Patreon"
              copy="Unlock various perks by supporting us on Patreon, such as access to our development Discord server or having your name listed on this page."
              cta={intl.formatMessage(cardMessages.patreonButton)}
              ctaAction="https://www.patreon.com/mastodon"
              imageSrc={patreonLogo}
              imageAlt={intl.formatMessage(cardMessages.logoAlt, {
                name: "Patreon",
              })}
            />
            <DonateCard
              title="Donate through GitHub"
              copy="Unlock a Mastodon badge on your GitHub personal or organization profile by donating to us through GitHub."
              cta={intl.formatMessage(cardMessages.gitHubButton)}
              ctaAction="https://github.com/sponsors/mastodon"
              imageSrc={gitHubLogo}
              imageAlt={intl.formatMessage(cardMessages.logoAlt, {
                name: "GitHub",
              })}
            />
            <DonateCard
              title={intl.formatMessage(cardMessages.corpSponsorTitle)}
              copy="Want to see your company or organization's logo on this page, or the very front page of this website, and get a VAT invoice for it?"
              cta={intl.formatMessage(cardMessages.corpSponsorButton)}
              ctaAction="https://sponsor.joinmastodon.org/"
              imageSrc={sponsorshipIcon}
            />
            <DonateCard
              title={intl.formatMessage(cardMessages.corpMatchTitle)}
              copy={intl.formatMessage(cardMessages.corpMatchCopy)}
              cta={intl.formatMessage(cardMessages.corpMatchButton)}
              ctaAction="https://causes.benevity.org/causes/276-5575947211653_d7e4"
              imageSrc={benevityLogo}
              imageAlt={intl.formatMessage(cardMessages.logoAlt, {
                name: "Benevity",
              })}
            />
          </div>
        </div>
      </section>

      <section className="full-width-bg py-16">
        <div className="full-width-bg__inner">
          <h2 className="h4 mb-10">
            Where your donation goes
          </h2>

          <div className="grid grid-cols-12 gap-x-gutter">
            <div className="col-span-6">
              <div className="bg-nightshade-50 p-8 rounded-xl min-h-full">
                <h3 className="h6 mb-4">Our budget allocation</h3>

                <p className="b1 mb-10">In the spirit of transparency, we publish an annual report of what we spend money on every year.</p>

                <div className="flex gap-8 items-center">
                  <div className="w-[250px]">
                    <Doughnut data={budgetAllocationData} options={{ plugins: { legend: { display: false } } }} />
                  </div>

                  <dl className="flex flex-col gap-4 b2">
                    <div className="flex flex-col gap-2">
                      <dt className="w-full flex items-center gap-2 font-bold"><div className="block w-4 h-4 rounded-full bg-blurple-300" /> Personnel<div className="flex-grow" />75%</dt>
                      <dd>We pay a staff of full-time employees and contractors to work on Mastodon. Even though Mastodon is open-source, most of the contributions come from our team.</dd>
                    </div>
                    <div className="flex flex-col gap-2">
                      <dt className="w-full flex items-center gap-2 font-bold"><div className="block w-4 h-4 rounded-full bg-blurple-900" /> Technical hosting<div className="flex-grow" />10%</dt>
                      <dd>We host a free Mastodon service at mastodon.social for more than 263K monthly users. We also host a bunch of services that serve the ecosystem.</dd>
                    </div>
                    <div className="flex flex-col gap-2">
                      <dt className="w-full flex items-center gap-2 font-bold"><div className="block w-4 h-4 rounded-full bg-blurple-600" /> Other<div className="flex-grow" />15%</dt>
                      <dd>We sometimes have to pay for legal counsel or other administrative costs.</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="col-span-6">
              <div className="bg-nightshade-50 p-8 rounded-xl min-h-full">
                <h3 className="h6 mb-4">Compared to competitors</h3>

                <p className="b1 mb-10">We accomplish what we do with a fraction of our competitors' resources* (* according to publicly available data).</p>

                <div className="w-full">
                  <Bar data={competitorComparisonData} options={{ indexAxis: 'y' as const, plugins: { legend: { display: false } } }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width-bg pb-16">
        <div className="full-width-bg__inner">
          <h2 className="h4 mb-10">
            Still have questions?
          </h2>

          <div className="space-y-2 divide-solid">
            <FAQ question="Are my donations tax-deductible?">
              <p>This depends on your location and method of donation. If you are a US tax resident, you can donate to our US 501c3 to make a tax-deductible donation. If you are a German tax resident, you can donate through our fiscal sponsor WE AID gGmbH to make a tax-deductible donation. Tax exemptions vary according to the laws of each country. We strongly recommend that you contact a tax consultant in your country if you have any questions about tax exemptions or reductions.</p>
            </FAQ>

            <FAQ question="What is your donor policy?">
              <p>TBD</p>
            </FAQ>

            <FAQ question="Can I donate to a specific activity only?">
              <p>TBD</p>
            </FAQ>

            <FAQ question="Is Mastodon a non-profit?">
              <p>TBD</p>
            </FAQ>

            <FAQ question="How does Mastodon make money?">
              <p>TBD</p>
            </FAQ>

            <FAQ question="How can I update or cancel a recurring donation?">
              <p>TBD</p>
            </FAQ>
          </div>
        </div>
      </section>

      <section className="platinum-gold-sponsors full-width-bg bg-gray-5 mb-16 py-16">
        <div className="full-width-bg__inner">
          <a id="supported_by" className="invisible block relative -top-32" />
          <h2 className="h4 mb-4 text-center">
            With thanks to
          </h2>
          <p className="text-center b1 mb-10">These organizations are supporting Mastodon through our <Link className="text-blurple-600 hocus:underline" href="https://sponsor.joinmastodon.org/">corporate sponsorship</Link> option.</p>
          <SponsorLogoGroup
            sponsors={[...sponsorData.platinum, ...sponsorData.gold]}
          />
        </div>
      </section>

      <section className="silver-sponsors mb-32" id="sponsors">
        <h2 className="h4 mb-4 text-center">
          And thanks to
        </h2>
        <p className="text-center b1 mb-10">These people are supporting Mastodon through our <Link className="text-blurple-600 hocus:underline" href="https://www.patreon.com/mastodon">Patreon</Link> on the "Silver" tier.</p>
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
        <h2 className="h4 mb-4 text-center">
          <FormattedMessage
            id="sponsors.additional_thanks_to"
            defaultMessage="Additional thanks to"
          />
        </h2>
        <p className="text-center b1 mb-10">These people are supporting Mastodon through our <Link className="text-blurple-600 hocus:underline" href="https://www.patreon.com/mastodon">Patreon</Link> on the "Sponsor" tier or above.</p>
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
