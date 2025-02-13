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
import raccoon from "../public/apps/raccoonforfriendica.png"
import husky from "../public/apps/husky.png"
import smither from "../public/apps/smither.png"
import streetpass from "../public/apps/streetpass.png"
import postthis from "../public/apps/postthis.png"

import type { StaticImageData } from "next/legacy/image"

export type app = {
  /** the operating system or platform the list of apps is built for */
  /** the name of the app */
  name: string
  /** app's icon or logo */
  icon: StaticImageData
  /** link to the app on its website */
  url?: string

  /** if the store data is just "true" then just link to url */

  /** web interface link */
  web?: string

  /** package name on f-droid.org */
  fdroid?: string
  /** package name on android.izzysoft.de */
  izzy?: string
  /** package name on google play */
  gplay?: string
  /** is available on android but isn't on fdroid */
  android?: true
  /** if the app is for apple's internet os, link to it here */
  ios?: string
  /** if the app is for apple's watch os, link to it here */
  watchos?: string
  // do people make apps ONLY for iPads? https://apps.apple.com/us/app/ivory-for-mastodon-by-tapbots/id6444602274?platform=ipad

  /** link to the generic linux binary (appimage is just the popular one) */
  appimage?: string
  /** link flatpak repo and flatpak id e.g flathub.org/org.kde.tokodon */
  flatpak?: string
  /** snap store id */
  snap?: string
  /** link to .deb file download */
  debian?: string
  /** arch package name */
  arch?: string
  /** arch user repository package name */
  arch_aur?: string
  /** fedora package name */
  rpm?: string
  // https://apps.kde.org/ exists but that's ONLY for kde apps and links to flathub
  // TODO add other distro specifc repos
  /** firefox addon/extension name */
  firefox?: string
  /** chrome addon/extension name */
  chrome?: string

  /** id on the microsoft store */
  micestore?: string
  /** link to windows exe/msi page */
  windows?: string
  /** if the app is for apple's macos, link to it here 
   * e.g ivory-for-mastodon-by-tapbots/id6444602274 
   * or set to "true" if there's a dmg */
  macos?: string
  /** brew.sh package */
  brew?: string
  /** generic retro */
  retro?: true

  /** the date the app was first released on */
  released_on?: string | Date
  /** whether the app requires a fee to access. defaults to false */
  paid?: boolean
  /** link to source code */
  source?: string
}

export const apps: app[] = [
  {
    released_on: "Nov 23, 2023",
    name: "Rodent",
    icon: rodent,
    gplay: "social.rodent",
  },
  {
    released_on: "May 21, 2023",
    name: "Focus",
    icon: focus,
    gplay: "allen.town.focus.mastodon",
    fdroid: "allen.town.focus.mastodon",
    source: 'https://github.com/allentown521/FocusMastodon',
  },
  {
    released_on: "Mar 15, 2017",
    name: "Tusky",
    icon: tusky,
    gplay: "com.keylesspalace.tusky",
    fdroid: "com.keylesspalace.tusky",
    source: "https://github.com/tuskyapp/Tusky"
  },
  {
    released_on: "Apr 23, 2017",
    name: "Subway Tooter",
    icon: subwayTooter,
    gplay: "jp.juggler.subwaytooter",
    izzy: "jp.juggler.subwaytooter",
    source: "https://github.com/tateisu/SubwayTooter"
  },
  {
    released_on: "May 18, 2019",
    name: "Fedilab",
    icon: fedilab,
    gplay: "app.fedilab.android",
    fdroid: "fr.gouv.etalab.mastodon", // ¯\_(ツ)_/¯
    source: "https://codeberg.org/tom79/Fedilab",
  },
  {
    released_on: "Jan 26, 2023",
    name: "Trunks",
    icon: trunks,
    gplay: "com.decad3nce.trunks",
    ios: "id6444749479",
  },
  {
    released_on: "Dec 6, 2022",
    name: "Moshidon",
    icon: moshidon,
    gplay: "org.joinmastodon.android.moshinda",
    fdroid: "org.joinmastodon.android.moshinda",
    source: "https://github.com/LucasGGamerM/moshidon",
  },
  {
    released_on: "Jan 31, 2023",
    name: "Buffer",
    icon: buffer,
    gplay: "org.buffer.android",
    ios: "buffer-plan-schedule-posts/id490474324",
    web: "https://buffer.com",
  },
  {
    released_on: "Feb 21, 2023",
    name: "ZonePane",
    icon: zonepane,
    gplay: "com.zonepane",
  },
  {
    released_on: "Sep 6, 2023",
    name: "Pachli",
    icon: pachli,
    gplay: "app.pachli",
    fdroid: "app.pachli",
    url: "https://pachli.app/",
    source: "https://github.com/pachli/pachli-android",
  },
  {
    released_on: "Aug 1, 2024",
    name: "Fread",
    icon: fread,
    gplay: "com.zhangke.fread",
  },
  {
    released_on: "Apr 17, 2024",
    name: "Husky",
    icon: husky,
    fdroid: "su.xash.husky",
    source: "https://github.com/captainepoch/husky",
  },
  {
    released_on: "Aug 16, 2024",
    name: "Raccoon",
    icon: raccoon,
    fdroid: "com.livefast.eattrash.raccoonforfriendica",
    source: "https://github.com/LiveFastEatTrashRaccoon/RaccoonForFriendica",
  },
  {
    released_on: "Aug 18, 2018",
    name: "Smither",
    icon: smither,
    fdroid: "org.nuclearfog.smither",
    source: "https://codeberg.org/nuclearfog/Smither",
  },
  {
    name: "Toot!",
    icon: toot,
    ios: "id1229021451",
    paid: true,
  },
  {
    name: "Mast",
    icon: mast,
    macos: "id1437429129",
    ios: "id1437429129",
    paid: true,
  },
  {
    name: "iMast",
    icon: imast,
    ios: "imast/id1229461703",
  },
  {
    released_on: "Jan 19, 2023",
    name: "Ice Cubes",
    icon: icecubes,
    ios: "id6444915884",
    macos: "id6444915884",
  },
  {
    released_on: "Jan 24, 2023",
    name: "Ivory",
    icon: ivory,
    ios: "id6444602274",
    macos: "id6444602274",
    paid: true,
  },
  {
    released_on: "Mar 24, 2023",
    name: "Woolly",
    icon: woolly,
    ios: "id6444360628",
    paid: true,
  },
  {
    released_on: "Mar 27, 2023",
    name: "DAWN for Mastodon",
    icon: dawn,
    ios: "id1668645019",
    paid: true,
  },
  {
    released_on: "Jun 19, 2023",
    name: "Radiant",
    icon: radiant,
    ios: "id6444323022",
    paid: true,
  },
  {
    released_on: "Jan 25, 2023",
    name: "TootDesk",
    icon: tootdesk,
    ios: "tootdesk/id1591748028",
  },
  {
    released_on: "Aug 4, 2023",
    name: "Stomp",
    icon: stomp,
    ios: "id1670866247",
    watchos: "id1670866247",
    paid: true,
  },
  {
    released_on: "Jun 22, 2023",
    name: "feather",
    icon: feather,
    ios: "id6446263061",
  },
  {
    released_on: "Aug 10, 2023",
    name: "SoraSNS",
    icon: sora,
    ios: "id6450969760",
  },
  {
    released_on: "Nov 7, 2023",
    name: "Pipilo",
    icon: pipilo,
    ios: "id1584544719",
    paid: true,
  },
  {
    released_on: "Jun 3, 2024",
    name: "Oxpecker",
    icon: oxpecker,
    ios: "id6474893905",
    watchos: "id6474893905",
    paid: true,
  },
  {
    released_on: "July 10, 2024",
    name: "Bubble",
    icon: bubble,
    ios: "bubble/id6477757490",
  },
  {
    released_on: "Jan 1, 2024",
    name: "Odous",
    icon: odous,
    ios: "id6446084064",
    watchos: "id6446084064",
    paid: true,
  },
  {
    name: "Pinafore",
    icon: pinafore,
    web: "https://pinafore.social"
  },
  {
    name: "Elk",
    icon: elk,
    web: "https://elk.zone"
  },
  {
    name: "Statuzer",
    icon: statuzer,
    web: "https://statuzer.com"
  },
  {
    name: "Fedica",
    icon: fedica,
    web: "https://fedica.com"
  },
  {
    name: "Phanpy",
    icon: phanpy,
    web: "https://phanpy.social"
  },
  {
    name: "Litterbox",
    icon: litterbox,
    web: "https://litterbox.koyu.space"
  },
  {
    name: "Tooty",
    icon: tooty,
    web: "https://n1k0.github.io/tooty/v2/"
  },
  {
    name: "Mastodeck",
    icon: mastodeck,
    web: "https://mastodeck.com/"
  },
  {
    name: "Sengi",
    icon: sengi,
    web: "https://nicolasconstant.github.io/sengi/"
  },
  {
    name: "Tokodon",
    icon: tokodon,
    url: "https://apps.kde.org/tokodon/",
    flatpak: "flathub.org/org.kde.tokodon",
    snap: "tokodon",
  },
  {
    name: "Whalebird",
    icon: whalebird,
    url: "https://whalebird.social",
    micestore: '9NBW4CSDV5HC',
    macos: 'whalebird/id6445864587',
    appimage: 'https://whalebird.social/en/downloads',
    brew: 'whalebird',
    arch_aur: `whalebird`,
    flatpak: "social.whalebird.WhalebirdDesktop", // unverified
    rpm: 'https://whalebird.social/en/downloads',
  },
  {
    name: "TheDesk",
    icon: thedesk,
    url: "https://thedesk.top/en",
    windows: 'https://github.com/cutls/thedesk-next/releases/latest',
    debian: 'https://github.com/cutls/thedesk-next/releases/latest',
    macos: 'https://github.com/cutls/thedesk-next/releases/latest',
    source: "https://github.com/cutls/thedesk-next",
  },
  {
    name: "Mastonaut",
    icon: mastonaut,
    macos: "mastonaut/id1450757574",
  },
  {
    name: "Bitlbee-Mastodon",
    icon: bitlbee,
    url: "https://alexschroeder.ch/cgit/bitlbee-mastodon/about/",
    source: "https://src.alexschroeder.ch/bitlbee-mastodon.git",
  },
  {
    released_on: "Mar 23, 2023",
    name: "Tuba",
    icon: tuba,
    url: "https://tuba.geopjr.dev/",
    flatpak: "dev.geopjr.Tuba",
    windows: "https://github.com/GeopJr/Tuba/releases/latest/download/Tuba.Setup.exe",
    source: "https://github.com/GeopJr/Tuba",
    snap: "tuba", // thirdparty, but it's on the website
  },
  {
    released_on: "May 1, 2023",
    name: "Mona",
    icon: mona,
    macos: "id1659154653",
    paid: true,
  },
  {
    released_on: "Aug 10, 2021",
    name: "TootRain",
    icon: tootrain,
    macos: "id1579538917",
    ios: "id1659154653",
  },
  {
    released_on: "Mar 1, 2023",
    name: "Fedistar",
    icon: fedistar,
    url: "https://fedistar.net",
    windows: 'https://github.com/h3poteto/fedistar/releases/latest',
    macos: 'fedistar/id6445863996',
    snap: 'fedistar',
    appimage: 'https://github.com/h3poteto/fedistar/releases/latest',
    debian: 'https://github.com/h3poteto/fedistar/releases/latest',
    source: "https://github.com/h3poteto/fedistar"
  },
  {
    released_on: "Aug 26, 2024",
    name: "Dowstodon",
    icon: dowstodon,
    micestore: "9PHNV45JVR2S",
  },
  {
    released_on: "Apr 1, 2023",
    name: "Amidon",
    icon: amidon,
    source: "https://github.com/BlitterStudio/amidon",
    retro: true,
  },
  {
    released_on: "Feb 5, 2023",
    name: "BREXXTODON",
    icon: brexxtodon,
    source: "https://github.com/mainframed/BREXXTODON",
    retro: true,
  },
  {
    released_on: "Nov 14, 2022",
    name: "DOStodon",
    icon: dostodon,
    source: "https://github.com/SuperIlu/DOStodon",
    retro: true,
  },
  {
    released_on: "Nov 20, 2022",
    name: "Macstodon",
    icon: macstodon,
    source: "https://github.com/smallsco/macstodon",
    retro: true,
  },
  {
    released_on: "Apr 14, 2023",
    name: "Masto9",
    icon: mastonine,
    source: "https://sr.ht/~julienxx/Masto9/",
    retro: true,
  },
  {
    released_on: "Mar 6, 2023",
    name: "Mastodon for Apple II",
    icon: mastodonforappleii,
    url: "https://www.colino.net/wordpress/en/binary-release-of-mastodon-for-the-apple-c/",
    retro: true,
  },
  {
    released_on: "Nov 20, 2022",
    name: "Mastodon 3.11 for Workgroups",
    icon: mastodonforworkgroups,
    source: "https://github.com/meyskens/mastodon-for-workgroups",
    retro: true,
    windows: 'https://github.com/meyskens/mastodon-for-workgroups/releases',
  },
  {
    released_on: "Sep 12, 2023",
    name: "Heffalump",
    icon: heffalump,
    source: "https://github.com/knickish/heffalump",
    retro: true,
  },
  {
    released_on: "Sep 17, 2023",
    name: "MOStodon",
    icon: mostodon,
    source: "https://github.com/Havoc6502/MOStodon",
    retro: true,
  },
  {
    released_on: "Jan 06, 2018",
    name: "Brutaldon",
    icon: brutaldon,
    url: "https://brutaldon.org",
    source: "https://gitlab.com/brutaldon/brutaldon",
    retro: true,
  },
  {
    name: "StreetPass",
    icon: streetpass,
    url: "https://streetpass.social",
    firefox: "streetpass-for-mastodon",
    chrome: "streetpass-for-mastodon/fphjfedjhinpnjblomfebcjjpdpakhhn",
    // safari https://apps.apple.com/us/app/streetpass-for-mastodon/id6446224821
    source: "https://github.com/tvler/streetpass",
  },
  {
    name: "Share to Mastodon",
    icon: postthis,
    firefox: "streetpass-for-mastodon",
    chrome: "share-to-mastodon/bibnjflclpdmbbcncejifemmbggkcjde",
    // edge https://microsoftedge.microsoft.com/addons/detail/share-to-mastodon/ppgabkpkgkkcejnnmgckomgfdeanejnc
    source: "https://github.com/corbindavenport/post-this",
  },
]
// verify
apps.forEach(x => {
  x.released_on = new Date(x.released_on ?? 0);
  if (isNaN(x.released_on.getTime())) throw new Error(`Invalid released_on for ${x.name}`);
  if (x.paid === false) throw new Error(`paid should only be true or undefined for ${x.name}`);
  x.paid = x.paid ?? false;
  //if(x.released_on.getTime() === 0 )console.warn(`${x.name} missing release_on`)
})

// check for duplicates by name & icon
apps.forEach((x, i) => {
  let firstsIndex = apps.findIndex(y => y.name === x.name || y.icon === x.icon);
  if (firstsIndex === i) return;
  throw new Error(`Duplicate app name/icon: ${x.name}`);
})
