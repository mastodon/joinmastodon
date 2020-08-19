import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import mastodonLogo from './assets/logo_transparent_white.svg';

const BottomNavigation = () => (
  <div className='footer'>
    <div className='container'>
      <div className='footer-grid'>
        <div>
          <img src={mastodonLogo} alt='Mastodon' className='footer-grid__brand' />
        </div>

        <div>
          <h4><FormattedMessage id='nav.product' defaultMessage='Product' /></h4>

          <ul>
            <li><Link to='/communities'><FormattedMessage id='home.get_started' defaultMessage='Get started' /></Link></li>
            <li><Link to='/apps'><FormattedMessage id='nav.apps' defaultMessage='Apps' /></Link></li>
            <li><Link to='/sponsors'><FormattedMessage id='nav.sponsors' defaultMessage='Sponsors' /></Link></li>
          </ul>
        </div>

        <div>
          <h4><FormattedMessage id='nav.resources' defaultMessage='Resources' /></h4>

          <ul>
            <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/tootsuite/mastodon'><FormattedMessage id='nav.code' defaultMessage='Code' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://docs.joinmastodon.org'><FormattedMessage id='nav.docs' defaultMessage='Documentation' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://discourse.joinmastodon.org'><FormattedMessage id='nav.support' defaultMessage='Support' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://www.designbyhumans.com/shop/mastodon/'><FormattedMessage id='nav.merch' defaultMessage='Merch' /></a></li>
          </ul>
        </div>

        <div>
          <h4><FormattedMessage id='nav.company' defaultMessage='Company' /></h4>

          <ul>
            <li><a target='_blank' rel='noopener noreferrer' href='https://blog.joinmastodon.org/'><FormattedMessage id='nav.blog' defaultMessage='Blog' /></a></li>
            <li><a href='/press-kit.zip'><FormattedMessage id='credits.get_press_kit' defaultMessage='Get press kit' /></a></li>
            <li><Link to='/imprint'><FormattedMessage id='imprint' defaultMessage='Legal notice' /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BottomNavigation;
