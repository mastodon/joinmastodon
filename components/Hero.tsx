import { useRouter } from "next/router"
import Image, { StaticImageData } from "next/legacy/image"
import { CSSProperties } from "react"
import { getDirForLocale } from "../utils/locales"

import defaultMobileImage from "../public/illustrations/default_hero_mobile.png"
import defaultDesktopImage from "../public/illustrations/default_hero_desktop.png"
import classNames from "classnames"

export type HeroProps = {
  /** Static import of mobile image */
  mobileImage?: StaticImageData
  /** Static import of desktop image */
  desktopImage?: StaticImageData
  /** Text content */
  children: React.ReactNode
  /** Large, centered hero style used on the homepage */
  homepage?: boolean
  /** Adds a text shadow to the hero's content */
  safeTextShadow?: boolean
  /** Don't set a height on the container **/
  noHeight?: boolean
}

/**
 * Illustrated hero component used at the top of all pages.
 *
 * The height of the hero is calculated from:
 * `(the height of the image / 2)`
 * so @2x images are required.
 */
const Hero = ({
  mobileImage = defaultMobileImage,
  desktopImage = defaultDesktopImage,
  children,
  homepage,
  safeTextShadow = true,
  noHeight,
}: HeroProps) => {
  const { locale } = useRouter()
  const dir = getDirForLocale(locale)

  return (
    <section
      className={classNames(
        "full-width-bg relative pt-[var(--header-area)] text-white",
        noHeight ? "" : "h-[var(--mobile-hero-height)]",
        noHeight
          ? ""
          : homepage
          ? "2xl:h-[var(--desktop-hero-height)]"
          : "xl:h-[var(--desktop-hero-height)]"
      )}
      style={
        {
          "--desktop-hero-height": `${desktopImage.height / 2}px`,
          "--mobile-hero-height": `${mobileImage.height / 2}px`,
        } as CSSProperties
      }
    >
      {homepage ? (
        <div
          className={classNames(
            "full-width-bg__inner flex flex-col items-center justify-center py-20 text-center",
            {
              "drop-shadow-safe-text": safeTextShadow,
            }
          )}
        >
          {children}
        </div>
      ) : (
        <div className="full-width-bg__inner grid py-20 drop-shadow-safe-text lg:grid-cols-12 lg:justify-center lg:gap-x-gutter">
          <div className="col-span-12 lg:col-span-7 xl:col-span-5 xl:col-start-2">
            {children}
          </div>
        </div>
      )}

      <div
        className={classNames(
          "absolute inset-0 -z-10 h-[var(--mobile-hero-height)]",
          homepage ? "md:ms-[-25%] 2xl:hidden" : "xl:hidden",
          homepage
            ? "2xl:h-[var(--desktop-hero-height)]"
            : "xl:h-[var(--desktop-hero-height)]",
          dir === "rtl" && "-scale-x-100"
        )}
      >
        <Image
          src={mobileImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          placeholder="empty"
          unoptimized
          priority={true}
        />
      </div>

      <div
        className={classNames(
          "absolute inset-0 -z-10 hidden h-[var(--mobile-hero-height)]",
          homepage ? "2xl:block" : "xl:block",
          homepage
            ? "2xl:h-[var(--desktop-hero-height)]"
            : "xl:h-[var(--desktop-hero-height)]",
          dir === "rtl" && "-scale-x-100"
        )}
      >
        <Image
          className="desktop-hero"
          src={desktopImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          placeholder="empty"
          unoptimized
          priority={true}
        />
      </div>
    </section>
  )
}
export default Hero
