import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

const PrivacyPolicy = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Privacy Policy</h1>
      <p className='lead'>Last updated June 28, 2021</p>
      <hr />

      <div className='covenant__terms' style={{ marginTop: 0 }}>
        <p className='lead'><strong>This is the privacy policy for the joinmastodon.org website and related services.</strong> It is not the privacy policy for Mastodon the social network. Mastodon is made up of third-party servers that are not covered by this privacy policy. You can view an individual Mastodon server's privacy policy through its website.</p>
        <hr />
        <p className='lead'><strong>If you sign up to one of our newsletters by submitting a form on joinmastodon.org or its subdomains</strong>, we collect your e-mail address as well as the time and date of the sign up.</p>
        <p className='lead'>You give us consent to send you e-mails when you sign up for one of our newsletters.</p>
        <p className='lead'>You can unsubscribe from any of our newsletters by using the "unsubscribe" link provided in the footer of each e-mail. When you unsubscribe, your e-mail address remains in our system by default. You can optionally delete all of your data through that link.</p>
      </div>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Privacy Policy - Mastodon</title>
    </Helmet>
  </div>
);

export default PrivacyPolicy;
