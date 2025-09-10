import classNames from "classnames"
import Hero from "../Hero"
import { Theme } from "../../donate/types"
import { useEffect, useState } from "react"
import { isInIframe } from "../../donate/utils"
import Head from "next/head"

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
    <main className={theme}>
      <Hero homepage noCenter className="pt-0">
        <div
          className={classNames(
            "w-full max-w-md bg-white text-black flex flex-col rounded-lg overflow-hidden",
            className
          )}
        >
          {children}
        </div>
      </Hero>
      {belowModal}

      <Head>
        <title>Donate - Mastodon</title>
      </Head>
    </main>
  )
}
