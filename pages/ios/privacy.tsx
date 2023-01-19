import BasicPage from "../../components/BasicPage"
import Head from "next/head"
import Hero from "../../components/Hero"
import { withDefaultStaticProps } from "../../utils/defaultStaticProps"
import Layout from "../../components/Layout"

/** This page does not require translations */
const Privacy = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero>
        <h1 className="h1 mb-4">Mastodon for iOS Privacy Policy</h1>
        <p className="sh1">Last updated June 20, 2021</p>
      </Hero>
      <BasicPage>
        <div>
          <p>
            The Mastodon for iOS app does not collect or process any personal
            information from its users. The app is used to connect to
            third-party Mastodon servers that may or may not collect personal
            information and are not covered by this privacy policy. Each
            third-party Mastodon server comes equipped with its own privacy
            policy that can be viewed through the app or through that
            server&apos;s website.
          </p>
        </div>

        <Head>
          <title>Privacy Policy - Mastodon for iOS</title>
          <meta
            property="og:title"
            content="Privacy Policy for Mastodon for iOS"
          />
        </Head>
      </BasicPage>
    </div>
  </Layout>
)
export const getStaticProps = withDefaultStaticProps()
export default Privacy
