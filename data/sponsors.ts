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
      url: "https://www.goldeneaglecoin.com/",
      logo: require("../public/sponsors/ge-logo-coin-card2.png"),
      name: "Golden Eagle Coins",
    }, // Custom
    {
      url: "https://mask.io/",
      logo: require("../public/sponsors/mask-network.png"),
      name: "Mask Network",
    }, // Custom
    {
      url: "https://earthweb.com/",
      logo: require("../public/sponsors/earthweb.png"),
      name: "EarthWeb",
    }, // Custom
    {
      url: "https://sidesmedia.com/",
      logo: require("../public/sponsors/sides-media.png"),
      name: "SidesMedia",
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
      url: "https://www.onestein.nl",
      logo: require("../public/sponsors/onestein.png"),
      name: "Onestein B.V.",
    }, // Custom
    {
      url: "https://rottmann.social/@ralf",
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
      url: "https://www.blindfiveyearold.com/",
      logo: require("../public/sponsors/BFYO-Logo.png"),
      name: "Blind Five Year Old",
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
      url: "https://bountii.coupons/",
      logo: require("../public/sponsors/bountii.png"),
      name: "Bountii",
    },
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
