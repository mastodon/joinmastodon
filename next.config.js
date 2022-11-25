const { locales, defaultLocale } = require("./data/locales.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale,
  },
  images: {
    domains: ["proxy.joinmastodon.org", "c8.patreon.com", "c10.patreonusercontent.com"],
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
}

module.exports = nextConfig
