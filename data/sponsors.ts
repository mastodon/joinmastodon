import patreonData from "./patreon.json"

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
      url: "https://mobi.com/",
      logo: require("../public/sponsors/mobi-across-big.png"),
      name: "Mobi",
    }, // Custom
    {
      url: "https://medium.com/",
      logo: require("../public/sponsors/medium.png"),
      name: "Medium",
    }, // Custom
    {
      url: "https://lickability.com/",
      logo: require("../public/sponsors/lickability-logo.svg"),
      name: "Lickability",
    }, // Custom/other
    {
      url: "https://www.ramotion.com/agency/ui-ux-design",
      logo: require("../public/sponsors/truevendor.png"),
      name: "Ramotion",
    },
    {
      url: "https://airvpn.org/landing/mastodon",
      logo: require("../public/sponsors/airvpn.webp"),
      name: "AirVPN",
    },
    {
      url: "https://www.firesticktricks.com/",
      logo: require("../public/sponsors/firesticktricks.webp"),
      name: "Fire Stick Tricks",
    },
    {
      url: "https://papersowl.com/write-my-essay-please",
      logo: require("../public/sponsors/papersowl.png"),
      name: "Papers Owl",
    },
    {
      url: "https://sextoycollective.com",
      logo: require("../public/sponsors/sextoycollective.webp"),
      name: "Sex Toy Collective",
    },
    {
      url: "https://www.sister-sites.co.uk/",
      logo: require("../public/sponsors/sistersites-logo.png"),
      name: "sister-sites.co.uk",
    }, // Custom
    {
      url: "https://masto.host/",
      logo: require("../public/sponsors/MH-horizontal-white.png"),
      name: "Masto.host - Fully managed Mastodon hosting",
    }, // Custom
    {
      url: "https://www.auscasinos.net/",
      logo: require("../public/sponsors/auscasinos.png"),
      name: "Auscasinos - Online casinos in Australia",
    }, // Custom
    {
      url: "https://www.nettikasinot.org/",
      logo: require("../public/sponsors/nettikasinot.svg"),
      name: "Nettikasinot",
    },
    {
      url: "https://wideangle.co",
      logo: require("../public/sponsors/wide-angle-analytics.webp"),
      name: "Wide Angle Analytics",
    }, // Custom
    {
      url: "https://www.noneedtostudy.com/take-my-online-class/",
      logo: require("../public/sponsors/noneedtostudy.com-logo-wide.png"),
      name: "Experts Help Take My Online Classes - NoNeedToStudy.com",
    }, // Custom
    {
      url: "https://krystal.uk/",
      logo: require("../public/sponsors/Krystal_Logo.svg"),
      name: "Krystal Hosting",
    }, // Custom
    {
      url: "https://www.raspberrypi.com/",
      logo: require("../public/sponsors/Raspberry-Pi-Logo.png"),
      name: "Raspberry Pi",
    }, // Custom
    {
      url: "https://www.zerotier.com/",
      logo: require("../public/sponsors/zerotier_logo_black.png"),
      name: "ZeroTier, Inc.",
    }, // Custom
    {
      url: "https://www.goldeneaglecoin.com/",
      logo: require("../public/sponsors/ge-logo-coin-card2.png"),
      name: "Golden Eagle Coins",
    }, // Custom
    {
      url: "https://rubycentral.org/",
      logo: require("../public/sponsors/ruby-central.jpeg"),
      name: "Ruby Central",
    }, // Custom
    {
      url: "https://opalstack.com/?utm_campaign=mastodon2022&utm_source=joinmastodon&utm_term=mastodon%2Bhosting",
      logo: require("../public/sponsors/opal-stack.svg"),
      name: "Managed Hosting for developers, entrepreneurs, and businesses like yours.",
    }, // Custom
    {
      url: "https://allbursaries.co.za/",
      logo: require("../public/sponsors/AMP All Bursaries South Africa.png"),
      name: "AllBursaries",
    }, // Custom
    {
      url: "https://theoatmeal.com/",
      logo: require("../public/sponsors/oatmeal_logo_2020_square@5x.png"),
      name: "The Oatmeal",
    }, // Custom
    {
      url: "https://www.completewebresources.com/",
      logo: require("../public/sponsors/complete-seo-logo-padding.png"),
      name: "Complete SEO",
    }, // Custom
    {
      url: "https://intellifluence.com/",
      logo: require("../public/sponsors/intellifluence logos.png"),
      name: "Intellifluence supports all influencers",
    }, // Custom
    {
      url: "https://toot.io/mastodon_hosting.html",
      logo: require("../public/sponsors/toot_io_logo.png"),
      name: "toot.io",
    }, // Custom
    {
      url: "https://www.4kdownload.com/products/videodownloader-24",
      logo: require("../public/sponsors/video-downloader.png"),
      name: "Video Downloader",
    }, // Custom
    {
      url: "https://veepn.com/vpn-apps/download-vpn-for-pc/",
      logo: require("../public/sponsors/veepn.png"),
      name: "Download VPN for PC by VeePN super simple, fast, and trustful VPN for all family.",
    }, // Custom
    {
      url: "https://werd.io",
      logo: require("../public/sponsors/werdio2.png"),
      name: "Werd I/O",
    }, // Custom
    {
      url: "https://mask.io/",
      logo: require("../public/sponsors/mask-network.png"),
      name: "Mask Network",
    }, // Custom
  ],
  gold: [
    {
      url: "https://easydns.com/",
      logo: require("../public/sponsors/easydns.png"),
      name: "easyDNS",
    },
    {
      url: "https://www.partitionwizard.com/",
      logo: require("../public/sponsors/minitool.png"),
      name: "MiniTool Partition Wizard",
    },
    {
      url: "https://www.mysextoyguide.com/",
      logo: require("../public/sponsors/mysextoyguide.jpg"),
      name: "MySexToyGuide",
    },
    {
      url: "https://www.kevani.com/",
      logo: require("../public/sponsors/KEVANI_LOGO.png"),
      name: "Kevani",
    },
    {
      url: "https://bitlaunch.io/",
      logo: require("../public/sponsors/bitlaunch.svg"),
      name: "Bitcoin VPS",
    }, // Custom
    {
      url: "http://inkedin.com/",
      logo: require("../public/sponsors/inkedin-logo-small-2.webp"),
      name: "inkedin.com",
    },
    {
      url: "https://casinofiables.com/",
      logo: require("../public/sponsors/logo-fiables.png"),
      name: "Casino Fiables",
    },
    {
      url: "https://iboysoft.com/",
      logo: require("../public/sponsors/iboysoft-logo-dark2.png"),
      name: "iBoysoft Data Recovery",
    }, // Custom
    {
      url: "https://farbridge.com/",
      logo: require("../public/sponsors/farbridge.png"),
      name: "Farbridge",
    },
    {
      url: "https://www.sure.bet/casinos-not-on-gamstop/",
      logo: require("../public/sponsors/surebet.jpg"),
      name: "non GamStop Casinos",
    }, // Custom
    {
      url: "https://www.onestein.nl",
      logo: require("../public/sponsors/onestein.png"),
      name: "Onestein B.V.",
    }, // Custom
    {
      url: "https://home.social/@ralf",
      logo: require("../public/sponsors/Rottmann_Ventures.png"),
      name: "Rottmann Ventures GmbH",
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
      url: "https://www.ecurium.com/",
      logo: require("../public/sponsors/ecurium-for-nonprofits.svg"),
      name: "Ecurium",
    }, // Custom
    {
      url: "https://www.blindfiveyearold.com/",
      logo: require("../public/sponsors/BFYO-Logo.png"),
      name: "Blind Five Year Old",
    }, // Custom
    {
      url: "https://j15r.com/",
      logo: require("../public/sponsors/j15r.png"),
      name: "Joel Webber",
    }, // Custom
    {
      url: "https://goodyfeed.com/",
      logo: require("../public/sponsors/goody-feed.png"),
      name: "Goody Feed",
    }, // Custom
    {
      url: "http://www.reboot.io/",
      logo: require("../public/sponsors/reboot-fullstacked-trademark-color-small.jpg"),
      name: "Better Humans Make Better Leaders",
    }, // Custom
    {
      url: "https://sdf.org/",
      logo: require("../public/sponsors/sdf.png"),
      name: "SDF Public Access UNIX System",
    }, // Custom
    {
      url: "https://awisee.agency/",
      logo: require("../public/sponsors/awisee2.jpg"),
      name: "Data-Driven SEO Agency",
    }, // Custom
    {
      url: "https://kaleidos.net/products",
      logo: require("../public/sponsors/kaleidos.png"),
      name: "Kaleidos (Taiga & Penpot)",
    }, // Custom
    {
      url: "https://www.bairesdev.com/sponsoring-open-source-projects/",
      logo: require("../public/sponsors/bairesdev.png"),
      name: "BairesDev",
    }, // Custom
    {
      url: "https://www.happeo.com",
      logo: require("../public/sponsors/happeo.png"),
      name: "Happeo intranet",
    }, // Custom
    {
      url: "https://nongamstopcasinos.net/gb/",
      logo: require("../public/sponsors/nongamstop.png"),
      name: "https://nongamstopcasinos.net/gb/",
    }, // Custom
    {
      url: "https://www.grabmyessay.com/pay-for-essay",
      logo: require("../public/sponsors/gme.jpg"),
      name: "Grabmyessay",
    }, // Custom
  ],
  silver: [
    {
      url: "https://ichiji.social/@tnzk",
      logo: require("../public/sponsors/tnzk.png"),
      name: "Kyohei Hamaguchi / @tnzk",
      nofollow: false,
    },
    ...patreonData.silver,
  ],
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
