import React from 'react';
import { Link } from 'react-router-dom';

import githubLogo from './assets/github-logo.svg';
import mastodonLogo from './assets/logo_full.svg';

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
      <li className='optional-link'><a href='https://discourse.joinmastodon.org'>Support</a></li>
      <li className='optional-link-2'><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
      <li><Link to='/sponsors'>Sponsors</Link></li>
      <li>
        <a href='https://github.com/tootsuite/mastodon'>
          Source code <img className='link-logo after' src={githubLogo} alt='Github Logo'/>
        </a>
      </li>
    </ul>
  </div>
);

export default Navigation;
