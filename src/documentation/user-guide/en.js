import React from 'react';
import { Link } from 'react-router-dom';
import { LinkableH2, LinkableH3, LinkableH4 } from '../../LinkableHeadings';
import Navigation from '../../Navigation';
import mastofed from '../../assets/mastofed.png';
import composeCw from '../../assets/screenshots/compose-cw.png';
import composeMedia from '../../assets/screenshots/compose-media.png';
import composeNsfw from '../../assets/screenshots/compose-nsfw.png';
import composePrivacy from '../../assets/screenshots/compose-privacy.png';
import contentWarning from '../../assets/screenshots/content-warning.gif';
import cwToot from '../../assets/screenshots/cw-toot.gif';
import dragAndDropImage from '../../assets/screenshots/drag-and-drop-image.gif';
import federatedTimeline from '../../assets/screenshots/federated-timeline.png';
import followIcon from '../../assets/screenshots/follow-icon.png';
import followRequests from '../../assets/screenshots/follow_requests.png';
import followRequestsMenu from '../../assets/screenshots/follow_requests_menu.png';
import followingIcon from '../../assets/screenshots/following-icon.png';
import localTimeline from '../../assets/screenshots/local-timeline.png';
import lockedIcon from '../../assets/screenshots/locked-icon.png';
import notificationsClear from '../../assets/screenshots/notifications-clear.png';
import notificationsSettings from '../../assets/screenshots/notifications-settings.png';
import pendingIcon from '../../assets/screenshots/pending-icon.png';
import preferences from '../../assets/screenshots/preferences.png';
import privateAccount from '../../assets/screenshots/private.png';
import report from '../../assets/screenshots/report.png';

const UserGuide = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>User's Guide</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='table-of-contents'>Table of Contents</LinkableH2>
      <ol>
        <li>
          <a href='#intro'>Intro</a>
          <ol>
            <li><a href='#decentralization-and-federation'>Decentralization and Federation</a></li>
          </ol>
        </li>
        <li>
          <a href='#getting-started'>Getting Started</a>
          <ol>
            <li><a href='#setting-up-your-profile'>Setting Up Your Profile</a></li>
            <li><a href='#e-mail-notifications'>E-Mail Notifications</a></li>
            <li>
              <a href='#text-posts'>Text Posts</a>
              <ol>
                <li><a href='#content-warnings'>Content Warnings</a></li>
                <li><a href='#hashtags'>Hashtags</a></li>
                <li><a href='#boosts-and-favourites'>Boosts and Favourites</a></li>
              </ol>
            </li>
            <li><a href='#posting-images'>Posting Images</a></li>
            <li><a href='#following-other-users'>Following Other Users</a></li>
            <li><a href='#notifications'>Notifications</a></li>
            <li><a href='#mobile-apps'>Mobile Apps</a></li>
            <li><a href='#the-federated-timeline'>The Federated Timeline</a></li>
            <li><a href='#the-local-timeline'>The Local Timeline</a></li>
            <li><a href='#searching'>Searching</a></li>
          </ol>
        </li>
        <li>
          <a href='#privacy-safety-and-security'>Privacy, Safety and Security</a>
          <ol>
            <li><a href='#two-factor-authentication'>Two-Factor Authentication</a></li>
            <li><a href='#account-privacy'>Account Privacy</a></li>
            <li><a href='#toot-privacy'>Toot Privacy</a></li>
            <li><a href='#blocking'>Blocking</a></li>
            <li><a href='#reporting-toots-or-users'>Reporting Toots or Users</a></li>
          </ol>
        </li>
        <li><a href='#still-questions'>Still questions?</a></li>
      </ol>
      <LinkableH2 id='intro'>Intro</LinkableH2>
      <p>Mastodon is a social network application based on the ActivityPub protocol. It behaves a lot like other social networks, especially Twitter, with one key difference - it is open-source and anyone can start their own server (also called an "<i>instance</i>"), and users of any instance can interact freely with those of other instances (called "<i>federation</i>"). Thus, it is possible for small communities to set up their own servers to use amongst themselves while also allowing interaction with other communities.</p>
      <LinkableH3 id='decentralization-and-federation'>Decentralization and Federation</LinkableH3>
      <div className='article--text__float-container'>
        <img src={mastofed} style={{ float: 'right', maxWidth: '47%' }} alt='Simple illustration about decentralization and federation' />
        <p>Mastodon is a system decentralized through a concept called "<i>federation</i>" - rather than depending on a single person or organization to run its infrastructure, anyone can download and run the software and run their own server. Federation means different Mastodon servers can interact with each other seamlessly, similar to e.g. e-mail.</p>
        <p>As such, anyone can download Mastodon and e.g. run it for a small community of people, but any user registered on that instance can follow, send, and read posts from other Mastodon instances (as well as servers running OStatus-compatible services, such as GNU Social and postActiv). This means that not only is users' data not inherently owned by a company with an interest in selling it to advertisers, but also that if any given server shuts down its users can set up a new one or migrate to another instance, rather than the entire service being lost.</p>
        <p>Within each Mastodon instance, usernames just appear as <code>@username</code>, similar to other services such as Twitter. Users from other instances appear, and can be searched for and followed, as <code>@user@servername.ext</code> - so e.g. <code>@gargron</code> on the <code>mastodon.social</code> instance can be followed from other instances as <code>@gargron@mastodon.social</code>).</p>
        <p>Posts from users on external instances are "<i>federated</i>" into the local one, i.e. if <code>user1@mastodon1</code> follows <code>user2@gnusocial2</code>, any posts <code>user2@gnusocial2</code> makes appear in both <code>user1@mastodon1</code>'s Home feed and the public timeline on the <code>mastodon1</code> server. Mastodon server administrators have some control over this and can exclude users' posts from appearing on the public timeline; post privacy settings from users on Mastodon instances also affect this, see below in the <a href='#toot-privacy'>Toot Privacy</a> section.</p>
      </div>
      <LinkableH2 id='getting-started'>Getting Started</LinkableH2>
      <LinkableH3 id='setting-up-your-profile'>Setting Up Your Profile</LinkableH3>
      <p>You can customise your Mastodon profile in a number of ways - you can set a custom "display" name, a profile "avatar" picture, a background image for your profile page header, and a short "bio" that summarises you or your account.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        To edit your profile, click the Preferences icon in the Compose column and select "Edit Profile" on the left-hand menu on the Preferences page. Your display name is limited to 30 characters, your bio to 160. Avatars and header pictures can be uploaded as png, gif or jpg images and cannot be larger than 2MB. They will be resized to standard sizes - 120x120 pixels for avatars, 700x335 pixels for header pictures.
      </p>
      <LinkableH3 id='e-mail-notifications'>E-Mail Notifications</LinkableH3>
      <div className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        <p>Mastodon can notify you of activity via e-mail if you so choose. To adjust your settings for receiving e-mail notifications, click the Preferences icon in the Compose column and select the "Preferences" page from the left-hand menu. Here you will find a number of checkboxes to enable or disable e-mail notifications for various types of activity.</p>
      </div>
      <LinkableH3 id='text-posts'>Text Posts</LinkableH3>
      <p>The most basic way to interact with Mastodon is to make a text post, also called a <i>Toot</i>. In order to toot, simply enter the message you want to post into the "What is on your mind?" text box in the Compose column and click "TOOT". There is a limit of up to 500 characters per toot; if you really do need more than this you can reply to your own toots so they will appear like a conversation.</p>
      <p>If you want to reply to another user's toot, you can click the "Reply" icon on it. This will add their username to your input box along with a preview of the message you're replying to, and the user will receive a notification of your response.</p>
      <p>Similarly, in order to start a conversation with another user, just mention their user name in your toot. When you type the @ symbol followed directly (without a space) by any character in a message, Mastodon will automatically start suggesting users that match the username you're typing. Like with replies, mentioning a user like this will send them a notification. If the post starts with a mention, it will be treated as a reply and will only appear in the Home timelines of users who follow both you and the user you are mentioning. It will still be visible on your profile depending on privacy settings.</p>
      <LinkableH4 id='content-warnings'>Content Warnings</LinkableH4>
      <p>When you want to post something that you don't want to be immediately visible - for example, spoilers for that film that's just come out, or some personal thoughts that mention potentially upsetting topics, you can "hide" it behind a Content Warning.</p>
      <div className='article--text__flex'>
        <p>To do this, click the <img className='user-guide__icon--inline' src={composeCw} alt='CW icon' /> "CW" switch under the Compose box. This will add another text box labeled "Content warning"; you should enter a short summary of what the "body" of your post contains here while your actual post goes into the "What is on your mind?" box as normal.</p>
        <img src={contentWarning} style={{ minWidth: '47%' }} alt='animation showing how to enable content warnings' />
      </div>
      <div className='article--text__flex'>
        <p>This will cause the body of your post to be hidden behind a "Show More" button in the timeline, with only the content warning and any mentioned users visible by default:</p>
        <img src={cwToot} style={{ minWidth: '47%' }} alt='animation showing content warnings in the timeline' />
      </div>
      <p><strong>NOTE</strong> that this will not hide images included in your post - images can be marked as "sensitive" separately to hide them from view until clicked on. To find out how to do this, see the <a href='#posting-images'>Posting Images</a> section of this user guide.</p>
      <LinkableH4 id='hashtags'>Hashtags</LinkableH4>
      <p>If you're making a post belonging to a wider subject, it might be worth adding a "hashtag" to it. This can be done simply by writing in the post a # sign followed by a phrase, e.g. #introductions (which is popular on mastodon.social for new users to introduce themselves to the community), or #politics for political discussions, etc. Clicking on a hashtag in a toot will show a timeline consisting only of public posts that include this hashtag (i.e. it's a shortcut to searching for it). This allows users to group messages of similar subjects together, forming a separate "timeline" for people interested in that subject. Hashtags can also be searched for from the search bar above the compose box.</p>
      <LinkableH4 id='boosts-and-favourites'>Boosts and Favourites</LinkableH4>
      <p>You can <i>favourite</i> another user's toot by clicking the star icon underneath. This will send the user a notification that you have marked their post as a favourite; the meaning of this varies widely by context from a general "I'm listening" to signalling agreement or offering support for the ideas expressed.</p>
      <p>Additionally you can <i>boost</i> toots by clicking the "circular arrows" icon. Boosting a toot will show it on your profile timeline and make it appear to all your followers, even if they aren't following the user who made the original post. This is helpful if someone posts a message you think others should see, as it increases the message's reach while keeping the author information intact.</p>
      <LinkableH3 id='posting-images'>Posting Images</LinkableH3>
      <p className='article--text__float-container'>
        {/* eslint-disable jsx-a11y/img-redundant-alt */}
        <img className='user-guide__icon--heading' src={composeMedia} alt='Image icon' />
        {/* eslint-enable jsx-a11y/img-redundant-alt */}
        In order to post an image, simply click or tap the "image" icon in your Compose column and select a file to upload.
      </p>
      <p>You can also simply drag and drop your image from your desktop into the text box of your Compose column.</p>
      <div className='article--text__center'>
        {/* eslint-disable jsx-a11y/img-redundant-alt */}
        <img src={dragAndDropImage} alt='Image icon' />
        {/* eslint-enable jsx-a11y/img-redundant-alt */}
      </div>
      <p>If the image is "not safe for work" or has otherwise sensitive content, you can select the <img className='user-guide__icon--inline' src={composeNsfw} alt='NSFW toggle' /> "NSFW" button which appears once you have added an image. This will hide the image in your post by default, making it clickable to show the preview. This is the "visual" version of <a href='#content-warnings'>content warnings</a> and could be combined with them if there is text to accompany the image - otherwise it's fine to just mark the image as sensitive and make the body of your post the content warning.</p>
      <p>You can also attach video files or GIF animations to Toots. However, there is a 4MB file size limit for these files and videos must be in .webm or .mp4 format.</p>
      <LinkableH3 id='following-other-users'>Following Other Users</LinkableH3>
      <p>Following another user will make all of their toots as well as other users' toots which they <a href='#boosts-and-favourites'>boost</a> appear in your Home column. This gives you a separate timeline from the <a href='#the-public-timeline'>public timelines</a> in which you can read what particular people are up to without the noise of general conversation.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={followIcon} alt='Follow icon' />
        In order to follow a user, click their name or avatar to open their profile, then click the Follow icon in the top left of their profile view.
      </p>
      <p>If their account has a padlock icon <img className='user-guide__icon--inline' src={lockedIcon} alt='Padlock icon' /> next to their user name, they will receive a notification of your request to follow them and they will need to approve this before you are added to their follower list (and thus see their toots). To show you that you are waiting for someone to approve your follow request, the Follow icon <img className='user-guide__icon--inline' src={followIcon} alt='Follow icon' /> on their profile will be replaced with an hourglass icon <img className='user-guide__icon--inline' src={pendingIcon} alt='Pending icon' />. The requirement for new followers to be approved is something you can enable for your own profile under preferences.</p>
      <p>Once you follow a user, the Follow icon will be highlighted in blue on their profile <img className='user-guide__icon--inline' src={followingIcon} alt='Following icon' />; you can unfollow them again by clicking this.</p>
      <p>If you know someone's user name you can also open their profile for following by entering it in the <a href='#searching'>Search box</a> in the Compose column. This also works for remote users, though depending on whether they are known to your home instance you might have to enter their full name including the domain (e.g. <code>gargron@mastodon.social</code>) into the search box before their profile will appear in the suggestions.</p>
      <p>Alternately, if you already have a user's profile open in a separate browser tab, other Mastodon instances and most OStatus-related instances should have a "Follow" or "Subscribe" button on their profile page. This will ask you to enter the full user name to follow <strong>from</strong> (ie. if your account is on mastodon.social you would want to enter this as <code>myaccount@mastodon.social</code>)</p>
      <LinkableH3 id='notifications'>Notifications</LinkableH3>
      <p>When someone follows your account or requests to follow you, mentions your user name, or boosts or favourites one of your toots, you will receive a notification for this. These will appear as desktop notifications on your computer (if your web browser supports this and you've enabled them) as well as in your "Notifications" column.</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={notificationsSettings} alt='Notification Settings icon' />
        You can filter what kind of notifications you see in the Notifications column by clicking the Notification Settings icon at the top of the column and ticking or un-ticking what you do or don't want to see notifications for.
      </p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={notificationsClear} alt='Clear icon' />
        If your notifications become cluttered, you can clear the column by clicking the Clear icon at the top of the column; this will wipe its contents.
      </p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        You can also disable notifications from people you don't follow or who don't follow you entirely - to do this, click the Preferences icon in the Compose column, select "Preferences" on the left-hand menu and check either of the respective "Block notifications" options.
      </p>
      <LinkableH3 id='mobile-apps'>Mobile Apps</LinkableH3>
      <p>Mastodon has an open API, so anyone can develop a client or app to use Mastodon from anything. Many people have already developed mobile apps for iOS and Android. You can find a list of these <Link to='/documentation/apps'>here</Link>. Many of these projects are also open source and welcome collaborators.</p>
      <LinkableH3 id='the-publlic-timelines'>The Public Timelines</LinkableH3>
      <p>In addition to your Home timeline, there are two public timelines available. The Federated Timeline and the Local Timeline. These are both a good way to meet new people to follow or interact with.</p>
      <LinkableH4 id='the-federated-timeline'>The Federated Timeline</LinkableH4>
      <p>The Federated Timeline shows all public posts from all users "known" to your instance. This means the user is either on the same instance as you, or somebody on your instance follows that user. The Federated Timeline is a great way to engage in the broad chatter of the world. Following users on remote instances who you meet on the Federated Timeline can lead to meeting more users on more instances and further connecting your instance to more and more of the entire Mastodon and OStatus network.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={federatedTimeline} alt='Federated Timeline icon' />
        To view the federated timeline, click the "Federated Timeline" icon in your Compose column or the respective button on the Getting Started panel. To hide the federated timeline again, simply click the "Back" link at the top of the column while you're viewing it.
      </p>
      <LinkableH3 id='the-local-timeline'>The Local Timeline</LinkableH3>
      <p>The Local Timeline only shows public posts made by users on your home instance. This can be useful if your instance has particular community norms that users on other instances may not have, such as particular topics that get put under content warnings; or particular in-jokes and shared interests.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={localTimeline} alt='Local Timeline icon' />
        To view the Local Timeline, click the  "Local Timeline" in the Compose column or the respective button on the Getting Started panel.
      </p>
      <LinkableH3 id='searching'>Searching</LinkableH3>
      <p>Mastodon has a search function - you can use it to search for users and <a href='#hashtags'>hashtags</a>. The search does not look through the entire text of posts, only hashtags. In order to start a search, just type into the search box in the Compose column and hit <i>enter</i>; This will open the search pane. The search pane will show suggestions as you type. Selecting any of these will open the user's profile or a view of all toots on the hashtag.</p>
      <LinkableH2 id='privacy-safety-and-security'>Privacy, Safety and Security</LinkableH2>
      <p>Mastodon has a number of advanced security, privacy and safety features over more public networks such as Twitter. Particularly the privacy controls are fairly granular; this section will explain how these features work.</p>
      <LinkableH3 id='two-factor-authentication'>Two-Factor Authentication</LinkableH3>
      <p>Two-Factor Authentication (2FA) is a mechanism that improves the security of your Mastodon account by requiring a numeric code from another device (most commonly mobile phones) linked to your Mastodon account when you log in - this means that even if someone gets hold of both your e-mail address and your password, they cannot take over your Mastodon account as they would need a physical device you own to log in.</p>
      <p>Mastodon's 2FA uses Google Authenticator (or compatible apps, such as Authy). You can install this for free to your <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2'>Android</a> or <a href='https://itunes.apple.com/gb/app/google-authenticator/id388497605'>iOS</a> device; <a href='https://en.wikipedia.org/wiki/Google_Authenticator#Implementations'>this Wikipedia page</a> lists further versions of the app for other systems.</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        In order to enable 2FA for your Mastodon account, click the Preferences icon in the Compose column, click "Two-factor Authentication" in the left menu on the settings page and follow the instructions. Once activated, every time you log in you will need a one-time code generated by the Authenticator app on the device you've linked to your account.
      </p>
      <LinkableH3 id='account-privacy'>Account Privacy</LinkableH3>
      <p>To allow you more control over who can see your toots, Mastodon supports "private" or "locked" accounts. If your account is set to private, you will be notified every time someone tries to follow you, and you will be able to allow or deny the follow request. Additionally, if your account is private, any new toots you compose will default to being private (see the <a href='#toot-privacy'>Toot Privacy</a> section below).</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        To make your account private, click the Preferences icon in the Compose pane, select "Edit Profile" and tick the "Make account private" checkbox, then click "Save Changes".
      </p>
      <div className='article--text__center'>
        <img src={privateAccount} alt='Screenshot of the "Private Account' />
      </div>
      <div className='article--text__flex'>
        <p>You can then see follow requests in the Getting started menu</p>
        <img style={{ minWidth: '16em' }} src={followRequestsMenu} alt='Screenshot of the "Follow requests" menu' />
      </div>
      <div className='article--text__flex'>
        <p>and approve or reject the individual requests</p>
        <img style={{ minWidth: '16em' }} src={followRequests} alt='Screenshot of the approval/denial menu' />
      </div>
      <LinkableH3 id='toot-privacy'>Toot Privacy</LinkableH3>
      <p>Toot privacy is handled independently of account privacy, and individually for each toot. The four tiers of visibility for toots are Public (default), Unlisted, Private, and Direct. In order to select your privacy level, click the <img className='user-guide__icon--inline' src={composePrivacy} alt='Globe icon' /> globe icon. Changes to this setting are remembered between posts, i.e. if you make one private toot, each toot you make will be private until you change it back to public. You can change your default post privacy under preferences.</p>
      <p><strong>Public</strong> is the default status of toots on most accounts. Public toots are visible to any other user on the public timelines, federate to other Mastodon and OStatus instances without restriction, and appear on your user profile page to anyone including search engine bots and visitors who aren't logged into a Mastodon account.</p>
      <p><strong>Unlisted</strong> toots are public, except that they do not appear in the public timelines or search results. They are visible to anyone following you and appear on your profile page to the public even without a Mastodon login. Other than not appearing in the public timelines or search results, they function identically to public posts.</p>
      <p><strong>Followers-only</strong> toots do not appear in the public timeline nor on your profile page to anyone viewing it unless they are on your Followers list. The option is of limited use if your account is not also set to require approval of new followers (as anyone can follow you without confirmation and thus see your private toots). However the separation of this means that if you <i>do</i> set your entire account to private, you can switch this option off on a toot to make unlisted or even public toots from your otherwise private account.</p>
      <p>Private toots cannot be boosted. If someone you follow makes a private toot, it will appear in your timeline with a padlock icon in place of the Boost icon. <strong>NOTE</strong> that remote instances may not respect this.</p>
      <p>There is no reliable way to check if an instance will actually respect post privacy. Non-Mastodon servers, such as a GNU Social server, do not support Mastodon privacy settings. A user on GNU Social who you @mention in a private post would not even be aware that the post is intended to be private and would be able to boost it, which would undo the privacy setting. There is also no way to guarantee that someone could not just modify the code on their particular Mastodon instance to not respect private post restrictions. A warning will be displayed if you're composing a private toot that will federate to another instance. You should thus think through how much you trust the user you are @mentioning and the instance they are on.</p>
      <p>Private posts are not encrypted. Make sure you trust your instance admin not to just read your private posts on the back-end. Do not say anything you would not want potentially intercepted.</p>
      <p><strong>Direct</strong> posts are only visible to users you have @mentioned in them and cannot be boosted. Like with private posts, you should be mindful that the remote instance may not respect this protocol. If you are discussing a sensitive matter you should move the conversation off of Mastodon.</p>
      <p>To summarise:</p>
      <table>
        <thead>
          <tr>
            <th>Toot Privacy</th>
            <th>Visible on Profile</th>
            <th>Visible on Public Timeline</th>
            <th>Federates to other instances</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public</td>
            <td>Anyone incl. anonymous viewers</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Unlisted</td>
            <td>Anyone incl. anonymous viewers</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Private</td>
            <td>Followers only</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Direct</td>
            <td>No</td>
            <td>No</td>
            <td>Only remote @mentions</td>
          </tr>
        </tbody>
      </table>
      <LinkableH3 id='blocking'>Blocking</LinkableH3>
      <p>You can block a user to stop them contacting you. To do this, you can click or tap the Menu icon on either a toot of theirs or their profile view and select "Block".</p>
      <p><strong>NOTE</strong> that this will stop them from seeing your public toots while they are logged in, but they <i>will</i> be able to see your public toots by simply opening your profile in another browser that isn't logged into Mastodon (or logged into a different account that you have not blocked).</p>
      <p>Mentions, favourites, boosts or any other interaction with you from a blocked user will be hidden from your view. You will not see replies to a blocked person, even if the reply mentions you, nor will you see their toots if someone boosts them.</p>
      <p>The blocked user will not be notified of your blocking them. They will be removed from your followers.</p>
      <LinkableH3 id='muting'>Muting</LinkableH3>
      <p>If you do not wish to see posts from a particular user, but do not care about if they see your posts, you may choose to <i>mute</i> them. You can mute a user from the same menu on their profile page that you would block them from. You will not see posts from a muted user unless they @mention you. A muted user will have no way to know that you have them muted. You can also mute a user's boosts without muting the user entirely, again from the same menu on their profile page.</p>
      <LinkableH3 id='reporting-toots-or-users'>Reporting Toots or Users</LinkableH3>
      <div className='article--text__flex'>
        <p>If you encounter a toot or a user that is breaking the rules of your instance or that you otherwise want to draw the instance administrators' attention to (e.g. if someone is harassing another user, spamming pornography or posting illegal content), you can click the "..." menu button on the toot or the "hamburger" menu on the profile and select to report this. The rightmost column will then switch over to the following form:</p>
        <img style={{ minWidth: '16em' }} src={report} alt='Report form' />
      </div>
      <p>In this form, you can select any toots you would like to report to the instance administrators and fill in any comment that might be helpful in identifying or handling the issue (from "is a spammer" to "this post contains untagged pornography"). The report will be visible to server administrators once it is sent so they can take appropriate action, for example hiding the user's posts from the public timeline or banning their account.</p>
      <LinkableH2>Still questions?</LinkableH2>
      <p>If you still have support questions, you can do two things:</p>
      <ol>
        <li>Ask on Mastodon itself with the hashtag #support (this will work better on larger instances than on smaller instances).</li>
        <li>Go to the <a href='https://discourse.joinmastodon.org/c/general'>Mastodon Meta Discussion Board</a> (powered by Discourse). Please <a href='https://discourse.joinmastodon.org/faq'>read the Guidelines</a> first.</li>
      </ol>
    </div>
  </div>
);

export default UserGuide;
