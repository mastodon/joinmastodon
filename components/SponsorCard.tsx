import classNames from "classnames"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

/** Sponsor Card, supporting data from `silver`, `generalHighlighted`, and `general` */
const SponsorCard = ({ sponsor, tier }) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[auto] gap-4 rounded p-4",
        tier === "generalHighlighted" && "bg-nightshade-900 text-white",
        tier === "silver" && "border border-gray-3 hover:bg-gray-4"
      )}
    >
      {tier === "silver" &&
        (sponsor.logo ? (
          <Image src={sponsor.logo} width="56" height="56" alt="" className="rounded-md" />
        ) : (
          <div className="h-[56px] w-[56px] rounded-md bg-blurple-gradient" />
        ))}

      <div className="w-full truncate">
        <span className={classNames("b3 !leading-[1.5]", tier === "generalHighlighted" ? "text-nightshade-100" : "text-gray-1")}>
          {tier === "silver" ? (
            <FormattedMessage
              id="silver_sponsor"
              defaultMessage="Silver sponsor"
            />
          ) : (
            <FormattedMessage id="sponsor" defaultMessage="Sponsor" />
          )}
        </span>

        <p className="b2 !font-semibold truncate">{sponsor.name || sponsor}</p>
      </div>
    </div>
  )
}
export default SponsorCard
