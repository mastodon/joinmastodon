import Head from "next/head"
import BasicPage from "../components/BasicPage"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"

/** This page does not require translations */
const Impressum = () => (
  <div dir="ltr" className="[unicode-bidi:plaintext]">
    <Hero>
      <h1 className="h1 mb-4">Impressum</h1>
      <p className="sh1 mb-8">joinmastodon.org</p>
    </Hero>

    <BasicPage>
      <div className="[unicode-bidi:plaintext]" dir="ltr">
        <dl>
          <div className="mb-4">
            <dt className="font-bold">Firmnenname:</dt>
            <dd>Mastodon gGmbH</dd>
          </div>

          <div className="mb-4">
            <dt className="font-bold">Anschrift:</dt>
            <dd>
              <address className="not-italic">
                Mühlenstraße 8a
                <br />
                14167 Berlin
                <br />
                Germany
              </address>
            </dd>
          </div>

          <div className="mb-4">
            <dt className="font-bold">Handelsregister:</dt>
            <dd>HRB 230086 B (Amtsgericht Charlottenburg)</dd>
          </div>

          <div className="mb-4">
            <dt className="font-bold">Kontakt:</dt>
            <dd><a href="mailto:hello@joinmastodon.org">hello@joinmastodon.org</a></dd>
          </div>

          <div className="mb-4">
            <dt className="font-bold">Umsatzsteuer Identifikationsnummer (USt-ID):</dt>
            <dd>DE344258260</dd>
          </div>
        </dl>

        <Head>
          <title>About us - Mastodon</title>
          <meta property="og:title" content="About us - Mastodon" />
        </Head>
      </div>
    </BasicPage>
  </div>
)
export async function getStaticProps(ctx) {
  return {
    props: { intlMessages: await loadIntlMessages(ctx) },
  }
}
export default Impressum
