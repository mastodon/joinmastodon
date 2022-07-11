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
    <div className="flex items-center gap-4 justify-start p-2 md:p-4 bg-white shadow rounded">
      <div className="w-[3.5rem] h-[3.5rem]">
        <Image src={icon} />
      </div>
      <div className="flex flex-col">
        <span className="b4 text-gray-1">{paid ? <FormattedMessage id='apps.paid' defaultMessage='Paid' /> : <FormattedMessage id='apps.free' defaultMessage='Free' />}</span>
        <h3 className="b1 font-800">{name}</h3>
      </div>
    </div>
    </a>
  )
}
