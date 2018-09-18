import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';
import Legal from './Legal';

import sponsorTootdon from './assets/sponsors/tootdon.png';
import sponsorKibousoft from './assets/sponsors/kibousoft.png';
import sponsorPixiv from './assets/sponsors/pixiv.png';
import sponsorFourthEstate from './assets/sponsors/FourthEstate-logo.png';
import sponsorPurism from './assets/sponsors/purism.svg';
import sponsorStream from './assets/sponsors/stream.png';
import sponsorRubymotion from './assets/sponsors/rubymotion.png';
import sponsorBambooHow from './assets/sponsors/bamboohow.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarGlocal from './assets/sponsors/glocal.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
// import avatarZoeQuinn from './assets/sponsors/zoequinn.jpg';
import sponsorSDF from './assets/sponsors/sdf.png';
import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';
//import avatarAndreaValenti from './assets/sponsors/andreavalenti.png';
// import avatarDavidHutchinson from './assets/sponsors/davidhutchinson.png';
import avatarIrick from './assets/sponsors/irick.gif';
//import avatarSirTyrent from './assets/sponsors/sirtyrent.png';
import avatarVJ from './assets/sponsors/vj.png';
//import avatarFragbenny from './assets/sponsors/fragbenny.jpeg';
import avatarIanna from './assets/sponsors/ianna.png';
import avatarEvan from './assets/sponsors/evan.png';
import avatarMarkAtwood from './assets/sponsors/markatwood.jpg';
import avatarNoellabo from './assets/sponsors/noellabo.png';
//import avatarLevlaz from './assets/sponsors/levlaz.png';
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
            <a href='https://getstream.io/try-the-api'><img src={sponsorStream} alt='Stream' /></a>
            <a href='http://www.rubymotion.com/'><img src={sponsorRubymotion} alt='RubyMotion' /></a>
            <a href='https://mastodon.sdf.org'><img src={sponsorSDF} alt='Purism' /></a>
            <a href='mailto:bamboo.how@gmail.com'><img src={sponsorBambooHow} alt='Bamboo How' /></a>
            <a href='https://puri.sm/'><img src={sponsorPurism} alt='Purism' /></a>
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
            <li><a href='https://cloudfleet.io'><img src={avatarCloudfleet} alt='' /> <span><strong>CloudFleet</strong><span>https://cloudfleet.io</span></span></a></li>
            <li><a href='https://sudoJames.com'><img src={avatarJamesMWright} alt='' /> <span><strong>James Wright</strong><span>https://sudoJames.com</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Martin Seeger</strong><span>-</span></span></a></li>
            <li><a href='https://vulpine.club/@Irick'><img src={avatarIrick} alt='' /> <span><strong>Irick Corwal</strong><span>https://vulpine.club/@Irick</span></span></a></li>
            <li><a href='https://eightballoon.com/'><img src={noAvatar} alt='' /> <span><strong>Takanori Yamada</strong><span>https://eightballoon.com/</span></span></a></li>
            <li><a href='https://identi.ca/evan'><img src={avatarEvan} alt='' /> <span><strong>Evan Prodromou</strong><span>https://identi.ca/evan</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Blaine Cook</strong><span>-</span></span></a></li>
            <li><a href='https://www.whatisseo.com/'><img src={avatarVJ} alt='' /> <span><strong>VJ</strong><span>https://www.whatisseo.com/</span></span></a></li>
            <li><a href='https://inanna.xyz/'><img src={avatarIanna} alt='' /> <span><strong>Inanna</strong><span>https://inanna.xyz/</span></span></a></li>
            <li><a href='https://about.me/markatwood'><img src={avatarMarkAtwood} alt='' /> <span><strong>Mark Atwood</strong><span>https://about.me/markatwood</span></span></a></li>
            <li><a href='https://dtp-mstdn.jp'><img src={avatarNoellabo} alt='' /> <span><strong>noellabo</strong><span>https://dtp-mstdn.jp</span></span></a></li>
            <li><a href='https://pixelfed.org/'><img src={avatarDansup} alt='' /> <span><strong>dansup</strong><span>https://pixelfed.org/</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Ms Miller</strong><span>-</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Aras Pranckevicius</strong><span>-</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Jonathan Wight</strong><span>-</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>PickFu</strong><span>-</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Igor Ferreira</strong><span>-</span></span></a></li>
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
              <li>Ted</li>
              <li>Julie Moronuki</li>
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
              <li>Ken Naishtat</li>
              <li>Christopher Kruse</li>
              <li>mayaeh</li>
              <li>Danny O'Brien</li>
              <li>Philip James</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Josef Kenny</li>
              <li>G Berton Latamore</li>
              <li>Ellen Teapot</li>
              <li>J. C. Holder</li>
              <li>Austin Putman</li>
              <li>halcy</li>
              <li>David Yip</li>
              <li>ティン・ルーフ</li>
              <li>Landy Manderson</li>
              <li>Paul Meier</li>
              <li>Hideki Yamamoto</li>
              <li>Kenneth Ken Sugar</li>
              <li>Miki Habryn</li>
              <li>3xv</li>
              <li>Sajith Sasidharan</li>
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
              <li>Nicolai Schwarz</li>
              <li>Zaki</li>
              <li>C J Silverio</li>
              <li>Rufus</li>
              <li>Kevin Sonney</li>
              <li>Aaron Williamson</li>
              <li>Christopher James Halse Rogers</li>
              <li>Chris Johnson</li>
              <li>Olivia Mossberg</li>
              <li>Matthieu Herrb</li>
              <li>Refuse the Order</li>
              <li>Daniel M Crawford</li>
              <li>Charles Hutchins</li>
              <li>Laurent Joubert</li>
              <li>fairenoughschroedinger</li>
              <li>Harukasan</li>
              <li>Yoshiki Kato</li>
              <li>Scott Honey</li>
              <li>Matteo De Micheli</li>
              <li>Bram</li>
              <li>Osamu Miyake</li>
              <li>Koya Matsuo</li>
              <li>Lady Errant</li>
              <li>Sandro Hawke</li>
              <li>Konosuke Furuhata</li>
              <li>Masaya Imai</li>
              <li>Johannes Barre</li>
              <li>masklayer</li>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>Ryan Frederick</li>
              <li>Brion Vibber</li>
              <li>Zonu.EXE</li>
              <li>Effy Elden</li>
              <li>Akihiko Odaki</li>
              <li>Niko Autio</li>
              <li>Max</li>
              <li>jomo</li>
              <li>James Valleroy</li>
              <li>Jeremy Penner</li>
              <li>Todd Monotony</li>
              <li>Klara</li>
              <li>snorpey</li>
              <li>Andrei Petcu</li>
              <li>Peter Augerot</li>
              <li>Dick Butt 2020</li>
              <li>Jesse Marino</li>
            </ul>

            <ul>
              <li>A bowl of creamy tomato soup</li>
              <li>Drew Williams</li>
              <li>Clinton Freeman</li>
              <li>Jérôme Choain</li>
              <li>jeremy gray</li>
              <li>Christina Hendricks</li>
              <li>itsumonotakumi</li>
              <li>Irene Knapp</li>
              <li>Owen Kahn</li>
              <li>_</li>
              <li>Spencer Alves</li>
              <li>Al</li>
              <li>peter hessler</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>Emma Humphries</li>
              <li>Karen</li>
              <li>h-izumi</li>
              <li>Niels Abildgaard</li>
              <li>Damien Sirkis</li>
              <li>Ruben</li>
              <li>Jason Rimmer</li>
              <li>Ash Furrow</li>
              <li>Wesley Moore</li>
              <li>Parker Higgins</li>
              <li>Dave Lane</li>
              <li>William Hopkins</li>
              <li>Jay Shapiro</li>
              <li>August Bigelow</li>
              <li>vilmibm</li>
              <li>Justus Seifert</li>
              <li>Caelyn McAulay</li>
              <li>Patrick Gibson</li>
              <li>Tassels</li>
              <li>Damien Nicolas</li>
              <li>Alexandre Dufournet</li>
              <li>Chris Garcia</li>
              <li>Colin Mahns</li>
              <li>Jonathan</li>
              <li>Tom Harris</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>mkatze</li>
              <li>Nicole Bacon</li>
              <li>Michael Etzkorn</li>
              <li>Chris</li>
              <li>Emily Marigold Klassen</li>
              <li>Michael Kosler</li>
              <li>Jon Dubovsky</li>
              <li>Lon Hohberger</li>
              <li>Lily Yu</li>
              <li>Allen Varney</li>
              <li>Alys Brooks</li>
              <li>Emmanuel Jacobs</li>
              <li>André Koot</li>
              <li>KinkyBoys Podcast</li>
              <li>Waldo</li>
              <li>Tim Wilde</li>
              <li>Tango</li>
              <li>Connor Olding</li>
              <li>Moult</li>
              <li>Brent P. Newhall</li>
              <li>Dale Price</li>
              <li>Ben Hamill</li>
              <li>Peter Gravelle</li>
              <li>Kai Engert</li>
              <li>Nathan Howell</li>
              <li>Michael Myers</li>
              <li>Erika</li>
              <li>Trent AKA SirTyrent</li>
              <li>tiansheng li</li>
              <li>Daniel Lowe</li>
              <li>xanac</li>
              <li>Oliver Uvman</li>
              <li>Lee Starnes</li>
              <li>Mathieu Lecarme</li>
              <li>Bjarni R. Einarsson</li>
              <li>David Hayward</li>
              <li>LoovtO</li>
              <li>joshua anderson</li>
              <li>Flake</li>
              <li>Joel</li>
              <li>Matija Han</li>
              <li>Hiroshi Seki</li>
              <li>lrvick</li>
              <li>Wolfgang '@vilbi</li>
              <li>Sjef</li>
              <li>Ashanti Fortson</li>
              <li>Gergo Lippai</li>
              <li>Raphael Lullis</li>
              <li>Jennie Schilling</li>
              <li>Frank Meeuwsen</li>
              <li>B Cavello</li>
              <li>Ryan Littlefield</li>
              <li>Brian</li>
              <li>Maff</li>
              <li>Michael Castleman</li>
              <li>Derek Gonyeo</li>
              <li>Algot Runeman</li>
              <li>Muloka</li>
              <li>Jay Flaunts His Ignorance</li>
              <li></li>
              <li>Tom Liesenfeld</li>
              <li>colin mitchell</li>
              <li>Root</li>
              <li>Toby Pinder</li>
              <li>Jonathan Doda</li>
              <li>Jim Newsome</li>
              <li>Jacky</li>
              <li>William Johnson</li>
              <li>Jeremy Guillette</li>
              <li>Casey Gollan</li>
              <li>Kimmy</li>
              <li>Merlot</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Beads Land-Trujillo</li>
              <li>Toootim</li>
              <li>Blorg³</li>
              <li>Cybrespace</li>
              <li>Jeremy Stashewsky</li>
              <li>kDN4dkhsB</li>
              <li>Greg Pak</li>
              <li>Ted O'Neill</li>
              <li>Jonas Wisser</li>
              <li>Oliver Brammer</li>
              <li>DW</li>
              <li>Judson Dunn</li>
              <li>Christopher Greene</li>
              <li>Lewis Perin</li>
              <li>Pierre BT</li>
              <li>Andrew Schmadel</li>
              <li>Will</li>
              <li>Andrew Roach</li>
              <li>Michael Sieradzki</li>
              <li>Steve Felix</li>
              <li>[wolfe interval]</li>
              <li>Raphael Schweikert</li>
              <li>Andrew Elliot</li>
              <li>Padraic Harley</li>
              <li>T</li>
              <li>Pablo Lopez Soriano</li>
              <li>Hodge</li>
              <li>Andrew Replogle</li>
              <li>Jim Bradfield</li>
              <li>Martin Tithonium</li>
              <li>Sundi L Richard</li>
              <li>Erik Bray</li>
              <li>Fletcher Cole</li>
              <li>Arielle Grimes</li>
              <li>Liaizon Wakest</li>
              <li>Simeon</li>
              <li>Kayleen Frazier</li>
              <li>Matt Ulman</li>
              <li>Marie Martin</li>
              <li>Brenda Salem</li>
              <li>Melissa Avery-Weir</li>
              <li>Ickalo</li>
              <li>Johanna B</li>
              <li>Horst Gutmann</li>
              <li>Vincent Sautter</li>
              <li>Calvin French</li>
              <li>pixelguff</li>
              <li>Bryan</li>
              <li>Modern Modron</li>
              <li>Lily</li>
              <li>Caitlin Collins</li>
              <li>Kris Jacque</li>
              <li>Deborah Goldsmith</li>
              <li>Hywel Phillips</li>
              <li>Tara Calishain</li>
              <li>Andrew S</li>
              <li>Alex Dunn</li>
              <li>Alexander Thompson</li>
              <li>Scott</li>
              <li>Gareth Noyce</li>
              <li>Sara Haworth</li>
              <li>poetfox can deadlift 300lbs</li>
              <li>Andrea</li>
              <li>Kelson</li>
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
              <li>Yoshitaka Kaneko</li>
              <li>tj</li>
              <li>Takahiro Fujiwara</li>
              <li>neguse</li>
              <li>Artoria2e5</li>
              <li>Soshi Tamura</li>
              <li>Olivier Auber</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Naoki Kosaka</li>
              <li>Jon Pincus</li>
              <li>Neva Nevi</li>
              <li>Masafumi Otsune</li>
              <li>Akira</li>
              <li>Go Saito</li>
              <li>Nozomu Saito</li>
              <li>Claire</li>
              <li>Kazunori Shinozaki</li>
              <li>Decio</li>
              <li>HolyGrail</li>
              <li>Krzysztof Jankowski</li>
              <li>Nathan Wittstock</li>
              <li>Benjamin</li>
              <li>Andy</li>
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
              <li>Alice Voidstar</li>
              <li>Alan Love</li>
              <li>Iain Cheyne</li>
              <li>Daniel Maxwell-Ross</li>
              <li>Bruno Dias</li>
              <li>Stefan Hayden</li>
              <li>Esteban Manchado Velázquez</li>
              <li>Larry Fine</li>
              <li>binaryfox</li>
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
              <li>Selena Knight</li>
              <li>Justin Humm</li>
              <li>Matthew Cheely</li>
              <li>Salomao Becker</li>
              <li>Abe Weishaupt</li>
              <li>Firebird Fiction</li>
              <li>Tab</li>
              <li>Jason S.</li>
              <li>Adam Guest</li>
              <li>Mel Reams</li>
              <li>Michael Brodhead</li>
              <li>Manu Quadros</li>
              <li>Shawn</li>
              <li>Richard</li>
              <li>Nicolas Morel</li>
              <li>Moqbil Serag-Eldin</li>
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
              <li>unarist</li>
              <li>Matt Baer</li>
              <li>masarakki</li>
              <li>abcang</li>
              <li>Stefano Figura</li>
              <li>Joshua Demallistre</li>
              <li>0̸chroma</li>
              <li>Arkanosis</li>
              <li>Andrew W</li>
              <li>Kyota Yasuda</li>
              <li>tateisu</li>
              <li>Satoshi Endo</li>
              <li>Sébastien Lalloué</li>
              <li>Sarah Hegeman</li>
              <li>Bruce Tindall</li>
              <li>MitarashiDango</li>
              <li>Takuya Yoshida</li>
              <li>Drífa Jónsdóttir</li>
              <li>no</li>
              <li>Kerim</li>
              <li>Clworld</li>
              <li>ぽむ</li>
              <li>Cathal Garvey</li>
              <li>Eldan Goldenberg</li>
              <li>Matti Lattunen</li>
              <li>Tom Kenny</li>
              <li>David Wolfpaw</li>
              <li>Lertsenem</li>
              <li>Rosemary Windsor</li>
              <li>Xiyu Cai</li>
              <li>Bobby Moss</li>
              <li>Antoine Amarilli</li>
              <li>Gusk-ma</li>
              <li>lindwurm</li>
              <li>Rafael</li>
              <li>Jan Jastrow</li>
              <li>Kazusa Okuda</li>
              <li>Opinionated Lab</li>
              <li>Patrick L Archibald</li>
              <li>osapon</li>
              <li>Francois Bayart</li>
              <li>Walter McGinnis</li>
              <li>Christopher</li>
              <li>k</li>
              <li>Andrew Dawson</li>
              <li>Isabelle Hurbain-Palatin</li>
              <li>Mikkel Trolle Larsen</li>
              <li>Karel P Kerezman</li>
              <li>JoYo</li>
              <li>Donna</li>
              <li>Roland Pallai</li>
              <li>Jan Krutisch</li>
              <li>Anticrisis</li>
              <li>Tom Lowenthal</li>
              <li>Ryan Rhea</li>
              <li>Dwayne Harris</li>
              <li>Jonathan Cremin</li>
              <li>Joe Rosensteel</li>
              <li>Jace Ravenfield</li>
              <li>Noah Berman</li>
              <li>Christopher Hind</li>
              <li>Josh</li>
              <li>twisterghost</li>
              <li>Grant Stavely</li>
              <li>Din of In</li>
              <li>rootfs.ext2.gz</li>
              <li>Laurie Voss</li>
              <li>William Hogg</li>
              <li>Steven Gibson</li>
              <li>Daniel</li>
              <li>Eric Anderson</li>
              <li>TARIK F AJAMI</li>
              <li>Evakatrina Anderson</li>
              <li>Naomi Alderman</li>
              <li>Jennifer Lee</li>
              <li>Kimberly Horne</li>
              <li>Kevin Baker</li>
              <li>DJ Booker</li>
              <li>R</li>
              <li>Walter Ebert</li>
              <li>Wolfgang Dudda</li>
              <li>Nate Borland</li>
              <li>Brian Schroth</li>
              <li>Matt Simpson</li>
              <li>John Newberger</li>
              <li>Nicholas Biddle</li>
              <li>Patrick McCarron</li>
              <li>Philippe Hausler</li>
              <li>Patrick Quinn-Graham</li>
              <li>Jonathan Gerlach</li>
              <li>mangochutney</li>
              <li>Aria Buckles</li>
              <li>Astra</li>
              <li>Ben Cohen</li>
              <li>Philipp Bock</li>
              <li>Jeff McLeman</li>
              <li>Michael Ellis</li>
              <li>Stephen Moseley</li>
              <li>Abraham Hmiel</li>
              <li>Evan DiBiase</li>
              <li>Ish</li>
              <li>nosuchbinary</li>
              <li>Timothy Wood</li>
              <li>Tom Adriaenssen</li>
              <li>Abram</li>
              <li>Steve Streza</li>
              <li>Rob Napier</li>
              <li>Thomas Fuchs</li>
              <li>Mikayla Hutchinson</li>
              <li>Soroush Khanlou</li>
              <li>Jeri Dansky</li>
              <li>Andrew Pontious</li>
              <li>Chris Hanson</li>
              <li>Kevin Hoctor</li>
              <li>Hendrik Mans</li>
              <li>Rohan Rangray</li>
              <li>Roy Smeding</li>
              <li>Stephen Holt</li>
              <li>Erik Moeller</li>
              <li>Adrian Hon</li>
              <li>Jeremy Clark</li>
              <li>Matt</li>
              <li>infernalperson</li>
              <li>Smut Lit Co.</li>
              <li>Antoine Jacques de Dixmude</li>
              <li>Matthew Bogart</li>
              <li>Lindsey B</li>
              <li>Ross Smith</li>
              <li>Manuel Bärenz</li>
              <li>Shy Custis</li>
              <li>E. N. Tót</li>
              <li>Timothy Garris</li>
              <li>Jevon</li>
              <li>Blue Delliquanti</li>
              <li>Max Kaehn</li>
              <li>mkreed</li>
              <li>Jeremy Putnam</li>
              <li>Liz</li>
              <li>Josh Sutphin</li>
              <li>Kyle Cooper</li>
              <li>Ayhotte</li>
              <li>Ryan Rix</li>
              <li>Tim Albers</li>
              <li>vpzomtrrfrt</li>
              <li>Andrey Kurenkov</li>
              <li>Toby</li>
              <li>Matthias Weise</li>
              <li>Molly.Noise</li>
              <li>David Underwood</li>
              <li>Xavi Francisco</li>
              <li>Patrick Hogan</li>
              <li>A Peanut</li>
              <li>Bryanna M</li>
              <li>Colin Coghill</li>
              <li>Ian Cox</li>
              <li>Ronin wood</li>
              <li>exo</li>
              <li>Doug Belshaw</li>
              <li>oriold</li>
              <li>Craig Maloney</li>
              <li>Jennifer Barnes</li>
              <li>Eleanor Konik</li>
              <li>Soliman</li>
              <li>Hugh Messenger</li>
              <li>Joel Wallis Jucá</li>
              <li>Jörg</li>
              <li>DoC</li>
              <li>Thaddeus Grey</li>
              <li>unasuke</li>
              <li>Alexander Murray-Watters</li>
              <li>Brook Peterson</li>
              <li>Spenser Isdahl</li>
              <li>Jessica</li>
              <li>Dave Bort</li>
              <li>knifti</li>
              <li>Eric</li>
              <li>Jason Friedrich</li>
              <li>Jack Ketcham</li>
              <li>Stephen L.B.</li>
              <li>Inkey</li>
              <li>Ryan</li>
              <li>Jeremiah C. Foster</li>
              <li>Richard K Schultz</li>
              <li>Mathias Hellquist</li>
              <li>Vatin Petaneelanon</li>
              <li>Thomas Baker</li>
              <li>Nathan Brown</li>
              <li>Ian Smith</li>
              <li>Jonathan</li>
              <li>Bryan Rosander</li>
              <li>caasi Huang</li>
              <li>Benedikt Boeck</li>
              <li>bradsmith</li>
              <li>Sem</li>
              <li>Abby</li>
              <li>Thomas Chapeaux</li>
              <li>Chet Zar</li>
              <li>Lizzie July</li>
              <li>Sean Mcdonald</li>
              <li>Moomers Journal</li>
              <li>Johnny Marchione</li>
              <li>RJ Kucia</li>
              <li>James Prior</li>
              <li>Michael Graham</li>
              <li>Teresa Bear</li>
              <li>Sean A</li>
              <li>Seth Barger</li>
              <li>where did my coffee go</li>
              <li>Tom Brandt</li>
              <li>Stef Bentley</li>
              <li>Mark Krisher</li>
              <li>Michael</li>
              <li>Purpleeatary</li>
              <li>Toli</li>
              <li>pippa</li>
              <li>Adam Moskowitz</li>
              <li>zilch</li>
              <li>Shagatron</li>
              <li>Nick Carlson</li>
              <li>Jason Catlett</li>
              <li>Chris Poparoma</li>
              <li>Elle Waters</li>
              <li>Timperator of Man</li>
              <li>Doug Tabacco</li>
              <li>windykite19</li>
              <li>David Gian-Cursio</li>
              <li>Billy Babicz</li>
              <li>T</li>
              <li>Tanatoes</li>
              <li>Aaron</li>
              <li>Michael L. Ward</li>
              <li>Walter Wilfinger</li>
              <li>Colin Bayer</li>
              <li>Carl Brown</li>
              <li>Paddy O'Brien</li>
              <li>Daniel Hogan</li>
              <li>Zachary Waldowski</li>
              <li>bugrasan</li>
              <li>Andrew Madsen</li>
              <li>Matthew Flint</li>
              <li>Jonathan Hughes</li>
              <li>Amalie McKee</li>
              <li>Michael Melanson</li>
              <li>Lukáš Lánský</li>
              <li>Mark</li>
              <li>Kevin O'Gorman</li>
              <li>Daniel Foré</li>
              <li>Jonas Berlin</li>
              <li>shoyameow</li>
              <li>Dario Castañé</li>
              <li>Fabio Utzig</li>
              <li>Florian Friedrich</li>
              <li>Tori Vaz</li>
              <li>Nathan Pitman</li>
              <li>broto</li>
              <li>Volker Oertel</li>
              <li>Marc Juul</li>
              <li>Piers Beckley</li>
              <li>Miguel Garcia</li>
              <li>Jalmari Ikävalko</li>
              <li>Balkan Misirli</li>
              <li>Chris Snider</li>
              <li>Jamie Gray</li>
              <li>Hinaloe Kl</li>
              <li>Hycon</li>
              <li>Rick Garcia</li>
              <li>Quinn Monk</li>
              <li>Samuel Maddock</li>
              <li>Ismael Acevedo</li>
              <li>Eric Rose</li>
              <li>Ashraf Rabi</li>
              <li>Bingen Eguzkitza</li>
              <li>Robin Sloan</li>
              <li>Bradley Allen</li>
              <li>Jared White</li>
              <li>Joel Limberg</li>
              <li>Cale Woodley</li>
              <li>Chris Swetenham</li>
              <li>Andrew Hedge</li>
              <li>Pete Lambert</li>
              <li>Wesley Bracken</li>
              <li>VirtualWolf</li>
              <li>Matthew Barnett</li>
              <li>Daniel Diekmeier</li>
              <li>Jason Cosper</li>
              <li>winged0ne</li>
              <li>Eli Harold</li>
              <li>tod weitzel</li>
              <li>PJ Hale</li>
              <li>Andrew Abernathy</li>
              <li>Jay S</li>
              <li>Brian</li>
              <li>Dan Peterson</li>
              <li>FC</li>
              <li>Andrew Crouthamel</li>
              <li>Dross</li>
              <li>Eliot Lash</li>
              <li>Christoffer Bakken Tallerås</li>
              <li>trumpy</li>
              <li>S. Go</li>
              <li>Skye Nott</li>
              <li>Dennis R Bolton</li>
              <li>Scott Kellum</li>
              <li>Peter Marquardt</li>
              <li>Steve Malloy</li>
              <li>Jon Olsen</li>
              <li>Matthew Smith</li>
              <li>Mark Cope</li>
              <li>Florian Bruehl</li>
              <li>Drew</li>
              <li>steffen@familie-uhlig.net</li>
              <li>Christopher Butterworth</li>
              <li>nathan</li>
              <li>Grant Williamson</li>
              <li>John Kachurek</li>
              <li>Laszlo Beres</li>
              <li>Mark D'Arensbourg</li>
              <li>Alistair Richelieu</li>
              <li>Squozen</li>
              <li>Dad</li>
              <li>Phillip Hutchings</li>
              <li>Barbie Alsop</li>
              <li>Greta Bollinger</li>
              <li>Hector Alcala</li>
              <li>Flip</li>
              <li>Ballookey Klugeypop</li>
              <li>Mark B. Writing</li>
              <li>Marcus Herrmann</li>
              <li>David M</li>
              <li>Dan Randlett</li>
              <li>Samuel Heersink</li>
              <li>Violet Baddley</li>
              <li>Brandon Carey</li>
              <li>Reinhard Prechtl</li>
              <li>Twiddlekins</li>
              <li>Joseph Agreda</li>
              <li>Johan Bové</li>
              <li>Dan</li>
              <li>Dale G. Paradowski</li>
              <li>Mathias Gmeiner</li>
              <li>Carlyn</li>
              <li>Supermarine Spitfire</li>
              <li>Amy Oliver</li>
              <li>alexg_k</li>
              <li>Nicholas</li>
              <li>Alis Franklin</li>
              <li>SeeBeyond</li>
              <li>Christian Pauly</li>
              <li>Marcos</li>
              <li>TOM WOR</li>
              <li>Jonas Lingg</li>
              <li>Siegfried Ehret</li>
              <li>Marcel '- Loewe88</li>
              <li>Nikolaus Klumpp</li>
              <li>katie j silverstrim</li>
              <li>Nigel Ramsay</li>
              <li>sau226</li>
              <li>symphony</li>
              <li>Andrew Casey-Clyde</li>
              <li>Sean Graham</li>
              <li>avolkov</li>
              <li>Peter Hofmann</li>
              <li>Austin</li>
              <li>Richard Dallaway</li>
              <li>Tyler Wymer</li>
              <li>Chris Dzombak</li>
              <li>tom perrine</li>
              <li>Tom Lenger</li>
              <li>Paul Hemphill</li>
              <li>Niklas</li>
              <li>Reinier Ladan</li>
              <li>Dwight Chacko</li>
              <li>Will McAveney</li>
              <li>Stefan & Erica</li>
              <li>Lucas Cantor</li>
              <li>Dan Monego</li>
              <li>James Murray</li>
              <li>David Blakely</li>
              <li>Billy</li>
              <li>MystSaphyr</li>
              <li>Megan Graichen</li>
              <li>Social Skeleton</li>
              <li>Oliver Michalak</li>
              <li>Andrew DeFrancis</li>
              <li>Simon Stemplinger</li>
              <li>John Casey</li>
              <li>KingNewbs</li>
              <li>doodlemancy</li>
              <li>Tom</li>
              <li>Ben Williams</li>
              <li>David McDonald</li>
              <li>Pemulwuy</li>
              <li>Tim Prince</li>
              <li>Jens Nielsen</li>
              <li>Kyle Kelly</li>
              <li>Andreas Freise</li>
              <li>Ryan Lange</li>
              <li>Steve Abraham</li>
              <li>Jennifer Mathis</li>
              <li>Derek Monyhan</li>
              <li>dope</li>
              <li>Stephen Hero</li>
              <li>pinya, a deer</li>
              <li>David Lundy</li>
              <li>Alex Hillman</li>
              <li>Craig Parmesan</li>
              <li>Rachel Carter</li>
              <li>Ben Mayne</li>
              <li>Kae Roy</li>
              <li>Sean</li>
              <li>Jason Gomez</li>
              <li>Noah Hatz</li>
              <li>Fiona</li>
              <li>Rick Turoczy</li>
              <li>Kamiten Zien</li>
              <li>Jaakko Keränen</li>
              <li>Brian Rogers</li>
              <li>James O'Connor</li>
              <li>Marley Soluna</li>
              <li>Michael Grasso</li>
              <li>Jackson A Kyle</li>
              <li>Joshua Mihalek</li>
              <li>Ezekiel Elin</li>
              <li>Paul Carney</li>
              <li>JurassicNPS</li>
              <li>Randy D.</li>
              <li>Bill Newcomb</li>
              <li>Single Payer Sonic MPreg</li>
              <li>Forrest Lighthart</li>
              <li>Ben Scheirman</li>
              <li>Bryony Bates</li>
              <li>Chris Adamson</li>
              <li>Kfir Breger</li>
              <li>Gabriel Ionescu</li>
              <li>Hannah Johnstone</li>
              <li>DiamondTiki</li>
              <li>Grant Hendrix</li>
              <li>George</li>
              <li>Jake McIntyre</li>
              <li>Gloria Carr</li>
              <li>Allin</li>
              <li>Remedy</li>
              <li>Homo Vulgaris</li>
              <li>BirchTree</li>
              <li>Wayne Dixon</li>
              <li>Jason Wandling</li>
              <li>Nicholas Guarracino</li>
              <li>Chip Calhoun</li>
              <li>YoonHyung Jo</li>
              <li>Darlene Elkins</li>
              <li>stephen henderson</li>
              <li>cucumbers</li>
              <li>Nick Douglas</li>
              <li>Bion Johnson</li>
              <li>Niko Nawalany</li>
              <li>Michael</li>
              <li>Mabel Harper</li>
              <li>Ned Zimmerman</li>
              <li>Nils Riedemann</li>
              <li>David Wagner</li>
              <li>Travis Hardiman</li>
              <li>SL128</li>
              <li>Joshua Ricard</li>
              <li>Ricky Romero</li>
              <li>John Moltz</li>
              <li>Claudio Cicali</li>
              <li>Robert LaHue</li>
              <li>Iron Raptor Studios</li>
              <li>Briana Nichols</li>
              <li>Alex Engelberg</li>
              <li>Joe Crowell</li>
              <li>Super Ginrai</li>
              <li>L Collins</li>
              <li>chrysanthemum</li>
              <li>Cold Guy</li>
              <li>Steffan Davies</li>
              <li>Jarett DeAngelis</li>
              <li>Kristen Clark</li>
              <li>Bryant Kelley</li>
              <li>Thomas Denome</li>
              <li>Skystryke</li>
              <li>Harp_Darp</li>
              <li>Heath Anderson</li>
              <li>Drew Sutherland</li>
              <li>Max Magana</li>
              <li>Curtis McHale</li>
              <li>Reverend Carter</li>
              <li>Martin De Wulf</li>
              <li>Lisa</li>
              <li>Lee Howard</li>
              <li>Jamie Forrest</li>
              <li>Dylan</li>
              <li>Rene Fouquet</li>
              <li>Mark Lyken</li>
              <li>Dan Backes</li>
              <li>Jeremy Ward</li>
              <li>Timothy Haywood</li>
              <li>Florian Brinkmann</li>
              <li>Trey Piepmeier</li>
              <li>Aran Kelly</li>
              <li>Denis Hennessy</li>
              <li>Stephen Radford</li>
              <li>Robert Oedegaard</li>
              <li>Texan_Reverend</li>
              <li>Colby Day</li>
              <li>Joshua Gately</li>
              <li>Robin Frousheger</li>
              <li>Amy Senn</li>
              <li>Kev/Monan the Bovinian</li>
              <li>Ryan Leach</li>
              <li>Lucien Dupont</li>
              <li>Gordon C</li>
              <li>Esteban de los Reyes</li>
              <li>Jean MacDonald</li>
              <li>Alec Lomas</li>
              <li>Andrew German</li>
              <li>Adam Falk</li>
              <li>Zach Tarr</li>
              <li>Ken Klavonic</li>
              <li>Dave</li>
              <li>George Sealy</li>
              <li>David Chartier</li>
              <li>Raygan Kelly</li>
              <li>Alex</li>
              <li>holopleather</li>
              <li>Qazstan</li>
              <li>Michael Yost</li>
              <li>Disgusted Kitteh</li>
              <li>Teddy G</li>
              <li>Ronnie Johnson</li>
              <li>Extinct Inks</li>
              <li>piffwhiffle</li>
              <li>Jacob Csaklos</li>
              <li>Carter Dotson</li>
              <li>Preston Scully-Wolfe</li>
              <li>Dennis Kerzig</li>
              <li>Nick Rachielles</li>
              <li>William Rose</li>
              <li>R.A. Porter</li>
              <li>Robby</li>
              <li>daibaka</li>
              <li>Michael Harper</li>
              <li>Veronika von Volkova</li>
              <li>Maxim Böckelmann</li>
              <li>Andreas Dantz</li>
              <li>After Tommy</li>
              <li>Ethan Hussong</li>
              <li>Tom Grundy</li>
              <li>Jay Tamboli</li>
              <li>Dave Wood</li>
              <li>Tom</li>
              <li>Brian Jones</li>
              <li>Dualhammers</li>
              <li>Ray Ryan</li>
              <li>Brentley Jones</li>
              <li>John Ping</li>
              <li>Jake LaCaze</li>
              <li>Gathadair</li>
              <li>Giuseppe Di Bella</li>
              <li>Dinah Sanders</li>
              <li>Jordan Brock</li>
              <li>Kyree Spain</li>
              <li>s q</li>
              <li>mydarkstar</li>
              <li>Elise Percy</li>
              <li>Jochen Bachmann</li>
              <li>Brian Poe</li>
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

      <Legal />
    </div>
  </div>
);

export default Sponsorship;
