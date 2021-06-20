import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

const PrivacyPolicy = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Mastodon for iOS Privacy Policy</h1>
      <p className='lead'>Last updated June 20, 2021</p>
      <hr />
      <p className='lead'>The Mastodon for iOS app does not collect or process any personal information from its users. The app is used to connect to third-party Mastodon servers that may or may not collect personal information and are not covered by this privacy policy. Each third-party Mastodon server comes equipped with its own privacy policy that can be viewed through the app or through that server's website.</p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Privacy Policy - Mastodon</title>
    </Helmet>
  </div>
);

export default PrivacyPolicy;
