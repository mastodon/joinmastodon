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
    name: "Amelia Rochko",
    position: "Customer Service",
    socials: {
      mastodon: "https://mastodon.social/@Ameboid",
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
    name: "Dion Dajka",
    position: "Engineering (web)",
    socials: {
      mastodon: "https://indieweb.social/@diondiondion",
    },
  },

  {
    name: "Dopatwo",
    position: "Illustrations",
    socials: {
      mastodon: "https://mastodon.social/@dopatwo",
    },
  },

  {
    name: "Echo",
    position: "Engineering (web)",
    socials: {
      mastodon: "https://ishella.gay/@echo",
    },
  },

  {
    name: "Eugen Rochko",
    position: "Executive Strategy & Product Advisor",
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
    },
  },

  {
    name: "Felix Hlatky",
    position: "Executive Director",
    socials: {
      mastodon: "https://mastodon.social/@mellifluousbox",
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
    name: "Hannah Aubry",
    position: "Community Director",
    socials: {
      mastodon: "https://hachyderm.io/@haubles",
    },
  },

  {
    name: "Imani Joy",
    position: "Head of Product",
    socials: {
      mastodon: "https://mastodon.social/@imanijoy",
    },
  },

  {
    name: "Pia Bregulla",
    position: "Engineering (web)",
    socials: {
      mastodon: "https://mastodon.social/@pia_ranha",
    },
  },

  {
    name: "Poonam Swami",
    position: "Finance Specialist",
    socials: {
      mastodon: "https://mastodon.social/@poonamswami",
    },
  },

  {
    name: "Renaud Chaput",
    position: "Technical Director",
    socials: {
      mastodon: "https://oisaur.com/@renchap",
    },
  },

  {
    name: "Scott Jenson",
    position: "Product Strategy Adviser",
    socials: {
      mastodon: "https://social.coop/@scottjenson",
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
    name: "Timothy Campbell",
    position: "DevOps",
    socials: {
      mastodon: "https://mastodon.social/@timetinytim",
    },
  },
]

export default team
