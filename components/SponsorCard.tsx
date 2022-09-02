import classNames from "classnames"
import Image from "next/image"
import { FormattedMessage } from "react-intl"

/** Sponsor Card, supporting data from `silver`, `generalHighlighted`, and `general` */
const SponsorCard = ({ sponsor, tier }) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[auto_1fr] gap-4 rounded p-4",
        tier === "generalHighlighted" && "bg-gray-5",
        tier === "silver" && "border border-gray-3 hover:bg-gray-4"
      )}
    >
      {tier === "silver" &&
        (sponsor.logo ? (
          <Image src={sponsor.logo} width="56" height="56" alt="" />
        ) : (
          <div className="h-[56px] w-[56px] rounded-[2px] bg-blurple-gradient" />
        ))}

      <div className="flex flex-col justify-center">
        <span className="c2 !leading-[1.5] text-gray-1">
          {tier === "silver" ? (
            <FormattedMessage
              id="silver_sponsor"
              defaultMessage="Silver sponsor"
            />
          ) : (
            <FormattedMessage id="sponsor" defaultMessage="Sponsor" />
          )}
        </span>

        <p className="b3">{sponsor.name || sponsor}</p>
      </div>
    </div>
  )
}
export default SponsorCard
