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
    image: require("../public/team/eugen-rochko.jpg"),
    name: "Eugen Rochko",
    position: "Founder, CEO",
    socials: {
      mastodon: "https://mastodon.social/@Gargron",
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
    image: require("../public/team/inga-driksne.jpg"),
    name: "Inga Driksne",
    position: "Operations/Talent",
  },

  {
    name: "Julie Inouye",
    position: "Communications",
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
