import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';
import ArrowLink from './ArrowLink';

import iphone12 from './assets/iphone-and-android.png';
import downloadOnAppStore from './assets/download-on-app-store.svg';
import downloadOnGooglePlay from './assets/google-play-badge.png';

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
import metatext from './assets/apps/metatext.png';

import sponsorDotcomMonitor from './assets/sponsors/dotcom-monitor-logo.png';
import sponsorLoadView from './assets/sponsors/LoadView-logo.png';
//import sponsorWebHostingBuddy from './assets/sponsors/web-hosting-buddy-logo.png';
//import sponsorDrivenCoffee from './assets/sponsors/driven-coffee-logo.png';

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

    {
      name: 'Metatext',
      icon: metatext,
      url: 'https://apps.apple.com/us/app/metatext/id1523996615?mt=8',
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
      url: 'https://flathub.org/apps/details/com.github.bleakgrey.tootle',
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
  { href: 'https://www.loadview-testing.com/products/jmeter-load-testing/', src: sponsorLoadView, alt: 'LoadView' },
  //{ href: 'https://webhostingbuddy.com/wordpress-hosting/', src: sponsorWebHostingBuddy, alt: 'Web Hosting Buddy' },
  //{ href: 'https://www.drivencoffee.com/', src: sponsorDrivenCoffee, alt: 'Driven Coffee' },
];

/*
const messages = defineMessages({
  email: { id: 'ios.email', defaultMessage: 'Your e-mail address' },
});

const WaitingListForm = injectIntl(({ intl }) => (
  <form method='post' action='https://newsroom.joinmastodon.org/subscription/form' className='listmonk-form'>
    <input id='8b9d9' type='hidden' name='l' value='8b9d90ad-9997-4ef9-92df-c1941a1da492' />

    <div className='input-with-button'>
      <input type='email' name='email' placeholder={intl.formatMessage(messages.email)} required='required' />
      <button type='submit'><FormattedMessage id='ios.join_waiting_list' defaultMessage='Join the list' /></button>
    </div>
  </form>
));
*/

const BrowseApps = ({ intl }) => (
  <div className='browse-apps'>
    <div className='app-intro'>
      <Navigation />

      <div className='container'>
        <div className='app-intro__hero'>
          <div className='app-intro__hero__unit'>
            <h1>
              <small><FormattedMessage id='ios.introducing' defaultMessage='Introducing' /></small>
              <br />
              <FormattedMessage id='ios_and_android.app_name' defaultMessage='Official apps' />
            </h1>

            <p><FormattedMessage id='ios_and_android.download' defaultMessage="We've released official apps for Mastodon on iOS and Android, in addition to the web version and all the third-party apps available below." /></p>

            <a href='https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974'><img src={downloadOnAppStore} alt='Download on the App Store' className='app-store-badge' /></a>
            <a href='https://play.google.com/store/apps/details?id=org.joinmastodon.android'><img src={downloadOnGooglePlay} alt='Get it on Google Play' className='app-store-badge' style={{ height: 70, margin: '-10px 0' }} /></a>
          </div>

          <img className='app-intro__hero__screenshot' src={iphone12} alt='' />
        </div>
      </div>
    </div>

    <div className='container feature'>
      <div className='feature-angle-container'>
        <div className='feature-angle'>
          <i className='ion-md-browsers' />
          <h3><FormattedMessage id='browse_apps.progressive_web_app' defaultMessage="Progressive Web App" /></h3>
          <p><FormattedMessage id='browse_apps.you_can_use_it_from_desktop' defaultMessage="You can always use Mastodon from the browser on your desktop or phone! It can be added to your home screen and some browsers even support push notifications, just like a native app!" /></p>
          <ArrowLink to='/communities' className='link-button'><FormattedMessage id='features.join_community' defaultMessage='Join a community' /></ArrowLink>
        </div>

        <div className='feature-angle'>
          <i className='ion-md-code' />
          <h3><FormattedMessage id='browse_apps.open_api' defaultMessage='Open API' /></h3>
          <p><FormattedMessage id='browse_apps.make_your_own' defaultMessage="Mastodon is open-source and has an elegant, well-documented API that is available to everyone. Make your own app, or use one of the many third-party apps made by other developers!" /></p>
          <ArrowLink href='https://docs.joinmastodon.org/client/intro/' target='_blank' rel='noopener noreferrer' className='link-button'><FormattedMessage id='browse_apps.api_docs' defaultMessage='API documentation' /></ArrowLink>
        </div>
      </div>
    </div>

    <div className='testimonials container'>
      <h2><FormattedMessage id='browse_apps.title2' defaultMessage='Browse third-party apps' /></h2>
      <p className='lead'><FormattedMessage id='browse_apps.lead2' defaultMessage="Thanks to Mastodon's open API, you can use it from any of these apps developed by third-party developers" /></p>

      <h3>Android</h3>

      <div className='app-grid'>
        {apps.android.map(renderApp)}
      </div>

      <h3>iOS</h3>

      <div className='app-grid'>
        {apps.ios.map(renderApp)}
      </div>

      <h3><FormattedMessage id='browse_apps.web' defaultMessage='Web' /></h3>

      <div className='app-grid'>
        {apps.web.map(renderApp)}
      </div>

      <h3><FormattedMessage id='browse_apps.desktop' defaultMessage='Desktop' /></h3>

      <div className='app-grid'>
        {apps.desktop.map(renderApp)}
      </div>

      <h3>SailfishOS</h3>

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
      <title>{intl.formatMessage({ id: 'browse_apps.page_title', defaultMessage: 'Get the Mastodon app' })} - Mastodon</title>
      <meta property="og:title" content={intl.formatMessage({ id: 'browse_apps.page_title', defaultMessage: 'Get the Mastodon app' })} />
      <meta name="description" content={intl.formatMessage({ id: 'browse_apps.page_description', defaultMessage: 'Browse official and third-party apps for the decentralized social network Mastodon' })} />
      <meta property="og:description" content={intl.formatMessage({ id: 'browse_apps.page_description', defaultMessage: 'Browse official and third-party apps for the decentralized social network Mastodon' })} />
    </Helmet>
  </div>
);

export default injectIntl(BrowseApps);
