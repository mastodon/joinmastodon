import BasicPage from "../components/BasicPage"
import Head from "next/head"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"
import Layout from "../components/Layout"
import LinkButton from "../components/LinkButton"
import Link from "next/link"
import Arrow from "../public/ui/arrow-right.svg?inline"
import careers from "../data/careers"

/** This page does not require translations */
const Careers = () => (
  <Layout>
    <div dir="ltr" className="[unicode-bidi:plaintext]">
      <Hero homepage>
        <div className="pt-6 b2 !font-bold uppercase text-nightshade-100">Careers</div>

        <h1 className="h1 mb-4">Join our team</h1>

        <p className="sh1 mb-11 max-w-[50ch]">We&apos;re building open source, decentralized social media that gives people back control over their data and their reach.</p>

        <div className="flex justify-center gap-12">
          <LinkButton size="large" href="/about">
            Learn about the company
          </LinkButton>

          <LinkButton size="large" href="#open-positions" light borderless>
            See open positions
          </LinkButton>
        </div>
      </Hero>

      <BasicPage>
        <h2 id="open-positions" className="h3 mb-6">Open positions</h2>

        {careers.length === 0 && (
          <div className="b2 flex justify-center rounded bg-gray-5 p-4 text-gray-1 md:p-8 md:py-20">
            <p className="max-w-[48ch] text-center">No positions available right now.</p>
          </div>
        )}

        {careers.length > 0 && (
          <ul>
            {careers.map(position => (
              <li key={position.title} className="border-b last:border-0 border-gray-3 flex py-4">
                <div className="flex-1 b1 !font-semibold">
                  {position.title}
                </div>

                <div className="flex-shrink-0 b2">
                  <Link href="#">
                    <a className="font-semibold text-blurple-600 hocus:underline flex items-center gap-2">
                      {position.location}
                      <Arrow className="h-[1em]" />
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </BasicPage>

      <Head>
        <title>Careers - Mastodon</title>
        <meta
          property="og:title"
          content="Careers at Mastodon"
        />
        <meta
          property="og:description"
          content="Join our team."
        />
        <meta
          property="description"
          content="Join our team."
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
export default Careers
