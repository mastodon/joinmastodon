import tusky from "../public/apps/tusky.png"
import subwayTooter from "../public/apps/subway-tooter.png"
import fedilab from "../public/apps/fedilab.png"
import amaroq from "../public/apps/amaroq.jpg"
import mast from "../public/apps/mast.png"
import mastonaut from "../public/apps/mastonaut.png"
import toot from "../public/apps/toot.jpg"
import tooter from "../public/apps/tooter.png"
import tootle from "../public/apps/tootle.jpg"
import pinafore from "../public/apps/pinafore.png"
import whalebird from "../public/apps/whalebird.png"
import halcyon from "../public/apps/halcyon.png"
import thedesk from "../public/apps/thedesk.png"
import cuckooPlus from "../public/apps/cuckoo-plus.png"
import hyperspace from "../public/apps/hyperspace.png"
import imast from "../public/apps/imast_icon.png"
import mercury from "../public/apps/mercury.png"
import sengi from "../public/apps/sengi.png"
import metatext from "../public/apps/metatext.png"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

import { FormattedMessage, useIntl } from "react-intl"
import Head from "next/head"
import Image from "next/image"
import LinkButton from "../components/LinkButton"
import { AppCard } from "../components/AppCard"
import classNames from "classnames"
import { useState } from "react"

const apps = {
  android: [
    {
      released_on: "Mar 15, 2017",
      name: "Tusky",
      icon: tusky,
      url: "https://play.google.com/store/apps/details?id=com.keylesspalace.tusky",
    },

    {
      released_on: "Apr 23, 2017",
      name: "Subway Tooter",
      icon: subwayTooter,
      url: "https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter",
    },

    {
      released_on: "May 18, 2019",
      name: "Fedilab",
      icon: fedilab,
      url: "https://play.google.com/store/apps/details?id=app.fedilab.android",
      paid: true,
    },
  ],

  ios: [
    {
      name: "Toot!",
      icon: toot,
      url: "https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8",
      paid: true,
    },

    {
      name: "Mast",
      icon: mast,
      url: "https://apps.apple.com/us/app/mast-for-mastodon/id1437429129",
      paid: true,
    },

    {
      name: "Amaroq",
      icon: amaroq,
      url: "https://itunes.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1&mt=8",
    },

    {
      name: "iMast",
      icon: imast,
      url: "https://apps.apple.com/us/app/imast/id1229461703",
    },

    {
      name: "Mercury",
      icon: mercury,
      url: "https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200?ls=1&mt1=8",
    },

    {
      name: "Metatext",
      icon: metatext,
      url: "https://apps.apple.com/us/app/metatext/id1523996615?mt=8",
    },
  ],

  web: [
    {
      name: "Pinafore",
      icon: pinafore,
      url: "https://pinafore.social",
    },

    {
      name: "Halcyon",
      icon: halcyon,
      url: "https://www.halcyon.social/",
    },

    {
      name: "Cuckoo+",
      icon: cuckooPlus,
      url: "https://www.cuckoo.social",
    },
  ],

  sailfish: [
    {
      name: "Tooter",
      icon: tooter,
      url: "https://openrepos.net/content/dysko/tooter",
    },
  ],

  desktop: [
    {
      name: "Whalebird",
      icon: whalebird,
      url: "https://whalebird.social",
    },

    {
      name: "Tootle (Linux)",
      icon: tootle,
      url: "https://flathub.org/apps/details/com.github.bleakgrey.tootle",
    },

    {
      name: "TheDesk",
      icon: thedesk,
      url: "https://thedesk.top/en",
    },

    {
      name: "Hyperspace",
      icon: hyperspace,
      url: "https://hyperspace.marquiskurt.net/",
    },

    {
      name: "Mast (Mac)",
      icon: mast,
      url: "https://apps.apple.com/app/mast-for-mastodon/id1437429129",
      paid: true,
    },

    {
      name: "Mastonaut (Mac)",
      icon: mastonaut,
      url: "https://itunes.apple.com/us/app/mastonaut/id1450757574",
    },

    {
      name: "Sengi",
      icon: sengi,
      url: "https://nicolasconstant.github.io/sengi/",
    },
  ],
}
const categories = ["all", ...Object.keys(apps)]
const allApps = Object.entries(apps)
  .map(([category, apps]) =>
    apps.map(({ name, icon, url, paid }) => ({
      name,
      icon,
      url,
      paid: paid || false,
      category,
    }))
  )
  .flat()
console.log(allApps)

const sortOptions = [
  {
    key: "date_added",
    label: (
      <FormattedMessage
        id="sort.recently_added"
        defaultMessage="Recently Added"
      />
    ),
  },
  {
    key: "paid",
    label: <FormattedMessage id="sort.price" defaultMessage="Free" />,
  },
  {
    key: "name",
    label: <FormattedMessage id="sort.name" defaultMessage="Alphabetical" />,
  },
]

const BrowseApps = () => {
  const intl = useIntl()
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const filteredApps = allApps.filter(
    ({ category }) => category === activeCategory || activeCategory === "all"
  )
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

      <div className="gap-gutter md:flex">
        {[
          {
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
        ].map(({ title, copy, cta, cta_link }) => (
          <div className="grid py-32 md:grid-cols-6" key={title}>
            <div className="col-span-4 col-start-2">
              <h2 className="h4">{title}</h2>
              <h2 className="sh1">{copy}</h2>
              <LinkButton href={cta_link}>{cta}</LinkButton>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="h4 mb-8">
          <FormattedMessage
            id="browse_apps.title2"
            defaultMessage="Browse third-party apps"
          />
        </h2>
        <div className="mb-6 flex gap-gutter">
          {categories.map((category) => (
            <label
              key={category}
              className={classNames(
                "b3 block w-full rounded border-2 p-4  text-center !font-600 transition-all",
                category === activeCategory
                  ? "border-accent-blurple bg-accent-blurple text-white hover:border-dark-blurple hover:bg-dark-blurple"
                  : "border-accent-blurple bg-white text-accent-blurple hover:border-dark-blurple hover:text-dark-blurple"
              )}
            >
              <input
                className="sr-only"
                type="radio"
                name="apps-selection"
                id=""
                value={category}
                onChange={(e) => setActiveCategory(e.target.value)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {filteredApps.map(AppCard)}
      </div>

      <section className="flex flex-col items-center gap-12 py-32">
        <h2 className="h1">
          <FormattedMessage
            id="apps.get_started"
            defaultMessage="Get started today"
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
      </section>

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

export default BrowseApps
