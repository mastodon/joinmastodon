import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { changeFilterCategory, changeFilterLanguage, changeLocale } from './actions';
import AnchorLink from './AnchorLink';
import Modal from 'react-responsive-modal';
import YouTube from 'react-youtube';

import Features from './Features';
import Wizard from './WizardContainer';
import HowItWorks from './HowItWorks';
import Credits from './Credits';
import Navigation from './Navigation';

import sponsorFediverseNetwork from './assets/sponsors/fediversenetwork.svg';
import sponsorLunanode from './assets/sponsors/lunanode_alt.png';
import sponsorPleroma from './assets/sponsors/pleroma_banner.png';
import sponsorTrueVendor from './assets/sponsors/truevendor.png';
import sponsorBestVPN from './assets/sponsors/bestvpn.png';
import sponsorVPNRanks from './assets/sponsors/vpnranks.png';
import sponsorAirVPN from './assets/sponsors/airvpn.png';
import sponsorFireStickTricks from './assets/sponsors/firesticktricks-logo.png';
import sponsorSexToyEducation from './assets/sponsors/sextoyeducation.jpg';
import sponsorTekHattan from './assets/sponsors/tekhattan.png';

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

const USERS_NUM_APPROX = 2230012;

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
  { href: 'https://pleroma.social/', src: sponsorPleroma, alt: 'Pleroma' },
  { href: 'https://uiuxagencies.top/', src: sponsorTrueVendor, alt: 'TrueVendor' },
  { href: 'https://www.bestvpn.co/', src: sponsorBestVPN, alt: 'BestVPN' },
  { href: 'https://www.vpnranks.com/', src: sponsorVPNRanks, alt: 'VPN Ranks' },
  { href: 'https://airvpn.org/landing/mastodon', src: sponsorAirVPN, alt: 'AirVPN' },
  { href: 'https://www.firesticktricks.com/', src: sponsorFireStickTricks, alt: 'Fire Stick Tricks' }, // OpenCollective
  { href: 'https://sextoyeducation.com/', src: sponsorSexToyEducation, alt: 'Sex Toy Education' },
  { href: 'https://tekhattan.com/blog/', src: sponsorTekHattan, alt: 'TekHattan Blog' },
  { href: 'https://fediverse.network/', src: sponsorFediverseNetwork, alt: 'Fediverse network' }, // OpenCollective
];

export default connect()(
class Home extends PureComponent {

  static contextTypes = {
    intl: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        category: PropTypes.string,
        language: PropTypes.string,
      }),
    }),
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

  componentWillMount () {
    const { params } = this.props.match;

    if (params && params.category) {
      this.props.dispatch(changeFilterCategory(params.category));
    }

    if (params && params.language) {
      this.props.dispatch(changeLocale(params.language));
      this.props.dispatch(changeFilterLanguage(params.language));
    }
  }

  componentDidMount () {
    const { params } = this.props.match;

    if (params && (params.category || params.language) && this.anchorLink) {
      this.anchorLink.smoothScroll();
    }
  }

  componentWillReceiveProps (nextProps) {
    const { params } = nextProps.match;

    if (params && params.category) {
      this.props.dispatch(changeFilterCategory(params.category));
    }

    if (params && params.language) {
      this.props.dispatch(changeLocale(params.language));
      this.props.dispatch(changeFilterLanguage(params.language));
    }
  }

  setAnchorLinkRef = c => {
    this.anchorLink = c;
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

            <AnchorLink href='#getting-started' className='cta button' ref={this.setAnchorLinkRef}><FormattedMessage id='home.get_started' defaultMessage='Get started' /></AnchorLink>
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

        <div className='frontpage-sponsorship'>
          <div className='container'>
            <h2><FormattedMessage id='home.sponsored_by' defaultMessage='Sponsored by' /> &bull; <Link to='/sponsors' className='link-button'><FormattedMessage id='home.view_all_sponsors' defaultMessage='View all' /> <i className='ion-ios-arrow-forward' /></Link></h2>

            <div className='logo-grid'>
              <div>
                {sponsors.map(x => <a key={x.href} href={x.href}><img src={x.src} alt={x.alt} /></a>)}
              </div>
            </div>
          </div>
        </div>

        <Wizard />

        <div className='bottom-cta' id='install'>
          <div className='container'>
            <h3><FormattedMessage id='home.install_your_own' defaultMessage='Install your own' /></h3>
            <p><FormattedMessage id='home.install_your_own_text' defaultMessage='If you are interested in running your own server &mdash; for your friends, family or organization &mdash; you can get started by reading the installation documentation. You only host your own users and the content that they subscribe to, which means it&apos;s quite scalable and resource-efficient.' /></p>
            <a href='https://docs.joinmastodon.org/administration/installation/' className='cta button'><FormattedMessage id='home.read_the_docs' defaultMessage='Read the docs' /></a>
            <a href='https://masto.host/' target='_blank' rel='noopener noreferrer' className='cta button alt'><FormattedMessage id='home.hosting' defaultMessage='Fully-managed Mastodon hosting' /></a>
          </div>
        </div>

        <HowItWorks />
        <Credits />

        <Modal open={open} onClose={this.onCloseModal} little showCloseIcon styles={styles}>
          <YouTube videoId='IPSbNdBmWKE' onReady={this.setPlayerRef} opts={playerOpts} />
        </Modal>
      </div>
    );
  }

});
