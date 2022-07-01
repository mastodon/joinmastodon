import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LanguageSelectContainer from './LanguageSelectContainer';
import Dropdown from './Dropdown';

import mastodonLogo from './assets/logo_full.svg';

const options = [
  { value: 'https://blog.joinmastodon.org/', label: <FormattedMessage id='nav.blog' defaultMessage='Blog' />},
  { value: 'https://github.com/mastodon/mastodon/discussions', label: <FormattedMessage id='nav.support' defaultMessage='Support' /> },
  { value: 'https://docs.joinmastodon.org', label: <FormattedMessage id='nav.docs' defaultMessage='Documentation' /> },
];

const Navigation = () => (
  <div className='navbar container'>
    <ul className='left'>
      <li>
        <Link className='brand' to='/'>
          <img className='link-logo' src={mastodonLogo} alt='Mastodon'/>
        </Link>
      </li>
    </ul>

    <ul className='right'>
      <li><Link to='/apps'><FormattedMessage id='nav.apps' defaultMessage='Apps' /></Link></li>
      <li><Link to='/sponsors'><FormattedMessage id='nav.sponsors' defaultMessage='Sponsors' /></Link></li>
      <li><a href='https://github.com/mastodon/mastodon'><FormattedMessage id='nav.code' defaultMessage='Code' /></a></li>
      <li><Dropdown asLinks label={<FormattedMessage id='nav.resources' defaultMessage='Resources' />} options={options} /></li>
      <li><LanguageSelectContainer /></li>
    </ul>
  </div>
);

export default Navigation;
