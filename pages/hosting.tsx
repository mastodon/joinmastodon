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
import {
  partnerCards,
  benefitsCards,
  CardItem,
  ImageOrSvg,
  stepsCards,
  SalesScheduleLink,
  hostingLogos,
} from "../data/hosting"
import Image from "next/image"

const messages = defineMessages({
  title: {
    id: "hosting.pageTitle",
    defaultMessage: "Managed Mastodon",
  },
  managedTitle: {
    id: "hosting.services.managed.title",
    defaultMessage: "All-in-One Managed Instance",
  },
  managedSubtitle: {
    id: "hosting.services.managed.subtitle",
    defaultMessage: "Tailored for large organisations",
  },
  singleTitle: {
    id: "hosting.services.single.title",
    defaultMessage: "Single Service",
  },
  singleSubtitle: {
    id: "hosting.services.single.subtitle",
    defaultMessage: "Designed for organisations that want to stay in control.",
  },
  partnersTitle: {
    id: "hosting.partners.title",
    defaultMessage:
      "Leading organisations and institutions trust Mastodon to manage their instance.",
  },
  benefitsTitle: {
    id: "hosting.benefits.title",
    defaultMessage:
      "Your domain. Your people. Your voices. For a resilient social network.",
  },
})

const HostingPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Hero>
        <div className="flex gap-4 items-center text-b3 mb-4">
          <div className="flex -space-x-3">
            {hostingLogos.map(({ title, image }, index) => (
              <span
                key={index}
                title={title}
                className="relative flex size-8 shrink-0 overflow-hidden rounded-full bg-white border border-gray-0"
              >
                <ImageOrSVG data={image} className="w-full h-full" />
              </span>
            ))}
          </div>
          <FormattedMessage
            id="hosting.label"
            defaultMessage="{num}+ organisations use Mastodon for public communication"
            values={{ num: 100 }}
          />
        </div>
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

      <div className="md:grid md:grid-cols-12 md:gap-gutter">
        <div className="md:col-span-12 xl:col-span-10 xl:col-start-2">
          <div className="flex flex-col md:grid md:grid-rows-[repeat(5,min-content)] gap-8 mb-16">
            <ServicesCard
              title={messages.managedTitle}
              subtitle={messages.managedSubtitle}
            >
              <FormattedMessage
                id="hosting.services.managed.description"
                defaultMessage="We handle everything - from infrastructure, security, backups, updates, moderation, legal takedowns."
                tagName="p"
              />
              <FormattedMessage
                id="hosting.services.managed.who"
                defaultMessage="Perfect for organisations that want fast access to their own instance with guaranteed compliance and low resource investment."
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
                defaultMessage="Ideal for organisations that already have internal resources or want to build internal capabilities"
                tagName="p"
              />
              <FormattedMessage
                id="hosting.services.single.details"
                defaultMessage="Choose one or multiple services from Hosting, Moderation or Support."
                tagName="p"
              />
            </ServicesCard>
          </div>
          <CardList title={messages.partnersTitle} items={partnerCards} />

          <CardList title={messages.benefitsTitle} items={benefitsCards} />

          <section className="my-8">
            <h2 className="text-h5 font-bold mb-4">
              <FormattedMessage
                id="hosting.guide.title"
                defaultMessage="How It Works"
              />
            </h2>
            <div className="flex flex-col gap-8">
              {stepsCards.map(({ title, body }, index) => (
                <div
                  className="p-8 rounded-xl relative bg-gray-5 shadow-lg grid grid-cols-[min-content_1fr] gap-4"
                  key={index}
                >
                  <span className="flex items-center justify-center text-b1 text-white bg-black rounded-full font-bold row-span-2 size-10">
                    {index + 1}
                  </span>
                  <h3 className="font-bold col-start-2 h6">
                    {typeof title === "string"
                      ? title
                      : intl.formatMessage(title)}
                  </h3>
                  <p className="col-start-2">{intl.formatMessage(body)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

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
    <section className="grid grid-rows-subgrid gap-8 row-span-full relative p-4 bg-nightshade-600 text-white rounded-lg">
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
  items: CardItem[]
}
const CardList = ({ title, items }: CardListProps) => {
  const intl = useIntl()
  return (
    <section className="my-16 flex flex-col gap-2">
      <h2 className="text-h5 font-bold mb-4">{intl.formatMessage(title)}</h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
        {items.map(({ title, body, image, icon: Icon }, index) => (
          <div className="bg-gray-5 shadow-lg p-8 rounded-xl" key={index}>
            {image && (
              <figure className="aspect-square flex flex-col justify-center items-center p-4 lg:p-8 mb-4 rounded-xl bg-white">
                <ImageOrSVG data={image} className="block" />
              </figure>
            )}
            <h4 className="h6 mb-2 flex gap-4 items-center">
              {Icon && <Icon className="block w-8 flex-shrink-0" />}
              {typeof title === "string" ? title : intl.formatMessage(title)}
            </h4>
            <p>{intl.formatMessage(body)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const ImageOrSVG = ({
  className,
  data,
}: {
  data: ImageOrSvg
  className?: string
}) => {
  if (typeof data === "function") {
    const SVGComponent = data
    return <SVGComponent className={className} />
  }
  return (
    <Image
      src={data.src}
      alt=""
      className={className}
      role="presentation"
      width={data.width}
      height={data.height}
    />
  )
}
