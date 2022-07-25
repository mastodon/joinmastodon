import Image, { ImageProps } from "next/image"
import { FormattedMessage } from "react-intl"

import downloadOnGooglePlay from "../public/badges/google-play.svg"
import downloadOnAppStore from "../public/badges/app-store.svg"

export type AppHeroProps = {
  children: React.ReactNode
  backgroundImage: ImageProps["src"]
}
export const AppHero = ({ children, backgroundImage }: AppHeroProps) => {
  return (
    <section className="full-width-bg relative pt-32 pb-footer-offset">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      <div className="full-width-bg__inner flex flex-col items-center gap-12 pb-[20%] md:gap-20">
        <h2 className="h1 text-center">
          <FormattedMessage
            id="browse_apps.get_started"
            defaultMessage="Get started today"
          />
        </h2>

        <div className="flex gap-5">
          <a href="https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974">
            <Image src={downloadOnAppStore} alt="Download on the App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android">
            <Image src={downloadOnGooglePlay} alt="Get it on Google Play" />
          </a>
        </div>
      </div>
    </section>
  )
}
export default AppHero
