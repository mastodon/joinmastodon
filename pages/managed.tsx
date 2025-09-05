import {
  defineMessages,
  FormattedMessage,
  MessageDescriptor,
  useIntl,
} from "react-intl"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { PropsWithChildren } from "react"
import classNames from "classnames"
import Head from "next/head"

const messages = defineMessages({
  title: {
    id: "managed.title",
    defaultMessage: "Managed Mastodon",
  },
  managedTitle: {
    id: "managed.services.managed.title",
    defaultMessage: "All-in-One Managed Instance",
  },
  managedSubtitle: {
    id: "managed.services.managed.subtitle",
    defaultMessage: "Tailored for large organizations",
  },
  singleTitle: {
    id: "managed.services.single.title",
    defaultMessage: "Single Service",
  },
  singleSubtitle: {
    id: "managed.services.single.subtitle",
    defaultMessage: "Designed for organisations that want to stay in control.",
  },
  featured: {
    id: "managed.services.featured",
    defaultMessage: "Most popular",
  },
  partnersTitle: {
    id: "managed.partners.title",
    defaultMessage:
      "World leading organisations and institutions trust Mastodon to manage their instance.",
  },
  partnersLabel: {
    id: "managed.partners.label",
    defaultMessage: "Partners",
  },
  partnersEuDescription: {
    id: "managed.partners.eu.description",
    defaultMessage:
      "The European Commission runs an official Mastodon instance to broaden public engagement across the fediverse, support European open-source platforms, and provide a privacy-focused channel for official communications.",
  },
  partnersSchleswigHolsteinDescription: {
    id: "managed.partners.schleswig-holstein.description",
    defaultMessage:
      "To strengthen public digital services and local collaboration, the German state of Schleswig-Holstein launched social.schleswig-holstein.de — an official, Mastodon instance open to state administrations, public-sector companies and non-profits in the region.",
  },
  partnersAltStoreDescription: {
    id: "managed.partners.altstore.description",
    defaultMessage:
      "Altstore is a home for apps that push the boundaries of iOS with no jailbreak required. To support decentralization, user autonomy and privacy, AltStore runs an official Mastodon instance to discuss app sovereignty, alternative app distribution, and open-source solutions outside closed app-store ecosystems.",
  },
  benefitsTitle: {
    id: "managed.benefits.title",
    defaultMessage:
      "Your domain. Your people. Your voices. For a resilient social network.",
  },
  benefitsLabel: {
    id: "managed.benefits.label",
    defaultMessage: "Benefits",
  },
  benefitsIdentityTitle: {
    id: "managed.benefits.identity.title",
    defaultMessage: "Your Identity in Every Username",
  },
  benefitsIdentityDescription: {
    id: "managed.benefits.identity.description",
    defaultMessage:
      "Each account lives under your domain (for example @name@brandname.social). Staff, members, or citizens become instantly recognisable and discoverable across the Fediverse, reinforcing organisational identity with every interaction.",
  },
  benefitsHostingTitle: {
    id: "managed.benefits.hosting.title",
    defaultMessage: "Data Locality & Compliance",
  },
  benefitsHostingDescription: {
    id: "managed.benefits.hosting.description",
    defaultMessage:
      "Decide exactly where your instance is hosted, in EU, or many other approved jurisdictions - so you meet sovereignty, GDPR, or internal-policy requirements without compromise.",
  },
  benefitsReachTitle: {
    id: "managed.benefits.reach.title",
    defaultMessage: "Reclaim Control of Your Reach and Audience",
  },
  benefitsReachDescription: {
    id: "managed.benefits.reach.description",
    defaultMessage:
      "Define your own server rules and moderation standards. With no third-party or outside platform algorithm. You decide how discourse is moderated and how your messages travel.",
  },
})

const partnerCards = [
  {
    title: "European Commission",
    description: messages.partnersEuDescription,
  },
  {
    title: "Schleswig-Holstein",
    description: messages.partnersSchleswigHolsteinDescription,
  },
  {
    title: "AltStore",
    description: messages.partnersAltStoreDescription,
  },
] satisfies CardItem[]

const benefitsCards = [
  {
    title: messages.benefitsIdentityTitle,
    description: messages.benefitsIdentityDescription,
  },
  {
    title: messages.benefitsHostingTitle,
    description: messages.benefitsHostingDescription,
  },
  {
    title: messages.benefitsReachTitle,
    description: messages.benefitsReachDescription,
  },
] satisfies CardItem[]

const ManagedPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Hero>
        <p>100+ use mastodon</p>
        <h1 className="h2 mb-4">
          <FormattedMessage
            id="managed.title"
            defaultMessage="Your fully-managed Mastodon instance"
          />
        </h1>
        <p className="my-4">
          <FormattedMessage
            id="managed.subtitle"
            defaultMessage="Your own Mastodon instance hosted by the team who built it"
          />
        </p>
        <SalesButton />
      </Hero>

      <div className="grid grid-cols-[minmax(200px,max-content)_1fr_1fr] grid-rows-[repeat(5,min-content)] gap-8">
        <div className="grid grid-rows-subgrid row-span-full row-start-2 items-center">
          <ServicesLabel>
            <FormattedMessage
              id="managed.services.description"
              defaultMessage="Description"
            />
          </ServicesLabel>
          <ServicesLabel>
            <FormattedMessage
              id="managed.services.who"
              defaultMessage="Who is it for"
            />
          </ServicesLabel>
          <ServicesLabel>
            <FormattedMessage
              id="managed.services.details"
              defaultMessage="Offering details"
            />
          </ServicesLabel>
        </div>
        <ServicesCard
          title={messages.managedTitle}
          subtitle={messages.managedSubtitle}
          featured={messages.featured}
        >
          <FormattedMessage
            id="managed.services.managed.description"
            defaultMessage="We handle everything - from infrastructure, security, backups, updates, moderation, legal takedowns."
            tagName="p"
          />
          <FormattedMessage
            id="managed.services.managed.who"
            defaultMessage="Perfect for organizations that want fast access to their own instance with guaranteed compliance and low resource investment."
            tagName="p"
          />
          <FormattedMessage
            id="managed.services.managed.details"
            defaultMessage="Including Hosting, Moderation and Support"
            tagName="p"
          />
        </ServicesCard>
        <ServicesCard
          title={messages.singleTitle}
          subtitle={messages.singleSubtitle}
        >
          <FormattedMessage
            id="managed.services.single.description"
            defaultMessage="You stay in control. Can can decide which services you want to run yourself and where to get support from Mastodon."
            tagName="p"
          />
          <FormattedMessage
            id="managed.services.single.who"
            defaultMessage="Ideal for organizations that already have internal resources or want to build internal capabilities"
            tagName="p"
          />
          <FormattedMessage
            id="managed.services.single.details"
            defaultMessage="Choose one or multiple services from Hosting, Moderation or Support."
            tagName="p"
          />
        </ServicesCard>
      </div>

      <CardList
        title={messages.partnersTitle}
        label={messages.partnersLabel}
        items={partnerCards}
      />

      <CardList
        title={messages.benefitsTitle}
        label={messages.benefitsLabel}
        items={benefitsCards}
      />

      <section>
        <h3 className="-order-1 font-semibold">
          <FormattedMessage
            id="managed.guide.title"
            defaultMessage="How It Works"
          />
        </h3>
      </section>

      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>
    </Layout>
  )
}

export const getStaticProps = withDefaultStaticProps()
export default ManagedPage

const SalesButton = ({ className }: { className?: string }) => (
  <a
    href="https://example.com"
    target="_blank"
    className={classNames(
      className,
      "px-4 rounded-md text-white b3 text-center bg-blurple-500 transition-colors hocus:bg-blurple-600 h-12 inline-flex items-center"
    )}
  >
    <FormattedMessage id="managed.sales" defaultMessage="Talk to sales" />
  </a>
)

const ServicesLabel = ({ children }: PropsWithChildren) => (
  <p className="bg-gray-3 border-2 border-gray-2 rounded-lg p-2 text-center text-b3 font-bold">
    {children}
  </p>
)

const ServicesCard = ({
  children,
  title,
  subtitle,
  featured,
}: PropsWithChildren<{
  title: MessageDescriptor
  subtitle: MessageDescriptor
  featured?: MessageDescriptor
}>) => {
  const intl = useIntl()
  return (
    <section className="grid grid-rows-subgrid row-span-full relative p-4 bg-nightshade-600 text-white rounded-lg">
      <div className="flex flex-col justify-between">
        <h2 className="h5 mb-4">{intl.formatMessage(title)}</h2>
        <h3 className="italic text-b3">{intl.formatMessage(subtitle)}</h3>
      </div>
      {children}
      <SalesButton className="justify-self-center" />
      {featured && (
        <span className="absolute -top-6 left-2 bg-nightshade-100 border-2 border-nightshade-300 p-2 rounded-xl italic text-b4 text-nightshade-600 font-semibold">
          {intl.formatMessage(featured)}
        </span>
      )}
    </section>
  )
}

type MessageOrString = string | MessageDescriptor
type CardItem = {
  image?: string
  title: MessageOrString
  description: MessageDescriptor
}

type CardListProps = {
  title: MessageDescriptor
  label: MessageDescriptor
  items: CardItem[]
}
const CardList = ({ title, label, items }: CardListProps) => {
  const intl = useIntl()
  return (
    <section className="my-8 flex flex-col gap-2">
      <h2 className="text-h5 font-bold mb-4">{intl.formatMessage(title)}</h2>
      <h3 className="-order-1 font-semibold">{intl.formatMessage(label)}</h3>
      <div className="grid grid-cols-3 gap-4">
        {items.map(({ title, description }, index) => (
          <div className="border-2 border-gray-1 p-8 rounded-xl" key={index}>
            <h2 className="font-bold">
              {typeof title === "string" ? title : intl.formatMessage(title)}
            </h2>
            <p>{intl.formatMessage(description)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
