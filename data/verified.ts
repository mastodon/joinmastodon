import avatarWikipedia from "../public/accounts/wikipedia.png"
import avatarMozilla from "../public/accounts/mozilla.jpg"
import avatarStephenFry from "../public/accounts/stephenfry.jpeg"
import avatarGeorgeTakei from "../public/accounts/georgetakei.jpg"
import avatarMarkRuffalo from "../public/accounts/markruffalo.jpeg"
import avatarNeilGaiman from "../public/accounts/neilgaiman.jpeg"

const verified = [
  {
    url: "https://wikis.world/@wikipedia",
    image: avatarWikipedia,
    name: "Wikipedia",
    username: "wikipedia@wikis.world",
  },
  {
    url: "https://mastodon.social/@mozilla",
    image: avatarMozilla,
    name: "Mozilla",
    username: "mozilla@mastodon.social",
  },
  {
    url: "https://mastodon.social/@Mastodon",
    image: require("../public/accounts/mastodon.png"),
    name: "Mastodon",
    username: "Mastodon@mastodon.social",
  },
  {
    url: "https://mastodon.themarkup.org/@themarkup",
    image: require("../public/accounts/themarkup.png"),
    name: "The Markup",
    username: "themarkup@mastodon.themarkup.org",
  },
  {
    url: "https://mastodonapp.uk/@stephenfry",
    image: avatarStephenFry,
    name: "Stephen Fry",
    username: "stephenfry@mastodonapp.uk",
  },
  {
    url: "https://mastodon.social/@neilhimself",
    image: avatarNeilGaiman,
    name: "Neil Gaiman",
    username: "neilhimself@mastodon.social",
  },
]

export default verified