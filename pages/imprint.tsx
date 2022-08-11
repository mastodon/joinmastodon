import Head from "next/head"
import BasicPage from "../components/BasicPage"
import Hero from "../components/Hero"
import loadIntlMessages from "../utils/loadIntlMessages"

/** This page does not require translations */
const Imprint = () => (
  <div dir="ltr" className="[unicode-bidi:plaintext]">
    <Hero>
      <h1 className="h1 mb-4">Contact us / Impressum</h1>
      <p className="sh1">
        For the pages under joinmastodon.org and its subdomains:
      </p>
    </Hero>
    <BasicPage>
      <div className="[unicode-bidi:plaintext]" dir="ltr">
        <address className="not-italic">
          <p>
            Mastodon gGmbH
            <br />
            Mühlenstraße 8a
            <br />
            14167 Berlin
            <br />
            Germany
          </p>
          <dl>
            <div>
              <dt className="inline after:content-[':_']">E-Mail-Adresse</dt>
              <dd className="inline">
                <a href="mailto:hello@joinmastodon.org">
                  hello@joinmastodon.org
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline after:content-[':_']">
                Vertretungsberechtigt
              </dt>
              <dd className="inline">Eugen Rochko (Geschäftsführer)</dd>
            </div>

            <div>
              <dt className="inline after:content-[':_']">
                Umsatzsteuer Identifikationsnummer (USt-ID)
              </dt>
              <dd className="inline">DE344258260</dd>
            </div>
          </dl>
          <p>Handelsregister</p>
          <dl>
            <div>
              <dt className="inline after:content-[':_']">Geführt bei</dt>
              <dd className="inline">Amtsgericht Charlottenburg</dd>
            </div>
            <div>
              <dt className="inline after:content-[':_']">Nummer</dt>
              <dd className="inline">HRB 230086 B</dd>
            </div>
          </dl>
        </address>

        <Head>
          <title>Contact us / Impressum - Mastodon</title>
          <meta property="og:title" content="Contact us / Impressum" />
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
export default Imprint
