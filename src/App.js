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
          <ul className='left'>
            <li>
              <a className='active' href='https://github.com/tootsuite/mastodon'>
                <img className='link-logo before' src={mastodonLogo} alt='Mastodon Logo'/> Mastodon
              </a>
            </li>
          </ul>

          <ul className='right'>
            <li><a href='https://instances.mastodon.xyz'>Get started</a></li>
            <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
            <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
            <li>
              <a href='https://github.com/tootsuite/mastodon'>
                Fork on Github <img className='link-logo after' src={githubLogo} alt='Github Logo'/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='intro'>
        <h1>Giving social networking back to <strong>you</strong></h1>
        <p>Free, open-source and decentralized, <strong>Mastodon</strong> lets people build the communities that matter to them.</p>
        <a href='https://instances.mastodon.xyz' className='cta-button'>Get started</a>
      </div>

      <div className='hero'>
        <img className='desktop' src={screenshotFull} draggable={false} alt='Screenshot of Mastodon on desktop'/>
        <img className='mobile' src={screenshotMobile} draggable={false} alt='Screenshot of Mastodon on desktop'/>
        <img className='logo' src={mastodonLogo} draggable={false} alt='Mastodon logo' />
      </div>

      <div className='feature container'>
        <div className='text'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Luke, we're ready for takeoff. Good luck, Lando When we find Jabba the Hut and that bounty hunter, we'll contact you. I'll meet you at the rendezvous point on Tatooine. Princess, we'll find Han. I promise. Chewie, I'll be waiting for your signal. Take care, you two. May the Force be with you. Ow!</p>
        </div>
        <img className='visual' src={screenshotMobile} draggable={false} alt='' />
      </div>
      <div className='feature container'>
        <img className='visual' src={screenshotMobile} draggable={false} alt='' />
        <div className='text'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Luke, we're ready for takeoff. Good luck, Lando When we find Jabba the Hut and that bounty hunter, we'll contact you. I'll meet you at the rendezvous point on Tatooine. Princess, we'll find Han. I promise. Chewie, I'll be waiting for your signal. Take care, you two. May the Force be with you. Ow!</p>
        </div>
      </div>
      <div className='feature container'>
        <div className='text'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Luke, we're ready for takeoff. Good luck, Lando When we find Jabba the Hut and that bounty hunter, we'll contact you. I'll meet you at the rendezvous point on Tatooine. Princess, we'll find Han. I promise. Chewie, I'll be waiting for your signal. Take care, you two. May the Force be with you. Ow!</p>
        </div>
        <img className='visual' src={screenshotMobile} draggable={false} alt='' />
      </div>
      <div className='bottom-cta'>
        <a href='https://instances.mastodon.xyz' className='cta-button'>Get started</a>
      </div>
    </div>
  </Router>
);

export default App;
