import classNames from "classnames"
import { useCallback, useState } from "react"
import { FormattedMessage } from "react-intl"
import { Input, Select } from "@headlessui/react"

import CheckIcon from "../public/icons/check.svg?inline"
import { useCurrencyFormatter } from "../utils/use-currency-formatter"

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
}

export function DonateWidget({
  className,
  messages: { donation_message, donation_button_text },
  defaultCurrency,
  amounts,
  onDonate,
}: DonateWidgetProps) {
  const frequencies = Object.keys(amounts) as DonationFrequency[]
  const [frequency, setFrequency] = useState<DonationFrequency>(
    () => frequencies.at(-1) as DonationFrequency
  )
  const [currency, setCurrency] = useState<Currency>(defaultCurrency)
  const [currentAmount, setCurrentAmount] = useState(
    () => amounts[frequency][currency][0]
  )
  const [dirty, setDirty] = useState(false)
  const formatter = useCurrencyFormatter(currency)

  const handleChangeFrequency = useCallback(
    (toFrequency: DonationFrequency) => () => {
      setFrequency(toFrequency)
      setCurrentAmount(amounts[toFrequency][currency][0])
      setDirty(false)
    },
    [amounts, currency]
  )
  const handleChangeCurrency = useCallback(
    (toCurrency: Currency) => {
      setCurrency(toCurrency)
      setCurrentAmount(amounts[frequency][toCurrency][0])
      setDirty(false)
    },
    [amounts, frequency]
  )
  const handleChangeAmount: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setCurrentAmount(event.currentTarget.valueAsNumber * 100)
      setDirty(true)
    }, [])
  const handleClickAmount = useCallback((amount: number) => {
    setCurrentAmount(amount)
    setDirty(false)
  }, [])

  const handleDonate = useCallback(() => {
    onDonate(currentAmount, frequency, currency)
  }, [currency, currentAmount, frequency, onDonate])

  return (
    <div className={classNames("p-4 dark:text-white", className)}>
      <p>{donation_message}</p>
      <div className="flex text-center my-4">
        {frequencies.map((freq) => (
          <Button
            key={freq}
            className={classNames(
              "rounded-none first:rounded-l-md last:rounded-r-md"
            )}
            dark={freq === frequency}
            onClick={handleChangeFrequency(freq)}
          >
            <CheckIcon className="fill-black w-auto h-4" />
            <FrequencyLabel frequency={freq} />
          </Button>
        ))}
      </div>

      <div className="w-full flex items-stretch">
        <Select
          className="p-2 rounded-l-md outline-none bg-gray-3 hocus:bg-gray-2 transition-colors cursor-pointer font-medium"
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
          aria-label="Select currency"
          defaultValue={defaultCurrency}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Select>
        <Input
          className="grow px-2 rounded-r-md font-bold outline-none dark:bg-black border border-gray-3 hocus:border-gray-2 dark:border-gray-2"
          type="number"
          value={currentAmount / 100}
          onChange={handleChangeAmount}
          min={0}
          step={1}
          aria-label="Amount to donate"
        />
      </div>
      <div className="flex gap-2 mt-2">
        {amounts[frequency][currency].map((amount) => (
          <Button
            className="transition-none"
            key={amount}
            onClick={() => handleClickAmount(amount)}
            dark={amount === currentAmount && !dirty}
            aria-label={`Select ${formatter.format(amount / 100)}`}
          >
            {formatter.format(amount / 100)}
          </Button>
        ))}
      </div>

      <Button className="mt-4" onClick={handleDonate} dark>
        {donation_button_text}
      </Button>
    </div>
  )
}

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  dark?: boolean
}

function Button({
  children,
  className,
  dark = false,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...props}
      className={classNames(
        className,
        "w-full p-2 flex gap-2 items-center justify-center rounded-md",
        "text-center font-semibold transition-colors focus:outline-none border-2",
        !dark &&
          "bg-white hocus:bg-blurple-600 border-blurple-500 hocus:border-blurple-600 text-blurple-500 hocus:text-white",
        dark &&
          "bg-blurple-500 hocus:bg-blurple-600 border-[transparent] text-white"
      )}
    >
      {children}
    </button>
  )
}

function FrequencyLabel({ frequency }: { frequency: DonationFrequency }) {
  switch (frequency) {
    case "one_time":
      return (
        <FormattedMessage id="donate_widget.once" defaultMessage="Just once" />
      )
    case "monthly":
      return (
        <FormattedMessage id="donate_widget.monthly" defaultMessage="Monthly" />
      )
    case "yearly":
      return (
        <FormattedMessage id="donate_widget.yearly" defaultMessage="Yearly" />
      )
  }
}
