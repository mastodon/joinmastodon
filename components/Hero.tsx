import { useRouter } from "next/router"
import Image, { StaticImageData } from "next/image"
import { CSSProperties } from "react"
import { getDirForLocale } from "../utils/locales"

import defaultMobileImage from "../public/illustrations/default_hero_mobile.png"
import defaultDesktopImage from "../public/illustrations/default_hero_desktop.png"

export type HeroProps = {
  /** Static import of mobile image */
  mobileImage?: StaticImageData
  /** Static import of desktop image */
  desktopImage?: StaticImageData
  /** Text content */
  children: React.ReactNode
  /** Large, centered hero style used on the homepage */
  large?: boolean
}

/** Illustrated hero component used at the top of all pages */
const Hero = ({
  mobileImage = defaultMobileImage,
  desktopImage = defaultDesktopImage,
  children,
  large,
}: HeroProps) => {
  const { locale } = useRouter()
  const dir = getDirForLocale(locale)

  return (
    <section
      className="full-width-bg relative h-[var(--mobile-hero-height)] pt-[var(--header-area)] text-white xl:h-[var(--desktop-hero-height)]"
      style={
        {
          "--desktop-hero-height": `${desktopImage.height / 2}px`,
          "--mobile-hero-height": `${mobileImage.height / 2}px`,
        } as CSSProperties
      }
    >
      {large ? (
        <div className="full-width-bg__inner flex flex-col items-center justify-center py-20 text-center">
          {children}
        </div>
      ) : (
        <div className="full-width-bg__inner grid py-20 lg:grid-cols-12 lg:justify-center lg:gap-x-gutter">
          <div className="xxl:col-span-5 col-span-12 lg:col-span-7 xl:col-span-5 xl:col-start-2">
            {children}
          </div>
        </div>
      )}

      <div
        className={`absolute inset-0 -z-10 xl:hidden ${
          dir === "rtl" && "-scale-x-100"
        }`}
      >
        <Image
          src={mobileImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          placeholder="blur"
          priority={true}
        />
      </div>

      <div
        className={`absolute inset-0 -z-10 hidden xl:block ${
          dir === "rtl" && "-scale-x-100"
        }`}
      >
        <Image
          src={desktopImage}
          alt=""
          layout="fill"
          objectFit="cover"
          className="xl:object-center"
          placeholder="blur"
          priority={true}
        />
      </div>
    </section>
  )
}
export default Hero
