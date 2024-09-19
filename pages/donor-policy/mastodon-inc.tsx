import Hero from "../../components/Hero"
import Layout from "../../components/Layout"
import heroImage from "../../public/illustrations/apps_hero_desktop.png"
import PolicyPage from "../../components/PolicyPage";
import Head from "next/head";

const MastodonIncDonorPolicy = () => (
    <Layout>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero desktopImage={heroImage} mobileImage={heroImage}>
          <h1 className="h2 mb-4">Mastodon, Inc. Donor Policy</h1>
          <p className="sh1">Last updated September 16, 2024</p>
        </Hero>
      </div>

      <PolicyPage>
        <section>
          <p className="mt-4">
            Mastodon, Inc’s vision is to reimagine the social media landscape, replacing centralized platforms with robust
            social networking software that is inherently decentralized, open source, fully interoperable, with a commitment
            to privacy. 
          </p>
          <p className="mt-4">
            This work is made possible, in part, by donations made by individuals and organizations from around the world.
            Through this policy, Mastodon, Inc. defines the basic guidelines governing acceptance and acknowledgment of gifts
            and grants to further its mission.
          </p>
          <p className="mt-4">
            Any funding towards Mastodon, Inc. must be consistent with the organization’s stated mission and purposes, and
            which prioritizes its independence.
          </p>
          <p className="mt-4">
            To ensure this, below is an outline of the criteria to reject any form of support that is counter to Mastodon’s
            values and would place our mission, team, integrity and movement at large at risk:
          </p>
          <ul className="mt-4 list-disc ml-8">
            <li className="mt-2">Arms and weapons manufacturers and military contractors</li>
            <li className="mt-2">Any entities engaging in criminal activities and human rights violations</li>
            <li className="mt-2">Any entity that puts the organization’s team, independence and communities at risk</li>
            <li className="mt-2">Any other statements or actions that causes the organization to question the advisability of accepting a contribution</li>
          </ul>
          <p className="mt-4">
            Mastodon, Inc. takes its funding sources very seriously. Funding is essential to adequately support its growth,
            but will not be allowed to compromise its values. Decisions are taken after thorough examination of each funder
            and funding source. Such decisions may also be referred to the Board of Directors for further exploration and a
            final decision. If a donor does not meet the above criteria, they will be refunded within 30 days of their donation
            via the original payment method where possible.
          </p>
        </section>
        <section  className="mt-8">
          <h4 className="h4 mb-6">Tax Consequences</h4>
          <p>
            Mastodon, Inc. is unable to offer tax advice to would-be donors. Donors who are concerned about tax-deductibility of
            donations should consult with their own tax advisers. The organization is a 501(c)(3) tax-exempt organization operating
            under United States law as a Delaware corporation.
          </p>
        </section>
        <section className="mt-8">
          <h4 className="h4 mb-6">Accepting Gifts-in-Kind</h4>
          <p>
          Gifts-in-kind may only be accepted by the Executive Director or by an officer delegated in writing by the Executive Director
          with the authority to accept such a gift.
          </p>
        </section>

        <Head>
          <title>Mastodon, Inc. Donor Policy - Mastodon</title>
          <meta
            property="og:title"
            content="Mastodon, Inc. Donor Policy"
          />
        </Head>
      </PolicyPage>
    </Layout>
);

export default MastodonIncDonorPolicy;
