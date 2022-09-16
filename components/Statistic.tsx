import Image from "next/image"
import SVG from "react-inlinesvg"
import { useIntl } from "react-intl"
import { formatNumber, percIncrease } from "../utils/numbers"
import SkeletonText from "./SkeletonText"

const Statistic = ({ icon, label, currentValue, prevValue }) => {
  const intl = useIntl()
  const change = currentValue ? percIncrease(prevValue, currentValue) : 0

  return (
    <div className="flex items-center">
      <div className="shrink-0 bg-blurple-500 rounded-md h-12 w-12 text-white flex items-center justify-center">
        {icon && <SVG src={icon} className="w-5 h-5" />}
      </div>

      <div className="grow px-3">
        <span className="b3 !font-extrabold text-gray-1">{label || <SkeletonText className="w-[16ch]" />}</span>
        <span className="block">
          <span className="h6">{currentValue ? formatNumber(currentValue, intl.locale) : <SkeletonText className="w-[4ch]" />}</span>
          {change > 0 && <span className="b3 !font-extrabold text-nightshade-300 px-1">+{Math.round(change * 100)}%</span>}
        </span>
      </div>
    </div>
  )
}

export default Statistic
