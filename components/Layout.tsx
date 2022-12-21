import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

import { locales, defaultLocale } from "../data/locales"
import { useRouter } from "next/router"

const BASE_URL = "https://joinmastodon.org"

/** Default layout component */
export const Layout = ({
  children,
  transparentHeader,
}: {
  children: React.ReactNode
  transparentHeader?: boolean
}) => {
  const router = useRouter()

  const currentLocale = router.locale
  const currentPath = router.asPath

  return (
    <div className="mx-auto max-w-site px-6 lg:px-16">
      <a
        className="sr-only top-0 left-0 z-20 block bg-blurple-900 text-white focus:not-sr-only focus:absolute focus:p-2"
        href="#main"
      >
        Skip to main content
      </a>

      <Header transparent={transparentHeader} />
      <main id="main">{children}</main>
      <Footer />

      <Head>
        <meta
          property="og:image"
          content="https://joinmastodon.org/preview.png"
        />
        <meta property="twitter:card" content="summary_large_image" />

        {locales
          .filter((locale) => locale.code !== currentLocale)
          .map((locale) => (
            <link
              key={locale.code}
              rel="alternate"
              hrefLang={locale.code}
              href={`${BASE_URL}${
                locale.code === defaultLocale ? "" : `/${locale.code}`
              }${currentPath}`}
            />
          ))}

        <link
          rel="canonical"
          href={`${BASE_URL}${
            currentLocale === defaultLocale ? "" : `/${currentLocale}`
          }${currentPath}`}
        />
      </Head>
    </div>
  )
}

export default Layout
