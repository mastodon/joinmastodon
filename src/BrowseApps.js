import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

import tusky from './assets/apps/tusky.png';
import subwayTooter from './assets/apps/subway-tooter.png';
import fedilab from './assets/apps/fedilab.png';
import amaroq from './assets/apps/amaroq.jpg';
import mast from './assets/apps/mast.png';
import mastonaut from './assets/apps/mastonaut.png';
import toot from './assets/apps/toot.jpg';
import tooter from './assets/apps/tooter.png';
import tootle from './assets/apps/tootle.jpg';
import pinafore from './assets/apps/pinafore.png';
import whalebird from './assets/apps/whalebird.png';
import halcyon from './assets/apps/halcyon.png';
import thedesk from './assets/apps/thedesk.png';
import cuckooPlus from './assets/apps/cuckoo-plus.png';
import hyperspace from './assets/apps/hyperspace.png';
import imast from './assets/apps/imast_icon.png';
import mercury from './assets/apps/mercury.png';
import sengi from './assets/apps/sengi.png';

import sponsorDotcomMonitor from './assets/sponsors/dotcom-monitor-logo.png';
import sponsorLoadView from './assets/sponsors/LoadView-logo.png';
import sponsorWebHostingBuddy from './assets/sponsors/web-hosting-buddy-logo.png';
import sponsorDrivenCoffee from './assets/sponsors/driven-coffee-logo.png';

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
      name: 'Fedilab',
      icon: fedilab,
      url: 'https://play.google.com/store/apps/details?id=app.fedilab.android',
      paid: true,
    },
  ],

  ios: [
    {
      name: 'Toot!',
      icon: toot,
      url: 'https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8',
      paid: true,
    },

    {
      name: 'Mast',
      icon: mast,
      url: 'https://apps.apple.com/us/app/mast-for-mastodon/id1437429129',
      paid: true,
    },

    {
      name: 'Amaroq',
      icon: amaroq,
      url: 'https://itunes.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1&mt=8',
    },

    {
      name: 'iMast',
      icon: imast,
      url: 'https://apps.apple.com/us/app/imast/id1229461703',
    },

    {
      name: 'Mercury',
      icon: mercury,
      url: 'https://apps.apple.com/us/app/mercury-for-mastodon/id1486749200?ls=1&mt1=8',
    },
  ],

  web: [
    {
      name: 'Pinafore',
      icon: pinafore,
      url: 'https://pinafore.social',
    },

    {
      name: 'Halcyon',
      icon: halcyon,
      url: 'https://www.halcyon.social/',
    },

    {
      name: 'Cuckoo+',
      icon: cuckooPlus,
      url: 'https://www.cuckoo.social',
    },
  ],

  sailfish: [
    {
      name: 'Tooter',
      icon: tooter,
      url: 'https://openrepos.net/content/dysko/tooter',
    },
  ],

  desktop: [
    {
      name: 'Whalebird',
      icon: whalebird,
      url: 'https://whalebird.social',
    },

    {
      name: 'Tootle (Linux)',
      icon: tootle,
      url: 'https://appcenter.elementary.io/com.github.bleakgrey.tootle/',
    },

    {
      name: 'TheDesk',
      icon: thedesk,
      url: 'https://thedesk.top/en',
    },

    {
      name: 'Hyperspace',
      icon: hyperspace,
      url: 'https://hyperspace.marquiskurt.net/',
    },

    {
      name: 'Mast (Mac)',
      icon: mast,
      url: 'https://apps.apple.com/us/app/mast/id1489861544',
      paid: true
    },

    {
      name: 'Mastonaut (Mac)',
      icon: mastonaut,
      url: 'https://itunes.apple.com/us/app/mastonaut/id1450757574',
      paid: true
    },

    {
      name: 'Sengi',
      icon: sengi,
      url: 'https://nicolasconstant.github.io/sengi/',
    },
  ],
};

const renderApp = ({ name, icon, paid, url }) => (
  <div className='app-grid__item' key={name}>
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <img src={icon} alt={name} className='app-grid__item__icon' />

      <div className='app-grid__item__text'>
        <strong>{name}</strong>
        <span className='app-grid__item__tag'>{paid ? <FormattedMessage id='apps.paid' defaultMessage='Paid' /> : <FormattedMessage id='apps.free' defaultMessage='Free' />}</span>
      </div>
    </a>
  </div>
);

const sponsors = [
  { href: 'https://www.dotcom-monitor.com/es/', src: sponsorDotcomMonitor, alt: 'Dotcom-Monitor' },
  { href: 'https://www.loadview-testing.com/api-testing/', src: sponsorLoadView, alt: 'LoadView' },
  { href: 'https://webhostingbuddy.com/wordpress-hosting/', src: sponsorWebHostingBuddy, alt: 'Web Hosting Buddy' },
  { href: 'https://www.drivencoffee.com/', src: sponsorDrivenCoffee, alt: 'Driven Coffee' },
];

const BrowseApps = ({ intl }) => (
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

      <h2>Web</h2>

      <div className='app-grid'>
        {apps.web.map(renderApp)}
      </div>

      <h2>Desktop</h2>

      <div className='app-grid'>
        {apps.desktop.map(renderApp)}
      </div>

      <h2>SailfishOS</h2>

      <div className='app-grid'>
        {apps.sailfish.map(renderApp)}
      </div>
    </div>

    <div className='frontpage-sponsorship frontpage-sponsorship--no-background'>
      <div className='container'>
        <h2><FormattedMessage id='home.sponsored_by' defaultMessage='Sponsored by' /> &bull; <Link to='/sponsors' className='link-button'><FormattedMessage id='credits.view_sponsors' defaultMessage='View sponsors' /> <i className='ion-ios-arrow-forward' /></Link></h2>

        <div className='logo-grid'>
          <div>
            {sponsors.map(x => <a key={x.href} href={x.href}><img src={x.src} alt={x.alt} /></a>)}
          </div>
        </div>
      </div>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>{intl.formatMessage({ id: 'browse_apps.title', defaultMessage: 'Browse apps' })} - Mastodon</title>
    </Helmet>
  </div>
);

export default injectIntl(BrowseApps);
