import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className='app'>
      <div className='navbar'>
        <div className='container'>
          <ul>
            <li><a href='#'>Get started</a></li>
            <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
            <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
            <li><a className='github' href='https://github.com/tootsuite/mastodon' title='Fork on GitHub'><span /></a></li>
          </ul>
        </div>
      </div>

      <div className='hero'>
        <div className='hero__container'>
          <img src='/screenshot_full.png' draggable={false} className='hero__full' />
          <img src='/screenshot_mobile.png' draggable={false} className='hero__mobile' />
        </div>
      </div>

      <img src='/logo.svg' className='logo' />

      <div className='intro container'>
        <h1><strong>Mastodon</strong> is a federated social network</h1>
      </div>
    </div>
  </Router>
);

export default App;
