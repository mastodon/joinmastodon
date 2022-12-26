import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import Layout from "../components/Layout"

/** This page does not require translations */
const Trademark = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero homepage>
        <h1 className="h2 mb-8 pt-16 text-center">Trademark Policy</h1>
        <p className="sh1 text-center">Last updated December 21, 2022</p>
      </Hero>

      <BasicPage>
        <p className="b1 mb-4">The Mastodon name and logos are trademarks of Mastodon gGmbH. As such, their use is restricted and protected by intellectual property law. While the software we create is available under a free and open source software license, the copyright license does not include an implied right or license to use our trademarks.</p>
        <p className="b1 mb-4">The role of trademarks is to prevent the exploitation of the good name and reputation of Mastodon by other people and organizations, and to provide assurance about the quality of the products and services associated with it.</p>
        <p className="b1 mb-4">To use our trademarks beyond what is considered &quot;fair&quot; or &quot;nominative&quot; use, you must follow these guidelines.  By making use of our trademarks, you agree to abide by the following terms and conditions.  You further agree that any dispute arising in connection with your use of our trademarks or under these terms and conditions shall be under the exclusive jurisdiction of the state and federal courts of New York in the United States of America and that the state and federal courts of New York shall have personal jurisdiction over you for the purposes of adjudicating any dispute concerning the use of our trademarks or these terms and conditions.</p>
        <p className="b1 mb-4">You agree to defend and indemnify Mastodon gGmbH from and against any and all claims and losses brought by a third party in connection with your use of the Mastodon trademarks.</p>
        <p className="b1 mb-4">To request the use of the Mastodon name and logos in a way not covered in these guidelines, or to report violations, please contact us at <a href="mailto:trademark@joinmastodon.org" className="text-blurple-500 hover:underline">trademark@joinmastodon.org</a>.  In the event that we do not approve such use of the Mastodon name and logos within ten (10) business days, your request shall be deemed denied.</p>

        <h2 className="h5 mt-12 mb-6">General guidelines</h2>
        <p className="b1 mb-4">In general:</p>

        <ul className="space-y-4 list-disc pl-5 b1">
          <li>Only use the Mastodon marks to accurately identify those goods or services that are built using the Mastodon software.</li>
          <li>Do not use the Mastodon marks in any way that could mistakenly imply that Mastodon GmbH has reviewed, approved, or guaranteed your goods or services.</li>
          <li>Do not use or register, in whole or in part, the Mastodon marks as part of your own or any other trademark, service mark, domain name, company name, trade name, product name, or service name.</li>
          <li>Do not use the Mastodon marks in a manner that disparages or defames the marks, Mastodon gGmbH, or Mastodon’s products.</li>
          <li>Do not use the Mastodon marks in connection with any illegal activity.</li>
          <li>You may use the Mastodon word mark in referential phrases such as &quot;for&quot;, &quot;for use with&quot;, or &quot;compatible with&quot;.</li>
          <li>You may use the Mastodon marks when embedding or otherwise displaying user generated content published using the Mastodon software.</li>
          <li>Do not change or modify the Mastodon marks.</li>
          <li>Any all use of the Mastodon marks, and any goodwill accrued as a result of that use, belongs entirely to, and shall inure for the benefit of, Mastodon gGmbH.</li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Server guidelines</h2>
        <p className="b1 mb-4">If you run your own Mastodon server using the Mastodon software, including modified Mastodon software on the condition that the modifications are limited to switching on or off features already included in the software, minor tweaks in visual appearance, translations into other languages, and bug fixes:</p>

        <ul className="space-y-4 list-disc pl-5 b1">
          <li>You may not use the Mastodon word mark, or any similar mark, in your domain name, unless you have written permission from Mastodon gGmbH.</li>
          <li>As long as you abide by the terms and conditions of this agreement, you may use the Mastodon marks included in the Mastodon server software for the purposes of running the server.</li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Open source project guidelines</h2>
        <p className="b1 mb-4">If you choose to build on or modify Mastodon&apos;s open-source code, beyond modifications limited to switching on or off features already included in the software, minor tweaks in visual appearance, translations into other languages, and bug fixes:</p>

        <ul className="space-y-4 list-disc pl-5 b1">
          <li>You must choose your own branding, logos, and trademarks that denote your unique identity so as to clearly signal to users that there is no affiliation with or endorsement by Mastodon gGmbH.</li>
          <li>You may use word marks, but not our logos, in truthful statements that describe the relationship between your software and ours, for example &quot;this software is derived from the source code of the Mastodon software&quot;.</li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Social media guidelines</h2>
        <p className="b1 mb-4">The name and handle of your social media account and any and all pages cannot begin with a Mastodon word mark, or a similar mark (e.g. &quot;mastodoon&quot;, &quot;mast0don&quot;, &quot;mstdn&quot;). In addition, Mastodon logos cannot be used in a way that might suggest affiliation with or endorsement by Mastodon.</p>
      </BasicPage>

      <Head>
        <title>Trademark Policy - Mastodon</title>
        <meta
          property="og:title"
          content="Trademark Policy of Mastodon"
        />
      </Head>
    </div>
  </Layout>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Trademark
