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

export const percIncrease = (a: number, b: number): number => {
  let percent;

  if (b !== 0) {
    if (a !== 0) {
      percent = (b - a) / a
    } else {
      percent = 1
    }
  } else if (b === 0 && a === 0) {
    percent = 0
  } else {
    percent = - 1
  }

  return percent
}
