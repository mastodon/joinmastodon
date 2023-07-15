export type Testimonial = {
  /** User's preferred image */
  avatar: string
  /** User's preferred name */
  name: string
  /** User's Mastodon username */
  username: string
  /** Tetimonial quote. Omit wrapping quotes and ending attribution */
  text: string
  /** Absolute link to profile */
  profile_url: string
}
const testimonials: Testimonial[] = [
  {
    text: "I've made so many friends on Mastodon because I can actually talk to people instead of getting buried by algorithms that reward meaningless numbers over actual interaction.",
    name: "infinite love ⴳ",
    username: "trwnh@mastodon.social",
    avatar: "/testimonials/avatar_trwnh.png",
    profile_url: "https://mastodon.social/@trwnh",
  },
  {
    text: "Mastodon does an amazing job at giving communities the autonomy necessary to thrive by giving them the keys to federate and moderate their own servers. But don't let that alone overshadow the fact that it simply does features that the major social networks try to do (e.g. image captioning, content warnings) astoundingly better.",
    name: "Jenn Schiffer",
    username: "jenn@pixel.kitchen",
    avatar: "/testimonials/avatar_jennschiffer.jpeg",
    profile_url: "https://pixel.kitchen/@jenn",
  },
  {
    text: "Mastodon has changed my opinion of social media, it's a refreshing take on microblogging with a focus on privacy and safety.",
    name: "dansup",
    username: "dansup@mastodon.social",
    avatar: "/testimonials/avatar_dansup.jpg",
    profile_url: "https://mastodon.social/@dansup",
  },
  {
    text: "I've been on federated platforms since 2008. Mastodon is the best iteration of federated platforms with a user interface that is pleasant to use and a community of folks that I consider friends.",
    name: "Craig Maloney",
    username: "craigmaloney@octodon.social",
    avatar: "/testimonials/avatar_craigmaloney.jpeg",
    profile_url: "https://octodon.social/@craigmaloney",
  },
  {
    text: "Mastodon is a privacy-friendly way to communicate with people which are interested in my work and the work of my authority. social.bund.de gives us the opportunity to incubate Mastodon accounts even for other federal authorities.",
    name: "Ulrich Kelber",
    username: "ulrichkelber@bonn.social",
    avatar: "/testimonials/avatar_ulrichkelber.png",
    profile_url: "https://bonn.social/@ulrichkelber",
  },
  {
    text: "Mastodon allowed us to create a non-profit, abuse-free social network based on open web standards and principles, all the while allowing our moderators and members to reinvigorate the early web values of community, camaraderie and respect using modern, accessible technologies.",
    name: "Jaz",
    username: "jaz@toot.wales",
    avatar: "/testimonials/avatar_jaz.jpeg",
    profile_url: "https://toot.wales/@jaz",
  },
  {
    text: "Mastodon is a well-moderated fully-functional microblogging service with some great features!",
    name: "해파리",
    username: "jarm@qdon.space",
    avatar: "/testimonials/avatar_jarm.jpeg",
    profile_url: "https://qdon.space/@jarm",
  },
  {
    text: "It's social media with moderation that actually works.",
    name: "voronoi potato",
    username: "Vopo@mastodon.social",
    avatar: "/testimonials/avatar_vopo.jpg",
    profile_url: "https://mastodon.social/@Vopo",
  },
  {
    text: "I could have joined an existing community, but I decided to self-host Mastodon.My posts to the world are replicated from my own servers and can be traced back to their originals. Since I own it, the platform will not be terminated or removed at the platform's discretion, and I can provide a long and stable service. I finally have this. Yay!",
    name: "のえる",
    username: "noellabo@fedibird.com",
    avatar: "/testimonials/avatar_noellabo.png",
    profile_url: "https://fedibird.com/@noellabo",
  },
  {
    text: "It's good software",
    name: "halcy",
    username: "halcy@icosahedron.website",
    avatar: "/testimonials/avatar_halcy.jpg",
    profile_url: "https://icosahedron.website/@halcy",
  },
  {
    text: "Great community, friendly atmosphere, and free software! What else would you possibly need?",
    name: "autumncheney",
    username: "AutumnCheney@mastodon.social",
    avatar: "/testimonials/avatar_autumncheney.jpg",
    profile_url: "https://mastodon.social/@AutumnCheney",
  },
  {
    text: "I wanted to have a federated social network since 2013 that looked and felt great and where I can connect to like-minded people. Mastodon just gave me the last puzzle piece and I absolutely love it! Probably spend more than five hours a day on my own little space with a friendly community that truly cares.",
    name: "Leonie",
    username: "koyu@kopimi.space",
    avatar: "/testimonials/avatar_koyu.png",
    profile_url: "https://kopimi.space/@koyu",
  },
  {
    text: "I'm personally addicted to Mastodon, for me it's like if Facebook or Twitter had a friendly version— where I can discuss things with people around the world about every single thing they love. If there's a subreddit for everything, of course there's also a Mastodon community for everything: I've got one profile for sharing art, another one for casual conversation and another one for politics.",
    name: "guedes",
    username: "guedes@mastodon.social",
    avatar: "/testimonials/avatar_guedes.jpg",
    profile_url: "https://mastodon.social/@guedes",
  },
]
export default testimonials
