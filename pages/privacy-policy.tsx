import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"

/** This page does not require translations */
const PrivacyPolicy = () => (
  <div dir="ltr" className="[unicode-bidi:plaintext]">
    <Hero>
      <h1 className="h1 mb-4">Privacy Policy</h1>
      <p className="sh1">Last updated June 28, 2021</p>
    </Hero>
    <BasicPage>
      <div>
        <p>
          <strong>
            This is the privacy policy for the joinmastodon.org website and
            related services.
          </strong>{" "}
          It is not the privacy policy for Mastodon the social network. Mastodon
          is made up of third-party servers that are not covered by this privacy
          policy. You can view an individual Mastodon server&apos;s privacy
          policy through its website.
        </p>

        <hr className="my-8" />

        <p>
          <strong>
            If you sign up to one of our newsletters by submitting a form on
            joinmastodon.org or its subdomains
          </strong>
          , we collect your e-mail address as well as the time and date of the
          sign up.
        </p>
        <p className="mt-4">
          You give us consent to send you e-mails when you sign up for one of
          our newsletters.
        </p>
        <p className="mt-4">
          You can unsubscribe from any of our newsletters by using the
          &quot;unsubscribe&quot; link provided in the footer of each e-mail.
          When you unsubscribe, your e-mail address remains in our system by
          default. You can optionally delete all of your data through that link.
        </p>
      </div>

      <Head>
        <title>Privacy Policy - Mastodon</title>
        <meta
          property="og:title"
          content="Privacy Policy for joinmastodon.org"
        />
      </Head>
    </BasicPage>
  </div>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default PrivacyPolicy
