import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
import Layout from "../components/Layout"
import "../styles/globals.scss"
import Footer from "../components/Footer"

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
        <Footer></Footer>
      </Layout>
    </IntlProvider>
  )
}

export default MyApp
