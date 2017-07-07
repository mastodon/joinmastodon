import React from 'react';

const Credits = () => (
  <div className='credits' id='credits'>
    <div className='container row optional-row'>
      <div className='funding'>
        <h3>Sponsors</h3>
        <p>Mastodon is free, open-source software. There is no advertising, monetizing, or venture capital. The development is crowdfunded.</p>
        <a href='https://patreon.com/mastodon' className='cta button'>Support on Patreon</a> <a href='https://github.com/tootsuite/documentation/blob/master/Contributing-to-Mastodon/Sponsors.md' className='cta button alt'>View sponsors</a>
      </div>

      <div className='branding'>
        <h3>Branding</h3>
        <p>Download logos, icons, and elephants</p>
        <a href='#' className='cta button alt'>Get press kit</a>
      </div>
    </div>
  </div>
);

export default Credits;
