import Image from "next/image"
import SVG from "react-inlinesvg"
import { useIntl } from "react-intl"
import { formatNumber, percIncrease } from "../utils/numbers"

const Statistic = ({ icon, label, currentValue, prevValue }) => {
  const intl = useIntl()
  const change = percIncrease(prevValue, currentValue)

  return (
    <div className="flex items-center">
      <div className="bg-blurple-500 rounded-md h-12 w-12 text-white flex items-center justify-center">
        <SVG src={icon} className="w-5 h-5" />
      </div>

      <div className="px-3">
        <span className="b3 !font-extrabold text-gray-1">{label}</span>
        <span className="block">
          <span className="h6">{formatNumber(currentValue, intl.locale)}</span>
          {change > 0 && <span className="b3 !font-extrabold text-nightshade-300 px-1">+{Math.round(change * 100)}%</span>}
        </span>
      </div>
    </div>
  )
}

export default Statistic
