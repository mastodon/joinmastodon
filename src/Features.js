import React from 'react';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';
import AnchorLink from './AnchorLink';

const Features = () => (
  <div id='features'>
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

    <hr />

    <div className='feature container'>
      <div className='right visual'><i className='ion-md-globe' /></div>
      <div className='left text'>
        <h2><i className='xs-show ion-md-globe' /><FormattedMessage id='features.find_your_community' defaultMessage='Find your perfect community' /></h2>
        <p><FormattedMessage id='features.find_your_community_text' defaultMessage='Mastodon isn’t one place and one set of rules: it’s <strong>thousands of unique, interconnected communities</strong> to choose from, filled with different people, interests, languages, and needs. Don’t like the rules? You’re free to join any community you like, or better yet: you can host your own, on your own terms!' /></p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-md-chatboxes' /></div>
      <div className='right text'>
        <h2><i className='xs-show ion-md-chatboxes' /><FormattedMessage id='features.take_control' defaultMessage='Take control of your content' /></h2>
        <p><FormattedMessage id='features.take_control_text' defaultMessage='With powerful tools to <strong>control who sees your posts</strong> and a <strong>500-character limit</strong>, Mastodon empowers you to share your ideas, unabridged.  The best part? <strong>All posts are in chronological order</strong>, not “optimized” to push ads into your timeline. With apps for iOS, Android, and every other platform imaginable, <strong>Mastodon is always at your fingertips</strong>.' /></p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-ios-people' /></div>
      <div className='left text'>
        <h2><i className='xs-show ion-ios-people' /><FormattedMessage id='features.user_first' defaultMessage='Putting people first' /></h2>
        <p><FormattedMessage id='features.user_first_text' defaultMessage='You’re a person, not a product. Mastodon is a free, open-source development that has been crowdfunded, not financed. All instances are <strong>independently owned, operated, and moderated</strong>. There is no monopoly by a single commercial company, no ads, and no tracking. <strong>Mastodon works for you</strong>, and not the other way around.' /></p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-ios-bonfire' /></div>
      <div className='right text'>
        <h2><i className='xs-show ion-ios-bonfire' /><FormattedMessage id='features.safety' defaultMessage='Feel safe in your community' /></h2>
        <p><FormattedMessage id='features.safety_text' defaultMessage='Mastodon comes with <strong>effective anti-abuse tools</strong> to help protect yourself from online abuse. With small, interconnected communities, it means that there are <strong>more moderators</strong> you can approach to help with a situation. This also means you can choose who sees your posts: friends, your community, or the entire fediverse.' /></p>
      </div>
    </div>

    <hr />

    <div className='feature container'>
      <div className='additional-features'>
        <h3><FormattedMessage id='features.additional' defaultMessage='Additional features' /></h3>
        <ul>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.anti_abuse' defaultMessage='Robust anti-abuse tools' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.post_filtering' defaultMessage='Granular post privacy' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.huge_audience' defaultMessage='Over a million people' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.deploy_own' defaultMessage='Easily deploy your own' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.toots' defaultMessage='They’re called toots' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.media_embedding' defaultMessage='Embed media in your posts' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.open_standards' defaultMessage='Built on open web standards' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.spoiler_warnings' defaultMessage='Spoiler warnings' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.relevancy' defaultMessage='You decide what’s relevant' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.custom_emoji' defaultMessage='Custom emoji' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.focal_points' defaultMessage='Focal points' /></div></li>
          <li><i className='ion-md-checkbox' /><div><FormattedMessage id='features.delete_redraft' defaultMessage='Delete & redraft' /></div></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Features;
