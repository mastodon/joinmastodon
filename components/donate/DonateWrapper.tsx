import classNames from "classnames"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Theme } from "../../donate/types"
import { isInIframe } from "../../donate/utils"

import heroDesktopImage from "../../public/illustrations/default_hero_desktop.png"
import heroMobileImage from "../../public/illustrations/default_hero_mobile.png"

interface DonateWrapperProps {
  children: React.ReactNode
  className?: string
  theme: Theme
  belowModal?: React.ReactNode
}

export function DonateWrapper({
  children,
  className,
  theme = "auto",
  belowModal,
}: DonateWrapperProps) {
  // This is done this way to avoid hydration errors.
  // See: https://nextjs.org/docs/messages/react-hydration-error
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(isInIframe())
  }, [])

  if (isClient) {
    return (
      <div
        className={classNames(
          "bg-white dark:bg-black min-h-screen flex flex-col",
          theme,
          className
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <main
      className={classNames(
        theme,
        "min-h-screen dark:bg-black overflow-hidden relative px-4"
      )}
    >
      <div
        className={classNames(
          "w-full max-w-md mx-auto mt-20 flex flex-col relative z-10",
          "bg-white dark:bg-black text-black dark:text-white dark:border dark:border-gray-0 rounded-lg overflow-hidden drop-shadow-lg",
          className
        )}
      >
        {children}
      </div>
      {belowModal}

      <div className="fixed top-0 left-0">
        <Image
          src={heroDesktopImage}
          alt=""
          role="presentation"
          className="hidden xl:block"
          objectFit="cover"
          objectPosition="center bottom"
          placeholder="empty"
        />
        <Image
          src={heroMobileImage}
          alt=""
          role="presentation"
          className="block xl:hidden"
          objectFit="cover"
          objectPosition="center bottom"
          placeholder="empty"
        />
      </div>

      <Head>
        <title>Donate - Mastodon</title>
      </Head>
    </main>
  )
}
