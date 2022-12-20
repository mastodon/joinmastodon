import patreonData from "./patreon.json"

const sponsors = {
  additionalFunding: [
    {
      url: "https://nlnet.nl/",
      logo: require("../public/sponsors/nlnet.png"),
      name: "NLNet Foundation",
    },
    {
      url: "https://nlnet.nl/NGI0",
      logo: require("../public/sponsors/NGI0Discovery_tag.svg"),
      name: "NGI Zero Discovery",
    },
  ],
  platinum: [
    {
      url: "https://mobi.com/",
      logo: require("../public/sponsors/mobi-across-big.png"),
      name: "Mobi",
    }, // Custom
    {
      url: "https://www.spacesquad.de/",
      logo: require("../public/sponsors/spacesquad-logo-72.png"),
      name: "SPACE SQUAD",
    }, // Custom
    {
      url: "https://oak.is/",
      logo: require("../public/sponsors/oak.svg"),
      name: "Oak Studios",
    },
    {
      url: "https://www.lunanode.com/",
      logo: require("../public/sponsors/lunanode.png"),
      name: "Lunanode",
    },
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
      url: "https://www.vpsserver.com/",
      logo: require("../public/sponsors/vpsserver.png"),
      name: "VPS Server",
    },
    {
      url: "https://mask.io/",
      logo: require("../public/sponsors/mask-network.png"),
      name: "Mask Network",
    }, // Custom/other
    {
      url: "https://www.bestecasinosonline.at/",
      name: "Online Casino Österreich",
      logo: require("../public/sponsors/BesteCasinosOnline.webp"),
    }, // Custom
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
      url: "https://assemblyfour.com/",
      logo: require("../public/sponsors/a4.webp"),
      name: "Assembly Four",
    }, // Custom
    {
      url: "https://www.auscasinos.com/new/",
      logo: require("../public/sponsors/auscasinos.png"),
      name: "AusCasinos.com New Site Section",
    }, // Custom
    {
      url: "https://www.joylovedolls.com/",
      logo: require("../public/sponsors/jld_psd_logo_orig_black.png"),
      name: "Joy Love Dolls",
    }, // Custom
    {
      url: "https://kasynohex.com/kasyna-online/",
      logo: require("../public/sponsors/kasynohex.svg"),
      name: "Casino online PL",
    }, // Custom
    {
      url: "https://www.globenewswire.com/news-release/2021/04/07/2206309/0/en/10-Best-Online-Casinos-in-Australia-List-of-Real-Money-Pokies-Sites-Rated-By-Users-and-Popularity.html",
      logo: require("../public/sponsors/alt-casino-1.png"),
      name: "Online Casinos Australia",
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
      url: "https://www.movavi.com/imovie-for-windows.html",
      logo: require("../public/sponsors/movavi.svg"),
      name: "Movavi",
    }, // Custom
    {
      url: "https://internxt.com/",
      logo: require("../public/sponsors/internxt.png"),
      name: "Internxt",
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
      url: "https://bibly.com/",
      logo: require("../public/sponsors/bibly-logo.png"),
      name: "Bibly",
    }, // Custom
    {
      url: "https://ndash.com/?utm_campaign=mastodon_v2",
      logo: require("../public/sponsors/nDash.png"),
      name: "nDash Content Creation Platform",
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
      url: "https://brightstarsystems.com/",
      logo: require("../public/sponsors/brightstarsystems.png"),
      name: "BrightStar Systems",
    }, // Custom
    {
      url: "https://apernet.io/",
      logo: require("../public/sponsors/AperNetLogo.svg"),
      name: "Aperture Internet Laboratory",
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
      name: "AllBursaries"
    }, // Custom
    {
      url: "https://theoatmeal.com/",
      logo: require("../public/sponsors/oatmeal_logo_2020_square@5x.png"),
      name: "The Oatmeal",
    }, // Custom
    {
      url: "https://www.completewebresources.com/",
      logo: require("../public/sponsors/complete seo logo lg.jpg"),
      name: "Complete SEO",
    }, // Custom
    {
      url: "https://www.drinkingquest.com/",
      logo: require("../public/sponsors/jason-anarchy-games.jpg"),
      name: "Jason Anarchy Games",
    }, // Custom
    {
      url: "https://intellifluence.com/",
      logo: require("../public/sponsors/intellifluence logos.png"),
      name: "Intellifluence supports all influencers",
    }
  ],
  gold: [
    {
      url: "https://easydns.com/",
      logo: require("../public/sponsors/easydns.png"),
      name: "easyDNS",
    },
    {
      url: "https://writersperhour.com/",
      logo: require("../public/sponsors/writersperhour.jpg"),
      name: "Writers Per Hour",
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
      url: "https://rapidessay.com/",
      logo: require("../public/sponsors/rapidessay_logo.png"),
      name: "Rapid Essay",
    },
    {
      url: "https://iboysoft.com/",
      logo: require("../public/sponsors/iboysoft-logo-dark2.png"),
      name: "iBoysoft Data Recovery",
    }, // Custom
    {
      url: "https://nettikasinolista.com/",
      logo: require("../public/sponsors/nettikasinolista-mv.png"),
      name: "Nettikasino",
    }, // Custom
    {
      url: "http://doshfunding.com/",
      logo: require("../public/sponsors/doshfunding.svg"),
      name: "Funding Solutions for Businesses",
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
      url: "https://www.r2c.io/",
      logo: require("../public/sponsors/r2-logo.png"),
      name: "R2 Consulting",
    }, // Custom
    {
      url: "https://home.social/@ralf",
      logo: require("../public/sponsors/Rottmann_Ventures.png"),
      name: "Rottmann Ventures GmbH"
    }, // Custom
    {
      url: "https://customcomet.com/",
      logo: require("../public/sponsors/custom-comet.png"),
      name: "Custom Comet",
    }, // Custom
    {
      url: "https://iatro.health/",
      logo: require("../public/sponsors/iatro.jpeg"),
      name: "iatro",
    }, // Custom
    {
      url: "https://tooting.social/",
      logo: require("../public/sponsors/tooting-social.png"),
      name: "Tooting Social",
    }, // Custom
    {
      url: "https://archive.org/",
      logo: require("../public/sponsors/archive-logo-1600.png"),
      name: "Internet Archive",
    }, // Custom
    {
      url: "https://bookingninja.io/",
      logo: require("../public/sponsors/booking-ninja.png"),
      name: "BookingNinja",
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
      url: "https://stoners.social/invite/8rYLTCGW",
      logo: require("../public/sponsors/chill.jpg"),
      name: "Stoners Social | The Weed Platform",
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
      url: "https://supertokens.com/",
      logo: require("../public/sponsors/supertokens.svg"),
      name: "SuperTokens",
    }, // Custom
    {
      url: "https://client.zealous.host/aff.php?aff=7",
      logo: require("../public/sponsors/zealous.png"),
      name: "Zealous Host | Gameservers",
    }, // Custom
    {
      url: "https://pillarwm.com/best-wealth-management-firms/",
      logo: require("../public/sponsors/pillar.jpg"),
      name: "Best Wealth Management Firms",
    }, // Custom
    {
      url: "https://toot.io/mastodon_hosting.html",
      logo: require("../public/sponsors/toot_io_logo.png"),
      name: "toot.io",
    }, // Custom
    {
      url: "http://www.reboot.io/",
      logo: require("../public/sponsors/reboot-fullstacked-trademark-color-small.jpg"),
      name: "Better Humans Make Better Leaders",
    }, // Custom
  ],
  silver: patreonData.silver,
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
