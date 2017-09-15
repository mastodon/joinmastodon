import React from 'react';

const Features = () => (
  <div id='features'>
    <div className='feature container'>
      <div className='right visual'><i className='ion-chatboxes' /></div>
      <div className='left text'>
        <h2>Built for real conversation</h2>
        <p>With <strong>500 characters per post</strong>, you get plenty of space to go deep into topics, instead of constraining statuses to surface-level quips. Built-in support for levels of <strong>audience selection</strong>, from posting in the public stream to selecting more specific audiences, and <strong>content and spoiler warnings</strong> let you share sensitive discussions and media with only those who want to see them. Oh, and the posts are <strong>displayed in order</strong> too.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-android-globe' /></div>
      <div className='right text'>
        <h2>Find your perfect place</h2>
        <p>Similar to how everyone’s emails work across different companies, Mastodon is a <strong>federated network</strong> of different @people, #interests, needs, and languages, <strong>self-hosted by you, others and organizations</strong>. Pick an instance community that suits you out of a diverse pool from all over the world. Regardless of which one you choose, <strong>you can always interact with everyone else</strong>.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-leaf' /></div>
      <div className='left text'>
        <h2>Start your own community</h2>
        <p>Not satisfied by the existing ones? You find their terms too restrictive or too lax? Or you just want to regroup people with a specific interest? Start your instance, write down your rules and join the federation by yourself! For your friends, your family or just you, for your local association, your school or your town, or just for fun and the pleasure of setting up your own silly rules.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='left visual'><i className='ion-ios-people' /></div>
      <div className='right text'>
        <h2>You&rsquo;re a person, not a product</h2>
        <p>Mastodon is free, open source software. The development is crowdfunded. All instances are <strong>independently owned, hosted, and moderated</strong>. There is no monopoly by a single commercial company, no ads, no tracking. The software works for you, and not the other way around.</p>
      </div>
    </div>

    <div className='feature container'>
      <div className='right visual'><i className='ion-iphone' /></div>
      <div className='left text'>
        <h2>Always within reach</h2>
        <p>With <strong>multiple apps available</strong> for iOS, Android, and every platform you can think of, Mastodon is easy to use everywhere you go. A <strong>simple and open API</strong> ensures a rich ecosystem of 3rd party apps.</p>
      </div>
    </div>
  </div>
);

export default Features;
