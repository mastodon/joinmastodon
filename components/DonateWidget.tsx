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
              "rounded-none first:rounded-l-md last:rounded-r-md"
            )}
            selected={freq === frequency}
            onClick={handleChangeFrequency(freq)}
          >
            <CheckIcon className="fill-black w-auto h-4" />
            <FrequencyLabel frequency={freq} />
          </ToggleButton>
        ))}
      </div>

      <div className="flex gap-2 items-center pr-2 border border-gray-3 dark:border-gray-2 rounded-md overflow-hidden">
        <select
          className="p-2 bg-gray-3 hover:bg-gray-2 transition-colors cursor-pointer font-medium"
          value={currency}
          onChange={(e) => handleChangeCurrency(e.target.value as Currency)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          className="w-full dark:bg-black font-bold"
          type="number"
          value={currentAmount / 100}
          onChange={(e) => setCurrentAmount(e.currentTarget.valueAsNumber)}
          min={0}
        />
      </div>
      <div className="flex gap-2 mt-2">
        {amounts[frequency][currency].map((amount) => (
          <ToggleButton
            className="transition-none"
            key={amount}
            onClick={() => setCurrentAmount(amount)}
            selected={amount === currentAmount}
          >
            {formatter.format(amount / 100)}
          </ToggleButton>
        ))}
      </div>

      <Button className="mt-4" onClick={handleDonate} dark>
        {donation_button_text}
      </Button>
    </div>
  )
}

interface ToggleButtonProps extends ButtonProps {
  selected: boolean
  onClick: () => void
  children: ReactNode
  className?: string
}

function ToggleButton({ selected, ...props }: ToggleButtonProps) {
  return <Button {...props} dark={selected} />
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
