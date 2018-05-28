import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';

import sponsorTootdon from './assets/sponsors/tootdon.png';
import sponsorKibousoft from './assets/sponsors/kibousoft.png';
import sponsorPixiv from './assets/sponsors/pixiv.png';
import sponsorFourthEstate from './assets/sponsors/FourthEstate-logo.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarGlocal from './assets/sponsors/glocal.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
// import avatarZoeQuinn from './assets/sponsors/zoequinn.jpg';
import avatarSdf from './assets/sponsors/sdf.jpg';
import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';
//import avatarAndreaValenti from './assets/sponsors/andreavalenti.png';
// import avatarDavidHutchinson from './assets/sponsors/davidhutchinson.png';
import avatarIrick from './assets/sponsors/irick.gif';
//import avatarSirTyrent from './assets/sponsors/sirtyrent.png';
import avatarVJ from './assets/sponsors/vj.png';
import avatarFragbenny from './assets/sponsors/fragbenny.jpeg';
import avatarIanna from './assets/sponsors/ianna.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarMarkAtwood from './assets/sponsors/markatwood.jpg';
import avatarNoellabo from './assets/sponsors/noellabo.png';
import avatarLevlaz from './assets/sponsors/levlaz.png';
import avatarDansup from './assets/sponsors/dansup.jpg';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: 'rgba(217, 225, 232, 0.7)',
    borderRadius: '4px',
  };

  return <div style={{ ...style, ...thumbStyle }} />;
};

const Sponsorship = () => (
  <div className='sponsorship' id='sponsorship'>
    <div className='intro'>
      <Navigation />

      <div className='text'>
        <h2><FormattedMessage id='sponsorship.sponsors_of_mastodon' defaultMessage='Sponsors of Mastodon' /></h2>
        <p className='lead'><FormattedMessage id='sponsorship.thanks_to' defaultMessage='Mastodon is <strong>free, open-source software</strong>. There is no advertising, monetizing, or venture capital. <strong>Your donations directly support full-time development of the project</strong>. Thank you to the following people and companies:' /></p>
      </div>

      <div className='container'>
        <div className='tier'>
          <div className='sponsors-list--logos'>
            <a href='http://tootdon.club/'><img src={sponsorTootdon} alt='Tootdon' /></a>
            <a href='http://kibousoft.co.jp/'><img src={sponsorKibousoft} alt='Kibousoft LLC' /></a>
            <a href='https://pixiv.net/'><img src={sponsorPixiv} alt='pixiv Inc.' /></a>
            <a href='http://www.fourthestate.co/'><img src={sponsorFourthEstate} alt='Fourth Estate' /></a>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='text cta-text'>
        <a href='https://patreon.com/mastodon' className='cta button'><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></a>
      </div>

      <div className='tier'>
        <h3><FormattedMessage id='sponsorship.silver_sponsors' defaultMessage='Silver sponsors' /></h3>
        <p><FormattedMessage id='sponsorship.silver_sponsors_text' defaultMessage='<strong>Silver sponsors</strong> are those that have pledged $40 to $99 to Mastodon.' /></p>

        <div className='sponsors-list--badges'>
          <ul>
            <li><a href='https://mastodon.art'><img src={avatarGlocal} alt='' /> <span><strong>glocal</strong><span>https://mastodon.art</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Ted</strong><span>-</span></span></a></li>
            <li><a href='https://mastodon.sdf.org'><img src={avatarSdf} alt='' /> <span><strong>SDF.ORG</strong><span>https://mastodon.sdf.org</span></span></a></li>
            <li><a href='https://cloudfleet.io'><img src={avatarCloudfleet} alt='' /> <span><strong>CloudFleet</strong><span>https://cloudfleet.io</span></span></a></li>
            <li><a href='https://sudoJames.com'><img src={avatarJamesMWright} alt='' /> <span><strong>James Wright</strong><span>https://sudoJames.com</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Martin Seeger</strong><span>-</span></span></a></li>
            <li><a href='https://vulpine.club/@Irick'><img src={avatarIrick} alt='' /> <span><strong>Irick Corwal</strong><span>https://vulpine.club/@Irick</span></span></a></li>
            <li><a href='https://eightballoon.com/'><img src={noAvatar} alt='' /> <span><strong>Takanori Yamada</strong><span>https://eightballoon.com/</span></span></a></li>
            <li><a href='https://identi.ca/evan'><img src={avatarEvan} alt='' /> <span><strong>Evan Prodromou</strong><span>https://identi.ca/evan</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Ben Werdmuller</strong><span>-</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Blaine Cook</strong><span>-</span></span></a></li>
            <li><a href='https://www.whatisseo.com/'><img src={avatarVJ} alt='' /> <span><strong>VJ</strong><span>https://www.whatisseo.com/</span></span></a></li>
            <li><a href='https://fragbenny.de/'><img src={avatarFragbenny} alt='' /> <span><strong>fragbenny</strong><span>https://fragbenny.de/</span></span></a></li>
            <li><a href='https://inanna.xyz/'><img src={avatarIanna} alt='' /> <span><strong>Inanna</strong><span>https://inanna.xyz/</span></span></a></li>
            <li><a href='https://about.me/markatwood'><img src={avatarMarkAtwood} alt='' /> <span><strong>Mark Atwood</strong><span>https://about.me/markatwood</span></span></a></li>
            <li><a href='https://dtp-mstdn.jp'><img src={avatarNoellabo} alt='' /> <span><strong>noellabo</strong><span>https://dtp-mstdn.jp</span></span></a></li>
            <li><a href='https://pixelfed.org/'><img src={avatarDansup} alt='' /> <span><strong>dansup</strong><span>https://pixelfed.org/</span></span></a></li>
            <li><a href='https://mastodon.social/@levlaz'><img src={avatarLevlaz} alt='' /> <span><strong>Lev Lazinskiy</strong><span>https://mastodon.social/@levlaz</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Ms Miller</strong><span>-</span></span></a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className='tier'>
        <h3><FormattedMessage id='sponsorship.sponsors' defaultMessage='Sponsors' /></h3>
        <p><FormattedMessage id='sponsorship.sponsors_text' defaultMessage='<strong>Sponsors</strong> are those that pledged $10 to $39 to Mastodon.' /></p>

        <div className='sponsors-list--names'>
          <Scrollbars style={{ height: 500 }} renderThumbVertical={renderThumb}>
            <ul className='highlighted'>
              <li>Julie Moronuki</li>
              <li>Ke_Ga</li>
              <li>Kit Redgrave</li>
              <li>Great Scott Gadgets</li>
              <li>Moritz Heiber</li>
              <li>Paco Hope</li>
              <li>Gen Knoxx</li>
              <li>slipstream/RoL</li>
              <li>Nolan Lawson</li>
              <li>Sean Linsley</li>
              <li>nullkal</li>
              <li>Masto.host</li>
              <li>Sho Kusano / rosylilly</li>
              <li>Masahito Zembutsu</li>
              <li>'@mecab</li>
              <li>iliana weller</li>
              <li>Philip James</li>
              <li>Christopher Kruse</li>
              <li>Jim Luke</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Josef Kenny</li>
              <li>mayaeh</li>
              <li>Ken Naishtat</li>
              <li>Danny O'Brien</li>
              <li>Ellen Teapot</li>
              <li>J. C. Holder</li>
              <li>Austin Putman</li>
              <li>halcy</li>
              <li>Matteo De Micheli</li>
              <li>David Yip</li>
              <li>G Berton Latamore</li>
              <li>ティン・ルーフ</li>
              <li>Hideki Yamamoto</li>
              <li>Kenneth Ken Sugar</li>
              <li>Miki Habryn</li>
              <li>3xv</li>
              <li>Sajith Sasidharan</li>
              <li>Shinnosuke Iwaki</li>
              <li>nobody</li>
              <li>Richard Minerich</li>
              <li>Paul Lindner</li>
              <li>Jesse Olson</li>
              <li>Manesh Pillai</li>
              <li>Joe McLaughlin</li>
              <li>Jonathan McDowell</li>
              <li>Zac Anger</li>
              <li>Alexander Zillion</li>
              <li>Josephine Pedersen</li>
              <li>Nemecle</li>
              <li>Brophey Wolf</li>
              <li>Nicolai Schwarz</li>
              <li>Jacob Helwig</li>
              <li>Danielle McLean</li>
              <li>Zaki</li>
              <li>C J Silverio</li>
              <li>Rufus</li>
              <li>Kevin Sonney</li>
              <li>Micah Elizabeth Scott</li>
              <li>Aaron Williamson</li>
              <li>Christopher James Halse Rogers</li>
              <li>outofrange</li>
              <li>Chris Johnson</li>
              <li>Olivia Mossberg</li>
              <li>Matthieu Herrb</li>
              <li>Rey Tucker</li>
              <li>Myk Bilokonsky</li>
              <li>Jerry Gnarcia</li>
              <li>USAMI Kenta; Zonu.EXE (@tadsan)</li>
              <li>Paul Meier</li>
              <li>Charles Hutchins</li>
              <li>Laurent Joubert</li>
              <li>fairenoughschroedinger</li>
              <li>Harukasan</li>
              <li>Yoshiki Kato</li>
              <li>Scott Honey</li>
              <li>Johannes Barre</li>
              <li>Ruminations on Software</li>
              <li>Effy Elden</li>
              <li>Bram</li>
              <li>Osamu Miyake</li>
              <li>Koya Matsuo</li>
              <li>Lady Errant</li>
              <li>Sandro Hawke</li>
              <li>Konosuke Furuhata</li>
              <li>Masaya Imai</li>
              <li>Daniel M Crawford</li>
              <li>Ryan Frederick</li>
              <li>Landy Manderson</li>
              <li>Brion Vibber</li>
              <li>Andrei Petcu</li>
            </ul>

            <ul>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>Akihiko Odaki</li>
              <li>Scott Hammack</li>
              <li>Jeremy Penner</li>
              <li>Todd Monotony</li>
              <li>Klara</li>
              <li>snorpey</li>
              <li>Emma Humphries</li>
              <li>Christina Hendricks</li>
              <li>Niels Abildgaard</li>
              <li>Sam Raker</li>
              <li>Clemens Vermeulen</li>
              <li>Niko Autio</li>
              <li>Max</li>
              <li>jomo</li>
              <li>Irene Knapp</li>
              <li>hakoai</li>
              <li>James Valleroy</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>A bowl of creamy tomato soup</li>
              <li>Drew Williams</li>
              <li>Clinton Freeman</li>
              <li>Jérôme Choain</li>
              <li>Karen</li>
              <li>h-izumi</li>
              <li>Jonathan</li>
              <li>itsumonotakumi</li>
              <li>Mike</li>
              <li>Jason Rimmer</li>
              <li>Ash Furrow</li>
              <li>Wesley Moore</li>
              <li>Parker Higgins</li>
              <li>Dave Lane</li>
              <li>William Hopkins</li>
              <li>Jay Shapiro</li>
              <li>August Bigelow</li>
              <li>Jer Thorp</li>
              <li>vilmibm</li>
              <li>Justus Seifert</li>
              <li>Caelyn McAulay</li>
              <li>Alexandre Dufournet</li>
              <li>Colin Mahns</li>
              <li>Patrick Gibson</li>
              <li>Tassels</li>
              <li>Damien Nicolas</li>
              <li>Angry Salad</li>
              <li>Owen Kahn</li>
              <li>_</li>
              <li>Spencer Alves</li>
              <li>Sean Lynch</li>
              <li>Al</li>
              <li>Chris Garcia</li>
              <li>Jessica Stokes</li>
              <li>Emily Marigold Klassen</li>
              <li>Michael Kosler</li>
              <li>Yoshiaki Kiura</li>
              <li>Tom Harris</li>
              <li>Nicole Bacon</li>
              <li>Tim Ashley Jenkins</li>
              <li>Damien Sirkis</li>
              <li>Ruben</li>
              <li>mkatze</li>
              <li>j r conlin</li>
              <li>KinkyBoys Podcast</li>
              <li>Michael Etzkorn</li>
              <li>Chris</li>
              <li>André Koot</li>
              <li>Allen Varney</li>
              <li>Trent AKA SirTyrent</li>
              <li>Emmanuel Jacobs</li>
              <li>Catt Small</li>
              <li>Brody Brooks</li>
              <li>Connor Olding</li>
              <li>Alys Brooks</li>
              <li>joshua anderson</li>
              <li>Moult</li>
              <li>Bjarni R. Einarsson</li>
              <li>Brent P. Newhall</li>
              <li>Dale Price</li>
              <li>Ben Hamill</li>
              <li>Peter Gravelle</li>
              <li>Kai Engert</li>
              <li>Jack</li>
              <li>Nathan Howell</li>
              <li>Michael Myers</li>
              <li>Erika</li>
              <li>xanac</li>
              <li>Oliver Uvman</li>
              <li>Lee Starnes</li>
              <li>Mathieu Lecarme</li>
              <li>Giovanni Angoli</li>
              <li>Joel</li>
              <li>Tim Wilde</li>
              <li>Tango</li>
              <li>Hiroshi Seki</li>
              <li>Ashanti Fortson</li>
              <li>Gergo Lippai</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>LoovtO</li>
              <li>Jennie Schilling</li>
              <li>Flake</li>
              <li>B Cavello</li>
              <li>Brian</li>
              <li>Matija Han</li>
              <li>Sjef</li>
              <li>Syfaro</li>
              <li>Maff</li>
              <li>Christopher Kuttruff</li>
              <li>Jon Dubovsky</li>
              <li>Lon Hohberger</li>
              <li>Lily Yu</li>
              <li>Daniel Lowe</li>
              <li>Alicia Goranson</li>
              <li>Vivian L.</li>
              <li>Raphael Lullis</li>
              <li>pinfort</li>
              <li>Michael Castleman</li>
              <li>Derek Gonyeo</li>
              <li>Algot Runeman</li>
              <li>Muloka</li>
              <li>Jay Flaunts His Ignorance</li>
              <li></li>
              <li>Tom Liesenfeld</li>
              <li>colin mitchell</li>
              <li>Mark Gordon</li>
              <li>Root</li>
              <li>Toby Pinder</li>
              <li>Y G</li>
              <li>Jonathan Doda</li>
              <li>Cybrespace</li>
              <li>Jeremy Stashewsky</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Beads Land-Trujillo</li>
              <li>Toootim</li>
              <li>Ryan Littlefield</li>
              <li>Jay H. Holloway</li>
              <li>Kimmy</li>
              <li>Merlot</li>
              <li>Rhys Powell</li>
              <li>Waldo</li>
              <li>raymond lutz</li>
              <li>Pierre BT</li>
              <li>Andrew Schmadel</li>
              <li>illuia</li>
              <li>kDN4dkhsB</li>
              <li>Tyler J Hill</li>
              <li>Greg Pak</li>
              <li>Lewis Perin</li>
              <li>T</li>
              <li>Pablo Lopez Soriano</li>
              <li>Snowflake</li>
              <li>Hodge</li>
              <li>Solei</li>
              <li>Andrew Replogle</li>
              <li>Jim Bradfield</li>
              <li>Martin Tithonium</li>
              <li>Sundi L Richard</li>
              <li>Will Springer</li>
              <li>Trace Evans</li>
              <li>Erik Bray</li>
              <li>Fletcher Cole</li>
              <li>Arielle Grimes</li>
              <li>tarah</li>
              <li>Liaizon Wakest</li>
              <li>Simeon</li>
              <li>Ted O'Neill</li>
              <li>Will</li>
              <li>Andrew Roach</li>
              <li>Ickalo</li>
              <li>Michael Sieradzki</li>
              <li>Steve Felix</li>
              <li>[wolfe interval]</li>
              <li>Raphael Schweikert</li>
              <li>Vincent Sautter</li>
              <li>Calvin French</li>
              <li>pixelguff</li>
              <li>Bryan</li>
              <li>Modern Modron</li>
              <li>Lily</li>
              <li>Caitlin Collins</li>
              <li>Lorxus, an actual fox on the internet</li>
              <li>Kris Jacque</li>
              <li>ye735f</li>
              <li>Christopher Greene</li>
              <li>Jeremy Guillette</li>
              <li>Casey Gollan</li>
              <li>Alex Dunn</li>
              <li>Corbin Davenport</li>
              <li>Laura Flores</li>
              <li>Brenda Salem</li>
              <li>Blorg³</li>
              <li>Jayd Aït-Kaci</li>
              <li>Melissa Avery-Weir</li>
              <li>Gareth Noyce</li>
              <li>Sara Haworth</li>
              <li>reacocard</li>
              <li>bunnyhero</li>
              <li>belabor jaql</li>
              <li>Andrea</li>
              <li>Johanna B</li>
              <li>Horst Gutmann</li>
              <li>Felipe Martin</li>
              <li>Simon Tesla</li>
              <li>Sam Marshall</li>
              <li>Michael Van Vleet</li>
              <li>Max</li>
              <li>Angristan</li>
              <li>Shinichi Sato</li>
              <li>K466</li>
              <li>LM</li>
              <li>westantenna</li>
              <li>Stephen Lovell</li>
              <li>Yoshitaka Kaneko</li>
              <li>tj</li>
              <li>Takahiro Fujiwara</li>
              <li>neguse</li>
              <li>Artoria2e5</li>
              <li>Soshi Tamura</li>
              <li>Olivier Auber</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Pablo Defendini</li>
              <li>Naoki Kosaka</li>
              <li>Jon Pincus</li>
              <li>Neva Nevi</li>
              <li>Masafumi Otsune</li>
              <li>Akira</li>
              <li>Go Saito</li>
              <li>Nozomu Saito</li>
              <li>Claire</li>
              <li>Kazunori Shinozaki</li>
              <li>Tim and Alexandra Swast</li>
              <li>Decio</li>
              <li>kanna</li>
              <li>HolyGrail</li>
              <li>Krzysztof Jankowski</li>
              <li>Nathan Wittstock</li>
              <li>Benjamin</li>
              <li>Andy</li>
              <li>Willscire of the Many Tribes</li>
              <li>Bryan Lunduke</li>
              <li>codechemist</li>
              <li>Diego Islas Ocampo - Hyuchia</li>
              <li>Harley Watson</li>
              <li>Miroslav Bajtos</li>
              <li>George Edogawa</li>
              <li>Enrique Santos</li>
              <li>Javier Jardón</li>
              <li>Paul Houlihan</li>
              <li>Nitin Dahyabhai</li>
              <li>8zu</li>
              <li>Stephanie Pakrul</li>
              <li>Alexander</li>
              <li>RW</li>
              <li>Roo Khan</li>
              <li>mpj</li>
              <li>Connor Hudson</li>
              <li>Lars Kristian Høydal</li>
              <li>Scott Moore</li>
              <li>Frederick Doe</li>
              <li>Axel Terizaki</li>
              <li>Sud</li>
              <li>D. Moonfire</li>
              <li>Christopher Armstrong</li>
              <li>Shivian Morgan</li>
              <li>Eric Mill</li>
              <li>Hans de Wolf</li>
              <li>Balthasar Glättli</li>
              <li>Fabricio C Zuardi</li>
              <li>Margaret Trauth</li>
              <li>James Smith</li>
              <li>t3sserakt</li>
              <li>Dmitri Sotnikov</li>
              <li>Pierre-Emmanuel Guerton</li>
              <li>Klastic</li>
              <li>Alice Voidstar</li>
              <li>Alan Love</li>
              <li>Iain Cheyne</li>
              <li>Daniel Maxwell-Ross</li>
              <li>Indi Latrani</li>
              <li>Bruno Dias</li>
              <li>Stefan Hayden</li>
              <li>Esteban Manchado Velázquez</li>
              <li>Larry Fine</li>
              <li>Reilly Grant</li>
              <li>Allen Baker</li>
              <li>Mark Davis</li>
              <li>Christian Ternus</li>
              <li>Stephanie Northway</li>
              <li>Andrew Louis</li>
              <li>Syluban</li>
              <li>dreid</li>
              <li>Tessa N</li>
              <li>Jam</li>
              <li>Casey Kolderup</li>
              <li>Nurelin</li>
              <li>Infocalypse</li>
              <li>Nicolas Grevet</li>
              <li>Paul Harvey</li>
              <li>Claire Tolan</li>
              <li>Ira Abramov</li>
              <li>Helly</li>
              <li>Kurt M</li>
              <li>Selena Knight</li>
              <li>Justin Humm</li>
              <li>Matthew Cheely</li>
              <li>Salomao Becker</li>
              <li>Abe Weishaupt</li>
              <li>Steve Phillips</li>
              <li>Firebird Fiction</li>
              <li>Tab</li>
              <li>Jason S.</li>
              <li>Adam Guest</li>
              <li>Mel Reams</li>
              <li>Michael Brodhead</li>
              <li>Jonas Wisser</li>
              <li>Manu Quadros</li>
              <li>Shawn</li>
              <li>Richard</li>
              <li>Andrew Elliot</li>
              <li>Scotty</li>
              <li>Andrew Sherman</li>
              <li>Satoshi KOJIMA</li>
              <li>Jacob Weisz</li>
              <li>Lilith Saintcrow</li>
              <li>Pablo Brasero</li>
              <li>James Harris</li>
              <li>Axel Dürkop</li>
              <li>Captain Skyhawk</li>
              <li>Greg Sartucci</li>
              <li>Lyn Thorne-Alder</li>
              <li>Allison Parrish</li>
              <li>Ben Bonfil</li>
              <li>unarist</li>
              <li>Matt Baer</li>
              <li>masarakki</li>
              <li>abcang</li>
              <li>Stefano Figura</li>
              <li>Gabriele Lucci</li>
              <li>Joshua Demallistre</li>
              <li>0̸chroma</li>
              <li>Arkanosis</li>
              <li>Andrew W</li>
              <li>Kyota Yasuda</li>
              <li>tateisu</li>
              <li>Satoshi Endo</li>
              <li>Sébastien Lalloué</li>
              <li>MitarashiDango</li>
              <li>Takuya Yoshida</li>
              <li>Drífa Jónsdóttir</li>
              <li>null</li>
              <li>no</li>
              <li>Kerim</li>
              <li>Clworld</li>
              <li>ぽむ</li>
              <li>lrvick</li>
              <li>Wolfgang '@vilbi</li>
              <li>Kitaiti Makoto</li>
              <li>DW</li>
              <li>Judson Dunn</li>
              <li>Jen B</li>
              <li>Eelco Maljaars</li>
              <li>Kelson</li>
              <li>Terry Elliott</li>
              <li>Cathal Garvey</li>
              <li>Sadiq Saif</li>
              <li>Eldan Goldenberg</li>
              <li>Matti Lattunen</li>
              <li>Tom Kenny</li>
              <li>David Wolfpaw</li>
              <li>Lertsenem</li>
              <li>Hywel Phillips</li>
              <li>Tara Calishain</li>
              <li>e. m.</li>
              <li>Antoine Amarilli</li>
              <li>HiTechRabbit</li>
              <li>Gusk-ma</li>
              <li>lindwurm</li>
              <li>Rafael</li>
              <li>Jan Jastrow</li>
              <li>Kazusa Okuda</li>
              <li>German Martinez Maldonado</li>
              <li>Sarah Hegeman</li>
              <li>Bruce Tindall</li>
              <li>Patrick L Archibald</li>
              <li>osapon</li>
              <li>Francois Bayart</li>
              <li>Walter McGinnis</li>
              <li>Christopher</li>
              <li>k</li>
              <li>Andrew Dawson</li>
              <li>Isabelle Hurbain-Palatin</li>
              <li>Mikkel Trolle Larsen</li>
              <li>Nero O'Reilly</li>
              <li>Priscila Tchorbadjian</li>
              <li>Karel P Kerezman</li>
              <li>JoYo</li>
              <li>Donna</li>
              <li>Lan</li>
              <li>Matt</li>
              <li>infernalperson</li>
              <li>liffy</li>
              <li>Smut Lit Co.</li>
              <li>Antoine Jacques de Dixmude</li>
              <li>Matthew Bogart</li>
              <li>Lindsey B</li>
              <li>Eric Rucker</li>
              <li>Ross Smith</li>
              <li>Manuel Bärenz</li>
              <li>Shy Custis</li>
              <li>new Object</li>
              <li>E. N. Tót</li>
              <li>Timothy Garris</li>
              <li>Jevon</li>
              <li>Blue Delliquanti</li>
              <li>Max Kaehn</li>
              <li>mkreed</li>
              <li>Jeremy Putnam</li>
              <li>Dave Hoffman</li>
              <li>Liz</li>
              <li>Josh Sutphin</li>
              <li>M. Lane</li>
              <li>Kyle Cooper</li>
              <li>Ayhotte</li>
              <li>OliveOilCorp</li>
              <li>Ryan Rix</li>
              <li>Tim Albers</li>
              <li>vpzomtrrfrt</li>
              <li>Chad Gowler</li>
              <li>David Underwood</li>
              <li>Xavi Francisco</li>
              <li>Patrick Hogan</li>
              <li>A Peanut</li>
              <li>Bryanna M</li>
              <li>Deborah Goldsmith</li>
              <li>Colin Coghill</li>
              <li>Ian Cox</li>
              <li>Ronin wood</li>
              <li>exo</li>
              <li>Annika Backstrom</li>
              <li>Marie Martin</li>
              <li>Friends Talk Frontend</li>
              <li>Jennifer Barnes</li>
              <li>jeremy</li>
              <li>Eleanor Konik</li>
              <li>Soliman</li>
              <li>Hugh Messenger</li>
              <li>Zach Valenti</li>
              <li>Joel Wallis Jucá</li>
              <li>Jörg</li>
              <li>DoC</li>
              <li>Thaddeus Grey</li>
              <li>Vincent Ollivier</li>
              <li>Matthias Weise</li>
              <li>Alexander Murray-Watters</li>
              <li>Brook Peterson</li>
              <li>Jeffery Yeary</li>
              <li>Kyoki Kafuka</li>
              <li>Spenser Isdahl</li>
              <li>Church Turing</li>
              <li>unasuke</li>
              <li>Stephen L.B.</li>
              <li>Inkey</li>
              <li>Ryan</li>
              <li>Jeremiah C. Foster</li>
              <li>Richard K Schultz</li>
              <li>Nicolas Morel</li>
              <li>Mathias Hellquist</li>
              <li>Vatin Petaneelanon</li>
              <li>Thomas Baker</li>
              <li>Nathan Brown</li>
              <li>Ian Smith</li>
              <li>Charles Childers</li>
              <li>Jonathan</li>
              <li>Bryan Rosander</li>
              <li>caasi Huang</li>
              <li>K.K. POON</li>
              <li>Hiroja Shibe's Space Odyssey Network</li>
              <li>Benedikt Boeck</li>
              <li>bradsmith</li>
              <li>Sem</li>
              <li>Doug Belshaw</li>
              <li>Wing</li>
              <li>Abby</li>
              <li>Thomas Chapeaux</li>
              <li>Chet Zar</li>
              <li>Oriol Demaria</li>
              <li>Pam G</li>
              <li>Amalie McKee</li>
              <li>Bingen Eguzkitza</li>
              <li>Michael Melanson</li>
              <li>Lukáš Lánský</li>
              <li>Mark</li>
              <li>Kevin O'Gorman</li>
              <li>Daniel Foré</li>
              <li>Andrés Riveros</li>
              <li>Jonas Berlin</li>
              <li>shoyameow</li>
              <li>Dario Castañé</li>
              <li>Fabio Utzig</li>
              <li>Jamie Gray</li>
              <li>Hinaloe Kl</li>
              <li>Hycon</li>
              <li>Rick Garcia</li>
              <li>Quinn Monk</li>
              <li>Samuel Maddock</li>
              <li>Rosemary Windsor</li>
              <li>Ismael Acevedo</li>
              <li>Eric Rose</li>
              <li>Ashraf Rabi</li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    </div>

    <div className='final-cta'>
      <div className='container'>
        <h3><FormattedMessage id='sponsorship.support_the_project' defaultMessage='Support the project' /></h3>
        <p><FormattedMessage id='sponsorship.every_bit_helps' defaultMessage='Every little bit helps, and we appreciate all contributions.' /></p>
        <a href='https://patreon.com/mastodon' className='cta button alt'><FormattedMessage id='sponsorship.become_a_sponsor' defaultMessage='Become a sponsor' /></a>
      </div>
    </div>
  </div>
);

export default Sponsorship;
