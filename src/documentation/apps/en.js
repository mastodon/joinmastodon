// Only list apps and tools that work with every (up-to-date) instance. Mobile apps should provide at least an installable package. Please keep this order: Stable FOSS (title **bold**) > unstable FOSS *(alpha/beta/experimental)* > proprietary/non-FOSS (if your app is FOSS, please provide the source and move it to the FOSS section). Further everything alphabetically (but mobile clients on top, cause that is what most people are looking for).

import React from 'react';
import Navigation from '../../Navigation';

const Apps = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>List of apps</h1>
    </div>
    <div className='article article--text'>
      <p>Some people have started working on apps for the Mastodon API. Here is a list of them:</p>
      <h2>Mobile clients</h2>
      <h3>Android</h3>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/jeroensmeets/mastodon-app/blob/master/README.md'>11t</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=com.jeroensmeets.mastodon'>Play Store</a>)</td>
            <td><a href='https://github.com/jeroensmeets/mastodon-app'>https://github.com/jeroensmeets/mastodon-app</a></td>
            <td><a href='https://mastodon.social/users/jeroensmeets'>@jeroensmeets@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='http://andstatus.org/'>AndStatus</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=org.andstatus.app'>Play</a>/<a href='https://f-droid.org/repository/browse/?fdid=org.andstatus.app'>F‑Droid</a>)</td>
            <td><a href='https://github.com/andstatus/andstatus'>https://github.com/andstatus/andstatus</a></td>
            <td><a href='https://mastodon.social/@AndStatus'>@AndStatus@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/stom79/mastalab/blob/master/README.md'>Mastalab</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=fr.gouv.etalab.mastodon'>Play</a>/<a href='https://f-droid.org/packages/fr.gouv.etalab.mastodon/'>F‑Droid</a>)</td>
            <td><a href='https://github.com/stom79/mastalab'>https://github.com/stom79/mastalab</a></td>
            <td><a href='https://mastodon.social/@tom79'>@tom79@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/tateisu/SubwayTooter/blob/master/README.md'>Subway Tooter</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter'>Play Store</a>)</td>
            <td><a href='https://github.com/tateisu/SubwayTooter'>https://github.com/tateisu/SubwayTooter</a></td>
            <td><a href='https://mastodon.juggler.jp/@tateisu'>@tateisu@mastodon.juggler.jp</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/Vavassor/Tusky/blob/master/README.md'>Tusky</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=com.keylesspalace.tusky&amp;hl=nl'>Play</a>/<a href='https://f-droid.org/repository/browse/?fdcategory=Internet&amp;fdid=com.keylesspalace.tusky&amp;fdpage=3&amp;fdstyle=grid'>F‑Droid</a>)</td>
            <td><a href='https://github.com/Vavassor/Tusky'>https://github.com/Vavassor/Tusky</a></td>
            <td><a href='https://mastodon.social/users/ConnyDuck'>@ConnyDuck@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/TwidereProject/Twidere-Android/blob/master/README.md'>Twidere</a></strong><br />(<a href='https://play.google.com/store/apps/details?id=org.mariotaku.twidere'>Play</a>/<a href='https://f-droid.org/packages/org.mariotaku.twidere/'>F‑Droid</a>)</td>
            <td><a href='https://github.com/TwidereProject/Twidere-Android'>https://github.com/TwidereProject/Twidere-Android</a></td>
            <td><a href='https://pawoo.net/@mariotaku'>@mariotaku@pawoo.net</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/deguchi/mastobone/blob/master/README.md'>Mastobone</a><br />(<a href='https://play.google.com/store/apps/details?id=com.mastobone'>Play Store</a>) <em>(alpha)</em></td>
            <td><a href='https://github.com/deguchi/mastobone'>https://github.com/deguchi/mastobone</a></td>
            <td><a href='https://bookn.me/@deguchi'>@deguchi@bookn.me</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/cerisara/mousetodon/blob/master/README.md'>MouseApp</a><br />(<a href='https://f-droid.org/packages/fr.xtof54.mousetodon/'>F‑Droid</a>) <em>(beta)</em></td>
            <td><a href='https://github.com/cerisara/mousetodon'>https://github.com/cerisara/mousetodon</a></td>
            <td><a href='https://mastodon.etalab.gouv.fr/@cerisara'>@cerisara@mastodon.etalab.gouv.fr</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/eggplantPrince/tootyFruity/blob/master/README.md'>TootyFruity</a><br />(<a href='https://play.google.com/store/apps/details?id=ch.kevinegli.tootyfruity221258'>Play Store</a>) <em>(beta)</em></td>
            <td><a href='https://github.com/eggplantPrince/tootyFruity'>https://github.com/eggplantPrince/tootyFruity</a></td>
            <td><a href='https://mastodon.social/users/eggplant'>@eggplant@mastodon.social</a></td>
          </tr>
          <tr>
            <td>dndkodon<br />(<a href='https://play.google.com/store/apps/details?id=jp.coe.dndkodon'>Play Store</a>)</td>
            <td>N/A</td>
            <td>Tsuyoshi Hyuga</td>
          </tr>
          <tr>
            <td>Cosian<br />(<a href='https://play.google.com/store/apps/details?id=com.yatsuhashi.crims0n'>Play Store</a>)</td>
            <td>N/A</td>
            <td>083</td>
          </tr>
          <tr>
            <td>MastoPane<br />(<a href='https://play.google.com/store/apps/details?id=com.mastopane'>Play Store</a>)</td>
            <td>N/A</td>
            <td>Panecraft</td>
          </tr>
          <tr>
            <td>mastty<br />(<a href='https://play.google.com/store/apps/details?id=com.sasaneko.mastodon'>Play Store</a>)</td>
            <td>N/A</td>
            <td>White Cat Factory</td>
          </tr>
          <tr>
            <td><a href='https://pawoo.net/about'>Pawoo</a><br />(<a href='https://play.google.com/store/apps/details?id=jp.pxv.pawoo'>Play Store</a>)</td>
            <td>N/A</td>
            <td><a href='https://pawoo.net/users/pixiv'>@pixiv@pawoo.net</a></td>
          </tr>
          <tr>
            <td>Stegodon<br />(<a href='https://play.google.com/store/apps/details?id=com.gilawhost.stegolophodon'>Play Store</a>)</td>
            <td>N/A</td>
            <td><a href='https://mastodon.cloud/@Gilaw'>@GilaW@mastodon.cloud</a></td>
          </tr>
          <tr>
            <td>Tootaloo<br />(<a href='https://play.google.com/store/apps/details?id=net.liverworks.tootalooa'>Play Store</a>)</td>
            <td>N/A</td>
            <td><a href='http://liverworks.net/'>liverworks.net</a></td>
          </tr>
          <tr>
            <td>Tootdon<br />(<a href='https://play.google.com/store/apps/details?id=club.tootdon.app'>Play Store</a>)</td>
            <td>N/A/</td>
            <td><a href='https://mstdn.jp/@tootdon'>@tootdon@mstdn.jp</a></td>
          </tr>
          <tr>
            <td>Troutoss<br />(<a href='https://play.google.com/store/apps/details?id=jp.gr.java_conf.miwax.troutoss'>Play Store</a>)</td>
            <td>N/A</td>
            <td><a href='https://mstdn.jp/@tomoya0x00'>@tomoya0x00@mstdn.jp</a></td>
          </tr>
        </tbody>
      </table>
      <h3>iOS</h3>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/jeroensmeets/mastodon-app/blob/master/README.md'>11t</a></strong><br />(<a href='https://itunes.apple.com/nl/app/11t-for-mastodon/id1180628189'>iTunes</a>)</td>
            <td><a href='https://github.com/jeroensmeets/mastodon-app'>https://github.com/jeroensmeets/mastodon-app</a></td>
            <td><a href='https://mastodon.social/users/jeroensmeets'>@jeroensmeets@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/ReticentJohn/Amaroq/blob/master/README.md'>Amaroq</a></strong><br />(<a href='https://itunes.apple.com/us/app/amarok-for-mastodon/id1214116200?ls=1&amp;mt=8'>iTunes</a>)</td>
            <td><a href='https://github.com/ReticentJohn/Amaroq'>https://github.com/ReticentJohn/Amaroq</a></td>
            <td><a href='https://mastodon.social/users/eurasierboy'>@eurasierboy@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://cinderella-project.github.io/iMast/'>iMast</a></strong><br />(<a href='https://itunes.apple.com/jp/app/imast/id1229461703'>iTunes</a>)</td>
            <td><a href='https://github.com/cinderella-project/iMast'>https://github.com/cinderella-project/iMast</a></td>
            <td><a href='https://imastodon.net/@imast_ios'>@imast_ios@imastodon.net</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/eggplantPrince/tootyFruity/blob/master/README.md'>TootyFruity</a><br />(<a href='https://docs.google.com/forms/d/e/1FAIpQLScW2lvZaKrOm4AKJH5HLI_Ul0Yr3CsXulf5bcTJQ1xaN5jiPg/viewform?c=0&amp;w=1'>iTunes</a>) <em>(beta)</em></td>
            <td><a href='https://github.com/eggplantPrince/tootyFruity'>https://github.com/eggplantPrince/tootyFruity</a></td>
            <td><a href='https://mastodon.social/users/eggplant'>@eggplant@mastodon.social</a></td>
          </tr>
          <tr>
            <td>Mustor<br />(<a href='https://itunes.apple.com/us/app/mustor/id1229531204?l=zh&amp;ls=1&amp;mt=8'>iTunes</a>)</td>
            <td>N/A</td>
            <td><a href='https://mastodon.cloud/@darkcl'>@darkcl@mastodon.cloud</a></td>
          </tr>
          <tr>
            <td><a href='https://pawoo.net/about'>Pawoo</a><br />(<a href='https://itunes.apple.com/us/app/pawoo/id1229070679'>iTunes</a>)</td>
            <td>N/A</td>
            <td><a href='https://pawoo.net/users/pixiv'>@pixiv@pawoo.net</a></td>
          </tr>
          <tr>
            <td>friends.nico<br />(<a href='https://itunes.apple.com/us/app/friends-nico/id1230158182'>iTunes</a>)</td>
            <td>N/A</td>
            <td><a href='https://friends.nico/@friends_nico'>@friends_nico@friends.nico</a></td>
          </tr>
          <tr>
            <td>Tootdon<br />(<a href='https://itunes.apple.com/us/app/tootdon-for-mastodon/id1282283934'>iTunes</a>)</td>
            <td>N/A/</td>
            <td><a href='https://mstdn.jp/@tootdon'>@tootdon@mstdn.jp</a></td>
          </tr>
          <tr>
            <td>Tootter<br />(<a href='https://itunes.apple.com/us/app/id1229555793'>iTunes</a>)</td>
            <td>N/A</td>
            <td><a href='https://mstdn.jp/@Tootter_for_Mastodon'>@Tootter_for_Mastodon@mstdn.jp</a></td>
          </tr>
        </tbody>
      </table>
      <h2>Alternative web apps</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://halcyon.social'>Halcyon</a></strong></td>
            <td><a href='https://github.com/halcyon-suite/halcyon'>https://github.com/halcyon-suite/halcyon</a></td>
            <td><a href='https://mastodon.social/@halcyon'>@halcyon@mastodon.social</a></td>
          </tr>
          <tr>
            <td><a href='https://naumanni.com/'>Naumanni</a> <em>(alpha)</em></td>
            <td><a href='https://github.com/naumanni/naumanni'>https://github.com/naumanni/naumanni</a></td>
            <td><a href='https://mstdn.onosendai.jp/@shi3z'>@shi3z@mstdn.onosendai.jp</a>/<a href='https://oppai.tokyo/@shn'>@shn@oppai.tokyo</a></td>
          </tr>
        </tbody>
      </table>
      <h2>Desktop clients</h2>
      <h3>Linux</h3>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/rhysd/Mstdn/blob/master/README.md'>Mstdn</a></strong></td>
            <td><a href='https://github.com/rhysd/Mstdn'>https://github.com/rhysd/Mstdn</a></td>
            <td><a href='https://mstdn.jp/@Linda_pp'>@Linda_pp@mstdn.jp</a>/<a href='https://mastodon.social/@inudog'>@inudog@mastodon.social</a></td>
          </tr>
        </tbody>
      </table>
        <h3>Mac</h3>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/rhysd/Mstdn/blob/master/README.md'>Mstdn</a></strong></td>
            <td><a href='https://github.com/rhysd/Mstdn'>https://github.com/rhysd/Mstdn</a></td>
            <td><a href='https://mstdn.jp/@Linda_pp'>@Linda_pp@mstdn.jp</a>/<a href='https://mastodon.social/@inudog'>@inudog@mastodon.social</a></td>
          </tr>
        </tbody>
      </table>
        <h3>Windows</h3>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Version</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://coolstar.org/capella'>Capella</a></strong></td>
            <td>7, 8.1, 10</td>
            <td><a href='https://github.com/coolstar/Capella'>https://github.com/coolstar/Capella</a></td>
            <td><a href='https://mastodon.social/users/coolstar'>@coolstar@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://www.microsoft.com/store/apps/9wzdncrcrpmn'>Flantter</a></strong></td>
            <td>10</td>
            <td><a href='https://github.com/cucmberium/Flantter.MilkyWay'>https://github.com/cucmberium/Flantter.MilkyWay</a></td>
            <td><a href='https://mstdn.maud.io/@cucmberium'>@cucmberium@mstdn.maud.io</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/rhysd/Mstdn/blob/master/README.md'>Mstdn</a></strong></td>
            <td>8.1 (confirmed)</td>
            <td><a href='https://github.com/rhysd/Mstdn'>https://github.com/rhysd/Mstdn</a></td>
            <td><a href='https://mstdn.jp/@Linda_pp'>@Linda_pp@mstdn.jp</a>/<a href='https://mastodon.social/@inudog'>@inudog@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://www.microsoft.com/store/apps/9nh0493n4tsb'>Tuuto</a></strong></td>
            <td>10</td>
            <td><a href='https://github.com/Tlaster/Tuuto'>https://github.com/Tlaster/Tuuto</a></td>
            <td><a href='https://mstdn.jp/@Tlaster'>@Tlaster@mstdn.jp</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/drasticactions/WinMasto/blob/master/README.md'>WinMasto</a></strong></td>
            <td>10</td>
            <td><a href='https://github.com/drasticactions/WinMasto'>https://github.com/drasticactions/WinMasto</a></td>
            <td><a href='https://mastodon.network/users/drasticactions'>@drasticactions@mastodon.network</a></td>
          </tr>
          <tr>
            <td><a href='https://rink.hockeyapp.net/apps/5199eba8bc914c4ab416aa8513d62826'>Mastodon UWP</a> <em>(beta)</em></td>
            <td>10</td>
            <td><a href='https://github.com/woachk/mastodon'>https://github.com/woachk/mastodon</a></td>
            <td><a href='https://mastodon.social/users/my123'>@my123@mastodon.social</a></td>
          </tr>
        </tbody>
      </table>
        <h2>Other clients</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Platform</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/kensanata/bitlbee-mastodon#mastodon-plugin-for-bitlbee'>bitlbee-mastodon</a></strong></td>
            <td>IRC</td>
            <td><a href='https://github.com/kensanata/bitlbee-mastodon'>https://github.com/kensanata/bitlbee-mastodon</a></td>
            <td><a href='https://alexschroeder.ch/wiki/Contact'>Alex Schroeder</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/McKael/madonctl/blob/master/README.md'>madonctl</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/McKael/madonctl'>https://github.com/McKael/madonctl</a></td>
            <td><a href='https://mamot.fr/@McKael'>@McKael@mamot.fr</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/jdenen/mastodon.el/blob/master/README.org'>mastodon.el</a></strong></td>
            <td>Emacs</td>
            <td><a href='https://github.com/jdenen/mastodon.el'>https://github.com/jdenen/mastodon.el</a></td>
            <td><a href='https://mastodon.social/users/johnson'>@johnson@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/mattn/go-mastodon/blob/master/README.md'>Mstdn (Mastodon CLI)</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/mattn/go-mastodon'>https://github.com/mattn/go-mastodon</a></td>
            <td><a href='https://mstdn.jp/@mattn'>@mattn@mstdn.jp</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/ihabunek/toot/blob/master/README.rst'>toot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/ihabunek/toot'>https://github.com/ihabunek/toot</a></td>
            <td><a href='https://mastodon.social/users/ihabunek'>@ihabunek@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/magicalraccoon/tootstream/blob/develop/README.md'>tootstream</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/magicalraccoon/tootstream'>https://github.com/magicalraccoon/tootstream</a></td>
            <td><a href='https://mastodon.social/users/Raccoon'>@Raccoon@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://gitlab.com/IvanSanchez/soclial/blob/master/README.md'>soCLIal</a></strong></td>
            <td>CLI</td>
            <td><a href='https://gitlab.com/IvanSanchez/soclial'>https://gitlab.com/IvanSanchez/soclial</a></td>
            <td><a href='https://mastodon.social/@IvanSanchez'>@IvanSanchez@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://openrepos.net/content/dysko/tooter'>Tooter</a></strong></td>
            <td>SailfishOS</td>
            <td><a href='https://github.com/dysk0/harbour-tooter'>https://github.com/dysk0/harbour-tooter</a></td>
            <td><a href='https://mastodon.social/@dysko'>@disko@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/mattn/vim-mastodon/blob/master/README.md'>vim-mastodon</a></strong></td>
            <td>Vim</td>
            <td><a href='https://github.com/mattn/vim-mastodon'>https://github.com/mattn/vim-mastodon</a></td>
            <td><a href='https://mstdn.jp/@mattn'>@mattn@mstdn.jp</a></td>
          </tr>
        </tbody>
      </table>
        <h2>Browser add-ons/extensions</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Browser</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://gitlab.com/pmorinerie/birdsite/blob/master/README.md'>BirdSite</a></strong></td>
            <td><a href='https://chrome.google.com/webstore/detail/birdsite/lfmfhaopllgidldpmifdcjdckdggdjaj'>Chrome(ium)</a>/<a href='https://addons.mozilla.org/fr/firefox/addon/birdsite/'>Firefox</a></td>
            <td><a href='https://gitlab.com/pmorinerie/birdsite/'>https://gitlab.com/pmorinerie/birdsite/</a></td>
            <td><a href='https://mastodon.xyz/users/pmorinerie'>@pmorinerie@mastodon.xyz</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/noraworld/fastoot/blob/master/README.md'>Fastoot</a></strong></td>
            <td><a href='https://chrome.google.com/webstore/detail/fastoot/hnmnnhfeigiogjagmmpnhelpnhnchaoj'>Chrome(ium)</a></td>
            <td><a href='https://github.com/noraworld/fastoot'>https://github.com/noraworld/fastoot</a></td>
            <td><a href='https://mastodon.noraworld.jp/users/noraworld'>@noraworld@mastodon.noraworld.jp</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/arthurlacoste/mastodon-lang-remover/blob/master/README.md'>Mastodon Lang Remover</a></strong></td>
            <td><a href='https://github.com/arthurlacoste/mastodon-lang-remover#install'>Chrome(ium)/Firefox</a></td>
            <td><a href='https://github.com/arthurlacoste/mastodon-lang-remover'>https://github.com/arthurlacoste/mastodon-lang-remover</a></td>
            <td><a href='https://mastodon.social/users/arthak'>@arthak@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/kernox/Mastodon-Share/blob/master/README.md'>Mastodon Share</a></strong></td>
            <td><a href='https://addons.mozilla.org/nl/firefox/addon/mastodon-share/'>Firefox</a></td>
            <td><a href='https://github.com/kernox/Mastoshare'>https://github.com/kernox/Mastoshare</a></td>
            <td><a href='https://framapiaf.org/@Hellexis'>@Hellexis@framapiaf.org</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/ttrace/oxpecker/blob/master/README.md'>oxpecker</a></strong></td>
            <td>Chrome(ium)/Firefox</td>
            <td><a href='https://github.com/ttrace/oxpecker'>https://github.com/ttrace/oxpecker</a></td>
            <td><a href='https://ostatus.taiyolab.com/@t_trace'>@t_trace@ostatus.taiyolab.com</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/ineffyble/tooter/blob/master/README.md'>Tooter</a></strong></td>
            <td><a href='https://chrome.google.com/webstore/detail/tooter/okmlpjijminjkikninbkcnfmhkofgnnk'>Chrome(ium)</a>/<a href='https://addons.mozilla.org/nl/firefox/addon/tooter/'>Firefox</a></td>
            <td><a href='https://github.com/ineffyble/tooter'>https://github.com/ineffyble/tooter</a></td>
            <td><a href='https://mastodon.social/users/effy'>@effy@mastodon.social</a></td>
          </tr>
        </tbody>
      </table>
        <h2>Bridges from/to other platforms</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Platform</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://wordpress.org/plugins/autopost-to-mastodon/'>Autopost to Mastodon</a></strong></td>
            <td>Wordpress plugin</td>
            <td><a href='https://github.com/L1am0/mastodon_wordpress_autopost'>https://github.com/L1am0/mastodon_wordpress_autopost</a></td>
            <td><a href='http://l1am0.eu/'>L1am0</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/halcy/MastodonToTwitter/blob/master/README.md'>MastodonToTwitter</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/halcy/MastodonToTwitter'>https://github.com/halcy/MastodonToTwitter</a></td>
            <td><a href='https://mastodon.social/@halcy'>@halcy@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://gitlab.com/mojo42/retoot/blob/master/README.md'>Retoot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://gitlab.com/mojo42/retoot'>https://gitlab.com/mojo42/retoot</a></td>
            <td><a href='https://apoil.org/users/mojo'>@Mojo@apoil.org</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://crossposter.masto.donte.com.br'>Mastodon Twitter Poster</a></strong></td>
            <td>Service</td>
            <td><a href='https://github.com/renatolond/mastodon-twitter-poster'>https://github.com/renatolond/mastodon-twitter-poster</a></td>
            <td><a href='https://masto.donte.com.br/@renatolond'>@renatolond@masto.donte.com.br</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/blind-coder/rsstootalizer/blob/master/README.md'>RSSTootalizer</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/blind-coder/rsstootalizer'>https://github.com/blind-coder/rsstootalizer</a></td>
            <td><a href='https://toot.berlin/users/blindcoder'>@blindcoder@toot.berlin</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/Psycojoker/t2m/blob/master/README.md'>t2m – Twitter 2 Mastodon</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/Psycojoker/t2m'>https://github.com/Psycojoker/t2m</a></td>
            <td>Psycojoker</td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/Ulrar/umrc/blob/master/README.md'>umrc</a></strong></td>
            <td>IRC</td>
            <td><a href='https://github.com/Ulrar/umrc'>https://github.com/Ulrar/umrc</a></td>
            <td><a href='https://mastodon.ulrar.net/users/lemonnierk'>@lemonnierk@ulrar.net</a></td>
          </tr>
          <tr>
            <td><strong><a href='http://mastodon.tools/wordpress/'>WordPress</a></strong></td>
            <td>WordPress plugin</td>
            <td><a href='https://github.com/DavidLibeau/mastodon-tools/tree/master/wordpress'>https://github.com/DavidLibeau/mastodon-tools/tree/master/wordpress</a></td>
            <td><a href='https://mastodon.xyz/@David'>@David@mastodon.xyz</a></td>
          </tr>
          <tr>
            <td><a href='http://mastodon.tools/ogp-share/'>ogp-share</a> <em>(beta)</em></td>
            <td>Web browser</td>
            <td><a href='https://github.com/DavidLibeau/mastodon-tools/tree/master/ogp-share'>https://github.com/DavidLibeau/mastodon-tools/tree/master/ogp-share</a></td>
            <td><a href='https://mastodon.xyz/@David'>@David@mastodon.xyz</a></td>
          </tr>
        </tbody>
      </table>
        <h2>Bots</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Platform</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='https://github.com/algernon/fluffy-broccoli/blob/master/README.md'>Fluffy Broccoli</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/algernon/fluffy-broccoli'>https://github.com/algernon/fluffy-broccoli</a></td>
            <td><a href='https://trunk.mad-scientist.club/@algernon'>@algernon@trunk.mad-scientist.club</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/raymestalez/mastodon-hnbot/blob/master/README.md'>HackerNewsBot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/raymestalez/mastodon-hnbot'>https://github.com/raymestalez/mastodon-hnbot</a></td>
            <td><a href='https://hackertribe.io/users/rayalez'>@rayalez@hackertribe.io</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/ZerataX/mastodon-img-bot/blob/master/README.MD'>Mastodon Image Bot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/ZerataX/mastodon-img-bot'>https://github.com/ZerataX/mastodon-img-bot</a></td>
            <td><a href='https://pawoo.net/@peterspark'>@peterspark@pawoo.net</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/M-D-M/simpleMastodonBot/blob/master/README.md'>simpleMastodonBot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/M-D-M/simpleMastodonBot'>https://github.com/M-D-M/simpleMastodonBot</a></td>
            <td><a href='https://github.com/M-D-M'>M-D-M</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/polymerwitch/SupportBot/blob/master/README.md'>SupportBot</a></strong></td>
            <td>CLI</td>
            <td><a href='https://github.com/polymerwitch/SupportBot'>https://github.com/polymerwitch/SupportBot</a></td>
            <td><a href='https://toot.cat/@polymerwitch'>@polymerwitch@toot.cat</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/michelbl/mastodon-glossary-bot/blob/master/README.md'>mastodon-glossary-bot</a> <em>(experimental)</em></td>
            <td>CLI or Heroku</td>
            <td><a href='https://github.com/michelbl/mastodon-glossary-bot'>https://github.com/michelbl/mastodon-glossary-bot</a></td>
            <td><a href='https://mastodon.etalab.gouv.fr/@Michel'>@Michel@mastodon.etalab.gouv.fr</a></td>
          </tr>
        </tbody>
      </table>
      <h2>Other tools</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Platform</th>
            <th>Source code</th>
            <th>Developer(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong><a href='http://mastodon.tools/contest-draw/'>Contest-draw</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/DavidLibeau/mastodon-tools/tree/master/contest-draw'>https://github.com/DavidLibeau/mastodon-tools/tree/master/contest-draw</a></td>
            <td><a href='https://mastodon.xyz/@David'>@David@mastodon.xyz</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://github.com/koyuawsmbrtn/mastoshare/blob/master/README.md'>Mastoshare</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/koyuawsmbrtn/mastoshare'>https://github.com/koyuawsmbrtn/mastoshare</a></td>
            <td><a href='https://mastodon.social/@koyuawsmbrtn'>@koyuawsmbrtn@mastodon.social</a></td>
          </tr>
          <tr>
            <td><strong><a href='http://mastodon.tools/wall/'>wall</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/DavidLibeau/mastodon-tools/tree/master/wall'>https://github.com/DavidLibeau/mastodon-tools/tree/master/wall</a></td>
            <td><a href='https://mastodon.xyz/@David'>@David@mastodon.xyz</a></td>
          </tr>
          <tr>
            <td><a href='http://mastodon.tools/scheduler/'>Scheduler</a> <em>(beta)</em></td>
            <td>Web browser</td>
            <td><a href='https://github.com/DavidLibeau/mastodon-scheduler'>https://github.com/DavidLibeau/mastodon-scheduler</a></td>
            <td><a href='https://mastodon.xyz/@David'>@David@mastodon.xyz</a></td>
          </tr>
          <tr>
            <td><strong><a href='https://tootmap.net/'>Tootmap</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/wakin-/Tootmap'>https://github.com/wakin-/Tootmap</a></td>
            <td><a href='https://biwakodon.com/@wakin'>@wakin@biwakodon.com</a></td>
          </tr>
          <tr>
            <td><strong><a href='http://vinayaka.distsn.org/'>Mastodon User Matching</a></strong></td>
            <td>Web browser</td>
            <td><a href='https://github.com/distsn/vinayaka'>https://github.com/distsn/vinayaka</a></td>
            <td><a href='https://2.distsn.org/@hakabahitoyo'>@hakabahitoyo@2.distsn.org</a></td>
          </tr>
          <tr>
            <td><a href='https://github.com/kensanata/mastodon-backup#mastodon-archive'>mastodon-archive</a></td>
            <td>CLI</td>
            <td><a href='https://github.com/kensanata/mastodon-backup#mastodon-archive'>https://github.com/kensanata/mastodon-backup#mastodon-archive</a></td>
            <td><a href='https://alexschroeder.ch/wiki/Contact'>Alex Schroeder</a></td>
          </tr>
        </tbody>
      </table>
      <footer>
        <p>If you have a project like this, make a PR to add it to the list!</p>
      </footer>
    </div>
  </div>
);

export default Apps;
