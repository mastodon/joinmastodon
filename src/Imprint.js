import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

// This page does not require translations

const Imprint = () => (
  <div className='sponsorship imprint' id='imprint'>
    <div className='intro'>
      <Navigation />

      <div className='text'>
        <h2>Imprint</h2>
        <p className='lead'>For the pages under joinmastodon.org and its subdomains:</p>
      </div>
    </div>

    <div className='container' style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
      <p style={{ flex: '0 0 auto' }}>
        Mastodon gGmbH
        <br />
        Mühlenstraße 8a
        <br />
        14167 Berlin
        <br />
        Germany
        <br />
        E-mail: hello@joinmastodon.org
        <br />
        Tel: (+49) 61312766257
        <br />
        VAT ID: DE316095554
      </p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Imprint - Mastodon</title>
    </Helmet>
  </div>
);

export default Imprint;
