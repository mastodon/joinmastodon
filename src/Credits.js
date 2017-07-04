import React from 'react';

const Credits = () => (
  <div className='credits' id='credits'>
    <div className='container row'>
      <div className='funding'>
        <h3>Sponsors</h3>
        <p>Mastodon is free, open-source software. There is no advertising, monetizing, or venture capital. The development is crowdfunded.</p>
        <a href='https://patreon.com/mastodon' className='cta button'>Support on Patreon</a> <a href='https://github.com/tootsuite/documentation/blob/master/Contributing-to-Mastodon/Sponsors.md' className='cta button alt'>View sponsors</a>
      </div>

      <div className='branding'>
        <h3>Branding</h3>
        <p>Download logos, icons, and elephants</p>
        <a href='#' className='cta button alt'>Download press kit</a>
      </div>
    </div>

    <div className='container row'>
      <div className='color-scheme color-1'>#282c37</div>
      <div className='color-scheme color-2'>#9baec8</div>
      <div className='color-scheme color-3'>#d9e1e8</div>
      <div className='color-scheme color-4'>#2b90d9</div>
    </div>
  </div>
);

export default Credits;
