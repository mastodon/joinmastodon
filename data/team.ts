export type SocialMap = {
  mastodon?: string
}

export type TeamMember = {
  image?: string
  name: string
  position: string
  socials?: SocialMap
}

const team: TeamMember[] = [
  {
    name: "Eugen Rochko",
    position: "Founder / CEO",
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
    },
  },

  {
    name: "Claire",
    position: "Developer",
    socials: {
      mastodon: "https://social.sitedethib.com/@Claire",
    },
  },

  {
    name: "Felix Hlatky",
    position: "Finance",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox",
    },
  },

  {
    name: "Dopatwo",
    position: "Artist",
    socials: {
      mastodon: "https://mastodon.social/@dopatwo",
    },
  },
]

export default team
