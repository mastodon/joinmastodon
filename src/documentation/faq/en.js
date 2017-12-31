import React from 'react';
import { Link } from 'react-router-dom';
import { LinkableH2 } from '../../LinkableHeadings';
import Navigation from '../../Navigation';
import admin from '../../assets/screenshots/admin_info.png';
import globe from '../../assets/screenshots/compose-globe.png';
import expandedViewPermaLink from '../../assets/screenshots/expanded_view-permalink.png';
import gettingStartedFavourites from '../../assets/screenshots/getting_started-favourites.png';
import gettingStartedExtendedInformation from '../../assets/screenshots/getting_started-extended_information.png';
import gettingStartedPreferences from '../../assets/screenshots/getting_started-preferences.png';
import hideEverythingDropDown from '../../assets/screenshots/hide-everything-drop-down.png';
import inlineTootTimestampLink from '../../assets/screenshots/inline_toot-timestamp_link.png';
import linkToProfile from '../../assets/screenshots/link_to_profile.png';
import preferencesDataExport from '../../assets/screenshots/preferences-data_export.png';
import preferencesPostPrivacy from '../../assets/screenshots/preferences-post_privacy.png';
import profileAvatarClick from '../../assets/screenshots/profile-avatar_click.png';
import profileWebpageURL from '../../assets/screenshots/profile-webpage_URL.png';
import search from '../../assets/screenshots/search.png';
import toolbarGettingStarted from '../../assets/screenshots/toolbar-getting_started.png';

const Faq = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>Frequently Asked Questions</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='what-is-a-mastodon'>What is a Mastodon?</LinkableH2>
      <p>A prehistoric animal, predecessor of the mammoth. Goes "toot."</p>
      <LinkableH2 id='why-the-name-mastodon'>Why the name Mastodon?</LinkableH2>
      <p>There's a progressive metal band with the same name that I'm a fan of that brought the animal to my attention. I thought it's a pretty cool name/animal.</p>
      <LinkableH2 id='how-exactly-is-it-decentralized'>How exactly is it decentralized?</LinkableH2>
      <p>There are different ways in which something can be decentralized; in this case, Mastodon is the "federated" kind. Think e-mail, not BitTorrent. There are different servers (instances), users have an account on one of them, but can interact and follow each other regardless of where their account is.</p>
      <LinkableH2 id='technically-how-does-the-federation-work'>Technically, how does the federation work?</LinkableH2>
      <p>Since Mastodon version 1.6 we use the <a href='https://www.w3.org/TR/activitypub/'>ActivityPub</a> protocol. Currently ActivityPub is a proposed W3C standard.</p>
      <p>Before version 1.6 we used the OStatus suite of protocols:</p>
      <ol>
        <li>Webfinger for user-on-domain lookup</li>
        <li>Atom feeds with ActivityStreams, Portable Contacts, Threads extensions for the actual content</li>
        <li>PubSubHubbub for subscribing to Atom feeds</li>
        <li>Salmon for delivering certain items from the Atom feeds to interested parties such as the mentioned user, author of the status being replied to, person being followed, etc</li>
      </ol>
      <p>We still use OStatus as an additional protocol for reasons of compatibility.</p>
      <LinkableH2 id='what-is-mastodon-social'>What is mastodon.social?</LinkableH2>
      <p>The "flagship" instance of Mastodon, aka the server I run myself with the latest code. It's not supposed to be the only instance in the end.</p>
      <LinkableH2 id='what-else-is-part-of-the-federated-network'>What else is part of the federated network?</LinkableH2>
      <p>Let's call it the "fediverse". It has existed for a longer while, populated by GNU social servers, Friendica, Hubzilla, Diaspora etc. Not every one of those servers is fully compatible with every other. Mastodon strives to be fully standards-compliant and compatibility with GNU social is higher in priority than the others.</p>
      <LinkableH2 id='i-tried-logging-into-a-gnu-social-client-app-with-mastodon-and-it-didnt-work-why'>I tried logging into a GNU social client app with Mastodon and it didn't work, why?</LinkableH2>
      <p>While Mastodon is compatible with GNU social in terms of server to server communication, the client to server API (aka how you access Mastodon) is different. Therefore, client apps that were made for specifically GNU social will not work with Mastodon. The reason for this is half technical, half ideological.</p>
      <p>Because Mastodon has been created from a blank slate, it is much simpler to have the API mirror internal structures as closely as possible, rather than build an emulation layer. Secondly, the GNU social client API is actually a half-way implementation of the legacy Twitter API - that's the reason why it works with some older Twitter client apps. However, many of those apps are not maintained anymore, the GNU social API does not actually keep up with the real Twitter API and never fully implemented all its features; at the same time, the Twitter API was never meant for a federated service and so obscures some of the functionality.</p>
      <LinkableH2 id='how-is-mastodon-funded'>How is Mastodon funded?</LinkableH2>
      <p>Development of Mastodon and hosting of mastodon.social is funded through my <a href='https://www.patreon.com/user?u=619786'>Patreon (also BTC/PayPal donations)</a>. Beyond that, I am not interested in VC funding, monetizing, advertising, or anything of that sort. I could offer setup/maintenance services on demand.</p>
      <p>The software is free and open source and communities should host their own servers if they can, that way the costs are more or less distributed. Obviously it'd be hard for me to pay the bills if literally everyone decided to use the mastodon.social instance only.</p>
      <LinkableH2 id='this-looks-a-lot-like-twitter-whats-the-difference'>This looks a lot like Twitter, what’s the difference?</LinkableH2>
      <p>Mastodon is decentralized. Anyone can run a Mastodon server, under their own community rules. Twitter is run by a central authority, and sets the rules for everyone.</p>
      <LinkableH2 id='what-is-a-federation'>What is a “federation”?</LinkableH2>
      <p>It’s a group of mastodon servers that share toots with each other.</p>
      <LinkableH2 id='what-is-an-instance'>What is an “instance”?</LinkableH2>
      <p>It’s a server that you can have an account on. Each has its own policies, because they can be run by anyone!</p>
      <LinkableH2 id='how-should-i-choose-which-instance-to-use'>How should I choose which instance to use?</LinkableH2>
      <p><a href='https://instances.mastodon.xyz/list'>Many instances exist</a> for almost every interest. It's okay to try a couple of public ones while looking for one that feels right. Talking about your interests on a public instance like <a href='https://mastodon.social'>Mastodon.Social</a> may help you get invited to other instances.</p>
      <p>To preview what an instance is saying, use <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>this preview tool</a> created by <a href='https://mastodon.social/@kevinmarks'>Kevin Marks</a>.</p>
      <LinkableH2 id='how-many-people-signed-up-for-mastodon-can-i-see-a-chart-of-user-counts-over-time'>How many people signed up for Mastodon? Can I see a chart of user counts over time?</LinkableH2>
      <p>Sure, you can follow <a href='https://social.lou.lt/@mastodonusercount'>@mastodonusercount@social.lou.lt</a>.</p>
      <LinkableH2 id='how-do-yo-really-spell-mast-don'>How do you really spell “mast–don”?</LinkableH2>
      <p>It’s <strong>mastodon</strong> with two Os. You will get it wrong at least once.</p>
      <LinkableH2 id='how-do-i-get-this-on-android'>How do I get this on Android?</LinkableH2>
      <p>Try <a href='https://play.google.com/store/apps/details?id=com.keylesspalace.tusky'>Tusky</a>.</p>
      <LinkableH2 id='on-android-i-really-want-multiple-account-support'>On Android, I really want multiple account support.</LinkableH2>
      <p>Try <a href='https://play.google.com/store/apps/details?id=ch.kevinegli.tootyfruity221258'>TootyFruity</a>.</p>
      <LinkableH2 id='how-do-i-get-this-on-iphone'>How do I get this on iPhone?</LinkableH2>
      <p>Try <a href='https://itunes.apple.com/us/app/amaroq-for-mastodon/id1214116200'>Amaroq</a>. Also, Safari might be a choice.</p>
      <LinkableH2 id='are-there-other-mobile-desktop-cli-apps'>Are there other mobile/desktop/cli apps?</LinkableH2>
      <p><Link to='/documentation/apps'>Yep.</Link></p>
      <LinkableH2 id='can-tusky-do-how-about-feature-and-whats-with-tuskys'>Can Tusky do ‘<span aria-label='foo' role='img'>💇</span>’? How about feature “<span aria-label='bar' role='img'>🔥</span>”? And what’s with Tusky’s “<span aria-label='baz' role='img'>⛱</span>,”?</LinkableH2>
      <p>You can follow or contact Tusky at <a href='https://mastodon.social/@Tusky'>@Tusky@mastodon.social</a>, or the developers <a href='https://mastodon.social/@Vavassor'>@Vavassor@mastodon.social</a> and <a href='https://mastodon.social/@daycode'>@daycode@mastodon.social</a></p>
      <LinkableH2 id='how-do-i-search'>How do I search?</LinkableH2>
      <div className='article--text__flex'>
        <p>You can search for people and hashtags, but not general text. Use the box above the tooting area.</p>
        <img src={search} alt='Search Box' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-dm-direct-message'>How do I DM (Direct Message)?</LinkableH2>
      <div className='article--text__flex'>
        <p>Click on the <strong>globe</strong> beneath your toot for privacy options, including DM.</p>
        <img src={globe} alt="Privacy Globe" height="400"/>
      </div>
      <LinkableH2 id='i-dont-get-the-local-vs-federated-timeline-thing'>I don’t get the local vs. federated timeline thing.</LinkableH2>
      <p>“Local” toots are from the server you signed up at. “Federated” are the all the toots your server knows about. (It's complicated, but short version is: “toots from people that you and other locals follow.”</p>
      <LinkableH2 id='are-there-instances-that-my-instance-doesnt-federated-with-how-do-i-know'>Are there instances that my instance doesn't federate with? How do I know?</LinkableH2>
      <p>Some instances are private and will not federate with your instance. Others may be blocked by your instance. To find out more about how your instance federates, ask your admin. (see also: “<a href='#who-is-my-admin-and-how-do-i-contact-follow-them'>Who is my admin, and how do I contact/follow them?</a>”)</p>
      <LinkableH2 id='can-i-have-more-than-one-account-can-i-use-the-same-email-on-different-instances'>Can I have more than one account? Can I use the same email on different instances?</LinkableH2>
      <p>Yes and yes! If you find another instance you would like to join, sign up! Note that not all instances are open to new registrations and it’s possible that someone has already taken your preferred username.</p>
      <LinkableH2 id='can-i-import-the-people-i-follow-to-another-instance'>Can I import the people I follow to another instance?</LinkableH2>
      <p>Yes. This may take time depending on the instance you move to. Talk to the admin of your new instance if you have difficulties. If your new instance does not federate with the instances of the people you follow, you may lose them.</p>
      <LinkableH2 id='how-do-i-prevent-people-from-impersonating-me'>How do I prevent people from impersonating me?</LinkableH2>
      <p>Because anyone can create a username on any instance, it is impossible to prevent others from using the same username on another instance. Some people have taken to running their own single-user instance to verify themselves, or use <a href='https://keybase.io/'>Keybase</a>.</p>
      <LinkableH2 id='how-do-i-enable-two-factor-authentication'>How do I enable Two Factor Authentication?</LinkableH2>
      <p>If your instance supports it, the option will be in Preferences under Two-factor Authentication. <a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md'>Mastodon's 2FA</a> uses both a QR code and plain-text secrets.</p>
      <LinkableH2 id='why-cant-i-see-someones-toots'>Why can't I see someone's toots?</LinkableH2>
      <p>This could occur for several reasons. A person's posts may be private. You must be a follower of a private account to see their non-public posts. Additionally, if someone has blocked you, you will no longer see their non-public posts.</p>
      <LinkableH2 id='whats-trending'>What’s trending?</LinkableH2>
      <p>To find out what’s trending, follow the esteemed <a href='https://mastodon.social/@TrendingBot'>@TrendingBot@mastodon.social</a>.</p>
      <LinkableH2 id='whats-cw'>What’s “CW”?</LinkableH2>
      <p>“CW” stands for “Content Warning.” You can use it to hide your toot, like a spoiler.</p>
      <LinkableH2 id='how-does-the-mark-image-as-sensitive-feature-work-nsfw'>How does the “Mark Image as Sensitive” feature work (“NSFW”)?</LinkableH2>
      <p>When you add a picture to your post using the camera icon, an additional toggle will appear [typically as "NSFW"]. Clicking this will hide your image behind a "Sensitive Content" warning, preventing others from seeing your images until they click on them.</p>
      <LinkableH2 id='whats-with-the-pineapples'>What’s with the pineapples?</LinkableH2>
      <p>They’re tasty, and they make people smile. Just go with it.</p>
      <LinkableH2 id='i-see-awoo-a-lot-what-does-that-mean'>I see “Awoo” a lot, what does that mean?</LinkableH2>
      <p>Try saying it out loud. It’s fun!</p>
      <LinkableH2 id='how-do-i-delete-my-account'>How do I delete my account?</LinkableH2>
      <p>Click the Settings cog in the top left corner of the app, and select Security. From there, select "delete account"</p>
      <LinkableH2 id='who-is-my-admin-and-how-do-i-contact-follow-them'>Who is my admin, and how do I contact/follow them?</LinkableH2>
      <p>Click on <strong>Getting Started</strong>, then <strong>Extended Information</strong>. An info page displays. Hopefully, they put their contact information in there!</p>
      <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
      <img src={gettingStartedExtendedInformation} alt='Extended Information' height='200'/>
      <img src={admin} alt='Admin Info' height='200'/>
      <LinkableH2 id='wow-i-keep-seeing-offensive-stuff-from-a-particular-instance-is-there-a-way-to-block-all-of-it'>Wow, I keep seeing offensive stuff from a particular instance, is there a way to block <i>all</i> of it?</LinkableH2>
      <div className='article--text__flex'>
        <p>If your instance is running version 1.4.1 of Mastodon or later, yes! Visit the user page of a user on the instance you want to block, then click the drop-down menu on the left-hand side, just above their toots. You should see an option to hide everything from the instance that user is on:</p>
        <img src={hideEverythingDropDown} alt='Hide Everything drop-down' height='200' />
      </div>
      <p>If your instance is running a version of Mastodon prior to 1.4.1, you can't do this without a lot of clicking, sorry. But, your instance admin can do it! Please contact them.</p>
      <p>(You can tell what version of Mastodon your instance is running by following the steps in <a href='#who-is-my-admin-and-how-do-i-contact-follow-them'>Who is my admin, and how do I contact/follow them?</a>. The version number is listed in the right-hand column of that extended information page.)</p>
      <LinkableH2 id='is-mastodon-moderated'>Is Mastodon moderated?</LinkableH2>
      <p>Each instance handles moderation differently, and each has their own moderators. It’s okay to ask what the rules are for the instance you are on. Usually the rules are posted on the instance's about page (<a href='https://mastodon.social/about/more'>like the “more” page at Mastodon.social</a>)</p>
      <LinkableH2 id='how-do-i-report-offensive-content'>How do I report offensive content?</LinkableH2>
      <p>Beneath each post, you will see three dots. Clicking on those will allow you to expand a post or report the content. When reporting content, select all posts that need moderator attention.</p>
      <LinkableH2 id='how-do-i-handle-harrasment'>How do I handle harassment?</LinkableH2>
      <p>If your admin takes harassment seriously, you can report it to them through the post-reporting system. This can be found through the ellipsis (“…”) beneath the post, or by contacting your admin directly.</p>
      <LinkableH2 id='will-my-private-messages-reach-people-on-other-instances'>Will my Private Messages reach people on other instances?</LinkableH2>
      <p>Yes, they should. However, private messages are <i>not secure</i>. You should avoid sending sensitive information through them.</p>
      <LinkableH2 id='what-does-adjust-status-privacy-mean-and-how-does-it-work'>What does “Adjust Status Privacy” mean and how does it work?</LinkableH2>
      <p>The <strong>globe</strong> icon under the toot area adjusts your status privacy by changing who can see your posts. This is what happens:</p>
      <table>
        <thead>
          <tr>
            <th>Privacy setting</th>
            <th>Broadcasted to</th>
            <th>Viewable by</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public</td>
            <td>Global, public timelines</td>
            <td>Everyone</td>
            <td>Federated. People on other instances will probably see it.</td>
          </tr>
          <tr>
            <td>Unlisted</td>
            <td>Followers only</td>
            <td>Everyone</td>
            <td>Can be boosted and thus seen on other instances.</td>
          </tr>
          <tr>
            <td>Private</td>
            <td>Followers only</td>
            <td>Followers only</td>
            <td>Cannot be boosted.</td>
          </tr>
          <tr>
            <td>Direct</td>
            <td>Mentioned people only</td>
            <td>Mentioned people only</td>
            <td>Similar to email</td>
          </tr>
        </tbody>
      </table>
      <LinkableH2 id='can-i-use-hashtags-should-i'>Can I use hashtags? Should I?</LinkableH2>
      <p>Yes! Hashtags are tracked and are often fun, but some tags help people avoid triggering posts. This is especially appreciated on public posts of #POLITICS, #HEALTH, #DEPRESSION, or #LEWD OR #NSFW topics. Such posts are also what the Content Warning system was designed for.</p>
      <LinkableH2 id='how-do-i-get-verified-with-a'>How do I get verified with a <span aria-label='verified account mark' role='img'>“✅”</span>?</LinkableH2>
      <p><span aria-label='verified account mark' role='img'>“✅”</span> is an emoji, <i>only</i> for lulz. There is no verification on Mastodon. You can copy and paste <span aria-label='verified account mark' role='img'>“✅”</span> into your bio if you wish, you cheeky monkey.</p>
      <LinkableH2 id='can-i-edit-a-toot'>Can I edit a toot?</LinkableH2>
      <p>No, sorry. But you could delete your toot and rewrite…</p>
      <LinkableH2 id='if-i-delete-a-post-does-it-get-deleted-everywhere'>If I delete a post, does it get deleted everywhere?</LinkableH2>
      <p>Deleting a post will delete it from the local timeline. However, if it has already been boosted, it may still be seen and may federate.</p>
      <LinkableH2 id='how-do-i-view-my-favourite-toots'>How do I view my favorite toots?</LinkableH2>
      <div className='article--text__flex'>
        <div>
          <p>Click <strong>Getting Started</strong>, then <strong>Favourites</strong>.</p>
          <p>Yes—Mastodon uses UK spelling!</p>
        </div>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedFavourites} alt='Favourites' height='200'/>
      </div>
      <LinkableH2 id='can-i-quote-a-toot'>Can I quote a toot?</LinkableH2>
      <p>Not currently. You must manually copy and paste the text to quote it.</p>
      <LinkableH2 id='if-my-instance-shuts-down-forever-do-i-lose-my-data'>If my instance shuts down forever, do I lose my data?</LinkableH2>
      <p>Yes you do.</p>
      <LinkableH2 id='can-i-save-my-data'>Can I save my data?</LinkableH2>
      <div className='article--text__flex'>
        <p>Yes, some of it! It‘s under <strong>Preferences->Data export</strong></p>
        <img src={preferencesDataExport} alt='Data Export' height='400'/>
      </div>
      <LinkableH2 id='i-cant-see-toots-of-a-remote-user-under-their-bio'>I can’t see toots of a remote user under their bio!</LinkableH2>
      <div className='article--text__flex'>
        <p>In <strong>Expanded View</strong>, click their avatar. This will take you directly to their instance, which displays all their public toots.</p>
        <img src={profileAvatarClick} alt='Click their avatar' height='200'/>
        <img src={profileWebpageURL} alt='Native webpage view' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-see-threads'>How do I see threads?</LinkableH2>
      <p>Click the toot body for <strong>Expanded View</strong>. This will show threads the toot’s connected to.</p>
      <LinkableH2 id='how-do-i-link-to-toots'>How do I link to toots?</LinkableH2>
      <p>There are two permalinks for toots. With inline toots, <strong>right-click</strong> the timestamp. On expanded toots, <strong>right-click</strong> the date on the bottom.</p>
      <div className='article--text__center'>
        <img src={inlineTootTimestampLink} alt='Inline View Permalink' height='200'/>
        <img src={expandedViewPermaLink} alt='Expanded View Permalink' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-link-to-my-profile'>How do I link to my profile?</LinkableH2>
      <div className='article--text__flex'>
        <p>In Firefox, <strong>right-click</strong> on your avatar picture. Select <strong>Copy Link Location</strong>.</p>
        <img src={linkToProfile} alt='URL for Profile' height='200'/>
      </div>
      <LinkableH2 id='does-clicking-a-hashtag-show-local-results-or-federated'>Does clicking a #hashtag show local results, or federated?</LinkableH2>
      <p>Federated.</p>
      <LinkableH2 id='when-i-mute-a-boost-who-gets-muted-the-booster-or-the-original-author'>When I mute a boost, who gets muted, the booster or the original author?</LinkableH2>
      <p>The original author.</p>
      <LinkableH2 id='can-i-preview-the-people-on-an-instance-and-what-theyre-saying'>Can I preview the people on an instance, and what they’re saying?</LinkableH2>
      <p>Yes, try the excellent <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>instance preview tool</a>.</p>
      <LinkableH2 id='how-do-i-hide-the-toots-of-launguages-i-dont-understand'>How do I hide the toots of languages I don’t understand?</LinkableH2>
      <p>The developers are working on this and other filtering options, stay tuned!</p>
      <LinkableH2 id='is-automatic-translation-supported'>Is automatic translation supported?</LinkableH2>
      <p>Not yet, but there is a <a href='https://github.com/tomouchuu/mastodon-translate'>Firefox TamperMonkey script</a> that might work for you.</p>
      <LinkableH2 id='do-toots-automatically-broadcast-federated-or-stay-local'>Do toots automatically broadcast federated, or stay local?</LinkableH2>
      <p>By default, toots are federated (public), and will show on both timelines. You can change the default behavior through <strong>Settings->Preferences->Post Privacy.</strong></p>
      <div className='article--text__center'>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedPreferences} alt='Preferences' height='200'/>
        <img src={preferencesPostPrivacy} alt='Post Privacy' height='400'/>
      </div>
      <LinkableH2 id='what-is-the-default-image-upload-size-limit-and-how-can-i-change-it'>What is the default image upload size limit and how can I change it?</LinkableH2>
      <p>The default limit is 8 megabytes, however this can be changed by editing the following line in <code>mastodon/app/models/media_attachment.rb</code>:</p>
      <code>validates_attachment_size :file, less_than: 8.megabytes</code>
      <p>Change the 8 to another integer to change the limit.</p>
      <LinkableH2 id='how-do-i-start-my-own-instance'>How do I start my own instance?</LinkableH2>
      <p>See the <a href='https://github.com/tootsuite/documentation/blob/master/README.md'>User Guide</a>, under the heading “Running Mastodon.”</p>
      <LinkableH2 id='i-found-a-bug-or-have-a-suggestion-for-mastodon'>I found a bug or have a suggestion for Mastodon.</LinkableH2>
      <p>You can file a bug or submit suggestions at <a href='https://github.com/tootsuite/mastodon/issues'>Mastodon’s Issue Tracker.</a></p>
      <LinkableH2 id='hey-i-love-mastodon-faqs-can-i-have-more'>Hey I love mastodon FAQs! Can I have more?</LinkableH2>
      <p>Here’s more, from hardworking individuals trying to help, too.</p>
      <ul>
        <li><a href='https://hastebin.com/raw/xuqogukimu'>https://hastebin.com/raw/xuqogukimu</a></li>
        <li><a href='https://github.com/ThomasLeister/masto-faq'>https://github.com/ThomasLeister/masto-faq</a></li>
        <li><a href='http://mastoguide.info/Pages/FAQindex.html'>http://mastoguide.info/Pages/FAQindex.html</a></li>
        <li><a href='https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7'>https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7</a></li>
        <li><a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md'>https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md</a></li>
      </ul>
      <footer>
        <p>This FAQ was compiled with contributions from <a href='https://mastodon.social/@Gargron'>@Gargron</a>, <a href='https://mastodon.social/@Raccoon'>@raccoon</a>, <a href='https://octodon.social/@upside'>@upside</a>, <a href='https://mastodon.social/@zacanger'>@zacanger</a>, <a href='https://octodon.social/@NthTensor'>@NthTensor</a>, <a href='https://mastodon.social/@ametlles'>@ametlles</a> and many others in the fediverse!</p>
      </footer>
    </div>
  </div>
);

export default Faq;
