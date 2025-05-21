import classNames from "classnames"
import { useCallback, useState } from "react"
import { defineMessages, useIntl } from "react-intl"
import { Input, Select } from "@headlessui/react"

import { sendMessage } from "../donate/utils"
import CheckIcon from "../public/icons/check.svg?inline"
import { useCurrencyFormatter } from "../utils/use-currency-formatter"
import { Button } from "./Button"

import type {
  Currency,
  CampaignResponse,
  DonationFrequency,
} from "../types/api"

export type OnDonateFn = (
  amount: number,
  frequency: DonationFrequency,
  currency: Currency
) => void

interface DonateWidgetProps {
  className?: string
  onDonate: OnDonateFn
  messages: Pick<CampaignResponse, "donation_message" | "donation_button_text">
  defaultCurrency: Currency
  amounts: CampaignResponse["amounts"]
  defaultFrequency?: DonationFrequency
  defaultAmount?: number
}

const messages = defineMessages({
  one_time: {
    id: "donate_widget.frequency.once",
    defaultMessage: "Just once",
  },
  monthly: {
    id: "donate_widget.frequency.monthly",
    defaultMessage: "Monthly",
  },
  yearly: {
    id: "donate_widget.frequency.yearly",
    defaultMessage: "Yearly",
  },
  loadingCheckout: {
    id: "donate_widget.loading_checkout",
    defaultMessage: "Loading…",
  },
})

export function DonateWidget({
  className,
  messages: { donation_message, donation_button_text },
  amounts,
  onDonate,
  defaultAmount,
  defaultCurrency,
  defaultFrequency,
}: DonateWidgetProps) {
  const frequencies = Object.keys(amounts) as DonationFrequency[]
  const [frequency, setFrequency] = useState<DonationFrequency>(
    () => defaultFrequency ?? (frequencies.at(-1) as DonationFrequency)
  )
  const [currency, setCurrency] = useState<Currency>(defaultCurrency)
  const [currentAmount, setCurrentAmount] = useState(
    () => defaultAmount ?? amounts[frequency][currency][0]
  )
  const [dirty, setDirty] = useState(false)
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formatter = useCurrencyFormatter(currency)
  const intl = useIntl()

  const handleChangeFrequency = useCallback(
    (toFrequency: DonationFrequency) => () => {
      setFrequency(toFrequency)
      setCurrentAmount(amounts[toFrequency][currency][0])
      setDirty(false)
      setError(null)
    },
    [amounts, currency]
  )
  const handleChangeCurrency = useCallback(
    (toCurrency: Currency) => {
      setCurrency(toCurrency)
      setCurrentAmount(amounts[frequency][toCurrency][0])
      setDirty(false)
      setError(null)
    },
    [amounts, frequency]
  )
  const handleChangeAmount: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setCurrentAmount(event.currentTarget.valueAsNumber * 100)
      setDirty(true)
      setError(null)
    }, [])
  const handleClickAmount = useCallback((amount: number) => {
    setCurrentAmount(amount)
    setDirty(false)
    setError(null)
  }, [])

  const handleDonate = useCallback(() => {
    setLoadingCheckout(true)
    onDonate(currentAmount, frequency, currency)
    sendMessage("checkout-start")
    setTimeout(() => {
      setLoadingCheckout(false)
      setError("Loading checkout timed out, please try again")
    }, 5000)
  }, [currency, currentAmount, frequency, onDonate])

  return (
    <div className={classNames("dark:text-white", className)}>
      <p className="sh1">{donation_message}</p>
      {error && <p className="text-error text-center text-sm my-4">{error}</p>}
      <div className="flex text-center my-4">
        {frequencies.map((freq) => (
          <Button
            key={freq}
            className={classNames(
              "rounded-none first:rounded-l-md last:rounded-r-md"
            )}
            dark={freq === frequency}
            onClick={handleChangeFrequency(freq)}
            disabled={loadingCheckout}
            fullWidth
          >
            <CheckIcon className="fill-black w-auto h-4" />
            {intl.formatMessage(messages[freq])}
          </Button>
        ))}
      </div>

      <div className="flex">
        <Select
          className={classNames(
            "p-2 rounded-l-md outline-none transition-colors cursor-pointer disabled:cursor-default font-medium",
            "bg-gray-2 hocus:bg-gray-1 dark:bg-gray-1",
            "disabled:bg-gray-2 disabled:hocus:bg-gray-2"
          )}
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
          aria-label="Select currency"
          disabled={loadingCheckout}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
        <Input
          className={classNames(
            "w-full px-2 rounded-r-md font-bold outline-none transition-colors",
            "dark:bg-black border-2 border-gray-2 hocus:border-gray-1 dark:border-gray-1",
            "disabled:border-gray-2 disabled:hocus:border-gray-2"
          )}
          type="number"
          value={currentAmount / 100}
          onChange={handleChangeAmount}
          min={0}
          step={1}
          aria-label="Amount to donate"
          disabled={loadingCheckout}
        />
      </div>
      <div className="flex gap-2 mt-4">
        {amounts[frequency][currency].map((amount) => (
          <Button
            className="transition-none"
            key={amount}
            onClick={() => handleClickAmount(amount)}
            dark={amount === currentAmount && !dirty}
            aria-label={`Select ${formatter.format(amount / 100)}`}
            disabled={loadingCheckout}
            fullWidth
          >
            {formatter.format(amount / 100)}
          </Button>
        ))}
      </div>

      <Button
        className="mt-4"
        onClick={handleDonate}
        dark
        disabled={loadingCheckout}
        fullWidth
      >
        {loadingCheckout
          ? intl.formatMessage(messages.loadingCheckout)
          : donation_button_text}
      </Button>
    </div>
  )
}
