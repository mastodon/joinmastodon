import classnames from "classnames"
import Image from "next/image"
import SVG from "react-inlinesvg"
import { FormattedMessage } from "react-intl"

/**
 * IconCard component.
 * Layout (width, height, positioning) can be set from the parent.
 * @param {{
 *  title: React.ReactNode,
 *  icon: string,
 *  copy: React.ReactNode
 * }} props 
 */
export const AppCard = ({ name, icon, url, paid }) => {
  return (
    <a href={url}>
      <div className="flex items-center justify-start gap-4 rounded bg-white p-2 shadow md:p-4">
        <div className="h-[3.5rem] w-[3.5rem] flex-shrink-0">
          <Image src={icon} />
        </div>
        <div className="flex flex-col">
          <span className="b4 text-gray-1">
            {paid ? (
              <FormattedMessage id="apps.paid" defaultMessage="Paid" />
            ) : (
              <FormattedMessage id="apps.free" defaultMessage="Free" />
            )}
          </span>
          <h3 className="b1 font-800 !leading-[1]">{name}</h3>
        </div>
      </div>
    </a>
  )
}
