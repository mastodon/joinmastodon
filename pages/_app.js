import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import Layout from "../components/Layout"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter()
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
