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
              <li>Sean Linsley</li>
              <li>Nolan Lawson</li>
              <li>Gen Knoxx</li>
              <li>Moritz Heiber</li>
              <li>Paco Hope</li>
              <li>Great Scott Gadgets</li>
              <li>slipstream/RoL</li>
              <li>Masahito Zembutsu</li>
              <li>Masto.host</li>
              <li>nullkal</li>
              <li>Sho Kusano / rosylilly</li>
              <li>'@mecab</li>
              <li>iliana weller</li>
              <li>Alda</li>
              <li>Nitai bezerra da Silva</li>
              <li>Philip James</li>
              <li>Christopher Kruse</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Josef Kenny</li>
              <li>Jim Luke</li>
              <li>mayaeh</li>
              <li>Ken Naishtat</li>
              <li>Danny O'Brien</li>
              <li>Ellen Teapot</li>
              <li>Austin Putman</li>
              <li>J. C. Holder</li>
              <li>halcy</li>
              <li>Matteo De Micheli</li>
              <li>David Yip</li>
              <li>G Berton Latamore</li>
              <li>Spex</li>
              <li>ティン・ルーフ</li>
              <li>nobody</li>
              <li>Hideki Yamamoto</li>
              <li>Rufus</li>
              <li>Miki Habryn</li>
              <li>Danielle McLean</li>
              <li>Aaron Williamson</li>
              <li>Yamagishi Kazutoshi</li>
              <li>Nemecle</li>
              <li>Manesh Pillai</li>
              <li>C J Silverio</li>
              <li>Micah Elizabeth Scott</li>
              <li>Paul Lindner</li>
              <li>Zac Anger</li>
              <li>3xv</li>
              <li>Kevin Sonney</li>
              <li>Olivia Mossberg</li>
              <li>Chris Johnson</li>
              <li>Jacob Helwig</li>
              <li>Joe McLaughlin</li>
              <li>Jonathan McDowell</li>
              <li>Josephine Pedersen</li>
              <li>Rey Tucker</li>
              <li>Richard Minerich</li>
              <li>Christopher James Halse Rogers</li>
              <li>Sajith Sasidharan</li>
              <li>Matthieu Herrb</li>
              <li>Nicolai Schwarz</li>
              <li>Dashie</li>
              <li>outofrange</li>
              <li>Jesse Olson</li>
              <li>Kenneth Ken Sugar</li>
              <li>Zaki</li>
              <li>Brophey Wolf</li>
              <li>Shinnosuke Iwaki</li>
              <li>Alexander Zillion</li>
              <li>Martin Hinrichs</li>
              <li>Jerry Gnarcia</li>
              <li>Myk Bilokonsky</li>
              <li>USAMI Kenta; Zonu.EXE (@tadsan)</li>
              <li>Paul Meier</li>
              <li>Yoshiki Kato</li>
              <li>fairenoughschroedinger</li>
              <li>Scott Honey</li>
              <li>Harukasan</li>
              <li>Charles Hutchins</li>
              <li>Laurent Joubert</li>
              <li>Ruminations on Software</li>
              <li>Johannes Barre</li>
              <li>Effy Elden</li>
              <li>Masaya Imai</li>
              <li>Koya Matsuo</li>
              <li>Osamu Miyake</li>
              <li>Sandro Hawke</li>
              <li>Bram</li>
              <li>Lady Errant</li>
              <li>Konosuke Furuhata</li>
              <li>Daniel M Crawford</li>
              <li>Ryan Frederick</li>
              <li>Landy Manderson</li>
              <li>Brion Vibber</li>
              <li>Andrei Petcu</li>
            </ul>

            <ul>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>Pierre Vanhulst</li>
              <li>Akihiko Odaki</li>
              <li>Klara</li>
              <li>Jeremy Penner</li>
              <li>Scott Hammack</li>
              <li>snorpey</li>
              <li>jeremy gray</li>
              <li>Takeshi Umeda</li>
              <li>Emma Humphries</li>
              <li>Christina Hendricks</li>
              <li>Niels Abildgaard</li>
              <li>Sam Raker</li>
              <li>Niko Autio</li>
              <li>Max</li>
              <li>Clemens Vermeulen</li>
              <li>jomo</li>
              <li>Irene Knapp</li>
              <li>hakoai</li>
              <li>James Valleroy</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>Clinton Freeman</li>
              <li>Jérôme Choain</li>
              <li>Drew Williams</li>
              <li>A bowl of creamy tomato soup</li>
              <li>Karen</li>
              <li>h-izumi</li>
              <li>Jonathan</li>
              <li>itsumonotakumi</li>
              <li>Colin Mahns</li>
              <li>Caelyn McAulay</li>
              <li>Nicholas Hinds</li>
              <li>Jay Shapiro</li>
              <li>William Hopkins</li>
              <li>Jer Thorp</li>
              <li>August Bigelow</li>
              <li>vilmibm</li>
              <li>Dave Lane</li>
              <li>Justus Seifert</li>
              <li>Mike</li>
              <li>Ash Furrow</li>
              <li>Alexandre Dufournet</li>
              <li>Tassels</li>
              <li>Patrick Gibson</li>
              <li>Wesley Moore</li>
              <li>Damien Nicolas</li>
              <li>Jason Rimmer</li>
              <li>Parker Higgins</li>
              <li>Spencer Alves</li>
              <li>Sean Lynch</li>
              <li>_</li>
              <li>Owen Kahn</li>
              <li>Al</li>
              <li>Angry Salad</li>
              <li>Chris Garcia</li>
              <li>Jessica Stokes</li>
              <li>Emily Marigold Klassen</li>
              <li>Michael Kosler</li>
              <li>Yoshiaki Kiura</li>
              <li>Tom Harris</li>
              <li>Nicole Bacon</li>
              <li>Tim Ashley Jenkins</li>
              <li>Ruben</li>
              <li>Damien Sirkis</li>
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
              <li>Jan-Niklas Braak</li>
              <li>Nathan Howell</li>
              <li>Kai Engert</li>
              <li>Brent P. Newhall</li>
              <li>Moult</li>
              <li>Peter Gravelle</li>
              <li>Ben Hamill</li>
              <li>Michael Myers</li>
              <li>Dale Price</li>
              <li>Bjarni R. Einarsson</li>
              <li>Jack</li>
              <li>Erika</li>
              <li>Mathieu Lecarme</li>
              <li>Lee Starnes</li>
              <li>Oliver Uvman</li>
              <li>xanac</li>
              <li>Giovanni Angoli</li>
              <li>Joel</li>
              <li>Ashanti Fortson</li>
              <li>Tim Wilde</li>
              <li>Tango</li>
              <li>Hiroshi Seki</li>
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
              <li>devurandom</li>
              <li>Michael Castleman</li>
              <li>Jay Flaunts His Ignorance</li>
              <li>Algot Runeman</li>
              <li>Derek Gonyeo</li>
              <li>colin mitchell</li>
              <li>Jonathan Doda</li>
              <li></li>
              <li>Toby Pinder</li>
              <li>Muloka</li>
              <li>Y G</li>
              <li>Sam Thompson</li>
              <li>Mark Gordon</li>
              <li>pinfort</li>
              <li>Tom Liesenfeld</li>
              <li>Root</li>
              <li>Cybrespace</li>
              <li>Jeremy Stashewsky</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Beads Land-Trujillo</li>
              <li>Toootim</li>
              <li>Ryan Littlefield</li>
              <li>Jay H.</li>
              <li>Kimmy</li>
              <li>Merlot</li>
              <li>Rhys Powell</li>
              <li>raymond lutz</li>
              <li>Richard Lucas</li>
              <li>Waldo</li>
              <li>Andrew Schmadel</li>
              <li>Pierre BT</li>
              <li>illuia</li>
              <li>Tyler J Hill</li>
              <li>Greg Pak</li>
              <li>kDN4dkhsB</li>
              <li>Lewis Perin</li>
              <li>tarah</li>
              <li>Fletcher Cole</li>
              <li>Arielle Grimes</li>
              <li>Hodge</li>
              <li>Erik Bray</li>
              <li>Trace Evans</li>
              <li>Liaizon Wakest</li>
              <li>Jim Bradfield</li>
              <li>Simeon</li>
              <li>Martin Tithonium</li>
              <li>Sundi L Richard</li>
              <li>Andrew Replogle</li>
              <li>Solei</li>
              <li>Will Springer</li>
              <li>Snowflake</li>
              <li>Pablo Lopez Soriano</li>
              <li>T</li>
              <li>Ted O'Neill</li>
              <li>Andrew Roach</li>
              <li>Will</li>
              <li>Ickalo</li>
              <li>Michael Sieradzki</li>
              <li>Steve Felix</li>
              <li>[wolfe interval]</li>
              <li>Raphael Schweikert</li>
              <li>Kris Jacque</li>
              <li>Modern Modron</li>
              <li>Bryan</li>
              <li>Lorxus, an actual fox on the internet</li>
              <li>Lily</li>
              <li>Vincent Sautter</li>
              <li>Calvin French</li>
              <li>Caitlin Collins</li>
              <li>pixelguff</li>
              <li>Jeremy Guillette</li>
              <li>ye735f</li>
              <li>Christopher Greene</li>
              <li>Casey Gollan</li>
              <li>Alex Dunn</li>
              <li>Melissa Avery-Weir</li>
              <li>Jayd Aït-Kaci</li>
              <li>Corbin Davenport</li>
              <li>Laura Flores</li>
              <li>Blorg³</li>
              <li>Brenda Salem</li>
              <li>reacocard</li>
              <li>Andrea</li>
              <li>Gareth Noyce</li>
              <li>Sara Haworth</li>
              <li>belabor jaql</li>
              <li>bunnyhero</li>
              <li>Horst Gutmann</li>
              <li>Johanna B</li>
              <li>Indi Latrani</li>
              <li>Christopher Armstrong</li>
              <li>neguse</li>
              <li>Decio</li>
              <li>Connor Hudson</li>
              <li>dreid</li>
              <li>Allen Baker</li>
              <li>Harley Watson</li>
              <li>Tab</li>
              <li>Claire Tolan</li>
              <li>Pablo Defendini</li>
              <li>Scott Moore</li>
              <li>Mel Reams</li>
              <li>Klastic</li>
              <li>Matthew Cheely</li>
              <li>Soshi Tamura</li>
              <li>tj</li>
              <li>Stephen Lovell</li>
              <li>Benjamin</li>
              <li>RW</li>
              <li>James Smith</li>
              <li>Naoki Kosaka</li>
              <li>westantenna</li>
              <li>Iain Cheyne</li>
              <li>Simon Tesla</li>
              <li>Steve Phillips</li>
              <li>Jon Pincus</li>
              <li>HolyGrail</li>
              <li>Ira Abramov</li>
              <li>Tim and Alexandra Swast</li>
              <li>Richard</li>
              <li>Axel Terizaki</li>
              <li>Nurelin</li>
              <li>Larry Fine</li>
              <li>Max</li>
              <li>Willscire of the Many Tribes</li>
              <li>Krzysztof Jankowski</li>
              <li>Claire</li>
              <li>Olivier Auber</li>
              <li>Takahiro Fujiwara</li>
              <li>simonv3</li>
              <li>Nozomu Saito</li>
              <li>Paul Houlihan</li>
              <li>LM</li>
              <li>Frederick Doe</li>
              <li>Jam</li>
              <li>Balthasar Glättli</li>
              <li>Infocalypse</li>
              <li>Margaret Trauth</li>
              <li>George Edogawa</li>
              <li>Shawn</li>
              <li>Casey Kolderup</li>
              <li>Esteban Manchado Velázquez</li>
              <li>Lars Kristian Høydal</li>
              <li>Adam Guest</li>
              <li>Jason S.</li>
              <li>Michael Van Vleet</li>
              <li>Roo Khan</li>
              <li>Shinichi Sato</li>
              <li>Paul Harvey</li>
              <li>K466</li>
              <li>Nitin Dahyabhai</li>
              <li>Angristan</li>
              <li>D. Moonfire</li>
              <li>Sud</li>
              <li>Nathan Wittstock</li>
              <li>Bryan Lunduke</li>
              <li>Selena Knight</li>
              <li>Tessa N</li>
              <li>Felipe Martin</li>
              <li>Kazunori Shinozaki</li>
              <li>Jonas Wisser</li>
              <li>Manu Quadros</li>
              <li>Miroslav Bajtos</li>
              <li>codechemist</li>
              <li>Nicolas Grevet</li>
              <li>Go Saito</li>
              <li>Masafumi Otsune</li>
              <li>Stefan Hayden</li>
              <li>Stephanie Northway</li>
              <li>kanna</li>
              <li>Christian Ternus</li>
              <li>Diego Islas Ocampo - Hyuchia</li>
              <li>Fabricio C Zuardi</li>
              <li>Firebird Fiction</li>
              <li>Akira</li>
              <li>Dmitri Sotnikov</li>
              <li>Shivian Morgan</li>
              <li>Mark Davis</li>
              <li>Pierre-Emmanuel Guerton</li>
              <li>Alice Voidstar</li>
              <li>t3sserakt</li>
              <li>mpj</li>
              <li>Andy</li>
              <li>Daniel Maxwell-Ross</li>
              <li>Abe Weishaupt</li>
              <li>8zu</li>
              <li>Stephanie Pakrul</li>
              <li>Reilly Grant</li>
              <li>Kurt M</li>
              <li>Salomao Becker</li>
              <li>Syluban</li>
              <li>Alan Love</li>
              <li>Bruno Dias</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Hans de Wolf</li>
              <li>Enrique Santos</li>
              <li>Yoshitaka Kaneko</li>
              <li>Andrew Louis</li>
              <li>Javier Jardón</li>
              <li>Eric Mill</li>
              <li>maloki / kinkymal</li>
              <li>Neva Nevi</li>
              <li>Alexander</li>
              <li>Helly</li>
              <li>Justin Humm</li>
              <li>Sam Marshall</li>
              <li>Artoria2e5</li>
              <li>Andrew Elliot</li>
              <li>Scotty</li>
              <li>Andrew Sherman</li>
              <li>Kyota Yasuda</li>
              <li>Joshua Demallistre</li>
              <li>Lyn Thorne-Alder</li>
              <li>Greg Sartucci</li>
              <li>Sébastien Lalloué</li>
              <li>Stefano Figura</li>
              <li>Satoshi Endo</li>
              <li>Satoshi KOJIMA</li>
              <li>Andrew W</li>
              <li>Allison Parrish</li>
              <li>Jacob Weisz</li>
              <li>Matt Baer</li>
              <li>Ben Bonfil</li>
              <li>unarist</li>
              <li>abcang</li>
              <li>Lilith Saintcrow</li>
              <li>0̸chroma</li>
              <li>Gabriele Lucci</li>
              <li>tateisu</li>
              <li>Axel Dürkop</li>
              <li>masarakki</li>
              <li>Loïc 'iooner' Keyeux</li>
              <li>Captain Skyhawk</li>
              <li>Pablo Brasero</li>
              <li>James Harris</li>
              <li>Arkanosis</li>
              <li>Takuya Yoshida</li>
              <li>null</li>
              <li>Drífa Jónsdóttir</li>
              <li>ぽむ</li>
              <li>MitarashiDango</li>
              <li>no</li>
              <li>Clworld</li>
              <li>Kerim</li>
              <li>Wolfgang '@vilbi</li>
              <li>Kitaiti Makoto</li>
              <li>Judson Dunn</li>
              <li>Eelco Maljaars</li>
              <li>Jen B</li>
              <li>DW</li>
              <li>Kelson</li>
              <li>Cathal Garvey</li>
              <li>Terry Elliott</li>
              <li>Eldan Goldenberg</li>
              <li>Sadiq Saif</li>
              <li>Matti Lattunen</li>
              <li>David</li>
              <li>Lertsenem</li>
              <li>Tom Kenny</li>
              <li>Hywel Phillips</li>
              <li>Tara Calishain</li>
              <li>e. m.</li>
              <li>Rafael</li>
              <li>lindwurm</li>
              <li>German Martinez Maldonado</li>
              <li>HiTechRabbit</li>
              <li>Jan Jastrow</li>
              <li>Kazusa Okuda</li>
              <li>Gusk-ma</li>
              <li>Antoine Amarilli</li>
              <li>Patrick L Archibald</li>
              <li>Bruce Tindall</li>
              <li>Sarah Hegeman</li>
              <li>osapon</li>
              <li>Walter McGinnis</li>
              <li>Karel P Kerezman</li>
              <li>Mikkel Trolle Larsen</li>
              <li>Christopher</li>
              <li>Benjamin Chabrillat</li>
              <li>JoYo</li>
              <li>Nero O'Reilly</li>
              <li>Avi Flax</li>
              <li>Priscila Tchorbadjian</li>
              <li>Lan</li>
              <li>Isabelle Hurbain-Palatin</li>
              <li>Donna</li>
              <li>Andrew Dawson</li>
              <li>Adam Jaeger</li>
              <li>Francois Bayart</li>
              <li>k</li>
              <li>Manuel Bärenz</li>
              <li>Josh Sutphin</li>
              <li>Matthew Bogart</li>
              <li>Matt</li>
              <li>Smut Lit Co.</li>
              <li>E. N. Tót</li>
              <li>Max Kaehn</li>
              <li>Jeremy Putnam</li>
              <li>M. Lane</li>
              <li>Timothy Garris</li>
              <li>Shy Custis</li>
              <li>Blue Delliquanti</li>
              <li>Ryan Rix</li>
              <li>Tim Albers</li>
              <li>liffy</li>
              <li>OliveOilCorp</li>
              <li>Jevon</li>
              <li>Ayhotte</li>
              <li>Eric Rucker</li>
              <li>Antoine Jacques de Dixmude</li>
              <li>Dave Hoffman</li>
              <li>Lindsey B</li>
              <li>mkreed</li>
              <li>infernalperson</li>
              <li>new Object</li>
              <li>vpzomtrrfrt</li>
              <li>Ross Smith</li>
              <li>Liz</li>
              <li>Kyle Cooper</li>
              <li>Chad Gowler</li>
              <li>Bryanna M</li>
              <li>exo</li>
              <li>Ian Cox</li>
              <li>A Peanut</li>
              <li>Deborah Goldsmith</li>
              <li>Xavi Francisco</li>
              <li>Colin Coghill</li>
              <li>Patrick Hogan</li>
              <li>Ronin wood</li>
              <li>David Underwood</li>
              <li>Friends Talk Frontend</li>
              <li>DoC</li>
              <li>anne thom</li>
              <li>Eleanor Konik</li>
              <li>Hugh Messenger</li>
              <li>Joel Wallis Jucá</li>
              <li>Thaddeus Grey</li>
              <li>Zach Valenti</li>
              <li>Jörg</li>
              <li>jeremy</li>
              <li>Christopher Piontek</li>
              <li>Soliman</li>
              <li>Jennifer Barnes</li>
              <li>Michael Puckett</li>
              <li>Matthias Weise</li>
              <li>Spenser Isdahl</li>
              <li>Jeffery Yeary</li>
              <li>Church Turing</li>
              <li>Kyoki Kafuka</li>
              <li>Alexander Murray-Watters</li>
              <li>Brook Peterson</li>
              <li>unasuke</li>
              <li>Hiroja Shibe's Space Odyssey Network</li>
              <li>Nathan Brown</li>
              <li>Doug Belshaw</li>
              <li>Chet Zar</li>
              <li>bradsmith</li>
              <li>Ryan</li>
              <li>Wing</li>
              <li>Stephen L.B.</li>
              <li>vaartis</li>
              <li>Vatin Petaneelanon</li>
              <li>Richard K Schultz</li>
              <li>Benedikt Boeck</li>
              <li>Abby</li>
              <li>K.K. POON</li>
              <li>Charles Childers</li>
              <li>caasi Huang</li>
              <li>Sem</li>
              <li>Jonathan</li>
              <li>Thomas Chapeaux</li>
              <li>Thomas Baker</li>
              <li>Jeremiah C. Foster</li>
              <li>Nicolas Morel</li>
              <li>Bryan Rosander</li>
              <li>Ian Smith</li>
              <li>Mathias Hellquist</li>
              <li>Pam G</li>
              <li>Bingen Eguzkitza</li>
              <li>Andrés Riveros</li>
              <li>Michael Melanson</li>
              <li>Daniel Foré</li>
              <li>Dario Castañé</li>
              <li>Amalie McKee</li>
              <li>Jonas Berlin</li>
              <li>shoyameow</li>
              <li>Fabio Utzig</li>
              <li>Mark</li>
              <li>Lukáš Lánský</li>
              <li>Kevin O'Gorman</li>
              <li>Cameron MacFarland</li>
              <li>Buster Benson</li>
              <li>Aj</li>
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
