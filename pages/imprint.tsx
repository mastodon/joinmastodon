import React from "react"
import Helmet from "react-helmet"

import Navigation from "./Navigation"
import BottomNavigation from "./BottomNavigation"

// This page does not require translations

const Imprint = () => (
  <div className="browse-apps covenant">
    <Navigation />

    <div className="container">
      <h1>Contact us / Impressum</h1>
      <p className="lead">
        For the pages under joinmastodon.org and its subdomains:
      </p>
      <hr />

      <p>
        Mastodon gGmbH
        <br />
        Mühlenstraße 8a
        <br />
        14167 Berlin
        <br />
        Germany
      </p>
      <p>
        E-Mail-Adresse:{" "}
        <a href="mailto:hello@joinmastodon.org">hello@joinmastodon.org</a>
      </p>
      <p>Vertretungsberechtigt: Eugen Rochko (Geschäftsführer)</p>
      <p>Umsatzsteuer Identifikationsnummer (USt-ID): DE344258260</p>
      <p>
        Handelsregister
        <br />
        Geführt bei: Amtsgericht Charlottenburg
        <br />
        Nummer: HRB 230086 B
      </p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Contact us / Impressum - Mastodon</title>
      <meta property="og:title" content="Contact us / Impressum" />
    </Helmet>
  </div>
)

export default Imprint
