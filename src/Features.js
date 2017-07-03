import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => (
  <div>
    <div className='feature container'>
      <div className='right visual'><i className='ion-android-globe' /></div>
      <div className='left text'>
        <h2>Find your perfect place</h2>
        <p>Mastodon is a federated network. Pick an instance that suits you, out of a diverse pool for all sorts of interests, needs, and languages, <strong>run by independent people and organizations</strong>. Regardless of which one you choose, <strong>you can always interact with everyone else</strong>.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-chatboxes' /></div>
      <div className='right text'>
        <h2>Built for real conversation</h2>
        <p>With <strong>500 characters per post</strong>, you get plenty of space to go deep into topics, instead of just making surface-level quips. Built-in <strong>support for content and spoiler warnings</strong> lets you share sensitive discussions and media with only those who want to see them.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-ios-people' /></div>
      <div className='left text'>
        <h2>You&rsquo;re a person, not a product</h2>
        <p>Mastodon is <strong>free, open source software</strong>. The development is crowdfunded. All instances are independently owned, hosted, and moderated. <strong>There is no monopoly by a single commercial company, no ads, no tracking</strong>.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-iphone' /></div>
      <div className='right text'>
        <h2>Always within reach</h2>
        <p>With <strong>multiple apps available for iOS, Android, and every platform you can think of</strong>, Mastodon is easy to use everywhere you go. An easy to use and open API ensures a rich ecosystem of 3rd party apps.</p>
      </div>
    </div>

    <div className='bottom-cta'>
      <Link to='/wizard' className='cta button'>Find an instance</Link>
      <br/>
      or <a href='https://github.com/tootsuite/mastodon' className='cta secondary'>start your own</a>
    </div>
  </div>
);

export default Features;
