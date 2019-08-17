import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';
import Legal from './Legal';
import { sponsors as platinumSponsors } from './Home';

import sponsorRubymotion from './assets/sponsors/rubymotion.png';
import sponsorBambooHow from './assets/sponsors/bamboohow.png';
import sponsorWriteAs from './assets/sponsors/writeas-logo-dark.svg';
import sponsorThanksblock from './assets/sponsors/thanksblock.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarVJ from './assets/sponsors/vj.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarMarkAtwood from './assets/sponsors/markatwood.jpg';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarArasPranckevicius from './assets/sponsors/araspranckevicius.jpeg';
import avatarPickfu from './assets/sponsors/pickfu.png';
import avatarLookToTheRight from './assets/sponsors/looktotheright.png';
import avatarSexToyCollective from './assets/sponsors/sextoycollective.jpg';
import avatarTnzk from './assets/sponsors/tnzk.png';
import avatarTakeShape from './assets/sponsors/takeshape.jpg';
import avatarPaperLeaf from './assets/sponsors/paperleaf.jpg';
import avatarClay from './assets/sponsors/clay.png';
import avatarCraftResumes from './assets/sponsors/craftresumes.png';
import avatarTomoki from './assets/sponsors/tomoki.png';
import avatarEduReviewer from './assets/sponsors/edureviewer.jpg';
import avatarTradersInsurance from './assets/sponsors/tradersinsurance.png';
import avatarSwitchVPN from './assets/sponsors/switchvpn.png';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: 'rgba(217, 225, 232, 0.7)',
    borderRadius: '4px',
  };

  return <div style={{ ...style, ...thumbStyle }} />;
};

const goldSponsors = [
  { href: 'http://www.rubymotion.com/', src: sponsorRubymotion, alt: 'RubyMotion' },
  { href: 'mailto:bamboo.how@gmail.com', src: sponsorBambooHow, alt: 'Bamboo How' },
  { href: 'https://write.as/', src: sponsorWriteAs, alt: 'Write.as' },
  { href: 'https://www.justhanks.com/', src: sponsorThanksblock, alt: 'THANKSBLOCK' },
];

const silverSponsors = [
  { href: 'https://ichiji.social/@tnzk', src: avatarTnzk, name: 'Kyohei Hamaguchi / @tnzk' },
  { href: 'https://mastodon.gamedev.place/@aras', src: avatarArasPranckevicius, name: 'Aras Pranckevicius' },
  { name: 'Blaine Cook' },
  { href: 'https://clay.global/', src: avatarClay, name: 'Clay' },
  { href: 'https://edureviewer.com/', src: avatarEduReviewer, name: 'Edu Reviewer' },
  { href: 'https://www.signomatic.com.au/', name: 'Signomatic.com.au' },
  { href: 'https://identi.ca/evan', src: avatarEvan, name: 'Evan Prodromou' },
  { href: 'https://vocalodon.net/@tomoki', src: avatarTomoki, name: 'Hiroyuki Wakimoto (TOMOKI++)' },
  { href: 'https://spicedupaffairs.com/', name: 'SUA' },
  { href: 'https://sextoycollective.com', src: avatarSexToyCollective, name: 'SexToyCollective' },
  { href: 'https://www.slixa.com/', name: 'Slixa Escort Directory' },
  { href: 'https://www.looktotheright.com/', src: avatarLookToTheRight, name: 'Look To The Right' },
  { href: 'https://about.me/markatwood', src: avatarMarkAtwood, name: 'Mark Atwood' },
  { name: 'Martin Seeger' },
  { name: 'Ms Miller' },
  { href: 'https://dtp-mstdn.jp', src: avatarNoellabo, name: 'noellabo' },
  { href: 'https://paperleaf.ca/', src: avatarPaperLeaf, name: 'PaperLeaf' },
  { href: 'https://craftresumes.com/', src: avatarCraftResumes, name: 'CraftResumes' },
  { href: 'https://www.pickfu.com/', src: avatarPickfu, name: 'PickFu' },
  { href: 'https://www.whatisseo.com/', src: avatarVJ, name: 'VJ' },
  { href: 'https://www.takeshape.io/', src: avatarTakeShape, name: 'TakeShape' }, // OpenCollective
  { href: 'https://www.traders-insurance.com/', src: avatarTradersInsurance, name: 'Traders Insurance' },
  { href: 'https://switchvpn.net/', src: avatarSwitchVPN, name: 'Switch VPN' },
  { href: 'https://www.minitool.com/', name: 'MiniTool' },
  { href: 'https://1234.as', name: '1234.as (中文实例)', nofollow: true },
  { href: 'https://theenhancedmale.com', name: 'The Enhanced Male', nofollow: true },
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
              <li>Ken Naishtat</li>
              <li>Moritz Heiber</li>
              <li>Nolan Lawson</li>
              <li>@mecab</li>
              <li>Great Scott Gadgets</li>
              <li>Sho Kusano / rosylilly</li>
              <li>Masto.host</li>
              <li>Brion Vibber</li>
              <li>G Berton Latamore</li>
              <li>Andrei Petcu</li>
              <li>Local Librarian</li>
              <li>Joyce Mayorga</li>
            </ul>

            <ul>
              <li>_</li>
              <li>Akihiko Odaki</li>
              <li>Al</li>
              <li>Anticrisis</li>
              <li>Ash</li>
              <li>Austin Putman</li>
              <li>Bal</li>
              <li>Baptiste Lemoine</li>
              <li>Bheesham Persaud</li>
              <li>C J Silverio</li>
              <li>Charles Hutchins</li>
              <li>Chris Hanson</li>
              <li>Chris Zelenak</li>
              <li>Christopher Kruse</li>
              <li>Clinton Freeman</li>
              <li>danny.zukou</li>
              <li>David Yip</li>
              <li>Deborah Goldsmith</li>
              <li>Drew Williams</li>
              <li>Ellen Teapot</li>
              <li>Evan DiBiase</li>
              <li>Grant Stavely</li>
              <li>Graywind</li>
              <li>Hau Ngo</li>
              <li>Hideki Yamamoto</li>
              <li>Igor Ferreira</li>
              <li>Irick Corwal</li>
              <li>Isao Sugimoto</li>
              <li>itsumonotakumi</li>
              <li>James Valleroy</li>
              <li>James Wright</li>
              <li>Jan Krutisch</li>
              <li>Jen Savage</li>
              <li>Jesse Olson</li>
              <li>Jin Shiiba</li>
              <li>Joe McLaughlin</li>
              <li>John Newberger</li>
              <li>Jon Dubovsky</li>
              <li>Jonas Wisser</li>
              <li>Jonathan Cremin</li>
              <li>Josef Kenny</li>
              <li>Josephine Pedersen</li>
              <li>Josh</li>
              <li>Julie Moronuki</li>
              <li>Kenneth Ken Sugar</li>
              <li>Kevin Hoctor</li>
              <li>Kevin Sonney</li>
              <li>Kevin Yank</li>
              <li>Konosuke Furuhata</li>
              <li>Koya Matsuo</li>
              <li>Landy Manderson</li>
              <li>Laurent Joubert</li>
              <li>Laurie Voss</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Local Librarian</li>
              <li>Lon Hohberger</li>
              <li>lrvick</li>
              <li>Manesh Pillai</li>
              <li>Masaya Imai</li>
              <li>Matt Ulman</li>
              <li>Matthieu Herrb</li>
              <li>Mikayla Hutchinson</li>
              <li>Miki Habryn</li>
              <li>Mrpdub247</li>
              <li>Naomi Alderman</li>
              <li>Nate Borland</li>
              <li>Nemecle</li>
              <li>Nican</li>
              <li>Nicolas Morel</li>
              <li>nosuchbinary</li>
              <li>Osamu Miyake</li>
              <li>Pablo Meier</li>
              <li>Patrick Quinn-Graham</li>
              <li>Paul Lindner</li>
              <li>peter hessler</li>
              <li>Philip James</li>
              <li>Philippe Hausler</li>
              <li>Piotr Krygier</li>
              <li>Richard Minerich</li>
              <li>Ruben</li>
              <li>Rufus</li>
              <li>Sajith Sasidharan</li>
              <li>Sam Herlapuut</li>
              <li>Sandro Hawke</li>
              <li>Satsuki Yanagi</li>
              <li>Solar Anamnesis</li>
              <li>Steve Streza</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>TARIK F AJAMI</li>
              <li>Ted</li>
              <li>tiansheng li</li>
              <li>Timothy Wood</li>
              <li>Tom Adriaenssen</li>
              <li>Tom Lowenthal</li>
              <li>Walter Ebert</li>
              <li>Wladimir</li>
              <li>Wolfgang @vilbi</li>
              <li>Wolfgang Dudda</li>
              <li>Zaki</li>
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
