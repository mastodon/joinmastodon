import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

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
            <li><a className='github' href='https://github.com/tootsuite/mastodon'>Fork on <span /></a></li>
          </ul>
        </div>
      </div>

      <div className='hero'>
        <div className='hero__container'>
          <div className='hero__floats' />

          <img src='/screenshot_full.png' draggable={false} className='hero__full' alt='' />
          <img src='/screenshot_mobile.png' draggable={false} className='hero__mobile' alt='' />
        </div>
      </div>

      <div className='logo'><img src='/logo.svg' alt='Mastodon' /></div>

      <div className='intro container'>
        <h1><strong>Mastodon</strong> is a federated social network</h1>
        <p>Free, open-source and decentralized, Mastodon gives back the power to build communities to the people.</p>
        <a href='#' className='btn'>Get started</a>
      </div>
    </div>
  </Router>
);

export default App;
