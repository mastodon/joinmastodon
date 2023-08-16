import Image, { ImageProps } from "next/legacy/image"
import { FormattedMessage } from "react-intl"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

export type AppHeroProps = {
  /** Image source value passed to `next/image`'s `src` */
  backgroundImage: ImageProps["src"]
  /** Image-framing value passed to `next/image`'s `object-position` */
  backgroundImagePosition?: string
}
/** Renders a hero with links to the app store, typically at the bottom of a page. */
export const AppHero = ({
  backgroundImage,
  backgroundImagePosition = "center center",
}: AppHeroProps) => {
  return (
    <section className="full-width-bg relative -mb-footer-offset pb-footer-offset pt-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition={backgroundImagePosition}
        />
      </div>
      <div className="full-width-bg__inner flex flex-col gap-12 pb-[50vw] md:gap-20">
        <h2 className="h1 text-center">
          <FormattedMessage
            id="browse_apps.get_started"
            defaultMessage="Get started today"
          />
        </h2>

        <div className="grid-cols-12 justify-center gap-gutter md:grid">
          <div className="col-span-6 col-start-4 mx-auto grid max-w-xs grid-cols-2 justify-center gap-gutter md:mx-0 md:max-w-none md:justify-start xl:col-span-4 xl:col-start-5">
            <a href="https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974">
              <Image
                src={downloadOnAppStore}
                layout="responsive"
                alt="Download on the App Store"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android">
              <Image
                src={downloadOnGooglePlay}
                layout="responsive"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AppHero
