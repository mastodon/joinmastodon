export type SocialMap = {
  mastodon?: string
}

export type BoardMember = {
  name: string
  position: string
  title?: string
  otherTitle?: string
  socials?: SocialMap
  slug?: string
  avatar?: string
}

export const BOARD_POSITION_DIRECTOR = "director"
export const BOARD_POSITION_OBSERVER = "observer"

export const board: BoardMember[] = [
  {
    name: "Hannah Aubry",
    position: BOARD_POSITION_DIRECTOR,
    socials: {
      mastodon: "https://hachyderm.io/@haubles",
    },
    slug: "hannah-aubry",
    avatar: require("../public/avatars/hannah.jpg"),
  },
  {
    name: "Karien Bezuidenhout",
    position: BOARD_POSITION_DIRECTOR,
    title: "Chair",
    socials: {
      mastodon: "https://mastodon.online/@karienbez",
    },
    slug: "karien-bezuidenhout",
    avatar: require("../public/avatars/karienbez.jpg"),
  },
  {
    name: "Felix Hlatky",
    position: BOARD_POSITION_DIRECTOR,
    title: "Treasurer",
    otherTitle: "CFO",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox",
    },
    slug: "felix-hlatky",
    avatar: require("../public/avatars/mellifluousbox.jpg"),
  },
  {
    name: "Esra’a Al Shafei",
    position: BOARD_POSITION_DIRECTOR,
    socials: {
      mastodon: "https://mastodon.social/@alshafei",
    },
    slug: "esraa-al-shafei",
    avatar: require("../public/avatars/alshafei.png"),
  },
  {
    name: "Biz Stone",
    position: BOARD_POSITION_DIRECTOR,
    socials: {
      mastodon: "https://me.dm/@biz",
    },
    slug: "biz-stone",
    avatar: require("../public/avatars/biz.jpg"),
  },
  {
    name: "Eugen Rochko",
    position: BOARD_POSITION_OBSERVER,
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
    },
  },
  {
    name: "Renaud Chaput",
    position: BOARD_POSITION_OBSERVER,
    socials: {
      mastodon: "https://oisaur.com/@renchap",
    },
  },
]

export default board
