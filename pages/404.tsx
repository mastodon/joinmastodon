import Head from "next/head"
import BasicPage from "../components/BasicPage"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import LinkButton from "../components/LinkButton"
import { FormattedMessage, useIntl } from "react-intl"
import Layout from "../components/Layout"
import heroImage from "../public/illustrations/apps_hero_desktop.png"

const NotFoundPage = () => (
  <Layout>
    <Hero homepage desktopImage={heroImage} mobileImage={heroImage} />

    <BasicPage>
      <div className="flex justify-center pt-24">
        <div className="h2 px-12 font-bold text-blurple-500">404</div>

        <div className="border-l-2 border-gray-4 px-12">
          <h1 className="h2">
            <FormattedMessage id="404.title" defaultMessage="Page not found" />
          </h1>
          <p className="sh1 mt-4 mb-8 text-gray-1">
            <FormattedMessage
              id="404.description"
              defaultMessage="Please check the URL in the address bar and try again."
            />
          </p>
          <LinkButton href="/" size="medium">
            <FormattedMessage
              id="404.go_back_home"
              defaultMessage="Go back home"
            />
          </LinkButton>
        </div>
      </div>
    </BasicPage>
  </Layout>
)

export const getStaticProps = withDefaultStaticProps()

export default NotFoundPage
