import React from 'react';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ArrowLink from './ArrowLink';

const Features = () => (
  <div id='features'>
    <div className='feature container'>
      <div className='right visual'><i className='ion-md-globe' /></div>
      <div className='left text'>
        <i className='xs-show ion-md-globe' />
        <h2><FormattedMessage id='features.find_your_community' defaultMessage='Find your perfect community' /></h2>
        <p><FormattedMessage id='features.find_your_community_text' defaultMessage="Mastodon isn’t a single website like Twitter or Facebook, it's a network of thousands of servers, some running different software, operated by different organizations and individuals that provide a seamless social media experience. On top of other Mastodon servers (called 'instances'), Mastodon communicates with other social media services like Misskey, Pleroma, WriteFreely, PeerTube, and much more to provide a cross-compatible experience on what's known as the Fediverse." /></p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-md-lock' /></div>
      <div className='right text'>
        <i className='xs-show ion-md-lock' />
        <h2><FormattedMessage id='features.safer_social_media' defaultMessage='Safer social media experience' /></h2>
        <p><FormattedMessage id='features.safer_social_media_text' defaultMessage="Mastodon comes with <strong>effective anti-abuse tools</strong> to help protect yourself. Thanks to the network's spread out and independent nature there are <strong>more moderators</strong> who you can approach for personal help, and <strong>communities with strict codes of conduct</strong>." /></p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-md-list-box' /></div>
      <div className='left text'>
        <i className='xs-show ion-md-list-box' />
        <h2><FormattedMessage id='features.posting' defaultMessage='Sharing your thoughts has never been more convenient' /></h2>
        <p><FormattedMessage id='features.posting_text' defaultMessage="You have 500 characters. You can adjust the thumbnails of your pictures with focal points. You can use custom emojis, hide things behind spoiler warnings and choose who sees a given post. Messed it up? You can delete & redraft for quick corrections." /></p>
      </div>
    </div>

    <div className='container'>
      <div className='banner'>
        <Link to='/communities' className='cta button'><FormattedMessage id='home.get_started' defaultMessage='Get started' /></Link>
      </div>
    </div>

    <div className='container feature'>
      <div className='feature-angle-container'>
        <div className='feature-angle'>
          <i className='ion-md-book' />
          <h3><FormattedMessage id='features.for_individual' defaultMessage='Mastodon for the individual' /></h3>
          <p><FormattedMessage id='features.for_individual_text' defaultMessage='Without an incentive to sell you things, Mastodon allows you to consume content you enjoy uninterrupted. Your feed is chronological, ad-free and non-algorithmic—you decide who you want to see!' /></p>
          <ArrowLink to='/communities' className='link-button'><FormattedMessage id='features.join_community' defaultMessage='Join a community' /></ArrowLink>
        </div>

        <div className='feature-angle'>
          <i className='ion-md-business' />
          <h3><FormattedMessage id='features.for_organization' defaultMessage='Mastodon for the organization' /></h3>
          <p><FormattedMessage id='features.for_organization_text' defaultMessage='Host your own social media platform on your own infrastructure. Don&apos;t let your business or non-profit depend on a company that could change the rules of the game—write your own rules!' /></p>
          <ArrowLink href='https://docs.joinmastodon.org/user/run-your-own/' target='_blank' rel='noopener noreferrer' className='link-button'><FormattedMessage id='features.install_server' defaultMessage='Install a server' /></ArrowLink>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
