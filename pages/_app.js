import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import Layout from "../components/Layout"
import { getDirForLocale } from "../utils/locales"
import "../styles/globals.scss"

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default MyApp
