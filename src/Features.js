import React from 'react';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import AnchorLink from './AnchorLink';

const Features = () => (
  <div id='features'>
    <div className='feature container'>
      <div className='right visual'><i className='ion-md-globe' /></div>
      <div className='left text'>
        <i className='xs-show ion-md-globe' />
        <h2><FormattedMessage id='features.find_your_community' defaultMessage='Find your perfect community' /></h2>
        <p><FormattedMessage id='features.find_your_community_text2' defaultMessage="Mastodon isn’t just a website, it is a federation&mdash;think Star Trek. Thousands of independent communities running Mastodon form a coherent network, where while every planet is different, being part of one is being part of the whole." /></p>
        <AnchorLink href='#getting-started' className='link-button'><FormattedMessage id='features.browse_servers' defaultMessage='Browse the communities' /> <i className='ion-ios-arrow-forward' /></AnchorLink>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-md-lock' /></div>
      <div className='right text'>
        <i className='xs-show ion-md-lock' />
        <h2><FormattedMessage id='features.safety2' defaultMessage='Safer social media experience' /></h2>
        <p><FormattedMessage id='features.safety_text2' defaultMessage="Mastodon comes with <strong>effective anti-abuse tools</strong> to help protect yourself. Thanks to the network's spread out and independent nature there are <strong>more moderators</strong> who you can approach for personal help, and <strong>servers with strict codes of conduct</strong>." /></p>
        <a href='https://blog.joinmastodon.org/2018/07/cage-the-mastodon/' className='link-button' target='_blank'><FormattedMessage id='features.read_more' defaultMessage='Read more' /> <i className='ion-ios-arrow-forward' /></a>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-md-list-box' /></div>
      <div className='left text'>
        <i className='xs-show ion-md-list-box' />
        <h2><FormattedMessage id='features.posting' defaultMessage='Sharing your thoughts has never been more convenient' /></h2>
        <p><FormattedMessage id='features.posting_text' defaultMessage="You have 500 characters. You can adjust the thumbnails of your pictures with focal points. You can use custom emojis, hide things behind spoiler warnings and choose who sees a given post. Messed it up? You can delete & redraft for quick corrections." /></p>
        <AnchorLink href='#getting-started' className='link-button'><FormattedMessage id='home.get_started' defaultMessage='Get started' /> <i className='ion-ios-arrow-forward' /></AnchorLink>
      </div>
    </div>

    <hr />

    <div className='container feature'>
      <div className='feature-angle-container'>
        <div className='feature-angle'>
          <i className='ion-md-book' />
          <h3><FormattedMessage id='features.for_individual' defaultMessage='Mastodon for the individual' /></h3>
          <p><FormattedMessage id='features.for_individual_text' defaultMessage='Without an incentive to sell you things, Mastodon allows you to consume content you enjoy uninterrupted. Your feed is chronological, ad-free and non-algorithmic—you decide who you want to see!' /></p>
          <AnchorLink href='#getting-started' className='link-button'><FormattedMessage id='features.join_server' defaultMessage='Join a server' /> <i className='ion-ios-arrow-forward' /></AnchorLink>
        </div>

        <div className='feature-angle'>
          <i className='ion-md-business' />
          <h3><FormattedMessage id='features.for_organization' defaultMessage='Mastodon for the organization' /></h3>
          <p><FormattedMessage id='features.for_organization_text' defaultMessage='Host your own social media platform on your own infrastructure. Don&apos;t let your business or non-profit depend on a company that could change the rules of the game—write your own rules!' /></p>
          <AnchorLink href='#install' className='link-button'><FormattedMessage id='features.install_server' defaultMessage='Install a server' /> <i className='ion-ios-arrow-forward' /></AnchorLink>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
