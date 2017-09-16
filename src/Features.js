import React from 'react';

const Features = () => (
  <div id='features'>
    <div className='feature container'>
      <div className='right visual'><i className='ion-android-globe' /></div>
      <div className='left text'>
        <h2>Find your perfect community</h2>
        <p>Mastodon isn’t one place and one set of rules: it’s <strong>thousands of unique, interconnected communities</strong> to choose from, filled with different people, interests, languages, and needs. Don’t like the rules? You’re free to join any community you like, or better yet: you can host your own, on your own terms!</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-chatboxes' /></div>
      <div className='right text'>
        <h2>Take control of your content</h2>
        <p>With powerful tools to <strong>control who sees your posts</strong> and a <strong>500-character limit</strong>, Mastodon empowers you to share your ideas, unabridged.  The best part? <strong>All posts are in chronological order</strong>, not “optimized” to push ads into your timeline. With apps for iOS, Android, and every other platform imaginable, <strong>Mastodon is always at your fingertips</strong>.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-ios-people' /></div>
      <div className='left text'>
        <h2>Putting the user first</h2>
        <p>You’re a person, not a product. Mastodon is a free, open-source development that has been crowdfunded, not financed. All instances are <strong>independently owned, operated, and moderated</strong>. There is no monopoly by a single commercial company, no ads, and no tracking. <strong>Mastodon works for you</strong>, and not the other way around.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-bonfire' /></div>
      <div className='right text'>
        <h2>Feel safe in your community</h2>
        <p>Mastodon comes with <strong>effective anti-abuse tools</strong> to help protect yourself from online abuse. With small, interconnected communities, it means that there are <strong>more moderators</strong> you can approach to help with a situation. This also means you can choose who sees your posts: friends, your community, or the entire fediverse.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='additional-features'>
        <h3>Additional features</h3>
        <ul>
          <li><i className='ion-android-checkbox' /><div>Robust anti-abuse tools</div></li>
          <li><i className='ion-android-checkbox' /><div>Flexible post filtering</div></li>
          <li><i className='ion-android-checkbox' /><div>A huge audience</div></li>
          <li><i className='ion-android-checkbox' /><div>Easily deploy your own</div></li>
          <li><i className='ion-android-checkbox' /><div>They're called toots</div></li>
          <li><i className='ion-android-checkbox' /><div>Embed media in your posts</div></li>
          <li><i className='ion-android-checkbox' /><div>Built on open web standards</div></li>
          <li><i className='ion-android-checkbox' /><div>Spoiler warnings</div></li>
          <li><i className='ion-android-checkbox' /><div>You decide what's relevant</div></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Features;
