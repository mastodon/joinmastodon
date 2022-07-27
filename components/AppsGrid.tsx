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
import SVG from "react-inlinesvg"

import { FormattedMessage, useIntl } from "react-intl"
import { AppCard } from "../components/AppCard"
import classNames from "classnames"
import { useState } from "react"
import SelectMenu from "../components/SelectMenu"
import { sortBy as _sortBy } from "lodash"

//prettier-ignore
const apps = {
  android: [
    { released_on: "Mar 15, 2017", name: "Tusky", icon: tusky, url: "https://play.google.com/store/apps/details?id=com.keylesspalace.tusky" },
    { released_on: "Apr 23, 2017", name: "Subway Tooter", icon: subwayTooter, url: "https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter" },
    { released_on: "May 18, 2019", name: "Fedilab", icon: fedilab, url: "https://play.google.com/store/apps/details?id=app.fedilab.android", paid: true,},
  ],
  ios: [
    { name: "Toot!", icon: toot, url: "https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8", paid: true },
    { name: "Mast", icon: mast, url: "https://apps.apple.com/us/app/mast-for-mastodon/id1437429129", paid: true },
    { name: "Amaroq", icon: amaroq, url: "https://itunes.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1&mt=8" },
    { name: "iMast", icon: imast, url: "https://apps.apple.com/us/app/imast/id1229461703" },
    { name: "Mercury", icon: mercury, url: "https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200?ls=1&mt1=8" },
    { name: "Metatext", icon: metatext, url: "https://apps.apple.com/us/app/metatext/id1523996615?mt=8" },
  ],
  web: [
    { name: "Pinafore", icon: pinafore, url: "https://pinafore.social" },
    { name: "Halcyon", icon: halcyon, url: "https://www.halcyon.social/" },
    { name: "Cuckoo+", icon: cuckooPlus, url: "https://www.cuckoo.social" },
  ],
  desktop: [
    { name: "Whalebird", icon: whalebird, url: "https://whalebird.social" },
    { name: "Tootle (Linux)", icon: tootle, url: "https://flathub.org/apps/details/com.github.bleakgrey.tootle" },
    { name: "TheDesk", icon: thedesk, url: "https://thedesk.top/en" },
    { name: "Hyper­space", icon: hyperspace, url: "https://hyperspace.marquiskurt.net/" },
    { name: "Mast (Mac)", icon: mast, url: "https://apps.apple.com/app/mast-for-mastodon/id1437429129", paid: true },
    { name: "Mastonaut (Mac)", icon: mastonaut, url: "https://itunes.apple.com/us/app/mastonaut/id1450757574" },
    { name: "Sengi", icon: sengi, url: "https://nicolasconstant.github.io/sengi/" },
  ],
  sailfish: [
    { name: "Tooter", icon: tooter, url: "https://openrepos.net/content/dysko/tooter" },
  ],
}

// normalizing the apps dictionary
const allApps = Object.entries(apps)
  .map(([category, apps]) =>
    apps.map(({ name, icon, url, paid, released_on }) => ({
      name,
      icon,
      url,
      category,
      paid: paid ?? false,
      released_on: new Date(released_on) ?? null,
    }))
  )
  .flat()

export const AppsGrid = () => {
  const intl = useIntl()
  const [activeCategory, setActiveCategory] = useState("all")
  //prettier-ignore
  const sortOptions = [
    { value: "date_added", label: intl.formatMessage({ id: "sorting.recently_added", defaultMessage: "Recently Added" }) },
    { value: "paid", label: intl.formatMessage({ id: "sorting.free", defaultMessage: "Free" }) },
    { value: "name", label: intl.formatMessage({ id: "sorting.name", defaultMessage: "Alphabetical" }) },
  ]
  const [sortOption, setSortOption] = useState(sortOptions[0].value)
  const filteredApps = allApps.filter(
    ({ category }) => category === activeCategory || activeCategory === "all"
  )
  const sortedAndFilteredApps = _sortBy(filteredApps, sortOption)

  //prettier-ignore
  const categories = [
    { key: "all", label: intl.formatMessage({ id: "browse_apps.all", defaultMessage: "All" }) },
    { key: "android", label: intl.formatMessage({ id: "browse_apps.android", defaultMessage: "Android" }) },
    { key: "ios", label: intl.formatMessage({ id: "browse_apps.ios", defaultMessage: "iOS" }) },
    { key: "web", label: intl.formatMessage({ id: "browse_apps.web", defaultMessage: "Web" }) },
    { key: "sailfish", label: intl.formatMessage({ id: "browse_apps.sailfish", defaultMessage: "SailfishOS" }) },
    { key: "desktop", label: intl.formatMessage({ id: "browse_apps.desktop", defaultMessage: "Desktop" }) },
  ]
  return (
    <div>
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
    </div>
  )
}
export default AppsGrid
