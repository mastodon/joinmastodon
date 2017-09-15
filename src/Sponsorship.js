import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import Navigation from './Navigation';

import avatarGlocal from './assets/sponsors/glocal.png';
import avatarCloudfleet from './assets/sponsors/cloudfleet.png';
import avatarZoeQuinn from './assets/sponsors/zoequinn.jpg';
import avatarSdf from './assets/sponsors/sdf.jpg';
import avatarJamesMWright from './assets/sponsors/jamesmwright.jpg';

const Sponsorship = () => (
  <div className='sponsorship' id='sponsorship'>
    <div className='intro'>
      <Navigation />

      <div className='text'>
        <h2>Support the project</h2>
        <p className='lead'>Mastodon is <strong>free, open-source software</strong>. There is no advertising, monetizing, or venture capital. <strong>Your donations directly support full-time development of the project</strong>. Thank you to the following people and companies:</p>
      </div>

      <div className='container'>
        <div className='tier'>
          <div className='sponsors-list--logos'>
            {/* None */}
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='text cta-text'>
        <a href='https://patreon.com/mastodon' className='cta button'>Become a sponsor</a>
      </div>

      <div className='tier'>
        <h3>Silver sponsors</h3>
        <p><strong>Silver sponsors</strong> are those that have pledged $40 to $99 to Mastodon.</p>

        <div className='sponsors-list--badges'>
          <ul>
            <li><a href='https://mastodon.art'><img src={avatarGlocal} alt='' /> <span><strong>glocal</strong><span>https://mastodon.art</span></span></a></li>
            <li><a href='https://unburntwitch.com'><img src={avatarZoeQuinn} alt='' /> <span><strong>Zoë Quinn</strong><span>https://unburntwitch.com</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Julie Moronuki</strong><span>http://example.com</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Ted</strong><span>http://example.com</span></span></a></li>
            <li><a href='https://cloudfleet.io'><img src={avatarCloudfleet} alt='' /> <span><strong>CloudFleet</strong><span>https://cloudfleet.io</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>David Hutchinson</strong><span>http://example.com</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Martin Seeger</strong><span>http://example.com</span></span></a></li>
            <li><a href='https://sudoJames.com'><img src={avatarJamesMWright} alt='' /> <span><strong>James Wright</strong><span>https://sudoJames.com</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Jeff Elder</strong><span>http://example.com</span></span></a></li>
            <li><a href='https://mastodon.sdf.org'><img src={avatarSdf} alt='' /> <span><strong>SDF.ORG</strong><span>https://mastodon.sdf.org</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Andrea Valenti</strong><span>http://example.com</span></span></a></li>
            <li><a href='#'><img src='http://via.placeholder.com/32x32' alt='' /> <span><strong>Styromaniac</strong><span>http://example.com</span></span></a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className='tier'>
        <h3>Sponsors</h3>
        <p><strong>Sponsors</strong> are those that pledged $10 to $39 to Mastodon.</p>

        <div className='sponsors-list--names'>
          <Scrollbars style={{ height: 500 }}>
            <ul className='highlighted'>
              <li>Kit Redgrave</li>
              <li>Ke_Ga</li>
              <li>Pat Monaghan</li>
              <li>Nicholas Frota</li>
              <li>Matteo De Micheli</li>
              <li>Effy Elden</li>
              <li>Philip James</li>
              <li>Chu Ka-cheong</li>
              <li>Sean Linsley</li>
              <li>Kotaro Kawashima</li>
              <li>Jesse Thomas Alford</li>
              <li>A Dark Room iOS</li>
              <li>Nolan Lawson</li>
              <li>Gen Knoxx</li>
              <li>Moritz</li>
              <li>Paco Hope</li>
              <li>Great Scott Gadgets</li>
              <li>slipstream/RoL</li>
              <li>Masahito Zembutsu</li>
              <li>Masto.host</li>
              <li>Ben Werdmuller</li>
              <li>nullkal</li>
              <li>Sho Kusano / rosylilly</li>
              <li>'@mecab</li>
              <li>Nitai bezerra da Silva</li>
              <li>Aron Price</li>
            </ul>

            <ul>
              <li>Christopher Gamble</li>
              <li>Leif Halldor Asgeirsson</li>
              <li>Ellen Teapot</li>
              <li>Josef Kenny</li>
              <li>Natalie Weizenbaum</li>
              <li>Spex</li>
              <li>Jim Luke</li>
              <li>Tyler Britten</li>
              <li>Hbomb</li>
              <li>Yoz Grahame</li>
              <li>Jonas R. E.</li>
              <li>Austin Putman</li>
              <li>J. C. Holder</li>
              <li>Niels Abildgaard</li>
              <li>halcy</li>
              <li>Sammie</li>
              <li>Danny O'Brien</li>
              <li>David Yip</li>
              <li>iliana weller</li>
              <li>Greg Slepak</li>
              <li>Kyle Bishop</li>
              <li>Tanya Dorey-Elias</li>
              <li>ティン・ルーフ</li>
              <li>Emily Marigold Klassen</li>
              <li>nobody</li>
              <li>Dmytro Gladkyi</li>
              <li>Hideki Yamamoto</li>
              <li>Emma Humphries</li>
              <li>Pete Keen</li>
              <li>Rufus</li>
              <li>Miki Habryn</li>
              <li>Danielle McLean</li>
              <li>Aaron Williamson</li>
              <li>Yamagishi Kazutoshi</li>
              <li>Ed Marshall</li>
              <li>Gtom</li>
              <li>Nemecle</li>
              <li>Manesh Pillai</li>
              <li>C J Silverio</li>
              <li>Micah Elizabeth Scott</li>
              <li>Pierre Vanhulst</li>
              <li>Paul Lindner</li>
              <li>peter hessler</li>
              <li>Zac Anger</li>
              <li>3xv</li>
              <li>Kevin Sonney</li>
              <li>Olivia Mossberg</li>
              <li>Chris Johnson</li>
              <li>Johannes Barre</li>
              <li>Jacob Helwig</li>
              <li>Joe McLaughlin</li>
              <li>Michael Kosler</li>
              <li>Michael</li>
              <li>Eramdam</li>
              <li>Jonathan McDowell</li>
              <li>masklayer</li>
              <li>Josephine Pedersen</li>
              <li>q210</li>
              <li>Rey Tucker</li>
              <li>Andrew Banchich</li>
              <li>Bálint Szilakszi</li>
              <li>Richard Minerich</li>
              <li>Christopher James Halse Rogers</li>
              <li>Sajith Sasidharan</li>
              <li>Jesse Vincent</li>
              <li>Benjamin Sonntag</li>
              <li>Matthieu Herrb</li>
              <li>Irick Corwal</li>
              <li>Nicolai Schwarz</li>
              <li>Dashie</li>
              <li>Jon Leibowitz</li>
              <li>anon</li>
              <li>Philippe Lemaire</li>
              <li>outofrange</li>
              <li>Ryan Prior</li>
              <li>Jesse Olson</li>
              <li>Kenneth Ken Sugar</li>
              <li>USAMI Kenta; Zonu.EXE (@tadsan)</li>
              <li>Anders Ekbom</li>
              <li>Zaki</li>
              <li>Brophey Wolf</li>
              <li>Stolas</li>
              <li>Shinnosuke Iwaki</li>
              <li>Alexander Zillion</li>
              <li>Glen E. Ivey</li>
              <li>James Adney</li>
              <li>Paul Nathan</li>
              <li>Martin Hinrichs</li>
              <li>Jerry Gnarcia</li>
              <li>Mykola Bilokonsky</li>
              <li>A shy person</li>
              <li>Jeremy Penner</li>
              <li>Scott Hammack</li>
              <li>Todd Monotony</li>
              <li>snorpey</li>
              <li>Tim Ashley Jenkins</li>
              <li>Kevin Grasso</li>
              <li>Crom</li>
              <li>Christina Hendricks</li>
              <li>Matt Lee</li>
              <li>whitequark</li>
              <li>ml cohen</li>
              <li>DJ Sundog</li>
              <li>Yoshiki Kato</li>
              <li>Jason Barbier</li>
              <li>Sam Toland</li>
              <li>fairenoughschroedinger</li>
              <li>Jonathan Altman</li>
              <li>Scott Honey</li>
              <li>Harukasan</li>
              <li>HenryKrinkle</li>
              <li>therealkings</li>
              <li>Charles Hutchins</li>
              <li>Laurent Joubert</li>
              <li>Ryan Frederick</li>
              <li>Irene Knapp</li>
              <li>Alex May</li>
              <li>joshua anderson</li>
              <li>hogee</li>
              <li>Masaya Imai</li>
              <li>Koya Matsuo</li>
              <li>Osamu Miyake</li>
              <li>Anzu Takahashi</li>
              <li>Alex Benishek</li>
              <li>Sandro Hawke</li>
              <li>yutarot</li>
              <li>Bram</li>
              <li>Danielle Jackson</li>
              <li>Konosuke Furuhata</li>
              <li>hakoai</li>
              <li>Karen Cravens</li>
              <li>Michel McBride-Charpentier</li>
              <li>iris bull</li>
              <li>Nicole Bacon</li>
              <li>Jennie Schilling</li>
              <li>Colin Mahns</li>
              <li>Caelyn McAulay</li>
              <li>Nicholas Hinds</li>
              <li>AlK</li>
              <li>Jay Shapiro</li>
              <li>Filippo Valsorda</li>
              <li>William Hopkins</li>
              <li>Jer Thorp</li>
              <li>August Bigelow</li>
              <li>James Renken</li>
              <li>s18alg</li>
              <li>Patrick O'Doherty</li>
              <li>Valentin Ouvrard</li>
              <li>matt Brabbin</li>
              <li>Nathaniel Smith</li>
              <li>Dave Lane</li>
              <li>Justus Seifert</li>
              <li>Jemaleddin Cole</li>
              <li>Mike</li>
              <li>j r conlin</li>
              <li>Ash Furrow</li>
              <li>Brian P.</li>
              <li>Christoph Laszlo</li>
              <li>Alexandre Dufournet</li>
              <li>Rachel King</li>
              <li>Joash Lewis</li>
              <li>Tassels</li>
              <li>Patrick Gibson</li>
              <li>Wesley Moore</li>
              <li>Damien Nicolas</li>
              <li>Jason Rimmer</li>
              <li>Chris Eppstein</li>
              <li>Parker Higgins</li>
              <li>André Koot</li>
              <li>Brian Long</li>
              <li>Renato dos Santos Cerqueira</li>
              <li>Tom Harris</li>
              <li>h-izumi</li>
              <li>Maff</li>
              <li>David Hayward</li>
              <li>Brooke</li>
              <li>Bheesham Persaud</li>
              <li>Solar Anamnesis</li>
              <li>Daniel Nix</li>
              <li>Chris Garcia</li>
              <li>Mark Collins</li>
              <li>Stacy Konkiel</li>
              <li>Mathieu Chappuis</li>
              <li>Chas Emerick</li>
              <li>s a</li>
              <li>Frank Meeuwsen</li>
              <li>Joel</li>
              <li>Erika</li>
              <li>Jeremy Stashewsky</li>
              <li>Yoshiaki Kiura</li>
              <li>Giovanni Angoli</li>
              <li>Emmanuel Jacobs</li>
              <li>Syfaro</li>
              <li>Jan-Niklas Braak</li>
              <li>Nathan Howell</li>
              <li>Kai Engert</li>
              <li>Gergo Lippai</li>
              <li>Hiroshi Seki</li>
              <li>Brent P. Newhall</li>
              <li>moult</li>
              <li>Nikki W</li>
              <li>Peter Gravelle</li>
              <li>Will Thompson</li>
              <li>Niclas Darville</li>
              <li>Ben Hamill</li>
              <li>Michael Myers</li>
              <li>Dale Price</li>
              <li>mkatze</li>
              <li>joachim robert</li>
              <li>Bjarni R. Einarsson</li>
              <li>Jack Grigg</li>
              <li>Wes</li>
              <li>Mathieu Lecarme</li>
              <li>Lee Starnes</li>
              <li>Tony Sarkees</li>
              <li>Oliver Uvman</li>
              <li>Ernest Worthing</li>
              <li>qatuno '-sO-</li>
              <li>Colby Dillion</li>
              <li>Bryan Mitchell</li>
              <li>Sjef</li>
              <li>nanoplink</li>
              <li>Aaron Brady</li>
              <li>Raphael Lullis</li>
              <li>Matija Han</li>
              <li>gasche</li>
              <li>usr_share</li>
              <li>Ryan D</li>
              <li>Michael Castleman</li>
              <li>Jay Flaunts His Ignorance</li>
              <li>Brennen Bearnes</li>
              <li>Kyle Appelgate</li>
              <li>Algot Runeman</li>
              <li>bastien pelouse</li>
              <li>Katie Collmar</li>
              <li>Derek Gonyeo</li>
              <li>colin mitchell</li>
              <li>Jonathan Doda</li>
              <li>tkpx</li>
              <li>LoovtO</li>
              <li>Kengo Nakajima</li>
              <li>Toby Pinder</li>
              <li>Muloka</li>
              <li>Y G</li>
              <li>Sam Thompson</li>
              <li>Mark Gordon</li>
              <li>Martin Weigert</li>
              <li>pinfort</li>
              <li>Tom Liesenfeld</li>
              <li>Fabian Fabian</li>
              <li>Oreolek</li>
              <li>donnerdrummel</li>
              <li>Root</li>
              <li>tarah</li>
              <li>Fletcher Cole</li>
              <li>Arielle Grimes</li>
              <li>Hodge</li>
              <li>noisebox</li>
              <li>Erik Bray</li>
              <li>Jelle</li>
              <li>David Stark</li>
              <li>Trace Evans</li>
              <li>Liaizon Wakest</li>
              <li>Jim Bradfield</li>
              <li>Michelle Shepardson</li>
              <li>Simeon</li>
              <li>Martin Tithonium</li>
              <li>Sundi L Richard</li>
              <li>Stephan Okhuijsen</li>
              <li>Tyler</li>
              <li>Andrew Replogle</li>
              <li>Andrew Shu</li>
              <li>Claus Wahlers</li>
              <li>Solei Drackenseye</li>
              <li>Will Springer</li>
              <li>Snowflake</li>
              <li>Pablo Lopez Soriano</li>
              <li>Flake</li>
              <li>Matthew Gregg</li>
              <li>Bitey Ferret</li>
              <li>J. Allan Dale</li>
              <li>Ickalo</li>
              <li>Wilhelm Fitzpatrick</li>
              <li>Beads Land-Trujillo</li>
              <li>Konrad M. Lawson</li>
              <li>Brian Small</li>
              <li>Toootim</li>
              <li>Kris Jacque</li>
              <li>Modern Modron</li>
              <li>Mnemonic Light</li>
              <li>Bryan</li>
              <li>Szmozsánszky István "Flaki"</li>
              <li>Kemp</li>
              <li>Paul Rapoport</li>
              <li>Lily</li>
              <li>Calvin French</li>
              <li>Memetic Hazard</li>
              <li>Caitlin Collins</li>
              <li>pixelguff</li>
              <li>Andrew Schmadel</li>
              <li>Pierre BT</li>
              <li>Alex Dunn</li>
              <li>Mike Verdone</li>
              <li>Vivian L.</li>
              <li>Brody Brooks</li>
              <li>reacocard</li>
              <li>Andrea</li>
              <li>Sara Haworth</li>
              <li>belabor jaql</li>
              <li>bunnyhero</li>
              <li>Cybrespace</li>
              <li>Amadeus Folego</li>
              <li>Stephen Burgess</li>
              <li>Indi Latrani</li>
              <li>Christopher Armstrong</li>
              <li>Keiji Matsuzaki</li>
              <li>Sumomi</li>
              <li>neguse</li>
              <li>Decio</li>
              <li>Sean M Puckett</li>
              <li>Connor Hudson</li>
              <li>David Philipe Gil</li>
              <li>mayoto</li>
              <li>Richard Malone</li>
              <li>dreid</li>
              <li>Takuro Fukuda</li>
              <li>Allen Baker</li>
              <li>Henri Watson</li>
              <li>Tab</li>
              <li>Christien Rioux</li>
              <li>Toby</li>
              <li>Tobias Timpe</li>
              <li>Jamie Bradway</li>
              <li>Claire Tolan</li>
              <li>Pablo Defendini</li>
              <li>Scott Moore</li>
              <li>Kaylee</li>
              <li>Ben Lee</li>
              <li>Mel Reams</li>
              <li>Klastic</li>
              <li>Matthew Cheely</li>
              <li>koji narazaki</li>
              <li>Soshi Tamura</li>
              <li>fluffy</li>
              <li>tj</li>
              <li>Miguel</li>
              <li>Stephen Lovell</li>
              <li>Benjamin</li>
              <li>Michael Sieradzki</li>
              <li>RW</li>
              <li>James Smith</li>
              <li>Naoki Kosaka</li>
              <li>westantenna</li>
              <li>Iain Cheyne</li>
              <li>Adrian Hon</li>
              <li>Andrew Roach</li>
              <li>Sean C</li>
              <li>Cameron Callahan</li>
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
              <li>Willscire of the Many Tribes</li>
              <li>Bishnu Bhattacharyya</li>
              <li>Krzysztof Jankowski</li>
              <li>Claire</li>
              <li>Olivier Auber</li>
              <li>Takahiro Fujiwara</li>
              <li>simonv3</li>
              <li>Nozomu Saito</li>
              <li>Paul Houlihan</li>
              <li>Ichigo Mayo</li>
              <li>LM</li>
              <li>Frederick Doe</li>
              <li>Jam</li>
              <li>Balthasar Glättli</li>
              <li>Kota Ouchi</li>
              <li>Infocalypse</li>
              <li>James Valleroy</li>
              <li>Kenny K</li>
              <li>Arnaud Berthomier</li>
              <li>Margaret Trauth</li>
              <li>George Edogawa</li>
              <li>Drapher</li>
              <li>Shawn</li>
              <li>Raphaël Bevenot</li>
              <li>Holger Durer</li>
              <li>Decklin Foster</li>
              <li>Casey Kolderup</li>
              <li>Paul Chabane</li>
              <li>Takeshi Umeda</li>
              <li>Esteban Manchado Velázquez</li>
              <li>Lars Kristian Høydal</li>
              <li>Adam Guest</li>
              <li>Jason S.</li>
              <li>Chris Palmer</li>
              <li>Tomoya Matsuura</li>
              <li>Luiz Irber</li>
              <li>Roo Khan</li>
              <li>Shinichi Sato</li>
              <li>Paul Harvey</li>
              <li>K466</li>
              <li>Drew Pope</li>
              <li>Cassian Lotte Lodge</li>
              <li>Nitin Dahyabhai</li>
              <li>Silver Nitrate Kate</li>
              <li>kazuyuki</li>
              <li>Angristan</li>
              <li>D. Moonfire</li>
              <li>Phoenix Veritas</li>
              <li>Patrick L Archibald</li>
              <li>Sud</li>
              <li>Nathan Wittstock</li>
              <li>Anselm Hannemannn</li>
              <li>Bryan Lunduke</li>
              <li>Selena Knight</li>
              <li>Tessa N</li>
              <li>Felipe Martin</li>
              <li>Kazunori Shinozaki</li>
              <li>Jonas Wisser</li>
              <li>ZmK</li>
              <li>Katherine A Kearns</li>
              <li>Shigure Yumesaki</li>
              <li>Manu Quadros</li>
              <li>Miroslav Bajtos</li>
              <li>codechemist</li>
              <li>Nicolas Grevet</li>
              <li>Go Saito</li>
              <li>Masafumi Otsune</li>
              <li>Carl Friedrich Bolz</li>
              <li>Jean-Philippe DUFRAIGNE</li>
              <li>Antoine-Frédéric Raquin Strik</li>
              <li>Stefan Hayden</li>
              <li>Lilith Saintcrow</li>
              <li>Stephanie Northway</li>
              <li>Spunkie</li>
              <li>kanna</li>
              <li>Kevin Delgado</li>
              <li>Chris Sakkas</li>
              <li>Christian Ternus</li>
              <li>Diego Islas Ocampo - Hyuchia</li>
              <li>Avi Flax</li>
              <li>Fabricio C Zuardi</li>
              <li>Max Bruckner</li>
              <li>Dave Raftery</li>
              <li>Firebird Fiction</li>
              <li>Akira</li>
              <li>Dmitri Sotnikov</li>
              <li>Bastien Remy</li>
              <li>Shivian Morgan</li>
              <li>Hirokazu Uzu</li>
              <li>Mark Davis</li>
              <li>Pierre-Emmanuel Guerton</li>
              <li>Zach Smith</li>
              <li>Alice Voidstar</li>
              <li>Laura Michet</li>
              <li>Shelby Spees</li>
              <li>Michael Brodhead</li>
              <li>t3sserakt</li>
              <li>mpj</li>
              <li>Phil Nelson</li>
              <li>LJ</li>
              <li>Warren</li>
              <li>Andy</li>
              <li>Arno Rieux</li>
              <li>Florian Posdziech</li>
              <li>Ben Tucci</li>
              <li>Daniel Maxwell-Ross</li>
              <li>Abe Weishaupt</li>
              <li>8zu</li>
              <li>Stephanie Pakrul</li>
              <li>Reilly Grant</li>
              <li>Kurt Mosiejczuk</li>
              <li>Sebastian Morr</li>
              <li>Tim</li>
              <li>Salomao Becker</li>
              <li>Loïc 'iooner' Keyeux</li>
              <li>Syluban</li>
              <li>Geknow</li>
              <li>Alan Love</li>
              <li>Stephen A. Goss</li>
              <li>Bruno Dias</li>
              <li>Teslawf</li>
              <li>Tablesaw Tablesawsen</li>
              <li>Brian Moore</li>
              <li>Hans de Wolf</li>
              <li>Enrique Santos</li>
              <li>Yoshitaka Kaneko</li>
              <li>Rob Flickenger</li>
              <li>Andrew Louis</li>
              <li>Javier Jardón</li>
              <li>D@n S.</li>
              <li>Eric Mill</li>
              <li>maloki / kinkymal</li>
              <li>Karlo Luiten</li>
              <li>Wonderfall</li>
              <li>Neva Nevi</li>
              <li>Adam Frey</li>
              <li>T54r4n1</li>
              <li>Alexander</li>
              <li>Helly</li>
              <li>Justin Humm</li>
              <li>Sam Marshall</li>
              <li>Artoria2e5</li>
              <li>Marty McGuire</li>
              <li>Shumpei Urabe</li>
              <li>Stéphane</li>
              <li>pso2.club</li>
              <li>Kyota Yasuda</li>
              <li>Joshua Demallistre</li>
              <li>KemoNine</li>
              <li>Lyn Thorne-Alder</li>
              <li>Eylul Dogruel</li>
              <li>Emmanuel Kasper</li>
              <li>Fabian Schmidt</li>
              <li>Greg Sartucci</li>
              <li>Sébastien Lalloué</li>
              <li>Stefano Figura</li>
              <li>Satoshi Endo</li>
              <li>Satoshi KOJIMA</li>
              <li>Bobby Richter</li>
              <li>Craig Maloney</li>
              <li>Lily Vulcano</li>
              <li>Andrew W</li>
              <li>Allison Parrish</li>
              <li>Jacob Weisz</li>
              <li>Jay Casey</li>
              <li>Matt Baer</li>
              <li>Ben Bonfil</li>
              <li>unarist</li>
              <li>Vincent Zeng</li>
              <li>abcang</li>
              <li>Will R</li>
              <li>Gabriele Lucci</li>
              <li>Hiro Ishii</li>
              <li>tateisu</li>
              <li>HerrGilbert</li>
              <li>Axel Dürkop</li>
              <li>masarakki</li>
              <li>Cedric</li>
              <li>Steve Lawson</li>
              <li>Captain Skyhawk</li>
              <li>Naoki Matsuyama</li>
              <li>Ivan Sagalaev</li>
              <li>Pablo Brasero</li>
              <li>James Harris</li>
              <li>Arkanosis</li>
              <li>Masoud Abkenar</li>
              <li>Dustin Keitel</li>
              <li>Takuya Yoshida</li>
              <li>alexis goldusky</li>
              <li>xj9</li>
              <li>Ísólfur Jónsdóttir</li>
              <li>Ryuichi Kubo</li>
              <li>Will</li>
              <li>ぽむ</li>
              <li>MitarashiDango</li>
              <li>Dennis Cassidy</li>
              <li>no</li>
              <li>Clworld</li>
              <li>Testing</li>
              <li>Kerim</li>
              <li>syumari</li>
              <li>Daniele Segoloni</li>
              <li>Chris</li>
              <li>itsumonotakumi</li>
              <li>Cathal Garvey</li>
              <li>osapon</li>
              <li>Terry Elliott</li>
              <li>Xavier B.</li>
              <li>Stuart Hicks</li>
              <li>Eldan Goldenberg</li>
              <li>Sadiq Saif</li>
              <li>Túlio Albuquerque</li>
              <li>Matti Lattunen</li>
              <li>David Laietta</li>
              <li>tuxayo</li>
              <li>Lily Sahiful B</li>
              <li>Alexander Thompson</li>
              <li>Markus Schmidt</li>
              <li>Lertsenem</li>
              <li>Shayne Power</li>
              <li>Michael</li>
              <li>Tom Kenny</li>
              <li>Kazusa Okuda</li>
              <li>German Martinez Maldonado</li>
              <li>Dan Munro</li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    </div>

    <div className='final-cta'>
      <div className='container'>
        <p>Every little bit helps, and we appreciate all contributions.</p>
        <a href='https://patreon.com/mastodon' className='cta button alt'>Become a sponsor</a>
      </div>
    </div>
  </div>
);

export default Sponsorship;
