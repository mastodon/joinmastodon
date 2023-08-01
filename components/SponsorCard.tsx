import classNames from "classnames"
import Image from "next/legacy/image"
import { FormattedMessage } from "react-intl"

/** Sponsor Card, supporting data from `silver`, `generalHighlighted`, and `general` */
const SponsorCard = ({ sponsor, tier }) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[auto_1fr] gap-4 rounded p-4",
        tier === "generalHighlighted" && "bg-nightshade-900 text-white",
        tier === "silver" && "border border-gray-3 hover:bg-gray-4"
      )}
    >
      {tier === "silver" && (
        <div className="relative h-[56px] w-[56px] overflow-hidden rounded-md bg-blurple-gradient">
          {sponsor.logo && (
            <Image src={sponsor.logo} alt="" layout="fill" objectFit="cover" />
          )}
        </div>
      )}

      <div
        className={classNames("truncate", tier !== "silver" ? "w-full" : null)}
      >
        <span
          className={classNames(
            "b3 !leading-[1.5]",
            tier === "generalHighlighted"
              ? "text-nightshade-100"
              : "text-gray-1"
          )}
        >
          {tier === "silver" ? (
            <FormattedMessage
              id="silver_sponsor"
              defaultMessage="Silver sponsor"
            />
          ) : (
            <FormattedMessage id="sponsor" defaultMessage="Sponsor" />
          )}
        </span>

        <p className="b2 truncate !font-semibold">{sponsor.name || sponsor}</p>
      </div>
    </div>
  )
}
export default SponsorCard
