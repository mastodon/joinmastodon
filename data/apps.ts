import tusky from "../public/apps/tusky.png"
import subwayTooter from "../public/apps/subway-tooter.png"
import fedilab from "../public/apps/fedilab.png"
import mast from "../public/apps/mast.png"
import mastonaut from "../public/apps/mastonaut.png"
import tokodon from "../public/apps/tokodon.png"
import toot from "../public/apps/toot.jpg"
import pinafore from "../public/apps/pinafore.png"
import whalebird from "../public/apps/whalebird.png"
import thedesk from "../public/apps/thedesk.png"
import imast from "../public/apps/imast_icon.png"
import sengi from "../public/apps/sengi.png"
import sora from "../public/apps/sora.png"
import bitlbee from "../public/apps/bitlbee.png"
import icecubes from "../public/apps/icecubes.png"
import elk from "../public/apps/elk.png"
import buffer from "../public/apps/buffer.png"
import ivory from "../public/apps/ivory.png"
import statuzer from "../public/apps/statuzer.png"
import woolly from "../public/apps/woolly.png"
import tuba from "../public/apps/tuba.png"
import dawn from "../public/apps/dawn.png"
import mona from "../public/apps/mona.png"
import fedica from "../public/apps/fedica.png"
import feather from "../public/apps/feather.png"
import focus from "../public/apps/focus.png"
import radiant from "../public/apps/radiant.png"
import phanpy from "../public/apps/phanpy.png"
import tootrain from "../public/apps/tootrain.png"
import trunks from "../public/apps/trunks.png"
import tootdesk from "../public/apps/tootdesk.png"
import tooty from "../public/apps/tooty.png"
import moshidon from "../public/apps/moshidon.png"
import litterbox from "../public/apps/litterbox.png"
import lmst from "../public/apps/lmst.png"
import zonepane from "../public/apps/zonepane.png"
import fedistar from "../public/apps/fedistar.png"
import amidon from "../public/apps/amidon.png"
import brexxtodon from "../public/apps/brexxtodon.png"
import dostodon from "../public/apps/dostodon.png"
import macstodon from "../public/apps/macstodon.png"
import mastodonforappleii from "../public/apps/mastodonforappleii.png"
import mastodonforworkgroups from "../public/apps/mastodonforworkgroups.png"
import mastonine from "../public/apps/mastonine.png"
import mastodeck from "../public/apps/mastodeck.png"
import stomp from "../public/apps/stomp.png"
import pachli from "../public/apps/pachli.png"
import pipilo from "../public/apps/pipilo.png"
import rodent from "../public/apps/rodent.png"
import heffalump from "../public/apps/heffalump.png"
import mostodon from "../public/apps/mostodon.png"
import brutaldon from "../public/apps/brutaldon.png"
import oxpecker from "../public/apps/oxpecker.png"
import bubble from "../public/apps/bubble.png"
import odous from "../public/apps/odous.png"
import dowstodon from "../public/apps/dowstodon.png"
import fread from "../public/apps/fread.png"
import plfe from "../public/apps/pl-fe.png"

import type { StaticImageData } from "next/legacy/image"

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
    /** The category label */
    categoryLabel?: string
    /** Whether the application is considered open, defaults to false */
    open?: boolean
    /** The link to the application's source code if known */
    source_url?: string
  }[]
}
export const apps: appsList = {
  android: [
    {
      released_on: "Nov 23, 2023",
      name: "Rodent",
      icon: rodent,
      url: "https://play.google.com/store/apps/details?id=social.rodent",
      paid: false,
      open: false,
    },
    {
      released_on: "May 21, 2023",
      name: "Focus",
      icon: focus,
      url: "https://play.google.com/store/apps/details?id=allen.town.focus.mastodon",
      paid: false,
      open: true,
      source_url: "https://github.com/allentown521/FocusMastodon",
    },
    {
      released_on: "Mar 15, 2017",
      name: "Tusky",
      icon: tusky,
      url: "https://play.google.com/store/apps/details?id=com.keylesspalace.tusky",
      open: true,
      source_url: "https://github.com/tuskyapp/Tusky",
    },
    {
      released_on: "Apr 23, 2017",
      name: "Subway Tooter",
      icon: subwayTooter,
      url: "https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter",
      open: true,
      source_url: "https://github.com/tateisu/SubwayTooter",
    },
    {
      released_on: "May 18, 2019",
      name: "Fedilab",
      icon: fedilab,
      url: "https://play.google.com/store/apps/details?id=app.fedilab.android",
      paid: false,
    },
    {
      released_on: "Jan 26, 2023",
      name: "Trunks",
      icon: trunks,
      url: "https://play.google.com/store/apps/details?id=com.decad3nce.trunks",
      paid: false,
      hidden_from_all: true,
    },
    {
      released_on: "Dec 6, 2022",
      name: "Moshidon",
      icon: moshidon,
      url: "https://play.google.com/store/apps/details?id=org.joinmastodon.android.moshinda",
      paid: false,
      open: true,
      source_url: "https://github.com/LucasGGamerM/moshidon",
    },
    {
      released_on: "Jan 31, 2023",
      name: "Buffer",
      icon: buffer,
      url: "https://play.google.com/store/apps/details?id=org.buffer.android",
      hidden_from_all: true,
    },
    {
      released_on: "Feb 21, 2023",
      name: "ZonePane",
      icon: zonepane,
      url: "https://play.google.com/store/apps/details?id=com.zonepane",
      paid: false,
      open: false,
    },
    {
      released_on: "Sep 6, 2023",
      name: "Pachli",
      icon: pachli,
      url: "https://play.google.com/store/apps/details?id=app.pachli",
      paid: false,
      open: true,
      source_url: "https://github.com/pachli/pachli-android",
    },
    {
      released_on: "Aug 1, 2024",
      name: "Fread",
      icon: fread,
      url: "https://play.google.com/store/apps/details?id=com.zhangke.fread",
      paid: false,
      open: false,
    },
  ],
  ios: [
    {
      name: "Toot!",
      icon: toot,
      url: "https://apps.apple.com/app/toot/id1229021451",
      paid: true,
      open: false,
    },
    {
      name: "Mast",
      icon: mast,
      url: "https://apps.apple.com/app/mast-for-mastodon/id1437429129",
      paid: true,
      open: false,
    },
    {
      name: "iMast",
      icon: imast,
      url: "https://apps.apple.com/app/imast/id1229461703",
    },
    {
      released_on: "Jan 19, 2023",
      name: "Ice Cubes",
      icon: icecubes,
      url: "https://apps.apple.com/app/ice-cubes-for-mastodon/id6444915884",
      open: true,
      source_url: "https://github.com/Dimillian/IceCubesApp",
    },
    {
      released_on: "Jan 31, 2023",
      name: "Buffer",
      icon: buffer,
      url: "https://apps.apple.com/app/buffer-plan-schedule-posts/id490474324",
      hidden_from_all: true,
    },
    {
      released_on: "Jan 24, 2023",
      name: "Ivory",
      icon: ivory,
      url: "https://apps.apple.com/app/ivory-for-mastodon-by-tapbots/id6444602274",
      paid: true,
      open: false,
    },
    {
      released_on: "Mar 24, 2023",
      name: "Woolly",
      icon: woolly,
      url: "https://apps.apple.com/us/app/woolly-for-mastodon/id6444360628",
      paid: true,
      open: false,
    },
    {
      released_on: "Mar 27, 2023",
      name: "DAWN for Mastodon",
      icon: dawn,
      url: "https://apps.apple.com/app/nightfox-dawn/id1668645019",
      paid: false,
      open: false,
    },
    {
      released_on: "May 1, 2023",
      name: "Mona",
      icon: mona,
      url: "https://apps.apple.com/app/id1659154653",
      paid: true,
      open: false,
    },
    {
      released_on: "Jun 19, 2023",
      name: "Radiant",
      icon: radiant,
      url: "https://apps.apple.com/app/id6444323022",
      paid: true,
      open: false,
    },
    {
      released_on: "Jan 26, 2023",
      name: "Trunks",
      icon: trunks,
      url: "https://apps.apple.com/app/trunks-for-mastodon/id6444749479",
      paid: false,
      hidden_from_all: true,
    },
    {
      released_on: "Jan 25, 2023",
      name: "TootDesk",
      icon: tootdesk,
      url: "https://apps.apple.com/app/tootdesk/id1591748028",
      paid: false,
      open: true,
      source_url: "https://github.com/cutls/TootDesk",
    },
    {
      released_on: "Aug 4, 2023",
      name: "Stomp (watchOS)",
      icon: stomp,
      url: "https://apps.apple.com/app/stomp-for-mastodon/id1670866247",
      paid: true,
      open: false,
    },
    {
      released_on: "Jun 22, 2023",
      name: "feather",
      icon: feather,
      url: "https://apps.apple.com/app/feather-for-mastodon/id6446263061",
      paid: false,
      open: false,
    },
    {
      released_on: "Aug 10, 2023",
      name: "SoraSNS",
      icon: sora,
      url: "https://apps.apple.com/app/sora-for-mastodon-bluesky/id6450969760?platform=iphone",
      paid: false,
      open: false,
    },
    {
      released_on: "Nov 7, 2023",
      name: "Pipilo",
      icon: pipilo,
      url: "https://apps.apple.com/app/pipilo/id1584544719",
      paid: true,
      open: false,
    },
    {
      released_on: "Jun 3, 2024",
      name: "Oxpecker (watchOS)",
      icon: oxpecker,
      url: "https://apps.apple.com/app/oxpecker-for-mastodon/id6474893905?platform=appleWatch",
      paid: true,
      open: false,
    },
    {
      released_on: "July 10th, 2024",
      name: "Bubble",
      icon: bubble,
      url: "https://apps.apple.com/app/bubble/id6477757490",
      paid: false,
      open: true,
      source_url: "https://github.com/lumaa-dev/BubbleApp",
    },
    {
      released_on: "Jan 1, 2024",
      name: "Odous (watchOS)",
      icon: odous,
      url: "https://apps.apple.com/us/app/id6446084064",
      paid: true,
      open: false,
    },
  ],
  web: [
    {
      name: "Pinafore",
      icon: pinafore,
      url: "https://pinafore.social",
      open: true,
      source_url: "https://github.com/nolanlawson/pinafore",
    },
    {
      name: "Elk",
      icon: elk,
      url: "https://elk.zone",
      open: true,
      source_url: "https://github.com/elk-zone/elk",
    },
    { name: "Buffer", icon: buffer, url: "https://buffer.com", open: false },
    {
      name: "Statuzer",
      icon: statuzer,
      url: "https://statuzer.com",
      open: false,
    },
    { name: "Fedica", icon: fedica, url: "https://fedica.com", open: false },
    {
      name: "Phanpy",
      icon: phanpy,
      url: "https://phanpy.social",
      open: true,
      source_url: "https://github.com/cheeaun/phanpy",
    },
    {
      name: "Litterbox",
      icon: litterbox,
      url: "https://litterbox.koyu.space",
      open: false,
    },
    {
      name: "Lmst",
      icon: lmst,
      url: "https://lmst.online",
      open: true,
      source_url: "https://github.com/cyevgeniy/lmst",
    },
    {
      name: "Tooty",
      icon: tooty,
      url: "https://n1k0.github.io/tooty/v2/",
      open: true,
      source_url: "https://github.com/n1k0/tooty ",
    },
    {
      name: "Mastodeck",
      icon: mastodeck,
      url: "https://mastodeck.com/",
      open: false,
    },
    {
      name: "Sengi",
      icon: sengi,
      url: "https://nicolasconstant.github.io/sengi/",
      open: true,
      source_url: "https://github.com/NicolasConstant/sengi",
    },
    {
      name: "pl-fe",
      icon: plfe,
      url: "https://pl.mkljczk.pl/",
      open: true,
      source_url: "https://github.com/mkljczk/pl-fe",
    },
  ],
  desktop: [
    {
      name: "Tokodon",
      icon: tokodon,
      url: "https://apps.kde.org/tokodon/",
      open: true,
      source_url: "https://github.com/KDE/tokodon",
    },
    {
      name: "Whalebird",
      icon: whalebird,
      url: "https://whalebird.social",
      open: true,
      source_url: "https://github.com/h3poteto/whalebird-desktop",
    },
    {
      name: "TheDesk",
      icon: thedesk,
      url: "https://thedesk.top/en",
      open: true,
      source_url: "https://github.com/cutls/thedesk-next",
    },
    {
      name: "Mast",
      icon: mast,
      url: "https://apps.apple.com/app/mast-for-mastodon/id1437429129",
      paid: true,
      hidden_from_all: true,
    },
    {
      released_on: "Jan 19, 2023",
      name: "Ice Cubes",
      icon: icecubes,
      url: "https://apps.apple.com/app/ice-cubes-for-mastodon/id6444915884",
      hidden_from_all: true,
    },
    {
      name: "Mastonaut",
      icon: mastonaut,
      url: "https://apps.apple.com/app/mastonaut/id1450757574",
      open: true,
      source_url: "https://github.com/chucker/Mastonaut",
    },
    {
      name: "Sengi",
      icon: sengi,
      url: "https://nicolasconstant.github.io/sengi/",
      hidden_from_all: true,
    },
    {
      name: "Bitlbee-Mastodon",
      icon: bitlbee,
      url: "https://alexschroeder.ch/cgit/bitlbee-mastodon/about/",
      open: true,
      source_url: "https://src.alexschroeder.ch/bitlbee-mastodon.git/",
    },
    {
      released_on: "Mar 23, 2023",
      name: "Tuba",
      icon: tuba,
      url: "https://tuba.geopjr.dev/",
      open: true,
      source_url: "https://github.com/GeopJr/Tuba",
    },
    {
      released_on: "May 1, 2023",
      name: "Mona",
      icon: mona,
      url: "https://apps.apple.com/app/id1659154653",
      paid: true,
      hidden_from_all: true,
      open: false,
    },
    {
      released_on: "Aug 10, 2021",
      name: "TootRain",
      icon: tootrain,
      url: "https://apps.apple.com/app/id1579538917",
      open: true,
      source_url: "https://github.com/b123400/TootRain",
    },
    {
      released_on: "Mar 1, 2023",
      name: "Fedistar",
      icon: fedistar,
      url: "https://fedistar.net",
      paid: false,
      open: true,
      source_url: "https://github.com/h3poteto/fedistar",
    },
    {
      released_on: "May 23, 2023",
      name: "Ivory",
      icon: ivory,
      url: "https://apps.apple.com/app/ivory-for-mastodon-by-tapbots/id6444602274",
      paid: true,
      hidden_from_all: true,
    },
    {
      released_on: "Aug 26, 2024",
      name: "Dowstodon",
      icon: dowstodon,
      url: "https://www.microsoft.com/store/productId/9PHNV45JVR2S",
      paid: false,
      open: false,
    },
  ],
  retro: [
    {
      released_on: "Apr 1, 2023",
      name: "Amidon",
      icon: amidon,
      url: "https://github.com/BlitterStudio/amidon",
      open: true,
    },
    {
      released_on: "Feb 5, 2023",
      name: "BREXXTODON",
      icon: brexxtodon,
      url: "https://github.com/mainframed/BREXXTODON",
      open: true,
    },
    {
      released_on: "Nov 14, 2022",
      name: "DOStodon",
      icon: dostodon,
      url: "https://github.com/SuperIlu/DOStodon",
      open: true,
    },
    {
      released_on: "Nov 20, 2022",
      name: "Macstodon",
      icon: macstodon,
      url: "https://github.com/smallsco/macstodon",
      open: true,
    },
    {
      released_on: "Apr 14, 2023",
      name: "Masto9",
      icon: mastonine,
      url: "https://sr.ht/~julienxx/Masto9/",
      open: true,
    },
    {
      released_on: "Mar 6, 2023",
      name: "Mastodon for Apple II",
      icon: mastodonforappleii,
      url: "https://www.colino.net/wordpress/en/binary-release-of-mastodon-for-the-apple-c/",
      open: true,
      source_url: "https://github.com/colinleroy/a2tools/",
    },
    {
      released_on: "Nov 20, 2022",
      name: "Mastodon 3.11 for Workgroups",
      icon: mastodonforworkgroups,
      url: "https://github.com/meyskens/mastodon-for-workgroups",
      open: true,
    },
    {
      released_on: "Sep 12, 2023",
      name: "Heffalump",
      icon: heffalump,
      url: "https://github.com/knickish/heffalump",
      open: true,
    },
    {
      released_on: "Sep 17, 2023",
      name: "MOStodon",
      icon: mostodon,
      url: "https://github.com/Havoc6502/MOStodon",
      paid: false,
      open: true,
    },
    {
      released_on: "Jan 06, 2018",
      name: "Brutaldon",
      icon: brutaldon,
      url: "https://brutaldon.org",
      paid: false,
      open: true,
      source_url: "https://gitlab.com/brutaldon/brutaldon",
    },
  ],
}
