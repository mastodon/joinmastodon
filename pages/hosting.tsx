import {
  defineMessages,
  FormattedMessage,
  MessageDescriptor,
  useIntl,
} from "react-intl"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import { isValidElement, PropsWithChildren } from "react"
import classNames from "classnames"
import Head from "next/head"
import {
  partnerCards,
  benefitsCards,
  CardItem,
  stepsCards,
  SalesScheduleLink,
} from "../data/hosting"
import ArrowRight from "../public/ui/arrow-right.svg?inline"
import Image from "next/image"

const messages = defineMessages({
  title: {
    id: "hosting.title",
    defaultMessage: "Managed Mastodon",
  },
  managedTitle: {
    id: "hosting.services.managed.title",
    defaultMessage: "All-in-One Managed Instance",
  },
  managedSubtitle: {
    id: "hosting.services.managed.subtitle",
    defaultMessage: "Tailored for large organizations",
  },
  singleTitle: {
    id: "hosting.services.single.title",
    defaultMessage: "Single Service",
  },
  singleSubtitle: {
    id: "hosting.services.single.subtitle",
    defaultMessage: "Designed for organisations that want to stay in control.",
  },
  featured: {
    id: "hosting.services.featured",
    defaultMessage: "Most popular",
  },
  partnersTitle: {
    id: "hosting.partners.title",
    defaultMessage:
      "World leading organisations and institutions trust Mastodon to manage their instance.",
  },
  partnersLabel: {
    id: "hosting.partners.label",
    defaultMessage: "Partners",
  },
  benefitsTitle: {
    id: "hosting.benefits.title",
    defaultMessage:
      "Your domain. Your people. Your voices. For a resilient social network.",
  },
  benefitsLabel: {
    id: "hosting.benefits.label",
    defaultMessage: "Benefits",
  },
})

const HostingPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Hero>
        <p>100+ use mastodon</p>
        <h1 className="h2 mb-4">
          <FormattedMessage
            id="hosting.title"
            defaultMessage="Your fully-managed Mastodon instance"
          />
        </h1>
        <p className="my-4">
          <FormattedMessage
            id="hosting.subtitle"
            defaultMessage="Your own Mastodon instance hosted by the team who built it"
          />
        </p>
        <SalesButton />
      </Hero>

      <div className="grid grid-cols-[minmax(200px,max-content)_1fr_1fr] grid-rows-[repeat(5,min-content)] gap-8">
        <div className="grid grid-rows-subgrid row-span-full row-start-2 items-center">
          <ServicesLabel>
            <FormattedMessage
              id="hosting.services.description"
              defaultMessage="Description"
            />
          </ServicesLabel>
          <ServicesLabel>
            <FormattedMessage
              id="hosting.services.who"
              defaultMessage="Who is it for"
            />
          </ServicesLabel>
          <ServicesLabel>
            <FormattedMessage
              id="hosting.services.details"
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
            id="hosting.services.managed.description"
            defaultMessage="We handle everything - from infrastructure, security, backups, updates, moderation, legal takedowns."
            tagName="p"
          />
          <FormattedMessage
            id="hosting.services.managed.who"
            defaultMessage="Perfect for organizations that want fast access to their own instance with guaranteed compliance and low resource investment."
            tagName="p"
          />
          <FormattedMessage
            id="hosting.services.managed.details"
            defaultMessage="Including Hosting, Moderation and Support"
            tagName="p"
          />
        </ServicesCard>
        <ServicesCard
          title={messages.singleTitle}
          subtitle={messages.singleSubtitle}
        >
          <FormattedMessage
            id="hosting.services.single.description"
            defaultMessage="You stay in control. Can can decide which services you want to run yourself and where to get support from Mastodon."
            tagName="p"
          />
          <FormattedMessage
            id="hosting.services.single.who"
            defaultMessage="Ideal for organizations that already have internal resources or want to build internal capabilities"
            tagName="p"
          />
          <FormattedMessage
            id="hosting.services.single.details"
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

      <section className="my-8">
        <h2 className="text-h5 font-bold mb-4">
          <FormattedMessage
            id="hosting.guide.title"
            defaultMessage="How It Works"
          />
        </h2>
        <div className="grid grid-cols-3 gap-12">
          {stepsCards.map(({ title, body }, index) => (
            <div
              className="border-2 border-gray-1 p-8 rounded-xl relative"
              key={index}
            >
              <span className="block text-h3 text-center text-nightshade-300 font-bold">
                {index + 1}
              </span>
              <h3 className="font-bold">
                {typeof title === "string" ? title : intl.formatMessage(title)}
              </h3>
              <p>{intl.formatMessage(body)}</p>
              {index !== 0 && (
                <ArrowRight
                  className="absolute -left-[calc(3rem+2px)] top-0 h-full w-12 px-2"
                  role="presentation"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>
    </Layout>
  )
}

export const getStaticProps = withDefaultStaticProps()
export default HostingPage

const SalesButton = ({ className }: { className?: string }) => (
  <a
    href={SalesScheduleLink}
    className={classNames(
      className,
      "px-4 rounded-md text-white b3 text-center bg-blurple-500 transition-colors hocus:bg-blurple-600 h-12 inline-flex items-center"
    )}
  >
    <FormattedMessage id="hosting.sales" defaultMessage="Talk to sales" />
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
      <div className="grid grid-cols-3 gap-8">
        {items.map(({ title, body, image: ImageOrSVG }, index) => (
          <div className="border-2 border-gray-1 p-8 rounded-xl" key={index}>
            {ImageOrSVG && (
              <figure className="aspect-square flex flex-col justify-center items-center m-8 mt-0">
                {typeof ImageOrSVG === "function" ? (
                  <ImageOrSVG className="block" />
                ) : (
                  <Image
                    src={ImageOrSVG.src}
                    alt=""
                    className="block"
                    role="presentation"
                    width={ImageOrSVG.width}
                    height={ImageOrSVG.height}
                  />
                )}
              </figure>
            )}
            <h4 className="font-bold">
              {typeof title === "string" ? title : intl.formatMessage(title)}
            </h4>
            <p>{intl.formatMessage(body)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
