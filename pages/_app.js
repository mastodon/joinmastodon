import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import Layout from "../components/Layout"
import "../styles/globals.scss"
import { useEffect } from "react"
import { getDirForLocale } from "../utils/locales"

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter()
  const dir = getDirForLocale(locale)
  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={pageProps.intlMessages}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}

export default MyApp
