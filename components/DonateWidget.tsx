import classNames from "classnames"
import { ReactNode, useCallback, useMemo, useState } from "react"
import { FormattedMessage, useIntl } from "react-intl"

import CheckIcon from "../public/icons/check.svg?inline"

import type {
  Currency,
  CampaignResponse,
  DonationFrequency,
} from "../types/api"

interface DonateWidgetProps extends CampaignResponse {
  theme: "light" | "dark"
}

export default function DonateWidget({
  theme,
  donation_message,
  donation_button_text,
  default_currency,
  amounts,
}: DonateWidgetProps) {
  const frequencies = Object.keys(amounts) as DonationFrequency[]
  const [frequency, setFrequency] = useState<DonationFrequency>(
    () => frequencies.at(-1) as DonationFrequency
  )
  const [currency, setCurrency] = useState<Currency>(default_currency)
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

  return (
    <div
      className={classNames(
        theme,
        "bg-white dark:bg-black p-4 min-h-screen max-w-[400px]"
      )}
    >
      <p className="">{donation_message}</p>
      <div className="flex rounded-full overflow-hidden border text-center my-4">
        {frequencies.map((freq) => (
          <ToggleButton
            key={freq}
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
          className="p-2 bg-gray-3 cursor-pointer"
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          className="w-full"
          type="number"
          value={currentAmount}
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
            {formatter.format(amount)}
          </ToggleButton>
        ))}
      </div>

      <button className="bg-blurple-300 p-2 text-center rounded-full mt-4 w-full border hover:bg-blurple-500 transition-colors">
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
        selected && "bg-blurple-300 hover:bg-blurple-500",
        !selected && "hover:bg-gray-4",
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

function useCurrencyFormatter(currency: Currency) {
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
