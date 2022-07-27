import { sortBy as _sortBy } from "lodash"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

import { FormattedMessage, useIntl } from "react-intl"
import Head from "next/head"
import Image from "next/image"
import AppHero from "../components/AppHero"
import loadIntlMessages from "../utils/loadIntlMessages"
import footer_festival from "../public/illustrations/footer_festival.png"
import AppsGrid from "../components/AppsGrid"
import TwoUpFeature from "../components/TwoUpFeature"
import { apps as appsList } from "../data/apps.ts"

const AppsPage = () => {
  const intl = useIntl()
  return (
    <div className="pt-40">
      <div className="app-intro">
        <div className="container">
          <div className="app-intro__hero">
            <div className="app-intro__hero__unit">
              <h1>
                <small>
                  <FormattedMessage
                    id="ios.introducing"
                    defaultMessage="Introducing"
                  />
                </small>
                <br />
                <FormattedMessage
                  id="ios_and_android.app_name"
                  defaultMessage="Official apps"
                />
              </h1>

              <p>
                <FormattedMessage
                  id="ios_and_android.download"
                  defaultMessage="We've released official apps for Mastodon on iOS and Android, in addition to the web version and all the third-party apps available below."
                />
              </p>

              <h2 className="h4 mb-4">
                <FormattedMessage
                  id="ios_and_android.download"
                  defaultMessage="Download the apps"
                />
              </h2>

              <div className="flex gap-5">
                <a href="https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974">
                  <Image
                    src={downloadOnAppStore}
                    alt="Download on the App Store"
                    className="app-store-badge"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android">
                  <Image
                    src={downloadOnGooglePlay}
                    alt="Get it on Google Play"
                    className="app-store-badge"
                    style={{ height: 70, margin: "-10px 0" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TwoUpFeature
        features={[
          {
            icon: "/icons/progressive-web.svg",
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
            icon: "/icons/api-gear.svg",
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
      <AppHero backgroundImage={footer_festival} />
      <Head>
        <title>
          {intl.formatMessage({
            id: "browse_apps.page_title",
            defaultMessage: "Get the Mastodon app",
          })}{" "}
          - Mastodon
        </title>
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "browse_apps.page_title",
            defaultMessage: "Get the Mastodon app",
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
    </div>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}

export default AppsPage
