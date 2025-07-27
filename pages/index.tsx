import { useEffect, useState } from "react"
import { FormattedMessage, useIntl } from "react-intl"
import Image from "next/legacy/image"
import Head from "next/head"
import classnames from "classnames"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import resolveConfig from "tailwindcss/resolveConfig"
import twConfig from "../tailwind.config"

import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import LinkButton from "../components/LinkButton"
import TestimonialCard from "../components/TestimonialCard"
import SponsorLogoGroup from "../components/SponsorLogoGroup"
import { IconCard } from "../components/IconCard"

import testimonials from "../data/testimonials"
import { platinum, additionalFunding } from "../data/sponsors"

import illoTimeline from "../public/illustrations/features_timeline.png"
import illoAudience from "../public/illustrations/features_audience.png"
import illoModeration from "../public/illustrations/features_moderation.png"
import illoCustomization from "../public/illustrations/features_customization.png"
import illoWorld from "../public/illustrations/home_sponsors_world.png"

import homeHeroMobile from "../public/illustrations/home_hero_mobile.webp"
import homeHeroDesktop from "../public/illustrations/home_hero_desktop.png"
import Hero from "../components/Hero"
import { getDirForLocale } from "../utils/locales"
import { useRouter } from "next/router"
import Layout from "../components/Layout"

function Home() {
  const intl = useIntl()

  return (
    <Layout>
      <Hero
        mobileImage={homeHeroMobile}
        desktopImage={homeHeroDesktop}
        homepage
      >
        <h1 className="h1 mb-4 max-w-[17ch] md:mb-7">
          <FormattedMessage
            id="home.hero.headline"
            defaultMessage="Social networking that's not for sale."
          />
        </h1>

        <p className="sh1 mb-11 max-w-[50ch]">
          <FormattedMessage
            id="home.hero.body"
            defaultMessage="Your home feed should be filled with what matters to you most, not what a corporation thinks you should see. Radically different social media, back in the hands of the people."
          />
        </p>

        <div className="flex flex-wrap justify-center gap-4  md:gap-12">
          <LinkButton size="large" href="https://mastodon.social/auth/sign_up">
            <FormattedMessage
              id="home.join_now"
              defaultMessage="Join {domain}"
              values={{ domain: "mastodon.social" }}
            />
          </LinkButton>

          <LinkButton size="large" href="/servers" light borderless>
            <FormattedMessage
              id="home.pick_another_server"
              defaultMessage="Pick another server"
            />
          </LinkButton>
        </div>
      </Hero>
      <Features />
      <WhyMastodon />
      <Testimonials testimonials={testimonials} />
      <Sponsors sponsors={{ platinum, additionalFunding }} />
      <Head>
        <title>
          {`Mastodon - ${intl.formatMessage({
            id: "home.page_title",
            defaultMessage: "Decentralized social media",
          })}`}
        </title>

        <meta
          property="og:title"
          content={`Mastodon - ${intl.formatMessage({
            id: "home.page_title",
            defaultMessage: "Decentralized social media",
          })}`}
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "home.page_description",
            defaultMessage:
              "Learn more about Mastodon, the radically different, free and open-source decentralized social media platform.",
          })}
        />
        <meta
          property="description"
          content={intl.formatMessage({
            id: "home.page_description",
            defaultMessage:
              "Learn more about Mastodon, the radically different, free and open-source decentralized social media platform.",
          })}
        />

        <link rel="me" href="https://mastodon.social/@MastodonEngineering" />
        <link rel="me" href="https://mastodon.social/@Staff" />
        <link rel="me" href="https://mastodon.social/@ServerHighlights" />
      </Head>
    </Layout>
  )
}

export default Home

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
              defaultMessage="You know best what you want to see on your home feed. No algorithms or ads to waste your time. Follow anyone across any Mastodon server from a single account and receive their posts in chronological order, and make your corner of the internet a little more like you."
            />
          ),
          button: (
            <LinkButton
              size="large"
              href="https://docs.joinmastodon.org/user/moderating/"
            >
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
              defaultMessage="Build your audience in confidence"
            />
          ),
          body: (
            <FormattedMessage
              id="home.features.audience.body"
              defaultMessage="Mastodon provides you with a unique possibility of managing your audience without middlemen. Mastodon deployed on your own infrastructure allows you to follow and be followed from any other Mastodon server online and is under no one's control but yours."
            />
          ),
          button: (
            <LinkButton
              size="large"
              href="https://docs.joinmastodon.org/user/run-your-own/"
            >
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
              defaultMessage="Mastodon puts decision making back in your hands. Each server creates their own rules and regulations, which are enforced locally and not top-down like corporate social media, making it the most flexible in responding to the needs of different groups of people. Join a server with the rules you agree with, or host your own."
            />
          ),
          button: (
            <LinkButton size="large" href="/servers">
              <FormattedMessage
                id="home.features.button.find_a_server"
                defaultMessage="Find a server"
              />
            </LinkButton>
          ),
          image: illoModeration,
        },
        {
          title: (
            <FormattedMessage
              id="home.features.self_expression.title"
              defaultMessage="Unparalleled creativity"
            />
          ),
          body: (
            <FormattedMessage
              id="home.features.self_expression.body"
              defaultMessage="Mastodon supports audio, video and picture posts, accessibility descriptions, polls, content warnings, animated avatars, custom emojis, thumbnail crop control, and more, to help you express yourself online. Whether you're publishing your art, your music, or your podcast, Mastodon is there for you."
            />
          ),
          button: (
            <LinkButton
              size="large"
              href="https://docs.joinmastodon.org/user/posting/"
            >
              <FormattedMessage
                id="home.features.button.learn_more"
                defaultMessage="Learn more"
              />
            </LinkButton>
          ),
          image: illoCustomization,
        },
      ].map((block, i) => {
        const isOdd = i % 2 != 0
        return (
          <div
            className={classnames("full-width-bg", isOdd && "bg-gray-5")}
            key={i}
          >
            <div className="full-width-bg__inner pt-14 pb-[4.5rem] md:grid md:grid-cols-2 md:items-center md:gap-gutter xl:grid-cols-12">
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
                <h2 className="h4 md:h2 mb-2 md:mb-5">{block.title}</h2>
                <p className="sh1 mb-8 text-gray-1">{block.body}</p>
                {block.button}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

const WhyMastodon = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const fullConfig = resolveConfig(twConfig)

  const options = {
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      [`(min-width: ${fullConfig.theme.screens["md"]})`]: {
        disabled: true,
      },
    },
  }
  const [sliderRef, instanceRef] = useKeenSlider(options)

  const intl = useIntl()

  return (
    <section className="py-20">
      <h3 className="h3 pb-16 text-center">
        <FormattedMessage id="home.why.title" defaultMessage="Why Mastodon?" />
      </h3>
      <div dir="ltr">
        <div
          ref={sliderRef}
          className="keen-slider mb-8 md:mb-0 md:grid md:grid-cols-2 md:gap-gutter lg:grid-cols-4"
        >
          <IconCard
            className="keen-slider__slide shadow-none md:border md:border-gray-3"
            title={
              <FormattedMessage
                id="home.why.decentralized.title"
                defaultMessage="Decentralized"
              />
            }
            icon="decentralized"
            copy={
              <FormattedMessage
                id="home.why.decentralized.copy"
                defaultMessage="Instant global communication is too important to belong to one company. Each Mastodon server is a completely independent entity, able to interoperate with others to form one global social network."
              />
            }
          />
          <IconCard
            className="keen-slider__slide shadow-none md:border md:border-gray-3"
            title={
              <FormattedMessage
                id="home.why.opensource.title"
                defaultMessage="Open Source"
              />
            }
            icon="open-source"
            copy={
              <FormattedMessage
                id="home.why.opensource.copy"
                defaultMessage="Mastodon is free and open-source software. We believe in your right to use, copy, study and change Mastodon as you see fit, and we benefit from contributions from the community."
              />
            }
          />
          <IconCard
            className="keen-slider__slide shadow-none md:border md:border-gray-3"
            title={
              <FormattedMessage
                id="home.why.not_for_sale.title"
                defaultMessage="Not for Sale"
              />
            }
            icon="price-tag"
            copy={
              <FormattedMessage
                id="home.why.not_for_sale.copy"
                defaultMessage="We respect your agency. Your feed is curated and created by you. We will never serve ads or push profiles for you to see. That means your data and your time are yours and yours alone."
              />
            }
          />
          <IconCard
            className="keen-slider__slide shadow-none md:border md:border-gray-3"
            title={
              <FormattedMessage
                id="home.why.interoperability.title"
                defaultMessage="Interoperable"
              />
            }
            icon="move"
            copy={
              <FormattedMessage
                id="home.why.interoperability.copy"
                defaultMessage="Built on open web protocols, Mastodon can speak with any other platform that implements ActivityPub. With one account you get access to a whole universe of social apps—the fediverse."
              />
            }
          />
        </div>
        {loaded && instanceRef.current && (
          <div className="flex items-center justify-center gap-2 md:hidden">
            {instanceRef.current.slides.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={
                    "rounded-[50%] p-1.5 " +
                    (currentSlide === idx ? "bg-blurple-500" : "bg-gray-3")
                  }
                  aria-label={intl.formatMessage({
                    id: "home.slider.go_to_slide",
                    defaultMessage: "Go to slide",
                  })}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

const Testimonials = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const fullConfig = resolveConfig(twConfig)

  const options = {
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      [`(min-width: ${fullConfig.theme.screens["md"]})`]: {
        slides: { perView: 2, spacing: 16 },
      },
      [`(min-width: ${fullConfig.theme.screens["lg"]})`]: {
        slides: { perView: 3, spacing: 16 },
      },
    },
  }
  const [sliderRef, instanceRef] = useKeenSlider(options)

  const intl = useIntl()

  return (
    <section className="full-width-bg bg-gray-5 pt-20 pb-28">
      <div className="full-width-bg__inner">
        <h2 className="h3 pb-16 text-center">
          <FormattedMessage
            id="home.testimonials.title"
            defaultMessage="What our users are saying"
          />
        </h2>

        <div dir="ltr">
          <div ref={sliderRef} className="keen-slider mb-8">
            {testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              )
            })}
          </div>
          {loaded && instanceRef.current && (
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={
                      "rounded-[50%] p-1.5 " +
                      (currentSlide === idx ? "bg-blurple-500" : "bg-gray-3")
                    }
                    aria-label={intl.formatMessage({
                      id: "home.slider.go_to_slide",
                      defaultMessage: "Go to slide",
                    })}
                  ></button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

const Sponsors = ({ sponsors }) => {
  return (
    <section className="grid gap-x-gutter text-center lg:grid-cols-12">
      <div className="py-20 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-x-gutter lg:py-28">
        <div className="mx-auto mb-12 max-w-lg lg:col-span-4 lg:col-start-5 lg:mb-10 lg:w-full">
          <Image
            src={illoWorld}
            alt="Illustration of elephant characters on a globe."
          />
        </div>

        <div className=" lg:col-span-8 lg:col-start-3">
          <h2 className="h2 mb-6">
            <FormattedMessage
              id="home.sponsors.title"
              defaultMessage="Independent always"
            />
          </h2>

          <p className="b1 lg:sh1 mb-12 lg:mb-10">
            <FormattedMessage
              id="home.sponsors.body"
              defaultMessage="Mastodon is free and open-source software developed by a non-profit organization. Public support directly sustains development and evolution."
            />
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <LinkButton href="https://patreon.com/mastodon" size="large">
              <FormattedMessage
                id="sponsors.donate_on_patreon"
                defaultMessage="Donate on Patreon"
              />
            </LinkButton>

            <LinkButton
              href="https://donate.stripe.com/00g5l42h8ezY3YcaEE"
              size="large"
            >
              <FormattedMessage
                id="sponsors.donate_directly"
                defaultMessage="Donate directly"
              />
            </LinkButton>

            <LinkButton href="/sponsors" light size="large">
              <FormattedMessage
                id="sponsors.learn_more"
                defaultMessage="Learn more"
              />
            </LinkButton>
          </div>
        </div>
      </div>

      <h3 className="h5 mb-8 text-center lg:col-span-12">
        <FormattedMessage
          id="sponsors.supported_by"
          defaultMessage="Supported by"
        />
      </h3>

      <div className="lg:col-start-2 lg:col-end-12">
        <SponsorLogoGroup sponsors={sponsors.platinum} />
      </div>

      {sponsors.additionalFunding.length > 0 && (
        <>
          <h4 className="h5 mb-8 pt-20 text-center lg:col-span-12">
            <FormattedMessage
              id="home.additional_support_from"
              defaultMessage="Additional support from"
            />
          </h4>

          <div className="lg:col-start-4 lg:col-end-10 lg:mb-16">
            <SponsorLogoGroup sponsors={sponsors.additionalFunding} />
          </div>
        </>
      )}

      <p className="mt-8 text-gray-2 lg:col-span-12 lg:mb-16">
        <FormattedMessage
          id="sponsors.sponsorship.statement"
          defaultMessage="Sponsorship does not equal influence. Mastodon is fully independent."
        />
      </p>
    </section>
  )
}

export const getStaticProps = withDefaultStaticProps()
