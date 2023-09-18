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
    position: "Founder, CEO",
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
    },
  },

  {
    name: "Renaud Chaput",
    position: "CTO",
    socials: {
      mastodon: "https://oisaur.com/@renchap",
    },
  },

  {
    name: "Felix Hlatky",
    position: "CFO",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox",
    },
  },

  {
    name: "Claire",
    position: "Engineering",
    socials: {
      mastodon: "https://social.sitedethib.com/@Claire",
    },
  },

  {
    name: "Nathan Mattes",
    position: "Engineering",
    socials: {
      mastodon: "https://chaos.social/@zeitschlag",
    },
  },

  {
    name: "Marcus Kida",
    position: "Engineering",
    socials: {
      mastodon: "https://bearologics.social/@marcus",
    },
  },

  {
    name: "Gregory Klyushnikov",
    position: "Engineering",
    socials: {
      mastodon: "https://mastodon.social/@grishka",
    },
  },

  {
    name: "Timothy Campbell",
    position: "DevOps",
  },

  {
    name: "Andy Piper",
    position: "DevRel",
    socials: {
      mastodon: "https://macaw.social/@andypiper",
    },
  },

  {
    name: "Amelia Rochko",
    position: "Customer Service",
  },

  {
    name: "Dopatwo",
    position: "Illustrations",
    socials: {
      mastodon: "https://mastodon.social/@dopatwo",
    },
  },
]

export default team
