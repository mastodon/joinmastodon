import React from 'react';
import { FormattedMessage } from 'react-intl';

import Navigation from './Navigation';
import Legal from './Legal';

import tusky from './assets/apps/tusky.png';
import subwayTooter from './assets/apps/subway-tooter.png';
import pawoo from './assets/apps/pawoo.jpg';
import mastalab from './assets/apps/mastalab.png';
import amaroq from './assets/apps/amaroq.jpg';
import mast from './assets/apps/mast.jpg';
import toot from './assets/apps/toot.jpg';

const apps = {
  android: [
    {
      name: 'Tusky',
      icon: tusky,
      url: 'https://play.google.com/store/apps/details?id=com.keylesspalace.tusky',
    },

    {
      name: 'Subway Tooter',
      icon: subwayTooter,
      url: 'https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter',
    },

    {
      name: 'Mastalab',
      icon: mastalab,
      url: 'https://play.google.com/store/apps/details?id=fr.gouv.etalab.mastodon',
    },

    {
      name: 'Pawoo',
      icon: pawoo,
      url: 'https://play.google.com/store/apps/details?id=jp.pxv.pawoo',
    },
  ],

  ios: [
    {
      name: 'Toot!',
      icon: toot,
      url: 'https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8',
    },

    {
      name: 'Mast',
      icon: mast,
      url: 'https://itunes.apple.com/us/app/mast/id1437429129?mt=8',
    },

    {
      name: 'Amaroq',
      icon: amaroq,
      url: 'https://itunes.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1&mt=8',
    },

    {
      name: 'Pawoo',
      icon: pawoo,
      url: 'https://itunes.apple.com/us/app/pawoo/id1229070679',
    },
  ],
};

const renderApp = ({ name, icon, paid, url }) => (
  <div className='app-grid__item' key={name}>
    <a href={url} target='_blank'>
      <img src={icon} alt={name} className='app-grid__item__icon' />

      <div className='app-grid__item__text'>
        <strong>{name}</strong>
        <span className='app-grid__item__tag'>{paid ? <FormattedMessage id='apps.paid' defaultMessage='Paid' /> : <FormattedMessage id='apps.free' defaultMessage='Free' />}</span>
      </div>
    </a>
  </div>
);

const BrowseApps = () => (
  <div className='browse-apps'>
    <Navigation />

    <div className='container'>
      <h1><FormattedMessage id='browse_apps.title' defaultMessage='Browse apps' /></h1>
      <p className='lead'><FormattedMessage id='browse_apps.lead' defaultMessage='You can use Mastodon with any of these apps!' /></p>

      <hr />

      <h2>Android</h2>

      <div className='app-grid'>
        {apps.android.map(renderApp)}
      </div>

      <h2>iOS</h2>

      <div className='app-grid'>
        {apps.ios.map(renderApp)}
      </div>

      <Legal />
    </div>
  </div>
);

export default BrowseApps;
