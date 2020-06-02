import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';
import Legal from './Legal';
import { sponsors as platinumSponsors } from './Home';

//import sponsorRubymotion from './assets/sponsors/rubymotion.png';
import sponsorADarkRoom from './assets/sponsors/adarkroom.jpg';
import sponsorWriteAs from './assets/sponsors/writeas-logo-dark.svg';
import sponsorThanksblock from './assets/sponsors/thanksblock.png';
import sponsorEasyDNS from './assets/sponsors/easydns.png';
import sponsorVPSServer from './assets/sponsors/vpsserver.png';
import sponsorMoneyPug from './assets/sponsors/moneypug.png';
import sponsorWritersPerHour from './assets/sponsors/writersperhour.jpg';
import sponsorEdusson from './assets/sponsors/edusson.png';
import sponsorMiniTool from './assets/sponsors/minitool.png';
import sponsorYourDoll from './assets/sponsors/yourdoll.jpg';
import sponsorLoginLockdown from './assets/sponsors/login-lockdown.png';
import sponsorMyPassportPhotos from './assets/sponsors/mypassportphotos.png';
import sponsorMySexToyGuide from './assets/sponsors/mysextoyguide.jpg';
import sponsorTootWales from './assets/sponsors/tootwales.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarMarkAtwood from './assets/sponsors/markatwood.jpg';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarArasPranckevicius from './assets/sponsors/araspranckevicius.jpeg';
import avatarLookToTheRight from './assets/sponsors/looktotheright.png';
import avatarTnzk from './assets/sponsors/tnzk.png';
import avatarTakeShape from './assets/sponsors/takeshape.jpg';
import avatarPaperLeaf from './assets/sponsors/paperleaf.jpg';
import avatarClay from './assets/sponsors/clay.png';
import avatarTomoki from './assets/sponsors/tomoki.png';
import avatarTradersInsurance from './assets/sponsors/tradersinsurance.png';
import avatarSwitchVPN from './assets/sponsors/switchvpn.png';
import avatarEmpresso from './assets/sponsors/empresso.png';
import avatarVashio from './assets/sponsors/vashio.jpg';
import avatarCraftResumes from './assets/sponsors/craftresumes.png';
import avatarEduReviewer from './assets/sponsors/edureviewer.jpg';
import avatarSextopedia from './assets/sponsors/sextopedia.png';
import avatarFeels from './assets/sponsors/feels.png';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: 'rgba(217, 225, 232, 0.7)',
    borderRadius: '4px',
  };

  return <div style={{ ...style, ...thumbStyle }} />;
};

const goldSponsors = [
  { href: 'https://www.nintendo.com/games/detail/a-dark-room-switch/', src: sponsorADarkRoom, alt: 'A Dark Room' },
  { href: 'https://write.as/', src: sponsorWriteAs, alt: 'Write.as' },
  { href: 'https://www.justhanks.com/', src: sponsorThanksblock, alt: 'THANKSBLOCK' },
  { href: 'https://easydns.com/', src: sponsorEasyDNS, alt: 'easyDNS' },
  { href: 'https://www.vpsserver.com/', src: sponsorVPSServer, alt: 'VPS Server' },
  { href: 'https://moneypug.co.uk/', src: sponsorMoneyPug, alt: 'Money Pug' },
  { href: 'https://writersperhour.com/', src: sponsorWritersPerHour, alt: 'Writers Per Hour' },
  { href: 'https://edusson.com/write-my-essay-online', src: sponsorEdusson, alt: 'write my essay for me' },
  { href: 'https://www.partitionwizard.com/', src: sponsorMiniTool, alt: 'MiniTool Partition Wizard' },
  { href: 'https://www.yourdoll.com/', src: sponsorYourDoll, alt: 'Your Doll' },
  { href: 'https://loginlockdown.com/', src: sponsorLoginLockdown, alt: 'Login Lockdown' },
  { href: 'https://www.mypassportphotos.com/', src: sponsorMyPassportPhotos, alt: 'MyPassportPhotos' },
  { href: 'https://www.mysextoyguide.com/', src: sponsorMySexToyGuide, alt: 'MySexToyGuide' },
  { href: 'https://toot.wales/', src: sponsorTootWales, alt: 'Tŵt Cymru | Toot Wales' },
];

const silverSponsors = [
  { href: 'https://ichiji.social/@tnzk', src: avatarTnzk, name: 'Kyohei Hamaguchi / @tnzk' },
  { href: 'https://mastodon.gamedev.place/@aras', src: avatarArasPranckevicius, name: 'Aras Pranckevicius' },
  { href: 'https://switchvpn.net/', src: avatarSwitchVPN, name: 'Switch VPN' },
  { href: 'https://clay.global/', src: avatarClay, name: 'Clay' },
  { href: 'https://edureviewer.com/', src: avatarEduReviewer, name: 'Edu Reviewer' },
  { href: 'https://www.signomatic.com.au/', name: 'Signomatic.com.au' },
  { href: 'https://identi.ca/evan', src: avatarEvan, name: 'Evan Prodromou' },
  { href: 'https://marozed.ma', src: avatarEmpresso, name: 'Agence web Marozed' },
  { href: 'https://vocalodon.net/@tomoki', src: avatarTomoki, name: 'Hiroyuki Wakimoto (TOMOKI++)' },
  { href: 'https://spicedupaffairs.com/', name: 'SUA' },
  { href: 'https://www.slixa.com/', name: 'Slixa Escort Directory' },
  { href: 'https://www.looktotheright.com/', src: avatarLookToTheRight, name: 'Look To The Right' },
  { href: 'https://about.me/markatwood', src: avatarMarkAtwood, name: 'Mark Atwood' },
  { name: 'Martin Seeger' },
  { href: 'https://dtp-mstdn.jp', src: avatarNoellabo, name: 'noellabo' },
  { href: 'https://paperleaf.ca/', src: avatarPaperLeaf, name: 'PaperLeaf' },
  { href: 'https://craftresumes.com/', src: avatarCraftResumes, name: 'CraftResumes' },
  { href: 'https://www.traders-insurance.com/', src: avatarTradersInsurance, name: 'Traders Insurance' },
  { href: 'https://www.takeshape.io/', src: avatarTakeShape, name: 'TakeShape' }, // OpenCollective
  { href: 'https://mastodon.social/@vashio', name: '@vashio', src: avatarVashio, nofollow: true },
  { href: 'https://theenhancedmale.com', name: 'The Enhanced Male', nofollow: true },
  { name: 'Donald Robb', nofollow: true },
  { href: 'https://www.allthat3d.com/', name: 'AllThat3D.com', nofollow: true },
  { href: 'https://www.fullextend.com/', name: 'FullExtend.com', nofollow: true },
  { href: 'https://sextopedia.com/', src: avatarSextopedia, name: 'Sextopedia', nofollow: true },
  { href: 'https://thebeastreviews.com/', name: 'TheBeastReviews', nofollow: true },
  { href: 'https://fee.ls/', src: avatarFeels, name: 'feels', nofollow: true },
];

const Sponsorship = () => (
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
            {[...platinumSponsors, ...goldSponsors].map(sponsor => <a key={sponsor.href} href={sponsor.href}><img src={sponsor.src} alt={sponsor.alt} /></a>)}
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='text cta-text'>
        <a href='https://patreon.com/mastodon' className='cta button'><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></a>
      </div>

      <div className='tier'>
        <h3><FormattedMessage id='sponsorship.silver_sponsors' defaultMessage='Silver sponsors' /></h3>
        <p><FormattedMessage id='sponsorship.silver_sponsors_text' defaultMessage='<strong>Silver sponsors</strong> are those that have pledged $40 to $99 to Mastodon.' /></p>

        <div className='sponsors-list--badges'>
          <ul>
            {silverSponsors.map(sponsor => <li key={sponsor.name}><a href={sponsor.href || 'https://joinmastodon.org/sponsors'} rel={sponsor.nofollow ? 'nofollow' : null}><img src={sponsor.src || noAvatar} alt='' /> <span><strong>{sponsor.name}</strong><span>{sponsor.href || '-'}</span></span></a></li>)}
          </ul>
        </div>
      </div>

      <hr />

      <div className='tier'>
        <h3><FormattedMessage id='sponsorship.sponsors' defaultMessage='Sponsors' /></h3>
        <p><FormattedMessage id='sponsorship.sponsors_text' defaultMessage='<strong>Sponsors</strong> are those that pledged $10 to $39 to Mastodon.' /></p>

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

    <div className='final-cta'>
      <div className='container'>
        <h3><FormattedMessage id='sponsorship.support_the_project' defaultMessage='Support the project' /></h3>
        <p><FormattedMessage id='sponsorship.every_bit_helps' defaultMessage='Every little bit helps, and we appreciate all contributions.' /></p>
        <a href='https://patreon.com/mastodon' className='cta button alt'><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></a>
      </div>

      <Legal />
    </div>
  </div>
);

export default Sponsorship;
