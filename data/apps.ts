import tusky from "../public/apps/tusky.png"
import subwayTooter from "../public/apps/subway-tooter.png"
import fedilab from "../public/apps/fedilab.png"
import mast from "../public/apps/mast.png"
import mastonaut from "../public/apps/mastonaut.png"
import tokodon from "../public/apps/tokodon.png"
import toot from "../public/apps/toot.jpg"
import tooter from "../public/apps/tooter.png"
import pinafore from "../public/apps/pinafore.png"
import whalebird from "../public/apps/whalebird.png"
import thedesk from "../public/apps/thedesk.png"
import cuckooPlus from "../public/apps/cuckoo-plus.png"
import hyperspace from "../public/apps/hyperspace.png"
import imast from "../public/apps/imast_icon.png"
import mercury from "../public/apps/mercury.png"
import sengi from "../public/apps/sengi.png"
import metatext from "../public/apps/metatext.png"
import tooot from "../public/apps/tooot.png"
import bitlbee from "../public/apps/bitlbee.png"
import icecubes from "../public/apps/icecubes.png"
import buffer from "../public/apps/buffer.png"
import ivory from "../public/apps/ivory.png"
import type { StaticImageData } from "next/image"

export type appsList = {
  /** the operating system or platform the list of apps is built for */
  [platform: string]: {
    /** the name of the app */
    name: string
    /** app's icon or logo */
    icon: StaticImageData
    /** link to the app on its website or respective app store */
    url: string
    /** the date the app was first released on */
    released_on?: string
    /** whether the app requires a fee to access. defaults to false */
    paid?: boolean
    /** whether the app should be hidden from all, used to avoid duplicates */
    hidden_from_all?: boolean
  }[]
}
export const apps: appsList = {
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
    {
      released_on: "Apr 16, 2021",
      name: "tooot",
      icon: tooot,
      url: "https://play.google.com/store/apps/details?id=com.xmflsct.app.tooot",
    },
    {
      released_on: "Jan 31st, 2023",
      name: "Buffer",
      icon: buffer,
      url: "https://play.google.com/store/apps/details?id=org.buffer.android",
      hidden_from_all: true,
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
    {
      released_on: "Apr 16, 2021",
      name: "tooot",
      icon: tooot,
      url: "https://apps.apple.com/us/app/tooot/id1549772269",
    },
    {
      released_on: "Jan 19, 2023",
      name: "Ice Cubes",
      icon: icecubes,
      url: "https://apps.apple.com/us/app/ice-cubes-for-mastodon/id6444915884",
    },
    {
      released_on: "Jan 31st, 2023",
      name: "Buffer",
      icon: buffer,
      url: "https://apps.apple.com/us/app/buffer-plan-schedule-posts/id490474324",
      hidden_from_all: true,
    },
    {
      released_on: "Jan 24, 2023",
      name: "Ivory",
      icon: ivory,
      url: "https://apps.apple.com/us/app/ivory-for-mastodon-by-tapbots/id6444602274",
      paid: true
    },
  ],
  web: [
    { name: "Pinafore", icon: pinafore, url: "https://pinafore.social" },
    { name: "Cuckoo+", icon: cuckooPlus, url: "https://www.cuckoo.social" },
    { name: "Buffer", icon: buffer, url: "https://buffer.com" },
  ],
  desktop: [
    { name: "Tokodon", icon: tokodon, url: "https://apps.kde.org/tokodon/" },
    { name: "Whalebird", icon: whalebird, url: "https://whalebird.social" },
    { name: "TheDesk", icon: thedesk, url: "https://thedesk.top/en" },
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
    {
      name: "Bitlbee-Mastodon",
      icon: bitlbee,
      url: "https://alexschroeder.ch/cgit/bitlbee-mastodon/about/",
    },
  ],
  sailfish: [
    {
      name: "Tooter",
      icon: tooter,
      url: "https://openrepos.net/content/dysko/tooter",
    },
  ],
}
