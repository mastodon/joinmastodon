import { useRouter } from "next/router"
import { IntlProvider } from "react-intl"
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
      <Component {...pageProps} />
      <Footer></Footer>
    </IntlProvider>
  )
}

export default MyApp
