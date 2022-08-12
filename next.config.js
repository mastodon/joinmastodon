const { locales, defaultLocale } = require("./data/locales.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale,
  },
  images: {
    domains: ["proxy.joinmastodon.org"],
  },
  async redirects() {
    return [
      {
        source: "/communities",
        destination: "/servers",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
