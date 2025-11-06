import patreonData from "./patreon.json"

interface Sponsor {
  url: string
  logo: string
  name: string
  nofollow?: boolean
  gold?: boolean
}

const sponsors = {
  additionalFunding: [],
  platinum: [
    {
      url: "https://www.fastly.com/",
      logo: require("../public/sponsors/fastly.svg"),
      name: "Fastly",
    }, // Custom/other
    {
      url: "https://www.datadoghq.com",
      logo: require("../public/sponsors/datadog.png"),
      name: "Datadog",
    }, // Custom/other
    {
      url: "https://www.postmarkapp.com?utm_source=mastodon&utm_medium=referral&utm_campaign=2023_mastodon-sponsorship",
      logo: require("../public/sponsors/postmark.svg"),
      name: "Postmark",
    }, // Custom/other
    {
      url: "https://mask.io/",
      logo: require("../public/sponsors/mask-network.png"),
      name: "Mask Network",
    }, // Custom
    {
      url: "https://medium.com/",
      logo: require("../public/sponsors/medium.png"),
      name: "Medium",
    }, // Custom
    {
      url: "https://krystal.uk/",
      logo: require("../public/sponsors/Krystal_Logo.svg"),
      name: "Krystal Hosting",
    }, // Custom
    {
      url: "https://www.ramotion.com/branding-san-francisco/",
      logo: require("../public/sponsors/ramotion.svg"),
      name: "Ramotion",
    }, // Patreon
    {
      url: "https://airvpn.org/landing/mastodon",
      logo: require("../public/sponsors/airvpn.webp"),
      name: "AirVPN",
    }, // Patreon
    {
      url: "https://papersowl.com/",
      logo: require("../public/sponsors/papersowl.png"),
      name: "Papers Owl",
    }, // Patreon
    {
      url: "https://sextoycollective.com",
      logo: require("../public/sponsors/sextoycollective.webp"),
      name: "Sex Toy Collective",
    }, // Patreon
    {
      url: "https://www.noneedtostudy.com/pay-to-take-gre-for-me",
      logo: require("../public/sponsors/noneedtostudy.com-logo-wide.png"),
      name: "Get Help Taking GRE - Pay For GRE High Score",
    }, // Custom
    {
      url: "https://www.goldeneaglecoin.com/",
      logo: require("../public/sponsors/ge-logo-coin-card2.png"),
      name: "Golden Eagle Coins",
    }, // Custom
    {
      url: "https://masto.host/",
      logo: require("../public/sponsors/MH-horizontal-white.png"),
      name: "Masto.host - Fully managed Mastodon hosting",
    }, // Custom
    {
      url: "https://www.nettikasinot.org/",
      logo: require("../public/sponsors/nettikasinot.svg"),
      name: "Nettikasinot",
    }, // Patreon
    {
      url: "https://www.sister-sites.co.uk/",
      logo: require("../public/sponsors/sistersites-logo.png"),
      name: "sister-sites.co.uk",
    }, // Custom
    {
      url: "https://wideangle.co/?ref=joinmastodon",
      logo: require("../public/sponsors/Wide Angle Analytics_horizontal-logo.png"),
      name: "Wide Angle Analytics",
    }, // Custom
    {
      url: "https://veepn.com/vpn-apps/download-vpn-for-pc/",
      logo: require("../public/sponsors/veepn.png"),
      name: "Download VPN for PC by VeePN super simple, fast and trustful VPN for all family.",
    }, // Custom
    {
      url: "https://www.softorbits.net/",
      logo: require("../public/sponsors/softorbits.png"),
      name: "SoftOrbits",
    }, // Patreon
  ] as Sponsor[],
  gold: [
    {
      url: "https://easydns.com/",
      logo: require("../public/sponsors/easydns.png"),
      name: "easyDNS",
    }, // Patreon
    {
      url: "https://www.partitionwizard.com/",
      logo: require("../public/sponsors/minitool.png"),
      name: "MiniTool Partition Wizard",
    }, // Patreon
    {
      url: "https://www.kevani.com/",
      logo: require("../public/sponsors/KEVANI_LOGO.png"),
      name: "Kevani",
    }, // Patreon
    {
      url: "https://bitlaunch.io/",
      logo: require("../public/sponsors/bitlaunch.svg"),
      name: "Bitcoin VPS",
    }, // Custom
    {
      url: "https://iboysoft.com/",
      logo: require("../public/sponsors/iboysoft-logo-dark2.png"),
      name: "iBoysoft Data Recovery",
    }, // Custom
    {
      url: "https://farbridge.com/",
      logo: require("../public/sponsors/farbridge.png"),
      name: "Farbridge",
    }, // Patreon
    {
      url: "https://www.onestein.nl",
      logo: require("../public/sponsors/onestein.png"),
      name: "Onestein B.V.",
    }, // Custom
    {
      url: "https://customcomet.com/",
      logo: require("../public/sponsors/custom-comet.png"),
      name: "Custom Comet",
    }, // Custom
    {
      url: "https://archive.org/",
      logo: require("../public/sponsors/archive-logo-1600.png"),
      name: "Internet Archive",
    }, // Custom
    {
      url: "https://www.blindfiveyearold.com/",
      logo: require("../public/sponsors/BFYO-Logo.png"),
      name: "Blind Five Year Old",
    }, // Custom
    {
      url: "https://kaleidos.net/",
      logo: require("../public/sponsors/kaleidos.png"),
      name: "Kaleidos (Taiga & Penpot)",
    }, // Custom
    {
      url: "https://www.bairesdev.com/sponsoring-open-source-projects/",
      logo: require("../public/sponsors/bairesdev.png"),
      name: "BairesDev",
    }, // Custom
    {
      url: "https://www.igaming.com/",
      logo: require("../public/sponsors/igaming-com-logotype.png"),
      name: "iGaming.com",
    }, // GitHub
    {
      url: "https://les-tilleuls.coop",
      logo: require("../public/sponsors/les-tilleuls-coop.png"),
      name: "Les-Tilleuls.coop",
    }, // Custom
  ] as Sponsor[],
  silver: [
    {
      url: "https://tnzk.org/about",
      logo: require("../public/sponsors/tnzk.png"),
      name: "Kyohei Hamaguchi / @tnzk",
      nofollow: false,
      gold: true,
    }, // Patreon
    ...patreonData.silver,
    {
      url: "https://www.passbolt.com/",
      name: "passbolt",
      nofollow: true,
    }, // GitHub
    {
      url: "https://healthchecks.io/",
      name: "healthchecks",
      nofollow: true,
    }, // GitHub
    {
      url: "https://www.triplebit.org/",
      name: "triplebit",
      nofollow: true,
    }, // GitHub
  ] as Sponsor[],
  generalHighlighted: patreonData.generalHighlighted,
  general: patreonData.general,
}

export const {
  platinum,
  additionalFunding,
  gold,
  silver,
  generalHighlighted,
  general,
} = sponsors
export default sponsors
