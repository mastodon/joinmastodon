import React from "react"
import { FormattedMessage } from "react-intl"
import Image from "next/image"
import Link from "next/link"
import classnames from "classnames"

import loadIntlMessages from "../utils/loadIntlMessages"
import LinkButton from "../components/LinkButton"
import TestimonialCard from "../components/TestimonialCard"
import SponsorGroup from "../components/SponsorLogoGroup"
import { IconCard } from "../components/IconCard"

import testimonials from "../data/testimonials"
import { platinum, additionalFunding } from "../data/sponsors"

import illoTimeline from "../public/illustrations/features_timeline.png"
import illoAudience from "../public/illustrations/features_audience.png"
import illoModeration from "../public/illustrations/features_moderation.png"
import illoWorld from "../public/illustrations/home_sponsors_world.png"

import homeHeroMobile from "../public/illustrations/home_hero_mobile.webp"
import homeHeroDesktop from "../public/illustrations/home_hero_desktop.webp"
import Hero from "../components/Hero"

function Home() {
  return (
    <>
      <Hero mobileImage={homeHeroMobile} desktopImage={homeHeroDesktop} large>
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

        <div className="flex justify-center gap-12">
          <LinkButton size="large" href="/apps">
            <FormattedMessage
              id="home.get_the_app"
              defaultMessage="Get the app"
            />
          </LinkButton>

          <LinkButton size="large" href="/servers" light borderless>
            <FormattedMessage
              id="home.find_a_server"
              defaultMessage="Find a server"
            />
          </LinkButton>
        </div>
      </Hero>
      <Features />
      <WhyMastodon />
      <Testimonials testimonials={testimonials} />
      <Sponsors sponsors={{ platinum, additionalFunding }} />
    </>
  )
}

export default Home

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

        <div className="columns-sm gap-5">
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
            <LinkButton size="large" href="/">
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
            <LinkButton size="large" href="/">
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
            <LinkButton size="large" href="/">
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
                <p className="sh1 mb-8">{block.body}</p>
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
  return (
    <section className="py-20">
      <h3 className="h3 pb-16 text-center">
        <FormattedMessage id="home.why.title" defaultMessage="Why Mastodon?" />
      </h3>
      <div className="grid gap-gutter sm:grid-cols-2 xl:grid-cols-4">
        <IconCard
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
              defaultMessage="Not controlled by a 
            single website or company, Mastodon is a network of completely independent service providers forming 
            a global, cohesive social media platform. "
            />
          }
        />
        <IconCard
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
              defaultMessage="Mastodon is free and open-source software. We believe in your right to use, copy, study and change Mastodon as you see fit. Community collaboration helps us continually evolve Mastodon."
            />
          }
        />
        <IconCard
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
              defaultMessage="No surprises. Your feed is curated and created by you. We will never serve ads or push profiles for you to see. That means your data is yours and yours alone"
            />
          }
        />
        <IconCard
          title={
            <FormattedMessage
              id="home.why.privacy_minded.title"
              defaultMessage="Privacy-Minded"
            />
          }
          icon="safety"
          copy={
            <FormattedMessage
              id="home.why.privacy_minded.copy"
              defaultMessage="You’re in control. Publish only what you choose and rest assured that your personal information is safe. Mastodon is not a platform for ads and respects your privacy."
            />
          }
        />
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
          <h2 className="h2 mb-4">
            <FormattedMessage
              id="home.sponsors.title"
              defaultMessage="Independent and self made"
            />
          </h2>

          <p className="b1 lg:sh1 mb-12 lg:mb-10">
            <FormattedMessage
              id="home.sponsors.body"
              defaultMessage="Mastodon is free and open-source software developed by a non-profit organization. Public support directly affects development and evolution."
            />
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <LinkButton href="https://sponsor.joinmastodon.org/" size="large">
              <FormattedMessage
                id="sponsors.become_a_sponsor"
                defaultMessage="Become a sponsor"
              />
            </LinkButton>

            <LinkButton href="/sponsors" light size="large">
              <FormattedMessage
                id="credits.view_sponsors"
                defaultMessage="View sponsors"
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

      <div className="lg:col-start-4 lg:col-end-10">
        <SponsorGroup sponsors={sponsors.platinum} />
      </div>

      <h4 className="h5 mb-8 pt-20 text-center lg:col-span-12">
        <FormattedMessage
          id="home.additional_support_from"
          defaultMessage="Additional support from"
        />
      </h4>

      <div className="lg:col-start-4 lg:col-end-10">
        <SponsorGroup sponsors={sponsors.additionalFunding} />
      </div>
    </section>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
