import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage, injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';
import { sponsors as platinumSponsors } from './Home';

import sponsorEasyDNS from './assets/sponsors/easydns.png';
import sponsorWritersPerHour from './assets/sponsors/writersperhour.jpg';
import sponsorEdusson from './assets/sponsors/edusson.png';
import sponsorMiniTool from './assets/sponsors/minitool.png';
import sponsorLoginLockdown from './assets/sponsors/login-lockdown.png';
import sponsorIVisa from './assets/sponsors/ivisa.png';
import sponsorMySexToyGuide from './assets/sponsors/mysextoyguide.jpg';
import sponsorTootWales from './assets/sponsors/tootwales.png';
import sponsorSpyic from './assets/sponsors/spyic2.png';
import sponsorCocosign from './assets/sponsors/cocosign2.png';
import sponsorQuarterless from './assets/sponsors/quarterless.png';
import sponsorNextiva from './assets/sponsors/nextiva.svg';
import sponsorKevani from './assets/sponsors/KEVANI_LOGO.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarArasPranckevicius from './assets/sponsors/araspranckevicius.jpeg';
import avatarLookToTheRight from './assets/sponsors/looktotheright.png';
import avatarTnzk from './assets/sponsors/tnzk.png';
import avatarTakeShape from './assets/sponsors/takeshape.jpg';
import avatarClay from './assets/sponsors/clay.png';
import avatarTomoki from './assets/sponsors/tomoki.png';
import avatarTradersInsurance from './assets/sponsors/tradersinsurance.png';
import avatarSwitchVPN from './assets/sponsors/switchvpn.png';
import avatarEmpresso from './assets/sponsors/empresso.png';
import avatarVashio from './assets/sponsors/vashio.jpg';
import avatarEduReviewer from './assets/sponsors/edureviewer.jpg';
import avatarFineproxy from './assets/sponsors/fineproxy.png';

import mastodonBit from './assets/bit.png';
import mastodonSilver from './assets/silver.png';
import mastodonHighlight from './assets/highlight.png';
import mastodonGold from './assets/gold.png';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: 'rgba(217, 225, 232, 0.7)',
    borderRadius: '4px',
  };

  return <div style={{ ...style, ...thumbStyle }} />;
};

const goldSponsors = [
  { href: 'https://easydns.com/', src: sponsorEasyDNS, alt: 'easyDNS' },
  { href: 'https://writersperhour.com/', src: sponsorWritersPerHour, alt: 'Writers Per Hour' },
  { href: 'https://edusson.com/write-my-essay-online', src: sponsorEdusson, alt: 'write my essay for me' },
  { href: 'https://www.partitionwizard.com/', src: sponsorMiniTool, alt: 'MiniTool Partition Wizard' },
  { href: 'https://loginlockdown.com/', src: sponsorLoginLockdown, alt: 'Login Lockdown' },
  { href: 'https://www.ivisa.com/photos', src: sponsorIVisa, alt: 'iVisa' },
  { href: 'https://www.mysextoyguide.com/', src: sponsorMySexToyGuide, alt: 'MySexToyGuide' },
  { href: 'https://toot.wales/', src: sponsorTootWales, alt: 'Tŵt Cymru | Toot Wales' },
  { href: 'https://spyic.com/', src: sponsorSpyic, alt: 'Spyic' },
  { href: 'https://cocosign.com/', src: sponsorCocosign, alt: 'CocoSign' },
  { href: 'https://www.nextiva.com/', src: sponsorNextiva, alt: 'Nextiva' },
  { href: 'https://quarterless.com/', src: sponsorQuarterless, alt: 'Quarterless' }, // Custom
  { href: 'https://www.kevani.com/', src: sponsorKevani, alt: 'Kevani' },
];

const silverSponsors = [
  { href: 'https://ichiji.social/@tnzk', src: avatarTnzk, name: 'Kyohei Hamaguchi / @tnzk' },
  { href: 'https://mastodon.gamedev.place/@aras', src: avatarArasPranckevicius, name: 'Aras Pranckevicius' },
  { href: 'https://switchvpn.net/', src: avatarSwitchVPN, name: 'Switch VPN' },
  { href: 'https://clay.global/', src: avatarClay, name: 'Clay' },
  { href: 'https://edureviewer.com/', src: avatarEduReviewer, name: 'Edu Reviewer' },
  { href: 'https://www.signomatic.com.au/', name: 'Signomatic.com.au' },
  { href: 'https://identi.ca/evan', src: avatarEvan, name: 'Evan Prodromou' },
  { href: 'https://marozed.com', src: avatarEmpresso, name: 'Agence web Marozed' },
  { href: 'https://vocalodon.net/@tomoki', src: avatarTomoki, name: 'Hiroyuki Wakimoto (TOMOKI++)' },
  { href: 'https://spicedupaffairs.com/', name: 'SUA' },
  { href: 'https://www.looktotheright.com/', src: avatarLookToTheRight, name: 'Look To The Right' },
  { name: 'Martin Seeger' },
  { href: 'https://dtp-mstdn.jp', src: avatarNoellabo, name: 'noellabo' },
  { href: 'https://www.traders-insurance.com/', src: avatarTradersInsurance, name: 'Traders Insurance' },
  { href: 'https://www.takeshape.io/', src: avatarTakeShape, name: 'TakeShape' }, // OpenCollective
  { href: 'https://mastodon.social/@vashio', name: '@vashio', src: avatarVashio, nofollow: true },
  { href: 'https://theenhancedmale.com', name: 'The Enhanced Male', nofollow: true },
  { name: 'Donald Robb', nofollow: true },
  { href: 'https://ivypanda.com/online-thesis-generator', name: 'IvyPanda', nofollow: true },
  { href: 'https://buy.fineproxy.org/eng/', src: avatarFineproxy, name: 'Fineproxy', nofollow: true },
  { href: 'https://www.bestblowjobmachines.com/', name: 'Mark Mitchell', nofollow: true },
  { href: 'https://reviewscon.com/', name: 'ReviewsCon', nofollow: true },
];

const Sponsorship = ({ intl }) => (
  <div className='sponsorship' id='sponsorship'>
    <div className='intro'>
      <Navigation />

      <div className='text'>
        <h2><FormattedMessage id='sponsorship.sponsors_of_mastodon' defaultMessage='Sponsors of Mastodon' /></h2>
        <p className='lead'><FormattedMessage id='sponsorship.thanks_to' defaultMessage='Mastodon is <strong>free, open-source software</strong>. There is no advertising, monetizing, or venture capital. <strong>Your donations directly support full-time development of the project</strong>. Thank you to the following people and companies:' /></p>
      </div>

      <div className='container'>
        <div className='tier'>
          <div className='sponsors-list--logos'>
            {[...platinumSponsors.filter(sponsor => sponsor.href !== 'https://www.cibdol.com/'), ...goldSponsors].map(sponsor => <a key={sponsor.href} href={sponsor.href}><img src={sponsor.src} alt={sponsor.alt} /></a>)}
          </div>
        </div>
      </div>
    </div>

    <div className='final-cta'>
      <div className='container'>
        <h3><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></h3>
        <p><FormattedMessage id='sponsorship.every_bit_helps' defaultMessage='Every little bit helps, and we appreciate all contributions.' /></p>
        <div className='feature-angle-container'>
          <div className='feature-angle' style={{ width: '50%' }}>
            <img src={mastodonBit} alt='' />
            <p><FormattedMessage id='sponsorship.sponsoring_through_patreon' defaultMessage='If you want to support our project and get rewards like access to our development Discord or your name listed on this page, you can back us on Patreon!' /></p>
            <a href='https://patreon.com/mastodon' className='cta button'><FormattedMessage id='credits.support_on_patreon' defaultMessage='Support on Patreon' /></a>
          </div>

          <div className='feature-angle' style={{ width: '50%' }}>
            <img src={mastodonGold} alt='' />
            <p><FormattedMessage id='sponsorship.sponsoring_higher_tiers' defaultMessage="If you want to see your company's logo with a do-follow link on this website, you can become a Gold or Platinum tier sponsor using our own platform!" /></p>
            <a href='https://sponsor.joinmastodon.org/' className='cta button alt'><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></a>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='tier'>
        <div className='tier__name'>
          <img src={mastodonSilver} alt='' />

          <div>
            <h3><FormattedMessage id='sponsorship.silver_sponsors' defaultMessage='Silver sponsors' /></h3>
            <p><FormattedMessage id='sponsorship.silver_sponsors_text' defaultMessage='<strong>Silver sponsors</strong> are those that have pledged $40 to $99 to Mastodon.' /></p>
          </div>
        </div>

        <div className='sponsors-list--badges'>
          <ul>
            {silverSponsors.map(sponsor => <li key={sponsor.name}><a href={sponsor.href || 'https://joinmastodon.org/sponsors'} rel={sponsor.nofollow ? 'nofollow' : null}><img src={sponsor.src || noAvatar} alt='' /> <span><strong>{sponsor.name}</strong><span>{sponsor.href || '-'}</span></span></a></li>)}
          </ul>
        </div>
      </div>

      <div className='tier'>
        <div className='tier__name'>
          <img src={mastodonHighlight} alt='' />

          <div>
            <h3><FormattedMessage id='sponsorship.sponsors' defaultMessage='Sponsors' /></h3>
            <p><FormattedMessage id='sponsorship.sponsors_text' defaultMessage='<strong>Sponsors</strong> are those that pledged $10 to $39 to Mastodon.' /></p>
          </div>
        </div>

        <div className='sponsors-list--names'>
          <Scrollbars style={{ height: 500 }} renderThumbVertical={renderThumb}>
            <ul className='highlighted'>
              <li>'@mecab</li>
              <li>Andrei Petcu</li>
              <li>Brion Vibber</li>
              <li>G Berton Latamore</li>
              <li>Great Scott Gadgets</li>
              <li>John</li>
              <li>Joyce Mayorga</li>
              <li>Ken Naishtat</li>
              <li>Local Librarian</li>
              <li>Masto.host</li>
              <li>Moritz Heiber</li>
              <li>Nolan Lawson</li>
              <li>Sho Kusano</li>
              <li>Marcus Brito</li>
              <li>Cody Knuble</li>
              <li>Alice Bloom</li>
              <li>ThePhotoApp</li>
              <li>Ivan Braun</li>
            </ul>

            <ul>
              <li>_</li>
              <li>Abdul Rahman</li>
              <li>Akihiko Odaki</li>
              <li>Al</li>
              <li>Austin Putman</li>
              <li>Bal</li>
              <li>Bheesham Persaud</li>
              <li>C J Silverio</li>
              <li>Charles Hutchins</li>
              <li>Chris Hanson</li>
              <li>Chris Zelenak</li>
              <li>Christopher Kruse</li>
              <li>Clinton Freeman</li>
              <li>Damien Sirkis</li>
              <li>Dan Ståhlberg</li>
              <li>David Bailey</li>
              <li>David Yip</li>
              <li>Deborah Goldsmith</li>
              <li>Dominic Hopf</li>
              <li>Donovan Finch</li>
              <li>Ellen Teapot</li>
              <li>Grant Stavely</li>
              <li>Graywind</li>
              <li>Hau Ngo</li>
              <li>Hideki Yamamoto</li>
              <li>Igor Ferreira</li>
              <li>Irick Corwal</li>
              <li>itsumonotakumi</li>
              <li>Jacqueline Button</li>
              <li>James Valleroy</li>
              <li>Jan Krutisch</li>
              <li>Jean-Luc Geering</li>
              <li>Jesse Olson</li>
              <li>Joe McLaughlin</li>
              <li>John Newberger</li>
              <li>Jon Dubovsky</li>
              <li>Jonas Wisser</li>
              <li>Jonathan Cremin</li>
              <li>Josef Kenny</li>
              <li>Josephine Pedersen</li>
              <li>Julie Moronuki</li>
              <li>Kenneth Ken Sugar</li>
              <li>Kevin Sonney</li>
              <li>Kevin Yank</li>
              <li>Koya Matsuo</li>
              <li>Kyle R Kingsbury</li>
              <li>Landy Manderson</li>
              <li>Laurent Joubert</li>
              <li>Laurie Voss</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Little James</li>
              <li>localyouser</li>
              <li>lrvick</li>
              <li>Manesh Pillai</li>
              <li>Masaya Imai</li>
              <li>Matt Meier</li>
              <li>Matt Ulman</li>
              <li>Matthieu Herrb</li>
              <li>Mikayla</li>
              <li>Miki Habryn</li>
              <li>Naomi Alderman</li>
              <li>Nate Borland</li>
              <li>Nicolas Morel</li>
              <li>Osamu Miyake</li>
              <li>Pablo Meier</li>
              <li>Patrick Quinn-Graham</li>
              <li>Paul Lindner</li>
              <li>peter hessler</li>
              <li>Philip James</li>
              <li>Philippe Hausler</li>
              <li>Richard Minerich</li>
              <li>roschaefer</li>
              <li>Rufus</li>
              <li>Sajith Sasidharan</li>
              <li>Sam Herlapuut</li>
              <li>Sandro Hawke</li>
              <li>Satsuki Yanagi</li>
              <li>Steve Streza</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>TARIK F AJAMI</li>
              <li>Ted</li>
              <li>Timothy Wood</li>
              <li>Tom Adriaenssen</li>
              <li>Tom Lowenthal</li>
              <li>Walter Ebert</li>
              <li>Wil Kie</li>
              <li>Wladimir</li>
              <li>Wolfgang @vilbi</li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>{intl.formatMessage({ id: 'sponsorship.sponsors_of_mastodon', defaultMessage: 'Sponsors of Mastodon' })} - Mastodon</title>
    </Helmet>
  </div>
);

export default injectIntl(Sponsorship);
