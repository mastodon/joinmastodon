import { FormattedMessage } from "react-intl"
import Image from "next/image"
import classnames from "classnames"

import loadIntlMessages from "../utils/loadIntlMessages"
import LinkButton from "../components/LinkButton"
import TestimonialCard from "../components/TestimonialCard"

import testimonialsData from "../data/testimonials.json"
import sponsorsData from "../data/sponsors.js"

import illoTimeline from "../public/illustrations/features_timeline.png"
import illoAudience from "../public/illustrations/features_audience.png"
import illoModeration from "../public/illustrations/features_moderation.png"
import Link from "next/link"

function Home() {
  return (
    <>
      <HomeHero />
      <Testimonials testimonials={testimonialsData.slice(0, 3)} />
      <Features />
      <Sponsors sponsors={sponsorsData} />
    </>
  )
}

export default Home

const HomeHero = () => {
  return (
    <section className="hero text-center">
      <h1 className="h1 ">
        <FormattedMessage
          id="home.hero.headline"
          defaultMessage="Social networking that's not for sale."
        />
      </h1>

      <p className="sh1">
        <FormattedMessage
          id="home.hero.body"
          defaultMessage="Your home feed should be filled with what matters to you most, not what a corporation thinks you should see. Radically different social media, back in the hands of the people."
        />
      </p>

      <div className="flex justify-center gap-12">
        <LinkButton href="/">
          <FormattedMessage
            id="home.how_it_works"
            defaultMessage="How it works"
          />
        </LinkButton>

        <LinkButton href="/" light>
          <FormattedMessage
            id="home.get_started"
            defaultMessage="Get started"
          />
        </LinkButton>
      </div>
    </section>
  )
}

const Testimonials = ({ testimonials }) => {
  return (
    <section className="full-width-bg bg-gray-5 pt-20 pb-28">
      <div className="full-width-bg__inner">
        <h2 className="h3 pb-16 text-center">
          <FormattedMessage
            id="home.testimonials.title"
            defaultMessage="What our users are saying"
          />
        </h2>
        <div className=" grid gap-gutter  md:grid-cols-3 ">
          {/* TODO(mika): these cards should be rendered in a carousel*/}
          {testimonials.map((testimonial) => {
            return (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

const Features = () => {
  return (
    <section>
      {[
        {
          title: (
            <FormattedMessage
              id="home.features.timeline.title"
              defaultMessage="Stay in control of your own timeline"
            />
          ),
          body: (
            <FormattedMessage
              id="home.features.timeline.body"
              defaultMessage="Decentralized social media is created and maintained by its users, making you the owner of your feed. You can be as public or as private as you like and curate your own experience."
            />
          ),
          button: (
            <LinkButton href="/">
              <FormattedMessage
                id="home.features.button.learn_more"
                defaultMessage="Learn more"
              />
            </LinkButton>
          ),
          image: illoTimeline,
        },
        {
          title: (
            <FormattedMessage
              id="home.features.audience.title"
              defaultMessage="Build your audience"
            />
          ),
          body: (
            <FormattedMessage
              id="home.features.audience.body"
              defaultMessage="Joining a server on Mastodon provides you with the power to communicate with any server across the globe. Meet like-minded people and make your corner of the internet a little more like you. Need more from Mastodon? Host your own server."
            />
          ),
          button: (
            <LinkButton href="/">
              <FormattedMessage
                id="home.features.button.learn_more"
                defaultMessage="Learn more"
              />
            </LinkButton>
          ),
          image: illoAudience,
        },
        {
          title: (
            <FormattedMessage
              id="home.features.moderation.title"
              defaultMessage="Moderating the way it should be"
            />
          ),
          body: (
            <FormattedMessage
              id="home.features.moderation.body"
              defaultMessage="Mastodon puts decision making back in the hands of the people. Each server creates their own rules and regulations, which are enforced locally and not top-down like corporate social media. Self-hosting grants even more control by letting you decide the rules."
            />
          ),
          button: (
            <LinkButton href="/">
              <FormattedMessage
                id="home.features.button.find_a_server"
                defaultMessage="Find a server"
              />
            </LinkButton>
          ),
          image: illoModeration,
        },
      ].map((block, i) => {
        const isOdd = i % 2 != 0
        return (
          <div
            className={classnames(isOdd && "full-width-bg bg-gray-5")}
            key={i}
          >
            <div
              className={classnames(
                "pt-14 pb-[4.5rem] md:grid md:grid-cols-2 md:items-center md:gap-gutter xl:grid-cols-12",
                isOdd && "full-width-bg__inner"
              )}
            >
              <div
                className={classnames(
                  "row-span-full xl:col-span-5",
                  isOdd ? "xl:col-start-2" : "order-2 xl:col-start-8"
                )}
              >
                <Image src={block.image} alt="" />
              </div>

              <div
                className={classnames(
                  "row-span-full xl:col-span-5",
                  isOdd ? "xl:col-start-8" : "xl:col-start-2"
                )}
              >
                <h2 className="h4 md:h2 mb-2">{block.title}</h2>
                <p className="b1 mb-8">{block.body}</p>
                {block.button}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const Sponsors = ({ sponsors }) => {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-5 bg-white">
        {sponsors.map((sponsor) => {
          console.log(sponsor.logo)
          return (
            <Link href={sponsor.url}>
              <a
                className="relative max-h-[90px] max-w-[200px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={`max-h-[90px] max-w-[200px] object-contain mix-blend-luminosity ${
                    sponsor.light && "invert"
                  }`}
                  alt={`${sponsor.name} logo`}
                  loading="lazy"
                  src={sponsor.logo.src}
                />
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
