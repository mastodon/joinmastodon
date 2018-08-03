import React from 'react';

import Navigation from './Navigation';

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
        Eugen Rochko
        <br />
        c/o Postflex #92
        <br />
        Helmers Kamp 74
        <br />
        48249 Dülmen
        <br />
        Germany
        <br />
        E-mail: hello@joinmastodon.org
        <br />
        VAT ID: DE316095554
      </p>
    </div>
  </div>
);

export default Imprint;
