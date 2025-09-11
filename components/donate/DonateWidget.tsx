import classNames from "classnames"
import { useCallback, useState } from "react"
import {
  defineMessages,
  FormattedMessage,
  FormattedNumber,
  useIntl,
} from "react-intl"
import { Select } from "@headlessui/react"

import CheckIcon from "../../public/icons/check.svg?inline"
import DropdownArrowIcon from "../../public/icons/dropdown-arrow.svg?inline"
import type {
  Currency,
  CampaignResponse,
  DonationFrequency,
} from "../../types/api"
import { Button } from "../Button"
import { Input } from "../Input"

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
  amountError: {
    id: "donate_widget.amount_error",
    defaultMessage: "Please input an amount above 1",
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
  const [amountDisplay, setAmountDisplay] = useState(() =>
    ((defaultAmount ?? amounts[frequency][currency][0]) / 100).toFixed(2)
  )
  const [dirty, setDirty] = useState(false)
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const intl = useIntl()

  const updateAmount = useCallback((amount: number) => {
    const intAmount = Math.round(amount)
    if (isNaN(intAmount) || intAmount < 100) {
      return
    }
    setCurrentAmount(intAmount)
    setAmountDisplay((intAmount / 100).toFixed(2))
  }, [])

  const handleChangeFrequency = useCallback(
    (toFrequency: DonationFrequency) => () => {
      setFrequency(toFrequency)
      updateAmount(amounts[toFrequency][currency][0])
      setDirty(false)
      setError(null)
    },
    [amounts, currency, updateAmount]
  )
  const handleChangeCurrency = useCallback(
    (toCurrency: Currency) => {
      setCurrency(toCurrency)
      updateAmount(amounts[frequency][toCurrency][0])
      setDirty(false)
      setError(null)
    },
    [amounts, frequency, updateAmount]
  )
  const handleChangeAmount: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        setDirty(true)
        const { value, valueAsNumber } = event.currentTarget
        setAmountDisplay(
          value.replaceAll(/[^0-9\.]+/g, "") ||
            valueAsNumber.toFixed(2) ||
            (currentAmount / 100).toFixed(2)
        )
        if (isNaN(valueAsNumber) || valueAsNumber < 1) {
          return
        }
        setCurrentAmount(valueAsNumber * 100)
      },
      [currentAmount]
    )
  const handleClickAmount = useCallback(
    (amount: number) => {
      updateAmount(amount)
      setDirty(false)
      setError(null)
    },
    [updateAmount]
  )
  const handleBlurAmount = useCallback(() => {
    setAmountDisplay((currentAmount / 100).toFixed(2))
  }, [currentAmount])

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
            className="rounded-none first:rounded-l-md last:rounded-r-md pr-6 group"
            dark={freq === frequency}
            onClick={handleChangeFrequency(freq)}
            disabled={loadingCheckout}
            fullWidth
          >
            <CheckIcon
              className={classNames(
                "fill-black w-auto h-4 transition-opacity",
                frequency !== freq && "opacity-0 group-hover:opacity-100"
              )}
            />
            {intl.formatMessage(messages[freq])}
          </Button>
        ))}
      </div>

      <div className="flex focus-within:shadow-input rounded-md">
        <span className="relative">
          <DropdownArrowIcon className="absolute left-0 top-[9px] fill-white pointer-events-none" />
          <Select
            className={classNames(
              "h-full p-2 pl-6 rounded-l-md outline-none transition-colors cursor-pointer disabled:cursor-default font-medium",
              "text-white bg-blurple-500 hocus:bg-blurple-600",
              "disabled:bg-gray-2 disabled:hocus:bg-gray-2"
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
        </span>
        <Input
          className="rounded-l-none focus:shadow-none dark:bg-black"
          type="number"
          value={amountDisplay}
          onChange={handleChangeAmount}
          onBlur={handleBlurAmount}
          min={1}
          step={0.01}
          aria-label={intl.formatMessage(messages.amountSelect)}
          disabled={loadingCheckout}
          fullWidth
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
