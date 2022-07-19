import { locales } from "../data/locales"

export const getDirForLocale = (localeCode) => {
  localeCode ??= "en"
  const locale = locales.find((l) => l.code === localeCode)
  return locale?.dir || "ltr"
}
