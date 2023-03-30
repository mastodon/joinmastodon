import { useRouter } from "next/router"
import Head from "next/head"
import { IntlProvider } from "react-intl"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { getDirForLocale } from "../utils/locales"
import "../styles/globals.scss"

import favicon32 from "../public/favicon-32x32.png"
import favicon16 from "../public/favicon-16x16.png"

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter()
  const dir = getDirForLocale(locale)
  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  const queryClient = new QueryClient()

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={pageProps.intlMessages}
    >
      <QueryClientProvider client={queryClient}>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={favicon32.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={favicon16.src}
          />
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default MyApp
