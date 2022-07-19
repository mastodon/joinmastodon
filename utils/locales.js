import { locales, defaultLocale } from "../data/locales"

export const getDirForLocale = (localeCode) => {
  localeCode ??= defaultLocale
  const locale = locales.find((l) => l.code === localeCode)
  return locale?.dir || "ltr"
}
