import Image from "next/legacy/image"
import { FormattedMessage } from "react-intl"
import AndroidCategory from "../public/categories/android.svg?inline"
import DesktopCategory from "../public/categories/desktop.svg?inline"
import IosCategory from "../public/categories/ios.svg?inline"
import SailfishCategory from "../public/categories/sailfish.svg?inline"
import WebCategory from "../public/categories/web.svg?inline"

export interface AppCardProps {
  name: React.ReactNode
  icon: string
  url: URL
  paid: boolean
  category: string
  categoryLabel: string
  activeCategory: string
}

/**
 * Renders a card with app data.
 * Layout (width, height, positioning) can be set from the parent.
 */
export const AppCard: React.FC<AppCardProps> = ({
  name,
  icon,
  url,
  paid,
  category,
  categoryLabel,
  activeCategory,
}) => {
  return (
    <a
      key={`${url} ${name}`}
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-stretch justify-start gap-4 rounded border border-gray-3 bg-white p-2 hover:bg-gray-4 md:p-4 relative"
    >
      <div className="h-[3.5rem] w-[3.5rem] flex-shrink-0 overflow-hidden rounded-sm">
        <Image src={icon} alt={`Logo for ${name}`} />
      </div>
      <div className="flex flex-auto flex-col">
        <span className="b4 block text-gray-1">
          {categoryLabel},{" "}
          {paid ? (
            <FormattedMessage id="apps.paid" defaultMessage="Paid" />
          ) : (
            <FormattedMessage id="apps.free" defaultMessage="Free" />
          )}
        </span>
        <h3 className="b1 !font-700 flex flex-auto items-center !leading-[1] rtl:text-right">
          <span dir="ltr">{name}</span>
        </h3>
      </div>
      {activeCategory === "all" ? (
        <span className="absolute top-0 p-1 text-blurple-500">
          {category === "desktop" ? (
            <DesktopCategory width="24" height="24" />
          ) : category === "web" ? (
            <WebCategory width="24" height="24" />
          ) : category === "ios" ? (
            <IosCategory width="24" height="24" />
          ) : category === "android" ? (
            <AndroidCategory width="24" height="24" />
          ) : category === "sailfish" ? (
            <SailfishCategory width="24" height="24" />
          ) : (
            ""
          )}
        </span>
      ) : (
        ""
      )}
    </a>
  )
}
