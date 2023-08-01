import { sortBy as _sortBy } from "lodash"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

import { FormattedMessage, useIntl } from "react-intl"
import Head from "next/head"
import Image from "next/legacy/image"
import AppHero from "../components/AppHero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import footer_festival from "../public/illustrations/footer_festival.png"
import AppsGrid from "../components/AppsGrid"
import TwoUpFeature from "../components/TwoUpFeature"
import { apps as appsList } from "../data/apps"
import Hero from "../components/Hero"
import appsHeroDesktop from "../public/illustrations/apps_hero_desktop.png"
import appsHeroMobile from "../public/illustrations/apps_hero_mobile.png"
import ios_android_apps from "../public/illustrations/ios_android_apps.png"
import Layout from "../components/Layout"

import ProgressiveWebIcon from "../public/icons/progressive-web.svg?inline"
import ApiGearIcon from "../public/icons/api-gear.svg?inline"

const AppsPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Hero desktopImage={appsHeroDesktop} mobileImage={appsHeroMobile}>
        <div className="app-intro">
          <div className="container">
            <div className="app-intro__hero">
              <div className="app-intro__hero__unit">
                <h1 className="h1 mb-5">
                  <FormattedMessage id="apps.title" defaultMessage="Apps" />
                </h1>

                <p className="sh1">
                  <FormattedMessage
                    id="apps.lead"
                    defaultMessage="The best way to get started with Mastodon is through our official apps for iOS and Android, but many third-party apps are also available below."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      <div className="grid justify-center gap-x-gutter gap-y-16 pt-10 pb-8 text-center md:grid-cols-12 md:text-start">
        <div className="md:col-span-6 lg:col-span-5 xl:col-span-4 xl:col-start-2">
          <h2 className="h4 mb-4">
            <FormattedMessage
              id="ios_and_android.download"
              defaultMessage="Download the apps"
            />
          </h2>

          <div className="grid grid-cols-2 justify-center gap-gutter md:justify-start">
            <a href="https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974">
              <Image
                src={downloadOnAppStore}
                alt="Download on the App Store"
                layout="responsive"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android">
              <Image
                src={downloadOnGooglePlay}
                alt="Get it on Google Play"
                layout="responsive"
              />
            </a>
          </div>
        </div>
        <div className="md:col-span-6 md:-mt-16 lg:col-span-5 lg:col-start-7 lg:-mt-32 xl:-mt-80">
          <div className="mx-auto max-w-xs md:max-w-none">
            <Image
              src={ios_android_apps}
              alt="Screenshots of Mastodon on iOS and Android, showing an artist's profile, reblogging, and a poll"
            />
          </div>
        </div>
      </div>

      <TwoUpFeature
        features={[
          {
            Icon: ProgressiveWebIcon,
            title: (
              <FormattedMessage
                id="browse_apps.progressive_web_app"
                defaultMessage="Progressive web app"
              />
            ),
            copy: (
              <FormattedMessage
                id="browse_apps.you_can_use_it_from_desktop"
                defaultMessage="You can always use Mastodon from the browser on your desktop or phone! It can be added to your home screen and some browsers even support push notifications, just like a native app!"
              />
            ),
            cta: (
              <FormattedMessage
                id="browse_apps.pwa_feature.cta"
                defaultMessage="Join a server"
              />
            ),
            cta_link: "/servers",
          },
          {
            Icon: ApiGearIcon,
            title: (
              <FormattedMessage
                id="browse_apps.open_api"
                defaultMessage="Open API"
              />
            ),
            copy: (
              <FormattedMessage
                id="browse_apps.make_your_own"
                defaultMessage="Mastodon is open-source and has an elegant, well-documented API that is available to everyone. Make your own app, or use one of the many third-party apps made by other developers!"
              />
            ),
            cta: (
              <FormattedMessage
                id="browse_apps.api_docs"
                defaultMessage="API documentation"
              />
            ),
            cta_link: "https://docs.joinmastodon.org/client/intro/",
          },
        ]}
      />
      <AppsGrid apps={appsList} />
      <AppHero
        backgroundImage={footer_festival}
        backgroundImagePosition="left center"
      />
      <Head>
        <title>
          {`${intl.formatMessage({
            id: "browse_apps.page_title",
            defaultMessage: "Get an app for Mastodon",
          })} - Mastodon`}
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "browse_apps.page_title",
            defaultMessage: "Get an app for Mastodon",
          })}
        />
        <meta
          name="description"
          content={intl.formatMessage({
            id: "browse_apps.page_description",
            defaultMessage:
              "Browse official and third-party apps for the decentralized social network Mastodon",
          })}
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "browse_apps.page_description",
            defaultMessage:
              "Browse official and third-party apps for the decentralized social network Mastodon",
          })}
        />
      </Head>
    </Layout>
  )
}

export const getStaticProps = withDefaultStaticProps()

export default AppsPage
