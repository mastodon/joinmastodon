import Head from "next/head"
import BasicPage from "../components/BasicPage"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import LinkButton from "../components/LinkButton"
import { FormattedMessage, useIntl } from "react-intl"


const NotFoundPage = () => (
  <BasicPage>
    <div className="flex justify-center pt-24">
      <div className="h2 text-blurple-500 font-bold px-12">404</div>

      <div className="border-l-2 border-gray-4 px-12">
        <h1 className="h2"><FormattedMessage id="404.title" defaultMessage="Page not found" /></h1>
        <p className="sh1 mt-4 mb-8 text-gray-1"><FormattedMessage id="404.description" defaultMessage="Please check the URL in the address bar and try again." /></p>
        <LinkButton href="/" size="medium"><FormattedMessage id="404.go_back_home" defaultMessage="Go back home" /></LinkButton>
      </div>
    </div>
  </BasicPage>
)

export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default NotFoundPage
