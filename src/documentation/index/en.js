import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';

const Index = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>Documentation</h1>
    </div>
    <div className='article documentation'>
      <Link className='feature container' to='/documentation/faq'>
        <div className='right visual'><i className='ion-chatbubbles' /></div>
        <div className='left text'>
          <h2>Frequently Asked Questions</h2>
          <p>Frequently Asked Questions page lists questions you may have, especially when using Mastodon, and answers for them.</p>
        </div>
      </Link>
      <Link className='feature container' to='/documentation/user-guide'>
        <div className='right visual'><i className='ion-android-contacts' /></div>
        <div className='left text'>
          <h2>User's Guide</h2>
          <p>The User's Guide is a comprehensive guide for all users.</p>
        </div>
      </Link>
      <Link className='feature container' to='/documentation/apps'>
        <div className='right visual'><i className='ion-android-apps' /></div>
        <div className='left text'>
          <h2>List of apps</h2>
          <p>You should check it out if you are going to use Mastodon on mobile devices.</p>
        </div>
      </Link>
      <a className='feature container' href='https://github.com/tootsuite/documentation'>
        <div className='right visual'><i className='ion-ios-paper' /></div>
        <div className='left text'>
          <h2>Documentation on GitHub</h2>
          <p>The documentation on GitHub covers details and information for developers and server administrators.</p>
        </div>
      </a>
    </div>
  </div>
);

export default Index;
