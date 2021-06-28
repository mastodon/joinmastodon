import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

// This page does not require translations

const Imprint = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Contact us / Impressum</h1>
      <p className='lead'>For the pages under joinmastodon.org and its subdomains:</p>
      <hr />
      <p>
        Mastodon gGmbH (HRB 230086 B)
        <br />
        Mühlenstraße 8a
        <br />
        14167 Berlin
        <br />
        Germany
        <br />
        E-mail: hello@joinmastodon.org
      </p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Contact us / Impressum - Mastodon</title>
    </Helmet>
  </div>
);

export default Imprint;
