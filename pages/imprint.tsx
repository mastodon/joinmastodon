import Head from "next/head"
import BasicPage from "../components/BasicPage"

// This page does not require translations
const Imprint = () => (
  <BasicPage>
    <div className="[unicode-bidi:plaintext]">
      <div className="py-8">
        <h1 className="h2">Contact us / Impressum</h1>
        <p className="sh1">
          For the pages under joinmastodon.org and its subdomains:
        </p>
        <hr className="my-4" />
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
      </div>

      <Head>
        <title>Contact us / Impressum - Mastodon</title>
        <meta property="og:title" content="Contact us / Impressum" />
      </Head>
    </div>
  </BasicPage>
)

export default Imprint
