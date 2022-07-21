const { locales, defaultLocale } = require("./data/locales.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale,
  },
  images: {
    domains: ["proxy.joinmastodon.org"],
  },
}

module.exports = nextConfig
