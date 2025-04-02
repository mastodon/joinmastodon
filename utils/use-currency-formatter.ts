import { useMemo } from "react"
import { useIntl } from "react-intl"
import type { Currency } from "../types/api"

export function useCurrencyFormatter(currency: Currency) {
  const intl = useIntl()
  return useMemo(() => {
    const formatter = new Intl.NumberFormat(intl.locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    })
    return formatter
  }, [currency, intl.locale])
}
