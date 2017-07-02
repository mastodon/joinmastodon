import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import githubLogo from './assets/github-logo.svg';
import mastodonLogo from './assets/mastodon-logo.svg';

import wiredLogo from './assets/wired-logo.svg';
import productHuntLogo from './assets/product-hunt-logo-horizontal-black.png';
import theVergeLogo from './assets/the-verge-logo.svg';
import motherboardLogo from './assets/motherboard-logo.svg';

import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

import elefriend from './assets/elephant-friend.png';
import tootScreenshot from './assets/toot-screenshot.png';

import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';

const App = () => (
  <Router>
    <div className='app'>
      <div className='intro'>
        <div className='navbar container'>
          <ul className='left'>
            <li>
              <a className='brand' href='https://github.com/tootsuite/mastodon'>
                <img className='link-logo before' src={mastodonLogo} alt='Mastodon Logo'/> Mastodon
              </a>
            </li>
          </ul>

          <ul className='right'>
            <li><a href='https://discourse.joinmastodon.org'>Support</a></li>
            <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
            <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
            <li>
              <a href='https://github.com/tootsuite/mastodon'>
                Source code <img className='link-logo after' src={githubLogo} alt='Github Logo'/>
              </a>
            </li>
          </ul>
        </div>

        <div className='text'>
          <h1>Giving social networking back to <strong>you</strong></h1>
          <p>With thousands of interconnected communities to choose from, and the tools to make your own, Mastodon is the world&rsquo;s largest free, open-source, decentralized microblogging network.</p>

          <a href='https://instances.mastodon.xyz' className='cta button'>Get started</a>
          <a href='#' className='cta button alt'>How it works</a>
        </div>

        <div className='hero'>
          <div className='hero__floats'>
            <img src={cloud2} className='float-1' alt='Cloud' />
            <img src={cloud4} className='float-2' alt='Cloud' />
            <img src={cloud3} className='float-3' alt='Cloud' />
          </div>

          <img className='desktop' src={screenshotFull} alt='Screenshot of Mastodon on desktop'/>
          <img className='mobile' src={screenshotMobile} alt='Screenshot of Mastodon on desktop'/>
        </div>
      </div>

      <div className='as-seen-on'>
        <div className='container'>
          <h3>As seen on</h3>

          <div className='logo-grid'>
            <a href='https://motherboard.vice.com/en_us/article/mastodon-is-like-twitter-without-nazis-so-why-are-we-not-using-it' className='logo-motherboard'><img src={motherboardLogo} alt='Motherboard' /></a>
            <a href='https://www.producthunt.com/posts/mastodon' className='logo-product-hunt'><img src={productHuntLogo} alt='Product Hunt' /></a>
            <a href='http://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone' className='logo-the-verge'><img src={theVergeLogo} alt='The Verge' /></a>
            <a href='https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/' className='logo-wired'><img src={wiredLogo} alt='Wired' /></a>
          </div>
        </div>
      </div>

      <div className='feature container'>
        <div className='right visual'/>
        <div className='left text'>
          <h2>Find your perfect place</h2>
          <p>Mastodon is a federated network. Pick an instance that suits you, out of a diverse pool for all sorts of interests, needs, and languages, run by independent people and organizations. Regardless of which one you choose, you can always interact with everyone else.</p>
        </div>
      </div>

      <div className='feature container'>
        <div className='left visual'/>
        <div className='right text'>
          <h2>Built for real conversation</h2>
          <p>With 500 characters per post, you get plenty of space to go deep into topics, instead of just making surface-level quips. Built-in support for content and spoiler warnings lets you share sensitive discussions and media with only those who want to see them.</p>
        </div>
      </div>

      <div className='feature container'>
        <div className='right visual'/>
        <div className='left text'>
          <h2>You&rsquo;re a person, not a product</h2>
          <p>Mastodon is free, open source software. The development is crowdfunded. All instances are independently owned, hosted, and moderated. There is no monopoly by a single commercial company, no ads, no tracking.</p>
        </div>
      </div>

      <div className='feature container'>
        <div className='left visual'/>
        <div className='right text'>
          <h2>Always within reach</h2>
          <p>With multiple apps available for iOS, Android, and every platform you can think of, Mastodon is easy to use everywhere you go. An easy to use and open API ensures a rich ecosystem of 3rd party apps.</p>
        </div>
      </div>

      <div className='bottom-cta'>
        <a href='https://instances.mastodon.xyz' className='cta button'>Find an instance</a>
        <br/>
        or <a href='https://github.com/tootsuite/mastodon' className='cta secondary'>start your own</a>
      </div>
    </div>
  </Router>
);

export default App;
