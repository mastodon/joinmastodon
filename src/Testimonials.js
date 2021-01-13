import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedMessage } from 'react-intl';

import avatarPlaceholder from './assets/sponsors/32x32.png';

import avatarAutumnCheney from './assets/testimonials/avatar_autumncheney.jpg';
import avatarCraigMaloney from './assets/testimonials/avatar_craigmaloney.jpeg';
import avatarDansup from './assets/testimonials/avatar_dansup.jpg';
import avatarGuedes from './assets/testimonials/avatar_guedes.jpg';
import avatarJarm from './assets/testimonials/avatar_jarm.jpeg';
import avatarJaz from './assets/testimonials/avatar_jaz.jpeg';
import avatarNoellabo from './assets/testimonials/avatar_noellabo.png';
import avatarTrwnh from './assets/testimonials/avatar_trwnh.png';
import avatarUlrichKelber from './assets/testimonials/avatar_ulrichkelber.png';
import avatarVopo from './assets/testimonials/avatar_vopo.jpg';
import avatarHalcy from './assets/testimonials/avatar_halcy.jpg';

const data = [
  [
    { text: "<p>I'm personally addicted to Mastodon, for me it's like if Facebook or Twitter had a friendly version— where I can discuss things with people around the world about every single thing they love.</p><p>If there's a subreddit for everything, of course there's also a Mastodon community for everything: I've got one profile for sharing art, another one for casual conversation and another one for politics.</p>", name: 'guedes', username: 'guedes@mastodon.social', avatar: avatarGuedes },
    { text: "<p>Mastodon has changed my opinion of social media, it's a refreshing take on microblogging with a focus on privacy and safety.</p>", name: 'dansup', username: 'dansup@mastodon.social', avatar: avatarDansup },
  ],

  [
    { text: "<p>I've been on federated platforms since 2008. Mastodon is the best iteration of federated platforms with a user interface that is pleasant to use and a community of folks that I consider friends.</p>", name: 'Craig Maloney', username: 'craigmaloney@octodon.social', avatar: avatarCraigMaloney },
    { text: "<p>Great community, friendly atmosphere, and free software! What else would you possibly need?</p>", name: 'autumncheney', username: 'AutumnCheney@mastodon.social', avatar: avatarAutumnCheney },
    { text: "<p>It's social media with moderation that actually works.</p>", name: 'voronoi potato', username: 'Vopo@mastodon.social', avatar: avatarVopo },
  ],

  [
    { text: "<p>Mastodon is a privacy-friendly way to communicate with people which are interested in my work and the work of my authority. social.bund.de gives us the opportunity to incubate Mastodon accounts even for other federal authorities.</p>", name: 'Ulrich Kelber', username: 'ulrichkelber@bonn.social', avatar: avatarUlrichKelber },
    { text: "<p>Mastodon allowed us to create a non-profit, abuse-free social network based on open web standards and principles, all the while allowing our moderators and members to reinvigorate the early web values of community, camaraderie and respect using modern, accessible technologies.</p>", name: 'Jaz', username: 'jaz@toot.wales', avatar: avatarJaz },
  ],

  [
    { text: "<p>I've made so many friends on Mastodon because I can actually talk to people instead of getting buried by algorithms that reward meaningless numbers over actual interaction.</p>", name: 'infinite love ⴳ', username: 'trwnh@mastodon.social', avatar: avatarTrwnh },
    { text: "<p>Mastodon is a well-moderated fully-functional microblogging service with some great features!</p>", name: '해파리', username: 'jarm@qdon.space', avatar: avatarJarm },
    { text: "<p>It's good software</p>", name: 'halcy', username: 'halcy@icosahedron.website', avatar: avatarHalcy },
  ],

  [
    { text: "<p>I could have joined an existing community, but I decided to self-host Mastodon.</p><p>My posts to the world are replicated from my own servers and can be traced back to their originals. Since I own it, the platform will not be terminated or removed at the platform's discretion, and I can provide a long and stable service. I finally have this. Yay!</p>", name: 'のえる', username: 'noellabo@fedibird.com', avatar: avatarNoellabo },

  ],
];

const Testimonials = () => (
  <div className='testimonials' id='testimonials'>
    <div className='container'>
      <h2><FormattedMessage id='testimonials.people_love_mastodon' defaultMessage='People {love} Mastodon' values={{ love: <span role='img' aria-label='love'>💖</span> }}/></h2>
      <p className='lead'><FormattedMessage id='testimonials.here_is_what_users_say' defaultMessage='Here is what our users say about their experiences with the platform:' /></p>
    </div>

    <Scrollbars
      style={{ height: 681 }}
      renderTrackHorizontal={props => <div {...props} className='testimonials__scrollbars__track' />}
      renderThumbHorizontal={props => <div {...props} className='testimonials__scrollbars__thumb' tabIndex='0' />}
    >
      <div className='testimonials__grid'>
        {data.map((column, i) => (
          <div key={i} className='testimonials__grid__column'>
            {column.map(quote => (
              <blockquote key={quote.username}>
                <div dangerouslySetInnerHTML={{ __html: quote.text }} />

                <footer>
                  <img src={quote.avatar || avatarPlaceholder} alt='' className='display-name__avatar' />

                  <div>
                    <span className='display-name__name'><bdi>{quote.name}</bdi></span>
                    <span className='display-name__acct'>@{quote.username}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        ))}
      </div>
    </Scrollbars>
  </div>
);

export default Testimonials;
