import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

const AndroidPrivacyPolicy = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Mastodon for Android Privacy Policy</h1>
      <p className='lead'>Last updated April 14, 2022</p>
      <hr />
      <p className='lead'>The Mastodon for Android app does not collect or process any personal information from its users. The app is used to connect to third-party Mastodon servers that may or may not collect personal information and are not covered by this privacy policy. Each third-party Mastodon server comes equipped with its own privacy policy that can be viewed through the app or through that server's website.</p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Privacy Policy - Mastodon for Android</title>
      <meta property='og:title' content='Privacy Policy for Mastodon for Android' />
    </Helmet>
  </div>
);

export default AndroidPrivacyPolicy;
