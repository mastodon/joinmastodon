const { locales, defaultLocale } = require("./data/locales.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale,
  },
  images: {
    domains: [
      "proxy.joinmastodon.org",
      "c8.patreon.com",
      "c10.patreonusercontent.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/communities",
        destination: "/servers",
        permanent: true,
      },

      {
        source: "/imprint",
        destination: "/about#impressum",
        permanent: true,
      },

      {
        source: "/impressum",
        destination: "/about#impressum",
        permanent: true,
      },
    ]
  },
  webpack(config, { isServer, isdev }) {
    // custom rule for SVGR

    // warning: do not specify `issuer` key here, it is broken with dynamic require
    // see https://github.com/webpack/webpack/issues/9309
    //     https://github.com/vercel/next.js/discussions/15437
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /inline/, // Only for *.svg?inline
      use: ["@svgr/webpack"],
    })

    // we need to add this, as the previous rule disabled the default SVG loader
    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: { not: [/inline/] },
      loader: "next-image-loader",
      options: { assetPrefix: "", basePath: "", isServer, isDev: isdev },
    })

    return config
  },
}

module.exports = nextConfig
