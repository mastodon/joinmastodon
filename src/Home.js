import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import YouTube from 'react-youtube';

import Features from './Features';
import Credits from './Credits';
import Testimonials from './Testimonials';
import Navigation from './Navigation';
import Title from './Title';

import sponsorLunanode from './assets/sponsors/lunanode_alt.png';
import sponsorTrueVendor from './assets/sponsors/truevendor.png';
import sponsorVPNRanks from './assets/sponsors/vpnranks-v2.png';
import sponsorAirVPN from './assets/sponsors/airvpn.png';
import sponsorFireStickTricks from './assets/sponsors/firesticktricks-logo.png';
import sponsorSexToyEducation from './assets/sponsors/sextoyeducation.jpg';
import sponsorPapersOwl from './assets/sponsors/papersowl.png';
import sponsorValueMarke from './assets/sponsors/valuemarke.png';
import sponsorMiniTool from './assets/sponsors/minitool.png';
import avatarSexToyCollective from './assets/sponsors/sextoycollective.jpg';
import sponsorVPSServer from './assets/sponsors/vpsserver2.png';
import sponsorCibdol from './assets/sponsors/cibdol.png';
import sponsorBetrugstest from './assets/sponsors/betrugstest-com.png';
import sponsorSujitech from './assets/sponsors/mask-network.png';
import sponsorBCS from './assets/sponsors/bcs-white.png';
import sponsorBCO from './assets/sponsors/BesteCasinosOnline.png';
import sponsorSisterSites from './assets/sponsors/sistersites-logo.png';
import sponsorSchnellNode from './assets/sponsors/schnellnode.png';
import sponsorAusCasinos from './assets/sponsors/auscasinos.png';
import sponsorMastoHost from './assets/sponsors/MH-horizontal-white.png';
import sponsorAssemblyFour from './assets/sponsors/a4.png';
import sponsorHexCa from './assets/sponsors/hex-ca.png';
import sponsorJLD from './assets/sponsors/jld_psd_logo_orig_black.png'
import sponsorKasynoHex from './assets/sponsors/kasynohex.svg';
import sponsorAltCasino from './assets/sponsors/alt-casino-1.png';
import sponsorNettikasinot from './assets/sponsors/nettikasinot.svg';
import sponsorOnlineCasinos from './assets/sponsors/onlinecasinos.a2791b0.png';

import wiredLogo from './assets/wired-logo.svg';
import theVergeLogo from './assets/the-verge-logo.svg';
import motherboardLogo from './assets/motherboard-logo.svg';
import nytLogo from './assets/nyt-logo.svg';
import nprLogo from './assets/npr-logo.svg';

import screenshotFull from './assets/screenshot_full.png';
import screenshotMobile from './assets/screenshot_mobile.png';

import cloud2 from './assets/cloud2.png';
import cloud3 from './assets/cloud3.png';
import cloud4 from './assets/cloud4.png';

const USERS_NUM_APPROX = 4380865;

const styles = {
  modal: {
    padding: 0,
    lineHeight: 0,
  },

  closeIcon: {
    zIndex: 200,
    right: '-40px',
    top: '-30px',
    fill: 'white',
  },

};

const playerOpts = {
  width: 720,
  height: 405,

  playerVars: {
    autoplay: 1,
  },
};

export const sponsors = [
  { href: 'https://www.lunanode.com/', src: sponsorLunanode, alt: 'Lunanode' },
  { href: 'https://www.ramotion.com/agency/ui-ux-design', src: sponsorTrueVendor, alt: 'UI/UX Designer' },
  { href: 'https://www.vpnranks.com/', src: sponsorVPNRanks, alt: 'VPN Ranks' },
  { href: 'https://airvpn.org/landing/mastodon', src: sponsorAirVPN, alt: 'AirVPN' },
  { href: 'https://www.firesticktricks.com/', src: sponsorFireStickTricks, alt: 'Fire Stick Tricks' }, // OpenCollective
  { href: 'https://sextoyeducation.com/', src: sponsorSexToyEducation, alt: 'Sex Toy Education' },
  { href: 'https://papersowl.com/write-my-essay-please', src: sponsorPapersOwl, alt: 'Free plagiarism checker' },
  { href: 'https://www.valuemarke.com/', src: sponsorValueMarke, alt: 'ValueMarke' },
  { href: 'https://www.minitool.com/', src: sponsorMiniTool, alt: 'MiniTool' },
  { href: 'https://sextoycollective.com', src: avatarSexToyCollective, alt: 'SexToyCollective' },
  { href: 'https://www.vpsserver.com/', src: sponsorVPSServer, alt: 'VPS Server' },
  { href: 'https://www.cibdol.com/', src: sponsorCibdol, alt: 'cibdol cbd oil' }, // Custom/other
  { href: 'https://www.betrugstest.com/', src: sponsorBetrugstest, alt: 'Betrugstest.com' }, // Custom/other
  { href: 'https://mask.io/', src: sponsorSujitech, alt: 'Mask Network' }, // Custom
  { href: 'https://www.bestcasinosites.net', src: sponsorBCS, alt: 'bestcasinosites.net' }, // Custom/other
  { href: 'https://www.bestecasinosonline.at/', src: sponsorBCO, alt: 'bestecasinosonline.at' }, // Custom
  { href: 'https://www.sister-sites.co.uk/', src: sponsorSisterSites, alt: 'sister-sites.co.uk' }, // Custom
  { href: 'https://schnellno.de/', src: sponsorSchnellNode, alt: 'Schnell Node' }, // Custom
  { href: 'https://masto.host/', src: sponsorMastoHost, alt: 'Masto.host - Fully managed Mastodon hosting' }, // Custom
  { href: 'https://assemblyfour.com/', src: sponsorAssemblyFour, alt: 'Assembly Four' }, // Custom
  { href: 'https://www.auscasinos.com/new/', src: sponsorAusCasinos, alt: 'AusCasinos.com New Site Section' }, // Custom
  { href: 'https://onlinecasinohex.ca/', src: sponsorHexCa, alt: 'OnlineCasinoHEX.ca' }, // Custom
  { href: 'https://www.joylovedolls.com/', src: sponsorJLD, name: 'Joy Love Dolls' }, // Custom
  { href: 'https://kasynohex.com/kasyna-online/', src: sponsorKasynoHex, alt: 'Casino online PL' }, // Custom
  { href: 'https://www.globenewswire.com/news-release/2021/04/07/2206309/0/en/10-Best-Online-Casinos-in-Australia-List-of-Real-Money-Pokies-Sites-Rated-By-Users-and-Popularity.html', src: sponsorAltCasino, alt: 'Online Casinos Australia' }, // Custom
  { href: 'https://www.nettikasinot.org/', src: sponsorNettikasinot, alt: 'Nettikasinot' },
  { href: 'https://www.onlinecasinos.net/', src: sponsorOnlineCasinos, alt: 'OnlineCasinos.net' }, // Custom
];

export default class Home extends PureComponent {

  static contextTypes = {
    intl: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  state = {
    open: false,
  };

  setModalRef = c => {
    this.modal = c;
  }

  setPlayerRef = e => {
    this.player = e.target;
    this.player.playVideo();
  }

  handleHowItWorksClick = () => {
    this.setState({ open: true });

    if (this.player) {
      this.player.playVideo();
    }
  }

  onCloseModal = () => {
    this.setState({ open: false });

    if (this.player) {
      this.player.pauseVideo();
    }
  }

  render () {
    const { open } = this.state;
    const { intl } = this.context;

    return (
      <div>
        <div className='intro'>
          <Navigation />

          <div className='text'>
            <h1><FormattedMessage id='home.headline' defaultMessage='Social networking, <strong>back in your hands</strong>' /></h1>
            <p><FormattedMessage id='home.tagline3' defaultMessage='Follow friends and discover new ones among more than {count}M people. Publish anything you want: links, pictures, text, video. All on a platform that is community-owned and ad-free.' values={{ count: intl.formatNumber(USERS_NUM_APPROX / (1000 * 1000), { maximumFractionDigits: 1 }) }} /></p>

            <Link to='/communities' className='cta button'><FormattedMessage id='home.get_started' defaultMessage='Get started' /></Link>
            <button className='cta button alt' onClick={this.handleHowItWorksClick}><span className='icon-circled'><span className='ion-md-play' /></span><FormattedMessage id='home.how_it_works' defaultMessage='How it works' /></button>
          </div>

          <div className='hero'>
            <div className='hero__floats'>
              <img src={cloud2} className='float-1' alt='Cloud 1' />
              <img src={cloud4} className='float-2' alt='Cloud 2' />
              <img src={cloud3} className='float-3' alt='Cloud 3' />
            </div>

            <img className='desktop' src={screenshotFull} alt='Screenshot of Mastodon on desktop'/>
            <img className='mobile' src={screenshotMobile} alt='Screenshot of Mastodon on mobile'/>
          </div>
        </div>

        <div className='as-seen-on'>
          <div className='container'>
            <h2><FormattedMessage id='home.as_seen_on' defaultMessage='As seen on' /></h2>

            <div className='logo-grid'>
              <div>
                <a href='https://motherboard.vice.com/en_us/article/mastodon-is-like-twitter-without-nazis-so-why-are-we-not-using-it' className='logo-motherboard'><img src={motherboardLogo} alt='Motherboard' /></a>
                <a href='https://www.nytimes.com/2018/03/28/technology/social-media-privacy.html' className='logo-new-york-times'><img src={nytLogo} alt='New York Times' /></a>
              </div>

              <div>
                <a href='http://www.theverge.com/2017/4/4/15177856/mastodon-social-network-twitter-clone' className='logo-the-verge'><img src={theVergeLogo} alt='The Verge' /></a>
                <a href='https://www.wired.com/2017/04/like-twitter-hate-trolls-try-mastodon/' className='logo-wired'><img src={wiredLogo} alt='Wired' /></a>
              </div>

              <div>
                <a href='https://www.npr.org/sections/thetwo-way/2018/05/01/607361849/as-facebook-shows-its-flaws-what-might-a-better-social-network-look-like' className='logo-npr'><img src={nprLogo} alt='NPR' /></a>
              </div>
            </div>
          </div>
        </div>

        <Features />
        <Testimonials />

        <div className='frontpage-sponsorship'>
          <div className='container'>
            <h2><FormattedMessage id='home.sponsored_by' defaultMessage='Sponsored by' /></h2>

            <div className='logo-grid'>
              <div>
                {sponsors.map(x => <a key={x.href} href={x.href}><img src={x.src} alt={x.alt} /></a>)}
              </div>
            </div>
          </div>
        </div>

        <Credits />

        <Modal open={open} onClose={this.onCloseModal} little showCloseIcon styles={styles}>
          <YouTube videoId='IPSbNdBmWKE' onReady={this.setPlayerRef} opts={playerOpts} />
        </Modal>

        <Title />
      </div>
    );
  }

}
