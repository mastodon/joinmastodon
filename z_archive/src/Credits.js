import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import BottomNavigation from './BottomNavigation';

const Credits = () => (
  <div className='credits' id='credits'>
    <div className='container'>
      <div className='funding'>
        <p><FormattedMessage id='credits.support_text' defaultMessage='Mastodon is free, open-source software. There is no advertising, monetizing, or venture capital. Your donations directly support full-time development of the project.' /></p>
        <a href='https://patreon.com/mastodon' className='cta button'><FormattedMessage id='credits.support_on_patreon' defaultMessage='Support on Patreon' /></a> <Link to='/sponsors' className='cta button alt'><FormattedMessage id='credits.view_sponsors' defaultMessage='View sponsors' /></Link>
      </div>
    </div>

    <BottomNavigation />
  </div>
);

export default Credits;
