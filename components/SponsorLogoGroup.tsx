import Image from "next/legacy/image"
import classnames from "classnames"

const SponsorLogoGroup = ({ sponsors }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-1">
      {sponsors.map((sponsor, i) => {
        let isLastItem = sponsors[i + 1] == undefined
        let isUnevenItems = sponsors.length % 2 != 0

        return (
          <a
            href={sponsor.url}
            key={i}
            className={classnames(
              "group relative inline-flex items-center justify-center rounded px-4 py-3",
              sponsor.light ? "bg-nightshade-900" : "bg-gray-5"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="max-h-[40px] max-w-[150px]">
              <Image
                className="object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
                alt={sponsor.name}
                src={sponsor.logo}
                width={150}
                height={40}
                layout="fixed"
              />
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default SponsorLogoGroup
