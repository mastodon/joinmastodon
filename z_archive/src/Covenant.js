import React from 'react';
import Helmet from 'react-helmet';

import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

// This page does not require translations

const Covenant = () => (
  <div className='browse-apps covenant'>
    <Navigation />

    <div className='container'>
      <h1>Mastodon Server Covenant</h1>
      <p className='lead'>All Mastodon servers we link to from our server picker commit to the following:</p>
      <hr />

      <div className='covenant__terms'>
        <p>1. <strong>Active moderation against racism, sexism, homophobia and transphobia</strong></p>
        <p>Users must have the confidence that they are joining a safe space, free from white supremacy, anti-semitism and transphobia of other platforms.</p>

        <hr />

        <p>2. <strong>Daily backups</strong></p>
        <p>It is important for users to have the confidence that a trip over the power cable or a rogue bit flip will not erase all of their data. Having a backup strategy is a basic necessity of providing a public service.</p>

        <hr />

        <p>3. <strong>At least one other person with emergency access to the server infrastructure</strong></p>
        <p>Various circumstances can prevent the original owner of the Mastodon server from answering technical emergencies. For this reason, more than one person must have that capability.</p>

        <hr />

        <p>4. <strong>Commitment to give users at least 3 months of advance warning in case of shutting down</strong></p>
        <p>Sometimes services shut down, it is the cycle of life. But users must have the confidence that their account will not disappear overnight, so that they have time to export their data and find another server.</p>
      </div>

      <div className='covenant__terms'>
        <h1>Submitting your server</h1>
        <hr />
        <p className='lead'>If you are a server owner, and your server passes these requirements, you can send an e-mail to <strong>hello@joinmastodon.org</strong> with the subject "Server submission" to be listed on this website. Because our goal is giving new users a smooth and reliable start into the decentralized social network of Mastodon rather than simply promoting individual servers, we are generally not interested in promoting brand new and unproven servers, so the submission should not be your primary strategy of growing your community.</p>
      </div>

      <div className='covenant__terms'>
        <h1>Metadata guidelines</h1>
        <hr />
        <p className='lead'>Your server's metadata should be in a presentable state:</p>

        <p>1. <strong>Short description</strong></p>
        <p>This is your place to express what makes your server different from others. Do not describe what Mastodon is. Is it hosted by a specific organization? Is it operated from a specific country or region? Stick to one or two sentences. Attention is a limited resource. If your server's target audience speaks a different language than English, write the description in that language.</p>

        <p>2. <strong>Thumbnail</strong></p>
        <p>Avoid the default. Express the visual identity of your server. A high quality image will make your server look professional. Stick close to the recommended dimensions of 1200x630px and use only JPG and PNG formats. Avoid transparency. We will proxy the image to avoid sending traffic from our visitors directly to your host.</p>

        <p>3. <strong>Language</strong></p>
        <p>If you are running a language-specific server, make sure to set <code>DEFAULT_LANGUAGE</code> in your configuration to prevent Mastodon from showing the interface in the language of the visitor.</p>

        <p>4. <strong>Rules</strong></p>
        <p>Make sure to create server rules &mdash; free-text rules in extended server description are not enough. Server rules are an integral part of onboarding. They must be kept short and to the point (you can elaborate in the extended server description). As a rule they should fit on a typical phone screen without having to scroll through. You want the visitor to be able to read them quickly. Do not include items that are covered by hardcoded report reasons, such as spam.</p>

        <p>5. <strong>Contact information</strong></p>
        <p>Have a valid and reachable e-mail address for inquiries ("business e-mail"). We may contact you through that address. And in cases of legal matters, it is generally preferable to receive e-mails through your own address rather than through your web host's abuse contact. You shoud also have a contact account ("Contact username") though it does not have to be your personal account.</p>
      </div>

      <div className='covenant__terms'>
        <h1>Incompatible policies</h1>
        <hr />
        <p className='lead'>There are some things you should avoid if you want us to promote your server:</p>

        <p>1. <strong>Blocking major e-mail providers</strong></p>
        <p>Most people only have one e-mail address and few are willing to create a new one to satisfy the requirements of a social network they are checking out. Avoid blocking sign-ups from major e-mail providers like GMail, Outlook and so on, as this creates an incredibly frustrating onboarding experience that reflects badly on Mastodon as a whole.</p>

        <p>2. <strong>Running in limited-federation mode</strong></p>
        <p>Mastodon is a decentralized social network and we are interested in promoting decentralization. While we respect the use cases of running Mastodon without federation in academic and private contexts, users arriving through our page should be able to participate in the Mastodon network without excessive limitations.</p>
      </div>
    </div>

    <BottomNavigation />

    <Helmet>
      <title>Mastodon Server Covenant - Mastodon</title>
      <meta property='og:title' content='Mastodon Server Covenant' />
    </Helmet>
  </div>
);

export default Covenant;
