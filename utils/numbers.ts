import { defaultLocale } from "../data/locales"

export const formatNumber = (
  number: number,
  localeCode: string = defaultLocale,
  options: Intl.NumberFormatOptions = {}
): string => {
  let intlOptions: Intl.NumberFormatOptions = {
    notation: "compact",
    ...options,
  }
  return new Intl.NumberFormat(localeCode, intlOptions).format(number)
}
