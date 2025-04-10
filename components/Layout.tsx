import Head from "next/head"
import { StaticImageData } from "next/image"
import { useRouter } from "next/router"

import Footer from "./Footer"
import Header from "./Header"

import { locales, defaultLocale } from "../data/locales"
import defaultPreviewImage from "../public/preview.png"

const BASE_URL = "https://joinmastodon.org"

/** Default layout component */
export const Layout = ({
  children,
  transparentHeader,
  previewImage,
}: {
  children: React.ReactNode
  transparentHeader?: boolean
  previewImage?: StaticImageData
}) => {
  const router = useRouter()

  const currentLocale = router.locale
  const currentPath = router.asPath
  const metaPreviewImage = previewImage || defaultPreviewImage

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
          content={`${BASE_URL}${metaPreviewImage.src}`}
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
