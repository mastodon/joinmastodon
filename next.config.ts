import { NextConfig } from "next"

const { locales, defaultLocale } = require("./data/locales.js")

function notIfProduction(param) {
  if (process.env.NODE_ENV === "production") return ""
  else return param
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale,
  },
  images: {
    remotePatterns: [
      { hostname: "proxy.joinmastodon.org" },
      { hostname: "c8.patreon.com" },
      { hostname: "c10.patreonusercontent.com" },
    ],
  },
  async headers() {
    // These static files are references with hardcoded URLs and need proper Cache-Control headers
    return ["/fonts/:all*(ttf|otf|woff|woff2)", "/:all*.png"]
      .map((source) => ({
        source,
        headers: [
          {
            key: "Cache-control",
            value: "max-age=3600, stale-while-revalidate",
          },
        ],
      }))
      .concat(
        {
          source: "/(.*)?",
          headers: [
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "Permissions-Policy",
              value:
                "camera=(), microphone=(), geolocation=(), browsing-topics=()",
            },
            {
              key: "Referrer-Policy",
              value: "origin-when-cross-origin",
            },
            {
              key: "Content-Security-Policy",
              value: cspMapToString({
                "default-src": ["self"],
                "child-src": ["self"],
                "object-src": ["none"],
                "img-src": [
                  "self",
                  "proxy.joinmastodon.org",
                  "blob:",
                  "data:",
                  "https://queue.simpleanalyticscdn.com",
                  "https://simpleanalyticsbadges.com",
                ],
                "style-src": ["self", "unsafe-inline"],
                "script-src": [
                  "self",
                  notIfProduction("unsafe-inline"),
                  notIfProduction("unsafe-eval"),
                  "https://scripts.simpleanalyticscdn.com",
                ],
                "connect-src": [
                  "self",
                  "api.joinmastodon.org",
                  "https://queue.simpleanalyticscdn.com",
                ],
                "block-all-mixed-content": [],
              }),
            },
          ],
        },
        {
          source: "/donate/(.*)?",
          headers: [
            {
              key: "Content-Security-Policy",
              // Policies taken from: https://docs.stripe.com/security/guide?csp=csp-js
              value: cspMapToString({
                "default-src": ["self"],
                "img-src": [
                  "self",
                  "proxy.joinmastodon.org",
                  "https://*.stripe.com",
                  "blob:",
                  "data:",
                  "https://queue.simpleanalyticscdn.com",
                  "https://simpleanalyticsbadges.com",
                ],
                "style-src": ["self", "unsafe-inline"],
                "script-src": [
                  "self",
                  notIfProduction("unsafe-inline"),
                  notIfProduction("unsafe-eval"),
                  "https://connect-js.stripe.com",
                  "https://js.stripe.com",
                  "https://*.js.stripe.com",
                  "https://maps.googleapis.com",
                  "https://scripts.simpleanalyticscdn.com",
                ],
                "block-all-mixed-content": [],
                "frame-src": [
                  "https://connect-js.stripe.com",
                  "https://js.stripe.com",
                  "https://*.js.stripe.com",
                  "https://hooks.stripe.com",
                ],
                "connect-src": [
                  "self",
                  "https://api.stripe.com",
                  "https://maps.googleapis.com",
                  "https://queue.simpleanalyticscdn.com",
                ],
              }),
            },
          ],
        }
      )
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
  webpack(config) {
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
  poweredByHeader: false,
  output: "standalone",
  eslint: {
    dirs: ["."], // Check all files in the project
  },
}

function cspMapToString(map: Record<string, string[]>) {
  return Object.entries(map)
    .map(([key, values]) => {
      const valuesString = values
        .filter(Boolean)
        .map((value) =>
          value.includes(".") || value.includes(":") ? value : `'${value}'`
        )
        .join(" ")
      return `${key} ${valuesString}`
    })
    .join("; ")
}

module.exports = nextConfig
