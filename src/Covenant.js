import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

// This page does not require translations

const Covenant = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Mastodon Server Covenant</h1>
      <p className='lead'>All Mastodon servers we link to from our server picker commit to the following:</p>

      <div className='covenant__terms'>
        <p>1. <strong>Active moderation against racism, sexism, homophobia and transphobia</strong></p>
        <p>Users must have the confidence that they are joining a safe space, free from white supremacy, anti-semitism and transphobia of other platforms.</p>

        <hr />

        <p>2. <strong>Daily backups</strong></p>
        <p>It is important for users to have the confidence that a trip over the power cable or a rogue bit flip will not erase all of their data. Having a backup strategy is a basic necessity of providing a public service.</p>

        <hr />

        <p>3. <strong>At least one other person with emergency access to the server infrastructure</strong></p>
        <p>Various circumstances can prevent the original owner of the Mastodon server from answering technical emergencies. For this reason, more than one person must have that capability.</p>

        <hr />

        <p>4. <strong>Commitment to give users at least 3 months of advance warning in case of shutting down</strong></p>
        <p>Sometimes services shut down, it is the cycle of life. But users must have the confidence that their account will not disappear overnight, so that they have time to export their data and find another server.</p>
      </div>

      <p>If you are a server owner, and your server passes these requirements, you can send an e-mail to hello@joinmastodon.org with the subject "Server submission" to be listed on this website. Only servers that accept registrations (including approval-based registrations) are shown.</p>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Mastodon Server Covenant - Mastodon</title>
    </Helmet>
  </div>
);

export default Covenant;
