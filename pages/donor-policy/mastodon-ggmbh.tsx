import Hero from "../../components/Hero"
import Layout from "../../components/Layout"
import heroImage from "../../public/illustrations/apps_hero_desktop.png"
import PolicyPage from "../../components/PolicyPage";
import Head from "next/head";

const MastodonGGmbHDonorPolicy = () => (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero desktopImage={heroImage} mobileImage={heroImage}>
          <h1 className="h2 mb-4">Mastodon gGmbH Donor Policy</h1>
          <p className="sh1">Last updated September 16, 2024</p>
        </Hero>
      </div>

      <PolicyPage>
        <section>
          <p className="mt-4">
            Mastodon’s vision is to reimagine the social media landscape, replacing centralised platforms with
            robust social networking software that is inherently decentralised, open source and fully interoperable,
            with a commitment to privacy. 
          </p>
          <p className="mt-4">
            This work is made possible, in part, by donations made by individuals and organisations from around
            the world. Through this policy, Mastodon defines the basic guidelines governing acceptance and acknowledgment
            of gifts and grants to further its mission.
          </p>
          <p className="mt-4">
            Any funding towards Mastodon gGmbH must be consistent with the organisation’s stated mission and purposes,
            and which prioritises its independence.
          </p>
          <p className="mt-4">
            To ensure this, below is an outline of the criteria to reject any form of support that is counter to Mastodon’s
            values and would place our mission, team, integrity and movement at large at risk:
          </p>
          <ul className="mt-4 list-disc ml-8">
            <li className="mt-2">Arms and weapons manufacturers and military contractors</li>
            <li className="mt-2">Any entities engaging in criminal activities and human rights violations</li>
            <li className="mt-2">Any entity that puts the organisation’s team, independence and communities at risk</li>
            <li className="mt-2">
              An entity that puts the organisation’s brand at risk, including but not exclusively, such as adult websites,
              affiliate and review websites, online betting and gambling, SEO services, social media buying and other
            </li>
            <li className="mt-2">Any other statements or actions that causes the organisation to question the advisability of accepting a contribution</li>
          </ul>
          <p className="mt-4">
            Mastodon gGmbH takes its funding sources very seriously. Funding is essential to adequately support its growth,
            but will not be allowed to compromise its values. Decisions are taken after examination of each funder and funding
            source. If a donor does not meet the above criteria, they will be refunded within 30 days of their donation via the
            original payment method where possible.
          </p>
        </section>
        <section  className="mt-8">
          <h4 className="h4 mb-6">Tax Consequences</h4>
          <p>
            Mastodon gGmbH is unable to offer tax advice to would-be donors. Donors who are concerned about tax-deductibility of
            donations should consult with their own tax advisers. The organisation was officially incorporated as a gGmbH (a German
            form of non-profit LLC) in 2021.
          </p>
        </section>
        <section className="mt-8">
          <h4 className="h4 mb-6">Accepting Gifts-in-Kind</h4>
          <p>
            Gifts-in-kind may only be accepted by the Executive Director or by an officer delegated in writing by the Executive
            Director with the authority to accept such a gift.
          </p>
        </section>

        <Head>
          <title>Mastodon gGmbH Donor Policy - Mastodon</title>
          <meta
            property="og:title"
            content="Mastodon gGmbH Donor Policy"
          />
        </Head>
      </PolicyPage>
    </Layout>
);

export default MastodonGGmbHDonorPolicy;
