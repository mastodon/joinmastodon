const locales = require("./data/locales.js").locales

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: locales.map((l) => l.code),
    defaultLocale: "en",
  },
}

module.exports = nextConfig
