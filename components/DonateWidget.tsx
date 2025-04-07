import classNames from "classnames"
import { ReactNode, useCallback, useState } from "react"
import { FormattedMessage } from "react-intl"

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

export default function DonateWidget({
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
  const formatter = useCurrencyFormatter(currency)

  const handleChangeFrequency = useCallback(
    (toFrequency: DonationFrequency) => () => {
      setFrequency(toFrequency)
      setCurrentAmount(amounts[toFrequency][currency][0])
    },
    [amounts, currency]
  )
  const handleChangeCurrency = useCallback(
    (toCurrency: Currency) => {
      setCurrency(toCurrency)
      setCurrentAmount(amounts[frequency][toCurrency][0])
    },
    [amounts, frequency]
  )

  const handleDonate = useCallback(() => {
    onDonate(currentAmount, frequency, currency)
  }, [currency, currentAmount, frequency, onDonate])

  return (
    <div className={classNames("p-4 dark:text-white", className)}>
      <p>{donation_message}</p>
      <div className="flex text-center my-4">
        {frequencies.map((freq) => (
          <ToggleButton
            key={freq}
            className={classNames(
              "border first:border-r-0 first:rounded-l-full last:rounded-r-full transition-colors"
            )}
            selected={freq === frequency}
            onClick={handleChangeFrequency(freq)}
          >
            <CheckIcon className="fill-black w-auto h-4" />
            <FrequencyLabel frequency={freq} />
          </ToggleButton>
        ))}
      </div>

      <div className="flex gap-2 items-center pr-2 border rounded-lg overflow-hidden">
        <select
          className="p-2 bg-gray-3 dark:bg-gray-1 hover:bg-gray-2 hover:dark:bg-gray-0 transition-colors cursor-pointer border-r"
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          className="w-full dark:bg-black"
          type="number"
          value={currentAmount / 100}
          onChange={(e) => setCurrentAmount(e.currentTarget.valueAsNumber)}
          min={0}
        />
      </div>
      <div className="flex gap-2 mt-2">
        {amounts[frequency][currency].map((amount) => (
          <ToggleButton
            className="border rounded-lg"
            key={amount}
            onClick={() => setCurrentAmount(amount)}
            selected={amount === currentAmount}
          >
            {formatter.format(amount / 100)}
          </ToggleButton>
        ))}
      </div>

      <button
        className="bg-blurple-300 hover:bg-blurple-500 dark:bg-nightshade-300 dark:hover:bg-nightshade-600 p-2 text-center rounded-full mt-4 w-full border transition-colors"
        onClick={handleDonate}
      >
        {donation_button_text}
      </button>
    </div>
  )
}

interface ToggleButtonProps {
  selected: boolean
  onClick: () => void
  children: ReactNode
  className?: string
}

function ToggleButton({
  selected,
  onClick,
  children,
  className,
}: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "w-full p-2 flex gap-2 items-center justify-center",
        selected &&
          "bg-blurple-300 hover:bg-blurple-500 dark:bg-nightshade-300 dark:hover:bg-nightshade-600",
        !selected && "hover:bg-gray-4 dark:hover:bg-nightshade-900",
        className
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
