import Image from "next/image"
import classnames from "classnames"

const SponsorLogoGroup = ({ sponsors }) => {
  return (
    <div className="grid grid-cols-2 items-center justify-center gap-5 gap-x-5 bg-gray-5 py-5 rounded-md sm:flex sm:flex-wrap">
      {sponsors.map((sponsor, i) => {
        let isLastItem = sponsors[i + 1] == undefined
        let isUnevenItems = sponsors.length % 2 != 0

        return (
          <a
            href={sponsor.url} key={i}
            className={classnames(
              "group relative inline-flex max-h-[40px] max-w-[150px] justify-self-center",
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
              className="object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
              alt={sponsor.name}
              src={sponsor.logo}
              width={150}
              height={40}
              layout="fixed"
            />
          </a>
        )
      })}
    </div>
  )
}

export default SponsorLogoGroup
