import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';
import Legal from './Legal';

//import sponsorStream from './assets/sponsors/stream.png';
import sponsorRubymotion from './assets/sponsors/rubymotion.png';
import sponsorBambooHow from './assets/sponsors/bamboohow.png';
import sponsorLunanode from './assets/sponsors/lunanode_alt.png';
import sponsorCodeFirst from './assets/sponsors/codefirst.png';
import sponsorDatantify from './assets/sponsors/datantify_alt.png';
import sponsorPleroma from './assets/sponsors/pleroma_banner.png';
import sponsorTrueVendor from './assets/sponsors/truevendor.png';
import sponsorBestVPN from './assets/sponsors/bestvpn.png';
import sponsorVPNRanks from './assets/sponsors/vpnranks.png';
import sponsorLesjeudis from './assets/sponsors/lesjeudis.png';
import sponsorAirVPN from './assets/sponsors/airvpn.png';
import sponsorFireStickTricks from './assets/sponsors/firesticktricks-logo.png';
import sponsorWriteAs from './assets/sponsors/writeas-logo-dark.svg';

import noAvatar from './assets/sponsors/32x32.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
import sponsorSDF from './assets/sponsors/sdf.png';
//import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';
import avatarVJ from './assets/sponsors/vj.png';
//import avatarIanna from './assets/sponsors/ianna.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarMarkAtwood from './assets/sponsors/markatwood.jpg';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarArasPranckevicius from './assets/sponsors/araspranckevicius.jpeg';
import avatarBenWerdmuller from './assets/sponsors/benwerdmuller.jpg';
import avatarPickfu from './assets/sponsors/pickfu.png';
import avatarLookToTheRight from './assets/sponsors/looktotheright.png';
import avatarEmpresso from './assets/sponsors/empresso.png';
import avatarSexToyCollective from './assets/sponsors/sextoycollective.jpg';
import avatarTnzk from './assets/sponsors/tnzk.png';
import avatarTakeShape from './assets/sponsors/takeshape.jpg';
import avatarPaperLeaf from './assets/sponsors/paperleaf.jpg';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: 'rgba(217, 225, 232, 0.7)',
    borderRadius: '4px',
  };

  return <div style={{ ...style, ...thumbStyle }} />;
};

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
            <a href='http://www.rubymotion.com/'><img src={sponsorRubymotion} alt='RubyMotion' /></a>
            <a href='https://mastodon.sdf.org'><img src={sponsorSDF} alt='SDF' /></a>
            <a href='mailto:bamboo.how@gmail.com'><img src={sponsorBambooHow} alt='Bamboo How' /></a>
            <a href='https://www.lunanode.com/'><img src={sponsorLunanode} alt='Lunanode' /></a>
            <a href='https://www.codefirst.co.uk/'><img src={sponsorCodeFirst} alt='CodeFirst' /></a>
            <a href='https://datantify.com/'><img src={sponsorDatantify} alt='Datantify' /></a>
            <a href='https://pleroma.social/'><img src={sponsorPleroma} alt='Pleroma' /></a>
            <a href='https://uiuxagencies.top/'><img src={sponsorTrueVendor} alt='TrueVendor' /></a>
            <a href='https://www.bestvpn.co/'><img src={sponsorBestVPN} alt='BestVPN' /></a>
            <a href='https://www.vpnranks.com/'><img src={sponsorVPNRanks} alt='VPN Ranks' /></a>
            <a href='https://www.lesjeudis.com/' className='logo-sponsor-lesjeudis'><img src={sponsorLesjeudis} alt='LesJeudis' /></a>
            <a href='https://airvpn.org/landing/mastodon' className='logo-sponsor-airvpn'><img src={sponsorAirVPN} alt='AirVPN' /></a>
            <a href='https://www.firesticktricks.com/' className='logo-sponsor-firesticktricks'><img src={sponsorFireStickTricks} alt='Fire Stick Tricks' /></a>
            <a href='https://write.as/' className='logo-sponsor-writeas'><img src={sponsorWriteAs} alt='Write.as' /></a>
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
            <li><a href='https://ichiji.social/@tnzk'><img src={avatarTnzk} alt='' /> <span><strong>Kyohei Hamaguchi / @tnzk</strong><span>https://ichiji.social/@tnzk</span></span></a></li>
            <li><a href='https://mastodon.gamedev.place/@aras'><img src={avatarArasPranckevicius} alt='' /> <span><strong>Aras Pranckevicius</strong><span>https://mastodon.gamedev.place/@aras</span></span></a></li>
            <li><a href='https://werd.io'><img src={avatarBenWerdmuller} alt='' /> <span><strong>Ben Werdmuller</strong><span>https://werd.io</span></span></a></li>
            <li><a href='https://joinmastodon.org/sponsors'><img src={noAvatar} alt='' /> <span><strong>Blaine Cook</strong><span>-</span></span></a></li>
            <li><a href='https://cloudfleet.io'><img src={avatarCloudfleet} alt='' /> <span><strong>CloudFleet</strong><span>https://cloudfleet.io</span></span></a></li>
            <li><a href='https://www.signomatic.com.au/'><img src={noAvatar} alt='' /> <span><strong>Signomatic.com.au</strong><span>https://www.signomatic.com.au/</span></span></a></li>
            <li><a href='https://identi.ca/evan'><img src={avatarEvan} alt='' /> <span><strong>Evan Prodromou</strong><span>https://identi.ca/evan</span></span></a></li>
            <li><a href='https://empresso.ma'><img src={avatarEmpresso} alt='' /> <span><strong>Carte visite</strong><span>https://empresso.ma</span></span></a></li>
            <li><a href='https://joinmastodon.org/sponsors'><img src={noAvatar} alt='' /> <span><strong>Hiroyuki Wakimoto (TOMOKI++)</strong><span>-</span></span></a></li>
            <li><a href='https://spicedupaffairs.com/'><img src={noAvatar} alt='' /> <span><strong>SUA</strong><span>https://spicedupaffairs.com/</span></span></a></li>
            <li><a href='https://sextoycollective.com'><img src={avatarSexToyCollective} alt='' /> <span><strong>SexToyCollective</strong><span>https://sextoycollective.com</span></span></a></li>
            <li><a href='https://www.slixa.com/'><img src={noAvatar} alt='' /> <span><strong>Slixa Escort Directory</strong><span>https://www.slixa.com/</span></span></a></li>
            <li><a href='https://joinmastodon.org/sponsors'><img src={noAvatar} alt='' /> <span><strong>Lee Ann</strong><span>-</span></span></a></li>
            <li><a href='https://www.looktotheright.com/'><img src={avatarLookToTheRight} alt='' /> <span><strong>Look To The Right</strong><span>https://www.looktotheright.com/</span></span></a></li>
            <li><a href='https://about.me/markatwood'><img src={avatarMarkAtwood} alt='' /> <span><strong>Mark Atwood</strong><span>https://about.me/markatwood</span></span></a></li>
            <li><a href='https://joinmastodon.org/sponsors'><img src={noAvatar} alt='' /> <span><strong>Martin Seeger</strong><span>-</span></span></a></li>
            <li><a href='https://joinmastodon.org/sponsors'><img src={noAvatar} alt='' /> <span><strong>Ms Miller</strong><span>-</span></span></a></li>
            <li><a href='https://dtp-mstdn.jp'><img src={avatarNoellabo} alt='' /> <span><strong>noellabo</strong><span>https://dtp-mstdn.jp</span></span></a></li>
            <li><a href='https://paperleaf.ca/'><img src={avatarPaperLeaf} alt='' /> <span><strong>PaperLeaf</strong><span>https://paperleaf.ca/</span></span></a></li>
            <li><a href='https://www.pickfu.com/'><img src={avatarPickfu} alt='' /> <span><strong>PickFu</strong><span>https://www.pickfu.com/</span></span></a></li>
            <li><a href='https://www.whatisseo.com/'><img src={avatarVJ} alt='' /> <span><strong>VJ</strong><span>https://www.whatisseo.com/</span></span></a></li>
            <li><a href='https://www.takeshape.io/'><img src={avatarTakeShape} alt='' /> <span><strong>TakeShape</strong><span>https://www.takeshape.io/</span></span></a></li>
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
              <li>Julie Moronuki</li>
              <li>Donald "Chronos" King</li>
              <li>Moritz Heiber</li>
              <li>Nolan Lawson</li>
              <li>Paco Hope</li>
              <li>Sean</li>
              <li>Great Scott Gadgets</li>
              <li>@mecab</li>
              <li>Sho Kusano / rosylilly</li>
              <li>Masto.host</li>
              <li>Ken Naishtat</li>
              <li>Danny O'Brien</li>
              <li>Brion Vibber</li>
              <li>Landy Manderson</li>
              <li>Andrei Petcu</li>
              <li>Joyce Mayorga</li>
              <li>Humblr Social</li>
            </ul>

            <ul>
              <li>Chris Zelenak</li>
              <li>Ted</li>
              <li>Irick Corwal</li>
              <li>Christopher Kruse</li>
              <li>Philip James</li>
              <li>Josef Kenny</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Ellen Teapot</li>
              <li>Austin Putman</li>
              <li>halcy</li>
              <li>David Yip</li>
              <li>ティン・ルーフ</li>
              <li>C J Silverio</li>
              <li>Paul Meier</li>
              <li>Miki Habryn</li>
              <li>Matthieu Herrb</li>
              <li>Igor Ferreira</li>
              <li>Olivia Mossberg</li>
              <li>Chris Johnson</li>
              <li>Sajith Sasidharan</li>
              <li>Aaron Williamson</li>
              <li>Kenneth Ken Sugar</li>
              <li>Joe McLaughlin</li>
              <li>Hideki Yamamoto</li>
              <li>Paul Lindner</li>
              <li>Jesse Olson</li>
              <li>Zaki</li>
              <li>Richard Minerich</li>
              <li>nobody</li>
              <li>Nicolai Schwarz</li>
              <li>Nemecle</li>
              <li>Josephine Pedersen</li>
              <li>Manesh Pillai</li>
              <li>3xv</li>
              <li>Alexander Zillion</li>
              <li>fairenoughschroedinger</li>
              <li>Yoshiki Kato</li>
              <li>Rufus</li>
              <li>Harukasan</li>
              <li>Charles Hutchins</li>
              <li>Laurent Joubert</li>
              <li>Local Librarian</li>
              <li>Kevin Sonney</li>
              <li>Lady Errant</li>
              <li>Bram</li>
              <li>Masaya Imai</li>
              <li>Konosuke Furuhata</li>
              <li>Sandro Hawke</li>
              <li>Koya Matsuo</li>
              <li>Osamu Miyake</li>
              <li>Solar Anamnesis</li>
              <li>Bheesham Persaud</li>
              <li>Akihiko Odaki</li>
              <li>Max</li>
              <li>Niko Autio</li>
              <li>James Valleroy</li>
              <li>Drew Williams</li>
              <li>A bowl of creamy tomato soup</li>
              <li>Clinton Freeman</li>
              <li>jeremy gray</li>
              <li>itsumonotakumi</li>
              <li>Spencer Alves</li>
              <li>Al</li>
              <li>peter hessler</li>
              <li>Ruben</li>
              <li>_</li>
              <li>tiansheng li</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>Jon Dubovsky</li>
              <li>Lon Hohberger</li>
              <li>Waldo</li>
              <li>Jen Savage</li>
              <li>lrvick</li>
              <li>Wolfgang @vilbi</li>
              <li>Wladimir</li>
              <li>Jonas Wisser</li>
              <li>Matt Ulman</li>
              <li>Deborah Goldsmith</li>
              <li>Nicolas Morel</li>
              <li>Timothy Wood</li>
              <li>Laurie Voss</li>
              <li>Philippe Hausler</li>
              <li>Joe Rosensteel</li>
              <li>Nate Borland</li>
              <li>Jan Krutisch</li>
              <li>Michael Lamers</li>
              <li>Michael Ellis</li>
              <li>Chris Hanson</li>
              <li>Kimberly Horne</li>
              <li>rootfs.ext2.gz</li>
              <li>Grant Stavely</li>
              <li>Evan DiBiase</li>
              <li>Ben Cohen</li>
              <li>Rob Napier</li>
              <li>Steve Streza</li>
              <li>Thijs van der Vossen</li>
              <li>Tom Adriaenssen</li>
              <li>Din of In</li>
              <li>Jeff McLeman</li>
              <li>Naomi Alderman</li>
              <li>mangochutney</li>
              <li>Aria Buckles</li>
              <li>Walter Ebert</li>
              <li>Wolfgang Dudda</li>
              <li>Jonathan Cremin</li>
              <li>Josh</li>
              <li>nosuchbinary</li>
              <li>Mikayla Hutchinson</li>
              <li>Abraham Hmiel</li>
              <li>Kevin Hoctor</li>
              <li>Jonathan Gerlach</li>
              <li>Patrick Quinn-Graham</li>
              <li>John Newberger</li>
              <li>Anticrisis</li>
              <li>YUKIMOCHI</li>
              <li>Nican</li>
              <li>Tom Lowenthal</li>
              <li>R</li>
              <li>TARIK F AJAMI</li>
              <li>twisterghost</li>
              <li>Satsuki Yanagi</li>
              <li>Baptiste Lemoine</li>
              <li>Caroline Brix</li>
              <li>John McAvey</li>
              <li>Kevin Yank</li>
              <li>Ash</li>
              <li>Gerriet Selent</li>
              <li>Gabe Kangas</li>
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
