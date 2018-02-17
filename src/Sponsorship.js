import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';

import sponsorTootdon from './assets/sponsors/tootdon.png';
import sponsorKibousoft from './assets/sponsors/kibousoft.png';
import sponsorPixiv from './assets/sponsors/pixiv.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarGlocal from './assets/sponsors/glocal.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
// import avatarZoeQuinn from './assets/sponsors/zoequinn.jpg';
import avatarSdf from './assets/sponsors/sdf.jpg';
import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';
import avatarAndreaValenti from './assets/sponsors/andreavalenti.png';
// import avatarDavidHutchinson from './assets/sponsors/davidhutchinson.png';
import avatarIrick from './assets/sponsors/irick.gif';
import avatarSirTyrent from './assets/sponsors/sirtyrent.png';

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
            <li><a href='https://www.aislogic.com/'><img src={avatarAndreaValenti} alt='' /> <span><strong>Andrea Valenti</strong><span>https://www.aislogic.com/</span></span></a></li>
            <li><a href='https://vulpine.club/@Irick'><img src={avatarIrick} alt='' /> <span><strong>Irick Corwal</strong><span>https://vulpine.club/@Irick</span></span></a></li>
            <li><a href='https://eightballoon.com/'><img src={noAvatar} alt='' /> <span><strong>Takanori Yamada</strong><span>https://eightballoon.com/</span></span></a></li>
            <li><a href='http://www.tyrent.xyz/'><img src={avatarSirTyrent} alt='' /> <span><strong>SirTyrent</strong><span>http://www.tyrent.xyz/</span></span></a></li>
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
              <li>Kotaro Kawashima</li>
              <li>Great Scott Gadgets</li>
              <li>Moritz</li>
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
              <li>Jim Luke</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Josef Kenny</li>
              <li>Alda</li>
              <li>Nitai bezerra da Silva</li>
              <li>Aron Price</li>
              <li>Yoz Grahame</li>
              <li>Matteo De Micheli</li>
              <li>J. C. Holder</li>
              <li>Austin Putman</li>
              <li>Spex</li>
              <li>Christopher Kruse</li>
              <li>Danny O'Brien</li>
              <li>halcy</li>
              <li>mayaeh</li>
              <li>Effy Elden</li>
              <li>David Yip</li>
              <li>Greg Slepak</li>
              <li>Tanya Dorey-Elias</li>
              <li>ティン・ルーフ</li>
              <li>Ken Naishtat</li>
              <li>G Berton Latamore</li>
              <li>Paul Meier</li>
              <li>Landy Manderson</li>
            </ul>

            <ul>
              <li>Hideki Yamamoto</li>
              <li>Kenneth Ken Sugar</li>
              <li>Miki Habryn</li>
              <li>3xv</li>
              <li>USAMI Kenta; Zonu.EXE (@tadsan)</li>
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
              <li>Dmytro Gladkyi</li>
              <li>Jon Leibowitz</li>
              <li>Jacob Helwig</li>
              <li>Johannes Barre</li>
              <li>Danielle McLean</li>
              <li>Zaki</li>
              <li>Dashie</li>
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
              <li>Eramdam</li>
              <li>Rey Tucker</li>
              <li>masklayer</li>
              <li>Martin Hinrichs</li>
              <li>Paul Nathan</li>
              <li>Myk Bilokonsky</li>
              <li>Jerry Gnarcia</li>
              <li>DJ Sundog</li>
              <li>Charles Hutchins</li>
              <li>Jason Barbier</li>
              <li>Laurent Joubert</li>
              <li>fairenoughschroedinger</li>
              <li>Harukasan</li>
              <li>Yoshiki Kato</li>
              <li>Scott Honey</li>
              <li>Emma Humphries</li>
              <li>Bram</li>
              <li>Osamu Miyake</li>
              <li>Koya Matsuo</li>
              <li>Lady Errant</li>
              <li>Alex Benishek</li>
              <li>Sandro Hawke</li>
              <li>Konosuke Furuhata</li>
              <li>Masaya Imai</li>
              <li>Ryan Frederick</li>
              <li>Niels Abildgaard</li>
              <li>Scott Hammack</li>
              <li>Jeremy Penner</li>
              <li>Todd Monotony</li>
              <li>Klara</li>
              <li>snorpey</li>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>Kevin Grasso</li>
              <li>Christina Hendricks</li>
              <li>Daniel M Crawford</li>
              <li>Irene Knapp</li>
              <li>Jonathan</li>
              <li>LucileDT</li>
              <li>Denis</li>
              <li>Akihiko Odaki</li>
              <li>hakoai</li>
              <li>Takeshi Umeda</li>
              <li>Karen</li>
              <li>Michael</li>
              <li>Emily Marigold Klassen</li>
              <li>Michael Kosler</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>jeremy gray</li>
              <li>Tim Ashley Jenkins</li>
              <li>Sam Raker</li>
              <li>Clemens Vermeulen</li>
              <li>Niko Autio</li>
              <li>Max</li>
              <li>jomo</li>
              <li>h-izumi</li>
              <li>Mike</li>
              <li>Jason Rimmer</li>
              <li>Ash Furrow</li>
              <li>Wesley Moore</li>
              <li>Parker Higgins</li>
              <li>Dave Lane</li>
              <li>William Hopkins</li>
              <li>Patrick O'Doherty</li>
              <li>Jay Shapiro</li>
              <li>August Bigelow</li>
              <li>Jer Thorp</li>
              <li>Nicholas Hinds</li>
              <li>vilmibm</li>
              <li>Justus Seifert</li>
              <li>Caelyn McAulay</li>
              <li>Alexandre Dufournet</li>
              <li>Colin Mahns</li>
              <li>Patrick Gibson</li>
              <li>Tassels</li>
              <li>Damien Nicolas</li>
              <li>James Valleroy</li>
              <li>Valentin Ouvrard</li>
              <li>Chris Garcia</li>
              <li>Jessica Stokes</li>
              <li>Nicole Bacon</li>
              <li>Tom Harris</li>
              <li>Yoshiaki Kiura</li>
              <li>A bowl of creamy tomato soup</li>
              <li>Drew Williams</li>
              <li>TM</li>
              <li>James E. Graham</li>
              <li>Clinton Freeman</li>
              <li>Jérôme Choain</li>
              <li>Mathieu Chappuis</li>
              <li>j r conlin</li>
              <li>André Koot</li>
              <li>hogee</li>
              <li>itsumonotakumi</li>
              <li>mkatze</li>
              <li>David Hayward</li>
              <li>Emmanuel Jacobs</li>
              <li>Chris</li>
              <li>Erika</li>
              <li>Angry Salad</li>
              <li>Owen Kahn</li>
              <li>_</li>
              <li>Spencer Alves</li>
              <li>Sean Lynch</li>
              <li>Al</li>
              <li>moult</li>
              <li>Bjarni R. Einarsson</li>
              <li>Brent P. Newhall</li>
              <li>Dale Price</li>
              <li>Ben Hamill</li>
              <li>Gergo Lippai</li>
              <li>Peter Gravelle</li>
              <li>Jan-Niklas Braak</li>
              <li>Kai Engert</li>
              <li>Jack</li>
              <li>Nathan Howell</li>
              <li>Michael Myers</li>
              <li>Giovanni Angoli</li>
              <li>Joel</li>
              <li>Frank Meeuwsen</li>
              <li>B Cavello</li>
              <li>Brian Long</li>
              <li>Allen Varney</li>
              <li>Hiroshi Seki</li>
              <li>Maff</li>
              <li>xanac</li>
              <li>Oliver Uvman</li>
              <li>Lee Starnes</li>
              <li>Mathieu Lecarme</li>
              <li>Syfaro</li>
              <li>Brody Brooks</li>
              <li>Connor Olding</li>
              <li>Alys Brooks</li>
              <li>LoovtO</li>
              <li>Sjef</li>
              <li>Flake</li>
              <li>Matija Han</li>
              <li>Raphael Lullis</li>
              <li>Cybrespace</li>
              <li>Jeremy Stashewsky</li>
              <li>Catt Small</li>
              <li>Alicia Goranson</li>
              <li>Vivian L.</li>
              <li>Damien Sirkis</li>
              <li>Tim Wilde</li>
              <li>William Johnson</li>
              <li>Tango</li>
              <li>Ashanti Fortson</li>
              <li>pinfort</li>
              <li>Michael Castleman</li>
              <li>Derek Gonyeo</li>
              <li>Algot Runeman</li>
              <li>Muloka</li>
              <li>Sam Thompson</li>
              <li>donnerdrummel</li>
              <li>Jay Flaunts His Ignorance</li>
              <li></li>
              <li>devurandom</li>
              <li>Tom Liesenfeld</li>
              <li>colin mitchell</li>
              <li>Mark Gordon</li>
              <li>Root</li>
              <li>Toby Pinder</li>
              <li>Y G</li>
              <li>Jonathan Doda</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Beads Land-Trujillo</li>
              <li>Toootim</li>
              <li>Jay H.</li>
              <li>Tim</li>
              <li>Daniel Lowe</li>
              <li>Pierre BT</li>
              <li>Andrew Schmadel</li>
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
              <li>Tyler</li>
              <li>Arielle Grimes</li>
              <li>tarah</li>
              <li>Liaizon Wakest</li>
              <li>Simeon</li>
              <li>Marty McGuire</li>
              <li>Ickalo</li>
              <li>May Beck</li>
              <li>Calvin French</li>
              <li>pixelguff</li>
              <li>Bryan</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>Lily</li>
              <li>Caitlin Collins</li>
              <li>Paul Rapoport</li>
              <li>Adam E</li>
              <li>Kris Jacque</li>
              <li>Adam Hartling</li>
              <li>illuia</li>
              <li>Merlot</li>
              <li>Lewis Perin</li>
              <li>Alex Dunn</li>
              <li>Modern Modron</li>
              <li>Will</li>
              <li>Andrew Roach</li>
              <li>Gareth Noyce</li>
              <li>Sara Haworth</li>
              <li>reacocard</li>
              <li>bunnyhero</li>
              <li>belabor jaql</li>
              <li>Andrea</li>
              <li>Ruben</li>
              <li>Steve Felix</li>
              <li>[wolfe interval]</li>
              <li>Raphael Schweikert</li>
              <li>Felipe Martin</li>
              <li>Simon Tesla</li>
              <li>Sam Marshall</li>
              <li>Michael Van Vleet</li>
              <li>Max</li>
              <li>Angristan</li>
              <li>Shinichi Sato</li>
              <li>K466</li>
              <li>westantenna</li>
              <li>Stephen Lovell</li>
              <li>Yoshitaka Kaneko</li>
              <li>tj</li>
              <li>Michael Sieradzki</li>
              <li>Takahiro Fujiwara</li>
              <li>Shigure Yumesaki</li>
              <li>neguse</li>
              <li>Artoria2e5</li>
              <li>Soshi Tamura</li>
              <li>Olivier Auber</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Ichigo Mayo</li>
              <li>Pablo Defendini</li>
              <li>Naoki Kosaka</li>
              <li>Jon Pincus</li>
              <li>Stephen Burgess</li>
              <li>Neva Nevi</li>
              <li>Stephen A. Goss</li>
              <li>Masafumi Otsune</li>
              <li>Kota Ouchi</li>
              <li>Akira</li>
              <li>Go Saito</li>
              <li>Nozomu Saito</li>
              <li>Claire</li>
              <li>Karlo</li>
              <li>Kazunori Shinozaki</li>
              <li>Tim and Alexandra Swast</li>
              <li>Decio</li>
              <li>kanna</li>
              <li>HolyGrail</li>
              <li>mayoto</li>
              <li>Krzysztof Jankowski</li>
              <li>Nathan Wittstock</li>
              <li>Benjamin</li>
              <li>simonv3</li>
              <li>Andy</li>
              <li>Willscire of the Many Tribes</li>
              <li>Tobias Timpe</li>
              <li>Bryan Lunduke</li>
              <li>codechemist</li>
              <li>Chris Palmer</li>
              <li>Diego Islas Ocampo - Hyuchia</li>
              <li>Harley Watson</li>
              <li>Miroslav Bajtos</li>
              <li>George Edogawa</li>
              <li>Enrique Santos</li>
              <li>Javier Jardón</li>
              <li>Paul Houlihan</li>
              <li>Nitin Dahyabhai</li>
              <li>8zu</li>
              <li>Alexander</li>
              <li>RW</li>
              <li>Roo Khan</li>
              <li>mpj</li>
              <li>Connor Hudson</li>
              <li>Lars Kristian Høydal</li>
              <li>Scott Moore</li>
              <li>Florian Posdziech</li>
              <li>Frederick Doe</li>
              <li>Axel Terizaki</li>
              <li>Sud</li>
              <li>D. Moonfire</li>
              <li>Christopher Armstrong</li>
              <li>Shivian Morgan</li>
              <li>Eric Mill</li>
              <li>Hans de Wolf</li>
              <li>Balthasar Glättli</li>
              <li>Dave Raftery</li>
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
              <li>Teslawf</li>
              <li>Larry Fine</li>
              <li>Reilly Grant</li>
              <li>Allen Baker</li>
              <li>Mark Davis</li>
              <li>Christian Ternus</li>
              <li>Stephanie Northway</li>
              <li>Andrew Louis</li>
              <li>Syluban</li>
              <li>dreid</li>
              <li>Phil Nelson</li>
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
              <li>T54r4n1</li>
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
              <li>Warren</li>
              <li>Jonas Wisser</li>
              <li>Manu Quadros</li>
              <li>Shawn</li>
              <li>Richard</li>
              <li>Vincent Sautter</li>
              <li>S</li>
              <li>Tyler J Hill</li>
              <li>Greg Pak</li>
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
              <li>Hiro Ishii</li>
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
              <li>Stephanie Pakrul</li>
              <li>Loïc 'iooner' Keyeux</li>
              <li>maloki / kinkymal</li>
              <li>Ted O'Neill</li>
              <li>Corbin Davenport</li>
              <li>Laura Flores</li>
              <li>Brenda Salem</li>
              <li>Ryan Littlefield</li>
              <li>Blorg³</li>
              <li>Jayd Aït-Kaci</li>
              <li>Melissa Avery-Weir</li>
              <li>Masoud Abkenar</li>
              <li>MitarashiDango</li>
              <li>Takuya Yoshida</li>
              <li>Ísólfur Jónsdóttir</li>
              <li>alexis goldusky</li>
              <li>no</li>
              <li>Kerim</li>
              <li>Clworld</li>
              <li>ぽむ</li>
              <li>Johanna B</li>
              <li>Horst Gutmann</li>
              <li>Terry Elliott</li>
              <li>Cathal Garvey</li>
              <li>Sadiq Saif</li>
              <li>Eldan Goldenberg</li>
              <li>Matti Lattunen</li>
              <li>Tom Kenny</li>
              <li>David Laietta</li>
              <li>Lertsenem</li>
              <li>syumari</li>
              <li>Scotty</li>
              <li>Andrew Sherman</li>
              <li>Antoine Amarilli</li>
              <li>HiTechRabbit</li>
              <li>Gusk-ma</li>
              <li>Ryanak</li>
              <li>lindwurm</li>
              <li>Jan Jastrow</li>
              <li>Kazusa Okuda</li>
              <li>German Martinez Maldonado</li>
              <li>phil</li>
              <li>e. m.</li>
              <li>Francois Bayart</li>
              <li>Chris Wilson</li>
              <li>Walter McGinnis</li>
              <li>Roy.jp</li>
              <li>Christopher</li>
              <li>Benjamin Chabrillat</li>
              <li>Adam Jaeger</li>
              <li>k</li>
              <li>Andrew Dawson</li>
              <li>Isabelle Hurbain-Palatin</li>
              <li>Alfred García</li>
              <li>Mikkel Trolle Larsen</li>
              <li>Nero O'Reilly</li>
              <li>Priscila Tchorbadjian</li>
              <li>Karel P Kerezman</li>
              <li>JoYo</li>
              <li>Donna</li>
              <li>Lan</li>
              <li>Kelson</li>
              <li>Matt</li>
              <li>infernalperson</li>
              <li>The World Needs Heroes</li>
              <li>liffy</li>
              <li>Smut Lit Co.</li>
              <li>Zee Spencer</li>
              <li>Feross</li>
              <li>Antoine Jacques de Dixmude</li>
              <li>Matthew Bogart</li>
              <li>Lindsey B</li>
              <li>Eric Rucker</li>
              <li>Ross Smith</li>
              <li>Manuel Bärenz</li>
              <li>Agnieszka Pogorzelska</li>
              <li>Shy Custis</li>
              <li>Brian</li>
              <li>Eszter N. Tót</li>
              <li>Timothy Garris</li>
              <li>Jevon</li>
              <li>Blue Delliquanti</li>
              <li>Jon Erik Christianson</li>
              <li>Max Kaehn</li>
              <li>mkreed</li>
              <li>Jeremy Putnam</li>
              <li>Ed Curtis-Sivess</li>
              <li>Dave Hoffman</li>
              <li>Austin Wigley</li>
              <li>Liz</li>
              <li>Josh Sutphin</li>
              <li>M. Lane</li>
              <li>Kyle Cooper</li>
              <li>Ayhotte</li>
              <li>OliveOilCorp</li>
              <li>Ryan Rix</li>
              <li>vpzomtrrfrt</li>
              <li>dougbkk</li>
              <li>David Underwood</li>
              <li>Xavi Francisco</li>
              <li>Patrick Hogan</li>
              <li>Vincent Ollivier</li>
              <li>Karambir Singh Nain</li>
              <li>A Peanut</li>
              <li>Bryanna M</li>
              <li>Deborah Goldsmith</li>
              <li>Colin Coghill</li>
              <li>Ian Cox</li>
              <li>Ronin wood</li>
              <li>exo</li>
              <li>Tim Albers</li>
              <li>Jennifer Barnes</li>
              <li>Christopher Piontek</li>
              <li>Jeremy Hartman</li>
              <li>Christina Sutt</li>
              <li>Soliman</li>
              <li>Hugh Messenger</li>
              <li>Zach Valenti</li>
              <li>Joel Wallis Jucá</li>
              <li>Thorsten Panknin</li>
              <li>anne thom</li>
              <li>Jörg</li>
              <li>DoC</li>
              <li>Thaddeus Grey</li>
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
