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
            <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/mastodon/mastodon'><FormattedMessage id='nav.code' defaultMessage='Code' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://docs.joinmastodon.org'><FormattedMessage id='nav.docs' defaultMessage='Documentation' /></a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/mastodon/mastodon/discussions'><FormattedMessage id='nav.support' defaultMessage='Support' /></a></li>
          </ul>
        </div>

        <div>
          <h4><FormattedMessage id='nav.company' defaultMessage='Company' /></h4>

          <ul>
            <li><Link to='/imprint'><FormattedMessage id='contact_us' defaultMessage='Contact us' /></Link></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://blog.joinmastodon.org/'><FormattedMessage id='nav.blog' defaultMessage='Blog' /></a></li>
            <li><a href='/press-kit.zip'><FormattedMessage id='credits.press_kit' defaultMessage='Press kit' /></a></li>
            <li><Link to='/privacy-policy'><FormattedMessage id='privacy_policy' defaultMessage='Privacy policy' /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BottomNavigation;
