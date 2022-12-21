import { useIntl } from "react-intl"
import { formatNumber, percIncrease } from "../utils/numbers"
import SkeletonText from "./SkeletonText"

const Statistic: React.FC<{
  Icon?: (props: React.SVGProps<SVGElement>) => React.ReactElement
  label?: any
  currentValue?: number
  prevValue?: number
}> = ({ Icon, label, currentValue, prevValue }) => {
  const intl = useIntl()
  const change = currentValue ? percIncrease(prevValue, currentValue) : 0

  return (
    <div className="flex items-center">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blurple-500 text-white">
        {Icon && <Icon className="h-5 w-5" />}
      </div>

      <div className="grow px-3">
        <span className="b3 !font-extrabold text-gray-1">
          {label || <SkeletonText className="w-[16ch]" />}
        </span>
        <span className="block">
          <span className="h6">
            {currentValue ? (
              formatNumber(currentValue, intl.locale)
            ) : (
              <SkeletonText className="w-[4ch]" />
            )}
          </span>
          {change > 0 && (
            <span className="b3 px-1 !font-extrabold text-nightshade-300">
              +{Math.round(change * 100)}%
            </span>
          )}
        </span>
      </div>
    </div>
  )
}

export default Statistic
