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
import footer_festival from "../public/illustrations/footer_festival.png"
import SVG from "react-inlinesvg"
import loadIntlMessages from "../utils/loadIntlMessages"

import { sortBy as _sortBy } from "lodash"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

import { FormattedMessage, useIntl } from "react-intl"
import Head from "next/head"
import Image from "next/image"
import LinkButton from "../components/LinkButton"
import AppHero from "../components/AppHero"
import { AppCard } from "../components/AppCard"
import classNames from "classnames"
import { useState } from "react"
import SelectMenu from "../components/SelectMenu"

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
      name: "Hyper­space",
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

const sortOptions = [
  {
    value: "date_added",
    label: (
      <FormattedMessage
        id="sorting.recently_added"
        defaultMessage="Recently Added"
      />
    ),
  },
  {
    value: "paid",
    label: <FormattedMessage id="sorting.free" defaultMessage="Free" />,
  },
  {
    value: "name",
    label: <FormattedMessage id="sorting.name" defaultMessage="Alphabetical" />,
  },
]

const BrowseApps = () => {
  const intl = useIntl()
  const [activeCategory, setActiveCategory] = useState("all")
  const [sortOption, setSortOption] = useState(sortOptions[0].value)
  const filteredApps = allApps.filter(
    ({ category }) => category === activeCategory || activeCategory === "all"
  )
  const sortedAndFilteredApps = _sortBy(filteredApps)
  const categories = [
    {
      key: "all",
      label: intl.formatMessage({
        id: "browse_apps.all",
        defaultMessage: "All",
      }),
    },
    {
      key: "android",
      label: intl.formatMessage({
        id: "browse_apps.android",
        defaultMessage: "Android",
      }),
    },
    {
      key: "ios",
      label: intl.formatMessage({
        id: "browse_apps.ios",
        defaultMessage: "iOS",
      }),
    },
    {
      key: "web",
      label: intl.formatMessage({
        id: "browse_apps.web",
        defaultMessage: "Web",
      }),
    },
    {
      key: "sailfish",
      label: intl.formatMessage({
        id: "browse_apps.sailfish",
        defaultMessage: "SailfishOS",
      }),
    },
    {
      key: "desktop",
      label: intl.formatMessage({
        id: "browse_apps.desktop",
        defaultMessage: "Desktop",
      }),
    },
  ]
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
        ].map(({ icon, title, copy, cta, cta_link }) => (
          <div className="grid py-8 md:py-32 lg:grid-cols-6" key={title}>
            <div className="md:pie-4 lg:col-span-4 lg:col-start-2 lg:pie-0">
              <SVG
                src={icon}
                className="-ml-2 h-auto w-20 text-accent-blurple md:-ml-4 md:w-32"
              />
              <h2 className="h4 mb-5 mt-4">{title}</h2>
              <h2 className="sh1 mb-8">{copy}</h2>
              <LinkButton size="large" href={cta_link}>
                {cta}
              </LinkButton>
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
        <div className="-mx-gutter pis-gutter mb-6 overflow-x-auto">
          <div className="flex flex-wrap gap-gutter md:flex-nowrap">
            {categories.map((category) => (
              <label
                key={category.key}
                className={classNames(
                  "b3 block whitespace-nowrap rounded border-2 p-4 text-center !font-600 transition-all md:w-full",
                  category.key === activeCategory
                    ? "border-accent-blurple bg-accent-blurple text-white hover:border-dark-blurple hover:bg-dark-blurple"
                    : "border-accent-blurple bg-white text-accent-blurple hover:border-dark-blurple hover:text-dark-blurple"
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="apps-selection"
                  id=""
                  value={category.key}
                  onChange={(e) => setActiveCategory(e.target.value)}
                />
                {category.label}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <SelectMenu
          label={
            <FormattedMessage id="sorting.sort_by" defaultMessage="Sort" />
          }
          value="all"
          onChange={(v) => {
            setSortOption(v)
          }}
          options={sortOptions}
        />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {sortedAndFilteredApps.map(AppCard)}
      </div>
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

export default BrowseApps
