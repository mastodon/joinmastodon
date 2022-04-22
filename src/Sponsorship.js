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
import sponsorIVisa from './assets/sponsors/ivisa.png';
import sponsorMySexToyGuide from './assets/sponsors/mysextoyguide.jpg';
import sponsorKevani from './assets/sponsors/KEVANI_LOGO.png';
import sponsorDoggieToys from './assets/sponsors/doggie-toys.png';
import sponsorLaatukasinot from './assets/sponsors/Laatulogo.png';
import sponsorBesturate from './assets/sponsors/besturate.png';
import sponsorBitlaunch from './assets/sponsors/bitlaunch.svg';
import sponsorInkedin from './assets/sponsors/inkedin-logo-small-2.webp';
import sponsorCasinoFiables from './assets/sponsors/logo-fiables.png';
import sponsorRapidEssay from './assets/sponsors/rapidessay_logo.png';
import sponsorCasinoHexNL from './assets/sponsors/casino-hex-nl.png';
import sponsorHostNoc from './assets/sponsors/hostnoc.png';
import sponsorIBoysoft from './assets/sponsors/iboysoft-logo-dark2.png';
import sponsorNettikasino from './assets/sponsors/nettikasinolista-mv.png';
import sponsorDoshFunding from './assets/sponsors/doshfunding.svg';
import noAvatar from './assets/sponsors/32x32.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarArasPranckevicius from './assets/sponsors/araspranckevicius.jpeg';
import avatarLookToTheRight from './assets/sponsors/looktotheright.png';
import avatarTnzk from './assets/sponsors/tnzk.png';
import avatarClay from './assets/sponsors/clay.png';
import avatarTomoki from './assets/sponsors/tomoki.png';
import avatarTradersInsurance from './assets/sponsors/tradersinsurance.png';
import avatarSwitchVPN from './assets/sponsors/switchvpn.png';
import avatarEmpresso from './assets/sponsors/empresso.png';
import avatarEduReviewer from './assets/sponsors/edureviewer.jpg';

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
  { href: 'https://www.ivisa.com/photos', src: sponsorIVisa, alt: 'iVisa' },
  { href: 'https://www.mysextoyguide.com/', src: sponsorMySexToyGuide, alt: 'MySexToyGuide' },
  { href: 'https://www.kevani.com/', src: sponsorKevani, alt: 'Kevani' },
  { href: 'https://www.doggietoys.deals/', src: sponsorDoggieToys, alt: 'Doggie Toys' }, // Custom
  { href: 'https://laatukasinot.com/kasinobonukset/', src: sponsorLaatukasinot, alt: 'Parhaat kasinobonukset' }, // Custom
  { href: 'https://besturate.com/best-vpn/', src: sponsorBesturate, alt: 'Besturate Best VPN' },
  { href: 'https://bitlaunch.io/', src: sponsorBitlaunch, alt: 'Bitcoin VPS' }, // Custom
  { href: 'http://inkedin.com/', src: sponsorInkedin, alt: 'inkedin.com' },
  { href: 'https://casinofiables.com/', src: sponsorCasinoFiables, alt: 'Casino Fiables' },
  { href: 'https://rapidessay.com/', src: sponsorRapidEssay, alt: 'Rapid Essay' },
  { href: 'https://onlinecasinohex.nl/', src: sponsorCasinoHexNL, alt: 'CasinoHEX Nederland' },
  { href: 'https://hostnoc.com', src: sponsorHostNoc, alt: 'HostNoc Dedicated Server' }, // Custom
  { href: 'https://iboysoft.com/', src: sponsorIBoysoft, alt: 'iBoysoft Data Recovery' }, // Custom
  { href: 'https://nettikasinolista.com/', src: sponsorNettikasino, alt: 'Nettikasino' }, // Custom
  { href: 'http://doshfunding.com/', src: sponsorDoshFunding, alt: 'Funding Solutions for Businesses' }, // Custom
];

const silverSponsors = [
  { href: 'https://ichiji.social/@tnzk', src: avatarTnzk, name: 'Kyohei Hamaguchi / @tnzk' },
  { href: 'https://mastodon.gamedev.place/@aras', src: avatarArasPranckevicius, name: 'Aras Pranckevicius' },
  { href: 'https://switchvpn.net/', src: avatarSwitchVPN, name: 'Switch VPN' },
  { href: 'https://clay.global/', src: avatarClay, name: 'Clay' },
  { href: 'https://edureviewer.com/', src: avatarEduReviewer, name: 'Edu Reviewer' },
  { href: 'https://identi.ca/evan', src: avatarEvan, name: 'Evan Prodromou' },
  { href: 'https://marozed.com', src: avatarEmpresso, name: 'Agence web Marozed' },
  { href: 'https://vocalodon.net/@tomoki', src: avatarTomoki, name: 'Hiroyuki Wakimoto (TOMOKI++)' },
  { href: 'https://spicedupaffairs.com/', name: 'SUA' },
  { href: 'https://www.looktotheright.com/', src: avatarLookToTheRight, name: 'Look To The Right' },
  { name: 'Martin Seeger' },
  { href: 'https://dtp-mstdn.jp', src: avatarNoellabo, name: 'noellabo' },
  { name: 'Donald Robb', nofollow: true },
  { href: 'https://ivypanda.com/online-thesis-generator', name: 'IvyPanda', nofollow: true },
  { href: 'https://www.bestblowjobmachines.com/', name: 'Mark Mitchell', nofollow: true },
  { name: 'John Bean', nofollow: true },
  { href: 'https://correctcasinos.com', name: 'Stanimir Zhelev', nofollow: true },
  { href: 'https://bourbonbyte.com/@lucas', name: 'Lucas Freeman', nofollow: true },
  { href: 'https://coywolf.com/', name: 'Coywolf', nofollow: true },
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
              <li>Moritz Heiber</li>
              <li>Masto.host </li>
              <li>Sho Kusano</li>
              <li>'@mecab </li>
              <li>John </li>
              <li>akyoz</li>
              <li>Ivan Sagalaev</li>
              <li>JC Andrever</li>
              <li>Michelle Merendino</li>
              <li>David Sterry</li>
              <li>zunda</li>
              <li>Claire Eckelman</li>
              <li>Sevendosha</li>
              <li>codemoz</li>
            </ul>

            <ul>
              <li>Nolan Lawson</li>
              <li>Ted </li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Josef Kenny</li>
              <li>Austin Putman</li>
              <li>Hannah Yip</li>
              <li>Kenneth Ken Sugar</li>
              <li>Paul Lindner</li>
              <li>mark</li>
              <li>Joe McLaughlin</li>
              <li>C J Silverio</li>
              <li>Matthieu Herrb</li>
              <li>Koya Matsuo</li>
              <li>Akihiko Odaki</li>
              <li>James Valleroy</li>
              <li>Flaki</li>
              <li>Wolfgang @vilbi</li>
              <li>Wladimir</li>
              <li>Matt Ulman</li>
              <li>Deborah Goldsmith</li>
              <li>Nicolas Morel</li>
              <li>Jan Krutisch</li>
              <li>Jonathan Cremin</li>
              <li>TARIK F AJAMI</li>
              <li>John Newberger</li>
              <li>Mikayla </li>
              <li>Chris Hanson</li>
              <li>Kevin Yank</li>
              <li>Boris Jamot</li>
              <li>Jon Dubovsky</li>
              <li>Donovan Finch</li>
              <li>Tyr Mactire</li>
              <li>まっちゃとーにゅ</li>
              <li>Jacqueline Button</li>
              <li>Wilkie</li>
              <li>Jean-Luc Geering</li>
              <li>Aaron Harpole</li>
              <li>Kyle R Kingsbury</li>
              <li>Captain Jingle Pants</li>
              <li>spla</li>
              <li>Lee Starnes</li>
              <li>Martin Tithonium</li>
              <li>Jordan </li>
              <li>James Brown</li>
              <li>Ryan</li>
              <li>Manu Gomez</li>
              <li>Tomoyuki Sato</li>
              <li>Ray</li>
              <li>Theodore</li>
              <li>yawnbox</li>
              <li>Niko</li>
              <li>Jonas Möller</li>
              <li>Wes Hurd</li>
              <li>l-laura</li>
              <li>Kai </li>
              <li>Maciej Solecki</li>
              <li>David Walluscheck</li>
              <li>esmuellerthier</li>
              <li>Adam Bradley</li>
              <li>Matt Michaliszyn</li>
              <li>Konstantin Kostov</li>
              <li>Ulrich Wrede</li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>{intl.formatMessage({ id: 'sponsorship.sponsors_of_mastodon', defaultMessage: 'Sponsors of Mastodon' })} - Mastodon</title>
      <meta property='og:title' content={intl.formatMessage({ id: 'sponsorship.sponsors_of_mastodon', defaultMessage: 'Sponsors of Mastodon' })} />
    </Helmet>
  </div>
);

export default injectIntl(Sponsorship);
