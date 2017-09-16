import React from 'react';
import { FormattedMessage } from 'react-intl';

import elephantGrid from './assets/instance_badges2.png';

const HowItWorks = () => (
  <div className='how-it-works' id='how-it-works'>
    <div className='container'>
      <div className='row'>
        <div className='specs'>
          <h2><FormattedMessage id='how_it_works.how_it_works' defaultMessage='How it works' /></h2>

          <p><FormattedMessage id='how_it_works.how_it_works_text1' defaultMessage='Anyone can run a server of Mastodon. Each server hosts individual user accounts, the content they produce, and the content they subscribe to.' /></p>
          <p><FormattedMessage id='how_it_works.how_it_works_text2' defaultMessage='Each user account has a globally unique name (e.g. @user@example.com), consisting of the local username (@user), and the domain name of the server it is on (example.com).' /></p>
          <p><FormattedMessage id='how_it_works.how_it_works_text3' defaultMessage='Users can follow each other, regardless of where they’re hosted &mdash; when a local user follows a user from a different server, the server subscribes to that user’s updates for the first time.' /></p>
        </div>

        <div className='network-grid'>
          <img src={elephantGrid} alt='Fediverse' />
        </div>
      </div>

      <div className='benefits'>
        <h3><FormattedMessage id='how_it_works.why_its_cool' defaultMessage='Why is that cool?' /></h3>
        <p><FormattedMessage id='how_it_works.why_its_cool_text' defaultMessage='Servers are run independently by different people and organizations. They can apply wildly different moderation policies, so you can find or make one that fits your taste perfectly. A decentralized network is harder for governments to censor. If one server goes bankrupt or starts acting unethically, the network persists so you never have to worry about migrating your friends and audience to a yet another platform again.' /></p>
      </div>
    </div>
  </div>
);

export default HowItWorks;
