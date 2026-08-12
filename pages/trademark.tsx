import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import { withDefaultStaticProps } from "../utils/defaultStaticProps"
import Layout from "../components/Layout"

/** This page does not require translations */
const Trademark = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero homepage>
        <h1 className="h2 mb-8 pt-16 text-center">Trade Mark Policy</h1>
        <p className="sh1 text-center">Last updated August 12, 2026</p>
      </Hero>

      <BasicPage>
        <p className="b1 mb-4">
          The Mastodon name and logos are trade marks of Mastodon GmbH. As such,
          their use is restricted and protected by intellectual property law.
          While the software we create is available under a free and open source
          software license, the copyright license does not include an implied
          right or license to use our trade marks.
        </p>
        <p className="b1 mb-4">
          Note that this policy grants additional rights (in certain
          circumstances), and does not remove any rights that you have in law.
          This policy applies only to uses of the Mastodon trade marks which are
          restricted or reserved to Mastodon GmbH (the trade marks owner), by
          law.
        </p>
        <p className="b1 mb-4">
          The role of trade marks is to prevent the exploitation of the good
          name and reputation of Mastodon by other people and organizations, and
          to provide assurance about the quality of the products and services
          associated with it.
        </p>
        <p className="b1 mb-4">
          To use our trade marks beyond what is considered &quot;fair&quot; or
          &quot;nominative&quot; use, you must follow these guidelines. By
          making use of our trade marks, you agree to abide by the following
          terms and conditions. You further agree that any dispute arising in
          connection with your use of our trade marks or under these terms and
          conditions shall be under the exclusive jurisdiction of the state and
          federal courts of New York in the United States of America and that
          the state and federal courts of New York shall have personal
          jurisdiction over you for the purposes of adjudicating any dispute
          concerning the use of our trade marks or these terms and conditions.
        </p>
        <p className="b1 mb-4">
          You agree to defend and indemnify Mastodon GmbH from and against any
          and all claims and losses brought by a third party in connection with
          your use of the Mastodon trade marks.
        </p>
        <p className="b1 mb-4">
          To request the use of the Mastodon name and logos in a way not covered
          in these guidelines, or to report violations, please contact us at 
          <a
            href="mailto:trademark@joinmastodon.org"
            className="text-blurple-500 hover:underline"
          >
            trademark@joinmastodon.org
          </a>
          . In the event that we do not approve such use of the Mastodon name
          and logos within ten (10) business days, your request shall be deemed
          denied.
        </p>

        <h2 className="h5 mt-12 mb-6">General guidelines</h2>
        <p className="b1 mb-4">In general:</p>

        <ul className="b1 list-disc space-y-4 pl-5">
          <li>
            Only use the Mastodon marks to accurately identify those goods or
            services that are built using the Mastodon software.
          </li>
          <li>
            Do not use the Mastodon marks in any way that could mistakenly imply
            that Mastodon GmbH has reviewed, approved, or guaranteed your goods
            or services.
          </li>
          <li>
            Do not use or register, in whole or in part, the Mastodon marks as
            part of your own or any other trade mark, service mark, company
            name, trade name, product name, or service name.
          </li>
          <li>
            Do not use the Mastodon marks in a manner that disparages or defames
            the marks, Mastodon GmbH, or Mastodon’s products.
          </li>
          <li>
            Do not use the Mastodon marks in connection with any illegal
            activity.
          </li>
          <li>
            You may use the Mastodon word mark in referential phrases such as
            &quot;for&quot;, &quot;for use with&quot;, or &quot;compatible
            with&quot;.
          </li>
          <li>
            You may use the Mastodon marks when embedding or otherwise
            displaying user generated content published using the Mastodon
            software.
          </li>
          <li>Do not change or modify the Mastodon marks.</li>
          <li>
            Any all use of the Mastodon marks, and any goodwill accrued as a
            result of that use, belongs entirely to, and shall inure for the
            benefit of, Mastodon GmbH.
          </li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Server guidelines</h2>
        <p className="b1 mb-4">
          If you run your own Mastodon server using the Mastodon software,
          including modified Mastodon software on the condition that the
          modifications are limited to switching on or off features already
          included in the software, minor tweaks in visual appearance,
          translations into other languages, and bug fixes:
        </p>

        <ul className="b1 list-disc space-y-4 pl-5">
          <li>
            You may not use the Mastodon word mark, or any similar mark, in the
            top or second-level domain name. The top and second-level domain
            names form the end of the full domain name, e.g.
            &quot;example.com&quot;. Use of the Mastodon word mark, or any
            similar mark, as a third (or deeper) level in the domain name, or as
            an identifier elsewhere in the URL for the server is permitted, as
            long as the use is not part of the top or second-level domain name.
          </li>
          <li>
            If your domain name uses the Mastodon word mark, or any similar
            mark, in a permissible way, as described by this policy, you are
            required to include a disclaimer (in a footer or otherwise
            user-visible location) which states that &quot;This [server/site] is
            not affiliated with or endorsed by Mastodon GmbH or Mastodon
            Inc.&quot;
          </li>
          <li>
            A special exception to the rule regarding the use of the Mastodon
            word mark, or any similar mark, in the domain name applies to
            servers which existed and were using the Mastodon word mark, or a
            similar mark, before May 13, 2026. Those servers are permitted to
            continue using their existing domain name, as long as they also
            properly include the disclaimer specified in the previous point of
            this policy.
          </li>
          <li>
            Any other use of the Mastodon word mark, or any similar mark, in
            your domain name that is not covered by this policy is not permitted
            unless you have express written permission from Mastodon GmbH. If
            you are not sure if your usage is appropriate, please reach out to
            us directly at{" "}
            <a href="mailto:legal@joinmastodon.org">legal@joinmastodon.org</a>.
          </li>
          <li>
            Apart from the previously specified policy relating to domain names
            and URLs, you may not use the Mastodon marks, or any similar marks,
            in a server, service, or product name or branding without our
            express written permission. To request permission from Mastodon
            GmbH, email us at
            <a href="mailto:legal@joinmastodon.org">legal@joinmastodon.org</a>.
            We will consider requests on a case-by-case basis.
          </li>
          <li>
            Mastodon reserves the right to revoke permission to use the Mastodon
            marks at any time and for any reason.
          </li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Open source project guidelines</h2>
        <p className="b1 mb-4">
          If you choose to build on or modify Mastodon&apos;s open-source code,
          beyond modifications limited to switching on or off features already
          included in the software, minor tweaks in visual appearance,
          translations into other languages, and bug fixes:
        </p>

        <ul className="b1 list-disc space-y-4 pl-5">
          <li>
            You must choose your own branding, logos, and trade marks that
            denote your unique identity so as to clearly signal to users that
            there is no affiliation with or endorsement by Mastodon GmbH.
          </li>
          <li>
            You may use word marks, but not our logos, in truthful statements
            that describe the relationship between your software and ours, for
            example &quot;this software is derived from the source code of the
            Mastodon software&quot;.
          </li>
        </ul>

        <h2 className="h5 mt-12 mb-6">Social media guidelines</h2>
        <p className="b1 mb-4">
          The name and handle of your social media account and any and all pages
          cannot begin with a Mastodon word mark, or a similar mark (e.g.
          &quot;mastodoon&quot;, &quot;mast0don&quot;, &quot;mstdn&quot;). In
          addition, Mastodon logos cannot be used in a way that might suggest
          affiliation with or endorsement by Mastodon.
        </p>
      </BasicPage>

      <Head>
        <title>Trademark Policy - Mastodon</title>
        <meta property="og:title" content="Trademark Policy of Mastodon" />
      </Head>
    </div>
  </Layout>
)
export const getStaticProps = withDefaultStaticProps()
export default Trademark
