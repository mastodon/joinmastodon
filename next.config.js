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
  async headers() {
    // These static files are references with hardcoded URLs and need proper Cache-Control headers
    return [
      "/fonts/:all*(ttf|otf|woff|woff2)",
      "/favicon-:all*(png)",
      "/app-icon.png",
      "/preview.png",
    ].map((source) => ({
      source,
      headers: [
        {
          key: "Cache-control",
          value: "max-age=3600, stale-while-revalidate",
        },
      ],
    }))
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
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test?.(".svg")
    )

    config.module.rules.push({
      oneOf: [
        // warning: do not specify `issuer` key here, it is broken with dynamic require
        // see https://github.com/webpack/webpack/issues/9309
        //     https://github.com/vercel/next.js/discussions/15437
        {
          test: /\.svg$/i,
          resourceQuery: /inline/, // Only for *.svg?inline
          use: [{ loader: "@svgr/webpack", options: { svgo: false } }],
        },

        // we need to add this, as the previous rule disabled the default SVG loader
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: { not: [/inline/] },
        },
      ],
    })

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
  output: "standalone",
}

module.exports = nextConfig
