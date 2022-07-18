import { locales } from "../data/locales"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales,
    defaultLocale: "en",
  },
}

module.exports = nextConfig
