import BasicPage from "../../components/BasicPage"
import Head from "next/head"
import Hero from "../../components/Hero"
import loadIntlMessages from "../../utils/loadIntlMessages"
import Layout from "../../components/Layout"

/** This page does not require translations */
const Privacy = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero>
        <h1 className="h1 mb-4">Mastodon for Android Privacy Policy</h1>
        <p className="sh1">Last updated April 14, 2022</p>
      </Hero>
      <BasicPage>
        <div>
          <p>
            The Mastodon for Android app does not collect or process any personal information from its users. The app is used to connect to third-party Mastodon servers that may or may not collect personal information and are not covered by this privacy policy. Each third-party Mastodon server comes equipped with its own privacy policy that can be viewed through the app or through that server&apos;s website.
          </p>
        </div>

        <Head>
          <title>Privacy Policy - Mastodon for Android</title>
          <meta
            property="og:title"
            content="Privacy Policy for Mastodon for Android"
          />
        </Head>
      </BasicPage>
    </div>
  </Layout>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Privacy
