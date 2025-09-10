import classNames from "classnames"
import Hero from "../Hero"
import { Theme } from "../../donate/types"
import { useEffect, useState } from "react"
import { isInIframe } from "../../donate/utils"

interface DonateWrapperProps {
  children: React.ReactNode
  className?: string
  theme: Theme
}

export function DonateWrapper({
  children,
  className,
  theme = "auto",
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
      <Hero homepage>
        <div
          className={classNames(
            "w-full max-w-md bg-white text-black flex flex-col",
            className
          )}
        >
          {children}
        </div>
      </Hero>
    </main>
  )
}
