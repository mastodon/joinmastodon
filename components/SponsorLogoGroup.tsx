import Link from "next/link"
import Image from "next/image"
import classnames from "classnames"

const SponsorLogoGroup = ({ sponsors }) => {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-5 gap-x-5 bg-white sm:flex sm:flex-wrap">
      {sponsors.map((sponsor, i) => {
        let isLastItem = sponsors[i + 1] == undefined
        let isUnevenItems = sponsors.length % 2 != 0

        return (
          <Link href={sponsor.url} key={i}>
            <a
              className={classnames(
                "group relative inline-flex max-h-[50px] max-w-[150px] justify-self-center",
                isLastItem && isUnevenItems && "col-span-2"
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                aspectRatio: String(
                  sponsor.logo.default.width / sponsor.logo.default.height || 0
                ),
              }}
            >
              <Image
                className={classnames(
                  "object-contain opacity-50 mix-blend-luminosity transition-all group-hover:opacity-100 group-hover:mix-blend-normal group-focus-visible:opacity-100 group-focus-visible:mix-blend-normal",
                  sponsor.light && "invert"
                )}
                src={sponsor.logo}
              />
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default SponsorLogoGroup
