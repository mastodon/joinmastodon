import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedHTMLMessage as FormattedMessage } from 'react-intl';

import Navigation from './Navigation';

import sponsorTootdon from './assets/sponsors/tootdon.png';
import sponsorKibousoft from './assets/sponsors/kibousoft.png';

import noAvatar from './assets/sponsors/32x32.png';
import avatarGlocal from './assets/sponsors/glocal.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
import avatarZoeQuinn from './assets/sponsors/zoequinn.jpg';
import avatarSdf from './assets/sponsors/sdf.jpg';
import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';
import avatarAndreaValenti from './assets/sponsors/andreavalenti.png';
import avatarDavidHutchinson from './assets/sponsors/davidhutchinson.png';

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
            <li><a href='https://unburntwitch.com'><img src={avatarZoeQuinn} alt='' /> <span><strong>Zoë Quinn</strong><span>https://unburntwitch.com</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Ted</strong><span>-</span></span></a></li>
            <li><a href='https://mastodon.sdf.org'><img src={avatarSdf} alt='' /> <span><strong>SDF.ORG</strong><span>https://mastodon.sdf.org</span></span></a></li>
            <li><a href='https://cloudfleet.io'><img src={avatarCloudfleet} alt='' /> <span><strong>CloudFleet</strong><span>https://cloudfleet.io</span></span></a></li>
            <li><a href='https://sudoJames.com'><img src={avatarJamesMWright} alt='' /> <span><strong>James Wright</strong><span>https://sudoJames.com</span></span></a></li>
            <li><a href='#'><img src={noAvatar} alt='' /> <span><strong>Martin Seeger</strong><span>-</span></span></a></li>
            <li><a href='https://ozmedia.com.au/'><img src={avatarDavidHutchinson} alt='' /> <span><strong>David Hutchinson</strong><span>https://ozmedia.com.au</span></span></a></li>
            <li><a href='https://www.aislogic.com/'><img src={avatarAndreaValenti} alt='' /> <span><strong>Andrea Valenti</strong><span>https://www.aislogic.com/</span></span></a></li>
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
              <li>Kit Redgrave</li>
              <li>Ke_Ga</li>
              <li>Pat Monaghan</li>
              <li>Nicholas Frota</li>
              <li>Matteo De Micheli</li>
              <li>Effy Elden</li>
              <li>Philip James</li>
              <li>Kotaro Kawashima</li>
              <li>Jesse Thomas Alford</li>
              <li>A Dark Room iOS</li>
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
              <li>Alda</li>
              <li>Nitai bezerra da Silva</li>
              <li>Aron Price</li>
              <li>Christopher Kruse</li>
            </ul>

            <ul>
              <li>Christopher Gamble</li>
              <li>Jim Luke</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Ellen Teapot</li>
              <li>Hbomb</li>
              <li>Natalie Weizenbaum</li>
              <li>Josef Kenny</li>
              <li>Tyler Britten</li>
              <li>Spex</li>
              <li>Yoz Grahame</li>
              <li>Jonas 'Zatnosk'</li>
              <li>J. C. Holder</li>
              <li>Austin Putman</li>
              <li>Niels Abildgaard</li>
              <li>Danny O'Brien</li>
              <li>halcy</li>
              <li>David Yip</li>
              <li>Tanya Dorey-Elias</li>
              <li>Greg Slepak</li>
              <li>ティン・ルーフ</li>
              <li>Ed Marshall</li>
              <li>anon</li>
              <li>Hideki Yamamoto</li>
              <li>Stolas</li>
              <li>Irick Corwal</li>
              <li>Miki Habryn</li>
              <li>3xv</li>
              <li>USAMI Kenta; Zonu.EXE (@tadsan)</li>
              <li>Sajith Sasidharan</li>
              <li>Yamagishi Kazutoshi</li>
              <li>Shinnosuke Iwaki</li>
              <li>nobody</li>
              <li>Andrew Banchich</li>
              <li>Richard Minerich</li>
              <li>Paul Lindner</li>
              <li>Jesse Olson</li>
              <li>Manesh Pillai</li>
              <li>Joe McLaughlin</li>
              <li>Jonathan McDowell</li>
              <li>Benjamin Sonntag</li>
              <li>Philippe Lemaire</li>
              <li>Bálint Szilakszi</li>
              <li>Anders Ekbom</li>
              <li>Zac Anger</li>
              <li>Alexander Zillion</li>
              <li>Josephine Pedersen</li>
              <li>Nemecle</li>
              <li>Brophey Wolf</li>
              <li>q210</li>
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
              <li>Jesse Vincent</li>
              <li>Pete Keen</li>
              <li>Kevin Sonney</li>
              <li>Ryan Prior</li>
              <li>Micah Elizabeth Scott</li>
              <li>Aaron Williamson</li>
              <li>Christopher James Halse Rogers</li>
              <li>Emma Humphries</li>
              <li>outofrange</li>
              <li>Chris Johnson</li>
              <li>Olivia Mossberg</li>
              <li>Matthieu Herrb</li>
              <li>Eramdam</li>
              <li>Rey Tucker</li>
              <li>Glen E. Ivey</li>
              <li>masklayer</li>
              <li>Martin Hinrichs</li>
              <li>Paul Nathan</li>
              <li>Mykola Bilokonsky</li>
              <li>Jerry Gnarcia</li>
              <li>James Adney</li>
              <li>Scott Hammack</li>
              <li>Jeremy Penner</li>
              <li>Todd Monotony</li>
              <li>A shy person</li>
              <li>snorpey</li>
              <li>Michael</li>
              <li>Emily Marigold Klassen</li>
              <li>Michael Kosler</li>
              <li>Tim Ashley Jenkins</li>
              <li>Kevin Grasso</li>
              <li>Crom</li>
              <li>Christina Hendricks</li>
              <li>DJ Sundog</li>
              <li>HenryKrinkle</li>
              <li>Charles Hutchins</li>
              <li>ml cohen</li>
              <li>Jason Barbier</li>
              <li>Sam Toland</li>
              <li>Laurent Joubert</li>
              <li>fairenoughschroedinger</li>
              <li>Jonathan Altman</li>
              <li>Harukasan</li>
              <li>whitequark</li>
              <li>Yoshiki Kato</li>
              <li>Scott Honey</li>
              <li>Matt Lee</li>
              <li>Ryan Frederick</li>
              <li>Irene Knapp</li>
              <li>hogee</li>
              <li>joshua anderson</li>
              <li>Bram</li>
              <li>Osamu Miyake</li>
              <li>Koya Matsuo</li>
              <li>Danielle Jackson</li>
              <li>Alex Benishek</li>
              <li>yutarot</li>
              <li>Sandro Hawke</li>
              <li>Konosuke Furuhata</li>
              <li>Masaya Imai</li>
              <li>hakoai</li>
              <li>c</li>
              <li>Michel McBride-Charpentier</li>
              <li>Karen Cravens</li>
              <li>Nicole Bacon</li>
              <li>Christoph Laszlo</li>
              <li>AlK</li>
              <li>Valentin Ouvrard</li>
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
              <li>matt Brabbin</li>
              <li>Nathaniel Smith</li>
              <li>James Renken</li>
              <li>Justus Seifert</li>
              <li>Caelyn McAulay</li>
              <li>Alexandre Dufournet</li>
              <li>Colin Mahns</li>
              <li>Patrick Gibson</li>
              <li>Joash Lewis</li>
              <li>Tassels</li>
              <li>Chris Eppstein</li>
              <li>Brian P.</li>
              <li>Damien Nicolas</li>
              <li>s18alg</li>
              <li>Zachary Spector</li>
              <li>j r conlin</li>
              <li>André Koot</li>
              <li>B Cavello</li>
              <li>Brian Long</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>Tom Harris</li>
              <li>h-izumi</li>
              <li>Maff</li>
              <li>David Hayward</li>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>mayaeh</li>
              <li>Stacy Konkiel</li>
              <li>Chris Garcia</li>
              <li>Daniel Nix</li>
              <li>Benoit Maison</li>
              <li>Mathieu Chappuis</li>
              <li>Chas Emerick</li>
              <li>Joel</li>
              <li>Frank Meeuwsen</li>
              <li>Erika</li>
              <li>Jeremy Stashewsky</li>
              <li>Yoshiaki Kiura</li>
              <li>Giovanni Angoli</li>
              <li>Emmanuel Jacobs</li>
              <li>Syfaro</li>
              <li>Hiroshi Seki</li>
              <li>moult</li>
              <li>Bjarni R. Einarsson</li>
              <li>Brent P. Newhall</li>
              <li>Dale Price</li>
              <li>Ben Hamill</li>
              <li>Nikki W</li>
              <li>Gergo Lippai</li>
              <li>mkatze</li>
              <li>Niclas Darville</li>
              <li>Peter Gravelle</li>
              <li>Jan-Niklas Braak</li>
              <li>Kai Engert</li>
              <li>Jack Grigg</li>
              <li>Nathan Howell</li>
              <li>Will Thompson</li>
              <li>Michael Myers</li>
              <li>joachim robert</li>
              <li>Wes</li>
              <li>Oliver Uvman</li>
              <li>qatuno '-sO-</li>
              <li>Ernest Worthing</li>
              <li>Lee Starnes</li>
              <li>Mathieu Lecarme</li>
              <li>Bryan Mitchell</li>
              <li>Sjef</li>
              <li>Aaron Brady</li>
              <li>nanoplink</li>
              <li>LucileDT</li>
              <li>Denis</li>
              <li>Raphael Lullis</li>
              <li>LoovtO</li>
              <li>pinfort</li>
              <li>Michael Castleman</li>
              <li>Derek Gonyeo</li>
              <li>bastien pelouse</li>
              <li>Algot Runeman</li>
              <li>Kengo Nakajima</li>
              <li>Matija Han</li>
              <li>Muloka</li>
              <li>Sam Thompson</li>
              <li>donnerdrummel</li>
              <li>Jay Flaunts His Ignorance</li>
              <li>gasche</li>
              <li></li>
              <li>devurandom</li>
              <li>Oreolek</li>
              <li>Ryan D</li>
              <li>Brennen Bearnes</li>
              <li>colin mitchell</li>
              <li>Kyle Appelgate</li>
              <li>Mark Gordon</li>
              <li>Katie Collmar</li>
              <li>Toby Pinder</li>
              <li>Y G</li>
              <li>Jonathan Doda</li>
              <li>Daniel Cassidy</li>
              <li>Snowflake</li>
              <li>Andrew Shu</li>
              <li>Hodge</li>
              <li>Solei</li>
              <li>Andrew Replogle</li>
              <li>Jim Bradfield</li>
              <li>Martin Tithonium</li>
              <li>David Stark</li>
              <li>Sundi L Richard</li>
              <li>Will Springer</li>
              <li>Trace Evans</li>
              <li>Fletcher Cole</li>
              <li>Michelle Shepardson</li>
              <li>Tyler</li>
              <li>Arielle Grimes</li>
              <li>tarah</li>
              <li>Liaizon Wakest</li>
              <li>Claus Wahlers</li>
              <li>Jelle</li>
              <li>Simeon</li>
              <li>Stephan Okhuijsen</li>
              <li>Flake</li>
              <li>Ickalo</li>
              <li>J. Allan Dale</li>
              <li>Bitey Ferret</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Konrad M. Lawson</li>
              <li>Brian Small</li>
              <li>Beads Land-Trujillo</li>
              <li>Toootim</li>
              <li>Benjamin Beck</li>
              <li>Calvin French</li>
              <li>Kemp</li>
              <li>pixelguff</li>
              <li>Bryan</li>
              <li>Modern Modron</li>
              <li>Mnemonic Light</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>Lily</li>
              <li>Caitlin Collins</li>
              <li>Paul Rapoport</li>
              <li>Memetic Hazard</li>
              <li>Kris Jacque</li>
              <li>Pierre BT</li>
              <li>Andrew Schmadel</li>
              <li>Alex Dunn</li>
              <li>Vivian L.</li>
              <li>Mike Verdone</li>
              <li>Brody Brooks</li>
              <li>Sara Haworth</li>
              <li>reacocard</li>
              <li>bunnyhero</li>
              <li>belabor jaql</li>
              <li>Andrea</li>
              <li>Cybrespace</li>
              <li>Amadeus Folego</li>
              <li>Angristan</li>
              <li>Shinichi Sato</li>
              <li>Kaylee</li>
              <li>K466</li>
              <li>westantenna</li>
              <li>Hirokazu Uzu</li>
              <li>Stephen Lovell</li>
              <li>Jamie Bradway</li>
              <li>Takeshi Umeda</li>
              <li>Yoshitaka Kaneko</li>
              <li>Tomoya Matsuura</li>
              <li>tj</li>
              <li>Michael Sieradzki</li>
              <li>Takahiro Fujiwara</li>
              <li>neguse</li>
              <li>Artoria2e5</li>
              <li>Soshi Tamura</li>
              <li>Olivier Auber</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Takuro Fukuda</li>
              <li>Ichigo Mayo</li>
              <li>Pablo Defendini</li>
              <li>koji narazaki</li>
              <li>Naoki Kosaka</li>
              <li>Jon Pincus</li>
              <li>Stephen Burgess</li>
              <li>Neva Nevi</li>
              <li>Raphaël Bevenot</li>
              <li>Stephen A. Goss</li>
              <li>Keiji Matsuzaki</li>
              <li>Masafumi Otsune</li>
              <li>Kota Ouchi</li>
              <li>Akira</li>
              <li>Go Saito</li>
              <li>Nozomu Saito</li>
              <li>Ben Tucci</li>
              <li>Chris Sakkas</li>
              <li>Claire</li>
              <li>Sean M Puckett</li>
              <li>Karlo Luiten</li>
              <li>Kazunori Shinozaki</li>
              <li>Sebastian Morr</li>
              <li>Tim and Alexandra Swast</li>
              <li>Decio</li>
              <li>Decklin Foster</li>
              <li>Carl Friedrich Bolz</li>
              <li>HolyGrail</li>
              <li>mayoto</li>
              <li>Patrick L Archibald</li>
              <li>Krzysztof Jankowski</li>
              <li>Nathan Wittstock</li>
              <li>Benjamin</li>
              <li>simonv3</li>
              <li>Felipe Martin</li>
              <li>Arnaud Berthomier</li>
              <li>Andy</li>
              <li>Kevin Delgado</li>
              <li>Willscire of the Many Tribes</li>
              <li>kazuyuki</li>
              <li>Tobias Timpe</li>
              <li>Bryan Lunduke</li>
              <li>codechemist</li>
              <li>Ben Lee</li>
              <li>Chris Palmer</li>
              <li>Sam Marshall</li>
              <li>Sumomi</li>
              <li>Diego Islas Ocampo - Hyuchia</li>
              <li>Harley Watson</li>
              <li>Miroslav Bajtos</li>
              <li>George Edogawa</li>
              <li>Enrique Santos</li>
              <li>Javier Jardón</li>
              <li>Paul Houlihan</li>
              <li>Nitin Dahyabhai</li>
              <li>Stephanie Pakrul</li>
              <li>Alexander</li>
              <li>Jean-Philippe DUFRAIGNE</li>
              <li>Silver Nitrate Kate</li>
              <li>RW</li>
              <li>Roo Khan</li>
              <li>Spunkie</li>
              <li>mpj</li>
              <li>Connor Hudson</li>
              <li>Cameron Callahan</li>
              <li>Lars Kristian Høydal</li>
              <li>Scott Moore</li>
              <li>Florian Posdziech</li>
              <li>Frederick Doe</li>
              <li>Axel Terizaki</li>
              <li>Sud</li>
              <li>D@n S.</li>
              <li>D. Moonfire</li>
              <li>Christopher Armstrong</li>
              <li>Shivian Morgan</li>
              <li>Hans de Wolf</li>
              <li>Phoenix Veritas</li>
              <li>Christien Rioux</li>
              <li>Balthasar Glättli</li>
              <li>Dave Raftery</li>
              <li>Andrew Roach</li>
              <li>Fabricio C Zuardi</li>
              <li>Brian Moore</li>
              <li>Margaret Trauth</li>
              <li>James Smith</li>
              <li>t3sserakt</li>
              <li>Adrian Hon</li>
              <li>Dmitri Sotnikov</li>
              <li>Miguel</li>
              <li>Cassian Lotte Lodge</li>
              <li>Pierre-Emmanuel Guerton</li>
              <li>Drew Pope</li>
              <li>Anselm Hannemannn</li>
              <li>Klastic</li>
              <li>Alice Voidstar</li>
              <li>Alan Love</li>
              <li>Iain Cheyne</li>
              <li>Michael Van Vleet</li>
              <li>Daniel Maxwell-Ross</li>
              <li>Indi Latrani</li>
              <li>Toby</li>
              <li>Avi Flax</li>
              <li>Bruno Dias</li>
              <li>Loïc 'iooner' Keyeux</li>
              <li>Zach Smith</li>
              <li>ZmK</li>
              <li>Stefan Hayden</li>
              <li>Antoine-Frédéric Raquin Strik</li>
              <li>Esteban Manchado Velázquez</li>
              <li>Drapher</li>
              <li>Paul Chabane</li>
              <li>Teslawf</li>
              <li>Tim</li>
              <li>Sean C</li>
              <li>Simon Tesla</li>
              <li>Larry Fine</li>
              <li>Reilly Grant</li>
              <li>Geknow</li>
              <li>James Valleroy</li>
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
              <li>Bishnu Bhattacharyya</li>
              <li>Casey Kolderup</li>
              <li>Rob Flickenger</li>
              <li>Nurelin</li>
              <li>Infocalypse</li>
              <li>Bastien Remy</li>
              <li>Nicolas Grevet</li>
              <li>Paul Harvey</li>
              <li>Claire Tolan</li>
              <li>Ira Abramov</li>
              <li>Helly</li>
              <li>Kurt Mosiejczuk</li>
              <li>LJ</li>
              <li>fluffy</li>
              <li>Selena Knight</li>
              <li>Justin Humm</li>
              <li>T54r4n1</li>
              <li>Matthew Cheely</li>
              <li>Salomao Becker</li>
              <li>Abe Weishaupt</li>
              <li>Steve Phillips</li>
              <li>Laura Michet</li>
              <li>Firebird Fiction</li>
              <li>Tab</li>
              <li>BlkNoiseMachine</li>
              <li>Shelby Spees</li>
              <li>Jason S.</li>
              <li>Adam Guest</li>
              <li>Mel Reams</li>
              <li>Holger Durer</li>
              <li>Michael Brodhead</li>
              <li>maloki / kinkymal</li>
              <li>Warren</li>
              <li>Jonas Wisser</li>
              <li>Manu Quadros</li>
              <li>Shawn</li>
              <li>Adam Frey</li>
              <li>Richard</li>
              <li>Marty McGuire</li>
              <li>James Harris</li>
              <li>Eylul Dogruel</li>
              <li>Axel Dürkop</li>
              <li>Captain Skyhawk</li>
              <li>Pablo Brasero</li>
              <li>Stéphane</li>
              <li>Greg Sartucci</li>
              <li>Jacob Weisz</li>
              <li>Ivan Sagalaev</li>
              <li>Lyn Thorne-Alder</li>
              <li>Lily Vulcano</li>
              <li>Allison Parrish</li>
              <li>Bobby Richter</li>
              <li>Naoki Matsuyama</li>
              <li>Satoshi KOJIMA</li>
              <li>Ben Bonfil</li>
              <li>Craig Maloney</li>
              <li>Hiro Ishii</li>
              <li>unarist</li>
              <li>Shumpei Urabe</li>
              <li>Matt Baer</li>
              <li>masarakki</li>
              <li>abcang</li>
              <li>Stefano Figura</li>
              <li>Gabriele Lucci</li>
              <li>Joshua Demallistre</li>
              <li>Will R</li>
              <li>Arkanosis</li>
              <li>Andrew W</li>
              <li>Kyota Yasuda</li>
              <li>tateisu</li>
              <li>Satoshi Endo</li>
              <li>Sébastien Lalloué</li>
              <li>HerrGilbert</li>
              <li>Emmanuel Kasper</li>
              <li>Túlio Albuquerque</li>
              <li>Masoud Abkenar</li>
              <li>MitarashiDango</li>
              <li>Takuya Yoshida</li>
              <li>Ryuichi Kubo</li>
              <li>Dustin Keitel</li>
              <li>Will</li>
              <li>Ísólfur Jónsdóttir</li>
              <li>alexis goldusky</li>
              <li>no</li>
              <li>Dennis Cassidy</li>
              <li>Kerim</li>
              <li>Clworld</li>
              <li>ぽむ</li>
              <li>itsumonotakumi</li>
              <li>syumari</li>
              <li>Lewis Perin</li>
              <li>Terry Elliott</li>
              <li>Cathal Garvey</li>
              <li>Lily Sahiful B</li>
              <li>Xavier B.</li>
              <li>Michael</li>
              <li>Sadiq Saif</li>
              <li>Alexander Thompson</li>
              <li>osapon</li>
              <li>Stuart Hicks</li>
              <li>Eldan Goldenberg</li>
              <li>Matti Lattunen</li>
              <li>Shayne Power</li>
              <li>Markus Schmidt</li>
              <li>Tom Kenny</li>
              <li>tuxayo</li>
              <li>David Laietta</li>
              <li>Lertsenem</li>
              <li>Fidgety</li>
              <li>HiTechRabbit</li>
              <li>Catt Small</li>
              <li>Antoine Amarilli</li>
              <li>Gusk-ma</li>
              <li>Ron Britton</li>
              <li>Ryanak</li>
              <li>Ben Wang</li>
              <li>Chris Were</li>
              <li>lindwurm</li>
              <li>Andy Drop</li>
              <li>Rafael</li>
              <li>Jan Jastrow</li>
              <li>Kazusa Okuda</li>
              <li>German Martinez Maldonado</li>
              <li>Dan Munro</li>
              <li>Chris Bowdon</li>
              <li>Jay Logan</li>
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
