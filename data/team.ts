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
    position: "Engineering (web)",
    socials: {
      mastodon: "https://social.sitedethib.com/@Claire",
    },
  },

  {
    name: "David Roetzel",
    position: "Engineering (web)",
    socials: {
      mastodon: "https://upp2.com/@dave",
    },
  },

  {
    name: "Shannon Hughes",
    position: "Engineering (iOS)",
    socials: {
      mastodon: "https://mastodon.social/@whattherestimefor",
    },
  },

  {
    name: "Gregory Klyushnikov",
    position: "Engineering (Android)",
    socials: {
      mastodon: "https://mastodon.social/@grishka",
    },
  },

  {
    name: "Timothy Campbell",
    position: "DevOps",
  },

  {
    name: "Inga Driksne",
    position: "Operations",
    socials: {
      mastodon: "https://mastodon.social/@inganomads",
    },
  },

  {
    name: "Andy Piper",
    position: "Head of Communications",
    socials: {
      mastodon: "https://macaw.social/@andypiper",
    },
  },

  {
    name: "Amelia Rochko",
    position: "Customer Service",
  },

  {
    name: "Philip Schröpel",
    position: "Finance",
    socials: {
      mastodon: "https://mastodon.social/@philipkristians",
    },
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
