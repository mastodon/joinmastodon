import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import githubLogo from './assets/github-logo.svg';
import mastodonLogo from './assets/mastodon-logo.svg';
import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

import elefriend from './assets/fluffy-elephant-friend.png';
import tootScreenshot from './assets/toot-screenshot.png';

const App = () => (
  <Router>
    <div className='app'>
      <div className='navbar'>
        <ul className='left'>
          <li>
            <a className='active' href='https://github.com/tootsuite/mastodon'>
              <img className='link-logo before' src={mastodonLogo} alt='Mastodon Logo'/> Mastodon
            </a>
          </li>
        </ul>

        <ul className='right'>
          <li><a href='https://discourse.joinmastodon.org'>Community support</a></li>
          <li><a href='https://instances.mastodon.xyz'>Find an instance</a></li>
          <li><a href='https://github.com/tootsuite/documentation'>Documentation</a></li>
          <li><a href='https://www.stickermule.com/marketplace/18010-mastodon-fluffy-elephant-friend'>Merch</a></li>
          <li>
            <a href='https://github.com/tootsuite/mastodon'>
              Fork on Github <img className='link-logo after' src={githubLogo} alt='Github Logo'/>
            </a>
          </li>
        </ul>
      </div>

      <div className='intro'>
        <div className='text'>
          <h1>Giving social networking back to <strong>you</strong></h1>
          <p>With thousands of interconnected communities to choose from, and the tools to make your own, Mastodon is the world's largest free, open-source, decentralized micro-blogging network.</p>
          <a href='https://instances.mastodon.xyz' className='cta button'>Get started</a>
        </div>

        <div className='hero'>
          <img className='desktop' src={screenshotFull} draggable={false} alt='Screenshot of Mastodon on desktop'/>
          <img className='mobile' src={screenshotMobile} draggable={false} alt='Screenshot of Mastodon on desktop'/>
          <img className='logo' src={mastodonLogo} draggable={false} alt='Mastodon logo' />
        </div>
      </div>

      <div className='feature container'>
        <img className='right visual' src={elefriend} alt='Mastodon mascot'/>
        <div className='left text'>
          <h2>You're a person, not a product</h2>
          <p>Mastodon communities, or instances, are independently owned, hosted, and moderated. Instances can seamlessly connect to each other, but nobody can own or control them all. That means no big corporation owns your data, and you aren't being spied on or sold to advertisers.</p>
        </div>
      </div>

      <div className='feature container'>
        <img className='left visual' src={tootScreenshot} alt='Screenshot of toot interface'/>
        <div className='right text'>
          <h2>Built for real conversation</h2>
          <p>With 500 characters per post, you get plenty of space to go deep into topics, instead of just making surface-level quips. Built-in support for content warnings lets you share sensitive discussions and media with only those who want to see them.</p>
        </div>
      </div>

      <div className='feature container'>
        <div className='right visual'/>
        <div className='left text'>
          <h2>Find your perfect place</h2>
          <p>Pick an instance that suits you, out of diverse options for all sorts of interests, needs, and languages. If you don't like how yours is being run, you can quickly and easily find another without losing any of the friends you've made. You can even make a new instance for the public, your organisation, your friends, or even just yourself.</p>
        </div>
      </div>

      <div className='feature container'>
        <div className='left visual'/>
        <div className='right text'>
          <h2>Always within reach</h2>
          <p>With multiple apps available for iOS, Android, and every platform you can think of, Mastodon is easy to use everywhere you go, and just like with instances, anyone can develop an app.</p>
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
