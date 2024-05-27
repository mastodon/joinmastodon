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

export const BOARD_POSITION_DIRECTOR = "Board Director";
export const BOARD_POSITION_OBSERVER = "Board Observer";

export const board: BoardMember[] = [
  {
    name: "Karien Bezuidenhout",
    position: BOARD_POSITION_DIRECTOR,
    title: "Chair",
    socials: {
      mastodon: "https://mastodon.online/@karienbez"
    },
    slug: "karien-bezuidenhout",
    avatar: require("../public/avatars/karienbez.jpg"),
  },
  {
    name: "Amir Ghavi",
    position: BOARD_POSITION_DIRECTOR,
    title: "Secretary",
    socials: {
      mastodon: "https://mastodon.social/@aghavi"
    },
    slug: "amir-ghavi",
  },
  {
    name: "Felix Hlatky",
    position: BOARD_POSITION_DIRECTOR,
    title: "Treasurer",
    otherTitle: "CFO",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox"
    },
    slug: "felix-hlatky",
    avatar: require("../public/avatars/mellifluousbox.jpg"),
  },
  {
    name: "Esra’a Al Shafei",
    position: BOARD_POSITION_DIRECTOR,
    socials: {
      mastodon: "https://mastodon.social/@alshafei"
    },
    slug: "esraa-al-shafei",
    avatar: require("../public/avatars/alshafei.png"),
  },
  {
    name: "Biz Stone",
    position: BOARD_POSITION_DIRECTOR,
    socials: {
      mastodon: "https://me.dm/@biz"
    },
    slug: "biz-stone",
    avatar: require("../public/avatars/biz.jpg"),
  },
  {
    name: "Eugen Rochko",
    position: BOARD_POSITION_OBSERVER,
    socials: {
      mastodon: "https://mastodon.social/@Gargron"
    },
  },
  {
    name: "Renaud Chaput",
    position: BOARD_POSITION_OBSERVER,
    socials: {
      mastodon: "https://oisaur.com/@renchap"
    },
  }
]

export default board
