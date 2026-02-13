import Image from "next/legacy/image"

import Link from "next/link"
import Head from "next/head"

import Hero from "../../components/Hero"
import Layout from "../../components/Layout"
import heroImage from "../../public/illustrations/apps_hero_desktop.png"
import deFlagIcon from "../../public/german_flag_icon_round.svg"
import PolicyPage from "../../components/PolicyPage"

const MastodonGGmbHDonorPolicy = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero desktopImage={heroImage} mobileImage={heroImage}>
        <h1 lang="en" className="h2 mb-4">
          Mastodon GmbH Donor Policy
        </h1>
        <p lang="en" className="sh1">
          Last updated February 13, 2026
        </p>
      </Hero>
    </div>

    <PolicyPage>
      <section lang="en">
        <p className="mt-4 flex justify-end pb-2">
          <Link
            className="flex content-center gap-x-1"
            href="/donor-policy/de/mastodon-ggmbh"
          >
            <span className="hover:text-blurple-600">German translation</span>
            <Image
              src={deFlagIcon}
              className="aspect-square"
              width="20"
              height="20"
              alt="German translation"
            />
          </Link>
        </p>
        <p className="mt-4">
          Mastodon’s vision is to reimagine the social media landscape, one that
          is inclusive, diverse, user driven and supports dialogue. Our mission
          is to replace centralised platforms with robust social networking
          software that is inherently decentralised, open source and fully
          interoperable, with a commitment to privacy.
        </p>
        <p className="mt-4">
          This work is made possible, in part, by donations made by individuals
          and organisations from around the world. Through this policy, Mastodon
          defines the basic guidelines governing acceptance and acknowledgment
          of gifts and grants to further its mission.
        </p>
        <p className="mt-4">
          Any funding towards Mastodon GmbH must be consistent with the
          organisation’s stated mission and purposes which prioritises its
          independence.
        </p>
        <p className="mt-4">
          To ensure this, below is an outline of the criteria to reject any form
          of support that is counter to Mastodon’s values and would place our
          mission, team, integrity and movement at large at risk:
        </p>
        <ul className="mt-4 list-disc ml-8">
          <li className="mt-2">
            Arms and weapons manufacturers and military contractors
          </li>
          <li className="mt-2">
            Any entities engaging in criminal activities and human rights
            violations
          </li>
          <li className="mt-2">
            Any entity that puts the organisation’s team, independence and
            communities at risk
          </li>
          <li className="mt-2">
            An entity that puts the organisation’s brand at risk, including but
            not exclusively, such as adult websites, affiliate and review
            websites, online betting and gambling, SEO services, social media
            buying and other
          </li>
          <li className="mt-2">
            Any other statements or actions that causes the organisation to
            question the advisability of accepting a contribution
          </li>
        </ul>
        <p className="mt-4">
          Mastodon GmbH takes compliance and origin of funding sources very
          seriously. Funding is essential to adequately support its growth, but
          will not be allowed to compromise its values. Decisions are taken
          after examination of each funder and funding source. If a donor does
          not meet the above criteria, they will be refunded within 30 days of
          their donation via the original payment method where possible.
        </p>
      </section>
      <section lang="en" className="mt-8">
        <h4 className="h4 mb-6">Tax Consequences</h4>
        <p>
          Mastodon GmbH is unable to offer tax advice to would-be donors.
          Donors who are concerned about tax-deductibility of donations should
          consult with their own tax advisers.
        </p>
      </section>
      <section lang="en" className="mt-8">
        <h4 className="h4 mb-6">Accepting Gifts-in-Kind</h4>
        <p>
          Gifts-in-kind may only be accepted by the Executive Director or by an
          officer delegated in writing by the Executive Director with the
          authority to accept such a gift.
        </p>
      </section>

      <Head>
        <title lang="en">Mastodon GmbH Donor Policy - Mastodon</title>
        <meta property="og:title" content="Mastodon GmbH Donor Policy" />
      </Head>
    </PolicyPage>
  </Layout>
)

export default MastodonGGmbHDonorPolicy
