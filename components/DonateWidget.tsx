import classNames from "classnames"
import { useCallback, useState } from "react"
import {
  defineMessages,
  FormattedMessage,
  FormattedNumber,
  useIntl,
} from "react-intl"
import { Input, Select } from "@headlessui/react"

import CheckIcon from "../public/icons/check.svg?inline"
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
  currencySelect: {
    id: "donate_widget.currency_select",
    defaultMessage: "Select currency",
  },
  amountSelect: {
    id: "donate_widget.amount_select",
    defaultMessage: "Amount to donate",
  },
  amountButton: {
    id: "donate_widget.amount_button",
    defaultMessage: "Select {amount}",
  },
  loadingError: {
    id: "donate_widget.loading_error",
    defaultMessage: "Loading checkout timed out, please try again",
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
    setTimeout(() => {
      setLoadingCheckout(false)
      setError(intl.formatMessage(messages.loadingError))
    }, 5000)
  }, [currency, currentAmount, frequency, intl, onDonate])

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

      <div className="flex group">
        <Select
          className={classNames(
            "p-2 rounded-l-md outline-none transition-colors cursor-pointer disabled:cursor-default font-medium",
            "text-white bg-blurple-500 group-hover:bg-blurple-600",
            "disabled:bg-gray-2 disabled:group-hover:bg-gray-2"
          )}
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
          aria-label={intl.formatMessage(messages.currencySelect)}
          disabled={loadingCheckout}
        >
          <option value="USD">
            <FormattedMessage
              id="donate_widget.currency.usd"
              defaultMessage="USD"
            />
          </option>
          <option value="EUR">
            <FormattedMessage
              id="donate_widget.currency.eur"
              defaultMessage="EUR"
            />
          </option>
        </Select>
        <Input
          className={classNames(
            "w-full px-2 rounded-r-md font-bold outline-none transition-colors",
            "border border-blurple-500 group-hover:border-blurple-600",
            "disabled:border-gray-2 disabled:group-hover:border-gray-2"
          )}
          type="number"
          value={currentAmount / 100}
          onChange={handleChangeAmount}
          min={0}
          step={1}
          aria-label={intl.formatMessage(messages.amountSelect)}
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
            aria-label={intl.formatMessage(messages.amountButton, {
              amount: intl.formatNumber(amount / 100, {
                style: "currency",
                currency,
                maximumFractionDigits: 0,
              }),
            })}
            disabled={loadingCheckout}
            fullWidth
          >
            <FormattedNumber
              value={amount / 100}
              style="currency"
              currency={currency}
              maximumFractionDigits={0}
            />
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
