import BasicPage from "../../components/BasicPage"
import Head from "next/head"
import Hero from "../../components/Hero"
import heroImage from "../../public/illustrations/apps_hero_desktop.png"
import { withDefaultStaticProps } from "../../utils/defaultStaticProps"
import Layout from "../../components/Layout"

/** This page does not require translations */
const SafetyStandards = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 className="h3 mb-8 pt-16">Mastodon Safety Standards</h1>
        <p className="sh1">For Mastodon for Android</p>
      </Hero>
      <BasicPage>
        <div>
          <h3 className="h5 mb-6">Posting or linking to CSAE</h3>
          <div className="pl-3 border-l-4 border-blurple-600 b1 mb-4">
            <blockquote
              className="italic mb-4"
              cite="https://support.google.com/googleplay/android-developer/answer/14747720#zippy=%2Chow-do-you-define-csae"
            >
              <p>
                CSAE refers to child sexual abuse and exploitation, including
                content or behavior that sexually exploits, abuses, or endangers
                children. This includes, for example, grooming a child for
                sexual exploitation, sextorting a child, trafficking of a child
                for sex, or otherwise sexually exploiting a child.
              </p>
            </blockquote>
            <p className="text-gray-1">
              —{" "}
              <a
                className="hover:text-blurple-500"
                href="https://support.google.com/googleplay/android-developer/answer/14747720#zippy=%2Chow-do-you-define-csae"
              >
                Google Child Safety Standards Policy
              </a>
            </p>
          </div>
          <p className="b1 mb-6">
            The &quot;Mastodon&quot; app for Android (&quot;the
            application&quot;) allows you to connect to the Mastodon server
            where your account is hosted (&quot;the server&quot;) and create new
            posts.{" "}
            <strong>
              Using the application to post or link to CSAE is strictly
              prohibited.
            </strong>
          </p>
          <h3 className="h5 mb-6">
            Reporting accounts posting or linking to CSAE
          </h3>
          <p className="b1 mb-6">
            If you see an account posting CSAE you can report it to your
            server’s moderators for further action. The option to report an
            account is available on the dropdown menu next to a post as well as
            the individual profile.
          </p>
          <h3 className="h5 mb-6">Additional reporting</h3>
          <p className="b1 mb-6">
            You may also want to report to the relevant organizations in your
            jurisdiction. Google maintains{" "}
            <a
              href="https://support.google.com/websearch/answer/148666"
              className="font-semibold hover:text-blurple-500"
            >
              a list of organisations to report CSAE organised by country
            </a>
            . If your country is not listed there it may be listed at{" "}
            <a
              href="https://inhope.org/EN#hotlineReferral"
              className="font-semibold hover:text-blurple-500"
            >
              INHOPE
            </a>
            .
          </p>
          <h3 className="h5 mb-6">Contact</h3>
          <p className="b1 mb-4">
            If you have any questions about this CSAE policy please contact{" "}
            <a
              href="mailto:legal@joinmastodon.org"
              className="font-semibold hover:text-blurple-500"
            >
              legal@joinmastodon.org
            </a>
            .
          </p>
        </div>

        <Head>
          <title>Safety Standards - Mastodon for Android</title>
          <meta
            property="og:title"
            content="Mastodon for Android Safety Standards"
          />
        </Head>
      </BasicPage>
    </div>
  </Layout>
)

export const getStaticProps = withDefaultStaticProps()

export default SafetyStandards
