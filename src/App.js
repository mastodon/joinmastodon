import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import githubLogo from './assets/github-logo.svg';
import mastodonLogo from './assets/mastodon-logo.svg';
import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

const App = () => (
  <Router>
    <div className='app'>
      <div className='navbar'>
        <div className='container'>
          <div className='brand'>Mastodon</div>

          <ul>
            <li><a href='#'>Get started</a></li>
            <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
            <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
            <li>
              <a className='github' href='https://github.com/tootsuite/mastodon'>
                Fork on Github <img className='github-logo' src={githubLogo} alt='Github Logo'/>
              </a>
          </li>
          </ul>
        </div>
      </div>

      <div className='hero'>
        <div className='hero__container'>
          <div className='hero__floats' />

          <img src={screenshotFull} draggable={false} className='hero__full' alt='' />
          <img src={screenshotMobile} draggable={false} className='hero__mobile' alt='' />
        </div>
      </div>

      <div className='logo'><img src={mastodonLogo} alt='Mastodon logo' /></div>

      <div className='intro container'>
        <h1><strong>Mastodon</strong> is a federated social network</h1>
        <p>Free, open-source and decentralized, Mastodon gives back the power to build communities to the people.</p>
        <a href='#' className='btn'>Get started</a>
      </div>
    </div>
  </Router>
);

export default App;
