import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const HowItWorks = () => (
  <div className='how-it-works' id='how-it-works'>
    <div className='container feature' style={{ marginBottom: 45 }}>
      <div className='feature-angle-container'>
        <div className='feature-angle'>
          <i className='ion-md-planet' />
          <h3><FormattedMessage id='how_it_works.server' defaultMessage='Each community is independent' /></h3>
          <p><FormattedMessage id='how_it_works.server_text' defaultMessage='Mastodon is free, open-source software that anyone can install on a server. Independent operation, independent rules.' /></p>
        </div>

        <div className='feature-angle'>
          <i className='ion-md-git-network' />
          <h3><FormattedMessage id='how_it_works.network' defaultMessage='The network is interoperable' /></h3>
          <p><FormattedMessage id='how_it_works.network_text' defaultMessage='Using a suite of standard protocols, Mastodon communities can exchange information with each other, allowing users to interact seamlessly.' /></p>
        </div>
      </div>
    </div>

    <div className='container feature' style={{ marginTop: 0 }}>
      <div className='feature-angle-container'>
        <div className='feature-angle'>
          <i className='ion-md-rocket' />
          <h3><FormattedMessage id='how_it_works.future' defaultMessage='Mastodon is future-proof' /></h3>
          <p><FormattedMessage id='how_it_works.future_text' defaultMessage='Thanks to standard protocols, the network is not limited to Mastodon-based communities. If better software comes along, it can continue with the same social graph.' /></p>
        </div>

        <div className='feature-angle'>
          <i className='ion-md-megaphone' />
          <h3><FormattedMessage id='how_it_works.robust' defaultMessage='Mastodon is robust' /></h3>
          <p><FormattedMessage id='how_it_works.robust_text' defaultMessage='The network is resistant to financial, technical and organizational issues, as well as government interference, due to its diversified nature.' /></p>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='banner'>
        <Link to='/communities' className='cta button'><FormattedMessage id='home.get_started' defaultMessage='Get started' /></Link>
      </div>
    </div>
  </div>
);

export default HowItWorks;
