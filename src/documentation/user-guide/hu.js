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
      <h1>Mastodon felhasználói kézikönyv</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='table-of-contents'>Table of Contents</LinkableH2>
      <ol>
        <li>
          <a href='#intro'>Bevezetés</a>
          <ol>
            <li><a href='#decentralization-and-federation'>Decentralizáció és federáció</a></li>
          </ol>
        </li>
        <li>
          <a href='#getting-started'>Első lépések</a>
          <ol>
            <li><a href='#setting-up-your-profile'>Profilod létrehozása</a></li>
            <li><a href='#e-mail-notifications'>E-mail értesítések</a></li>
            <li>
              <a href='#text-posts'>Szöveges üzenetek</a>
              <ol>
                <li><a href='#content-warnings'>Content Warnings - Figyelmeztetés szenzitív tartalmakra</a></li>
                <li><a href='#hashtags'>Címkék</a></li>
                <li><a href='#boosts-and-favourites'>Reblogolás és kedvencekhez adás</a></li>
              </ol>
            </li>
            <li><a href='#posting-images'>Képek tülkölése</a></li>
            <li><a href='#following-other-users'>Más felhasználók követése</a></li>
            <li><a href='#notifications'>Értesítések</a></li>
            <li><a href='#mobile-apps'>Mobilalkalmazások</a></li>
            <li><a href='#the-federated-timeline'>A Nyilvános időfolyam</a></li>
            <li><a href='#the-local-timeline'>A Helyi időfolyam</a></li>
            <li><a href='#searching'>Keresés</a></li>
          </ol>
        </li>
        <li>
          <a href='#privacy-safety-and-security'>Adatvédelem és adatbiztonság</a>
          <ol>
            <li><a href='#two-factor-authentication'>Kétlépcsős azonosítás</a></li>
            <li><a href='#account-privacy'>Fiókod adatvédelme</a></li>
            <li><a href='#toot-privacy'>Tülk adatvédelem</a></li>
            <li><a href='#blocking'>Felhasználók blokkolása</a></li>
            <li><a href='#reporting-toots-or-users'>Tülkök vagy felhasználók jelentése</a></li>
          </ol>
        </li>
      </ol>
      <LinkableH2 id='intro'>Bevezetés</LinkableH2>
      <p>A Mastodon egy, az OStatus protokollon alapuló közösségi alkalmazás. Működésében nagyban emlékeztet más közösségi alkalmazásokra – főképp a Twitterre –, egy jelentős különbséget azonban meg kell említenünk: a Mastodon nyílt forráskódú alkalmazás, bárki működtethet saját Mastodon-szervert (ezeket „<i>instanciának</i>” is nevezzük) és bármely szerver regisztrált felhasználói szabadon kapcsolatba léphetnek más szerverek felhasználóival (ezt nevezzük „<i>federációnak</i>”). Ezek révén válik lehetségessé, hogy kisebb közösségek saját szervert üzemeltessenek, amit a közösségen belüli kapcsolattartásra használnak; ugyanakkor más közösségekkel is kapcsolatba tudnak lépni.</p>
      <LinkableH3 id='decentralization-and-federation'>Decentralizáció és federáció</LinkableH3>
      <div className='article--text__float-container'>
        <img src={mastofed} style={{ float: 'right', maxWidth: '47%' }} alt='Simple illustration about decentralization and federation' />
        <p>A Mastodon egy „<i>federációnak</i>” nevezett koncepció alapján decentralizált (központosítatlan) rendszer: ahelyett, hogy egy személyre vagy szervezetre bízná a futtatásához szükséges infrastruktúra üzemeltetését, inkább bárki számára lehetővé teszi, hogy letöltse és futtassa az alkalmazást és saját szervert üzemeltessen. A federáció révén az egyes Mastodon-szerverek gond nélkül kapcsolatba tudnak lépni egymással, hasonlóan például az e-mailhez.</p>
        <p>A fentiekből adódóan bárki beszerezheti a Mastodont és üzemeltethet saját szervert például egy kisebb közösség számára, azonban így is lehetséges, hogy az egyes szerverek regisztrált felhasználói kövessék és olvassák más szerverek felhasználóinak üzeneteit, illetve üzenetet küldjenek számukra (ugyanez igaz más OStatus-alapú szolgáltatások szervereire is, mint például a GNU Social vagy a postActiv). Ez nemcsak azt jelenti, hogy a felhasználói adatokat nem egy, az adatok hirdetők felé történő értékesítésében érdekelt vállalat birtokolja, de azt is, hogy ha egy bizonyos szerver megszűnne, a felhasználók egyszerűen indíthatnak egy újat, vagy átmigrálhatják profiljukat egy másik instanciára, ahelyett, hogy adataik végleg elvesznének.</p>
        <p>Egy adott Mastodon-instancián belül a felhasználónevek <code>@felhasználónév</code> formában jelennek meg (csakúgy, mint a Twitteren). A más szerveren regisztrált felhasználókat a <code>@felhasználónév@szervernév.tld</code> formában tudjuk keresni és követni - tehát a <code>@gargron</code> nevű felhasználót a <code>mastodon.social</code> szerveren más instanciákról a <code>@gargron@mastodon.social</code> formában érhetjük el.</p>
        <p>A más szerver felhasználóinak üzenetei a „<i>federáció</i>” révén jelennek meg egy adott szerveren - például ha <code>user1@mastodon1</code> felhasználó követi <code>user2@gnusocial2</code> felhasználót, abban az esetben <code>user2@gnusocial2</code> üzenetei megjelennek <code>user1@mastodon1</code> <i>Kezdőlapján</i> (Home Feed) és a <code>mastodon1</code> szerver <i>Publikus időfolyamában</i> (Public Timeline). A Mastodon-szerverek adminisztrátorainak van erre a folyamatra némi ráhatásuk és letilthatják bizonyos felhasználók üzeneteinek megjelenését a Publikus időfolyamról. Hasonlóképp a felhasználók adatvédelmi beállításai is kihatnak a federációra - ezzel kapcsolatban lásd a <a href='#toot-privacy'>Tülk adatvédelem</a> fejezetet.</p>
      </div>
      <LinkableH2 id='getting-started'>Első lépések</LinkableH2>
      <LinkableH3 id='setting-up-your-profile'>Profilod létrehozása</LinkableH3>
      <p>Több módon is egyedivé teheted Mastodon-profilodat - beállíthatsz egyedi „Megjelenített nevet” (Display Name), Profil- és Fejlécképet (Avatar és Header) tölthetsz fel és írhatsz egy rövid „Önéletrajzot” (Bio) is magadról.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        Profilod szerkesztéséhez kattints a Beállítások ikonra a bal oldali oszlopban és a megjelenő Beállítások oldalon válaszd a „Profil szerkesztése” (Edit Profile) menüpontot. A Megjelenített név 30 karakterben van maximálva, míg az Őnéletrajz maximum 160 karakter hosszú lehet. A Profilkép és a Fejléckép megengedett formátumai a png, a gif és a jpg, a megengedett maximális fájlméret pedig 2 MB. A feltöltött képeket a rendszer automatikusan átméretezi: a Profilkép mérete 200×200 pixel, a Fejlécképé pedig 700×335 pixel lesz.
      </p>
      <LinkableH3 id='e-mail-notifications'>E-mail értesítések</LinkableH3>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        Ha kéred, a Mastodon e-mailben értesít téged bizonyos történésekről. Az értesítések beállításához kattints a Beállítások ikonra a bal oldali oszlopban és a megjelenő oldalon válaszd a „Beállítások” (Preferences) menüpontot. Itt találod az e-mail értesítések listáját, ahol jelölheted az általad kívánt opciókat.
      </p>
      <LinkableH3 id='text-posts'>Szöveges üzenetek</LinkableH3>
      <p>A szöveges üzenet (más néven <i>Tülk</i>, angolul <i>Toot</i>, az <a href='https://the.wired.sehol.se'>első magyar instancián</a> elterjedt szlengben <i>Röffentés</i>) a Mastodonon történő interakció legalapvetőbb formája. <i>Tülköléshez</i> egyszerűen írd be üzeneted a baloldali oszlop „Mire gondolsz?” (What is on your mind?) mezőjébe és kattints a „TÜLK!” (TOOT) gombra. A tülkök maximum 500 karakter hosszúak lehetnek; amennyiben ennél hosszabbat szeretnél tülkölni, válaszolhatsz saját tülködre, így tülkjeid beszélgetés formájában (egy láncban) jelennek meg.</p>
      <p>Ha más felhasználók tülkjeire szeretnél válaszolni, kattints a tülk alatti „Válasz” (Reply) ikonra. Ezzel automatikusan beemeled felhasználónevüket a beviteli mezőbe (a megválaszolni kívánt tülk előnézetével együtt), és az adott felhasználó is értesítést kap arról, hogy válaszoltál neki.</p>
      <p>Ugyanígy, ha beszélgetést kezdeményeznél egy felhasználóval, egyszerűen foglald bele felhasználónevét a tülködbe. Mihelyt beírod a @ (kukac) karaktert és (szóköz nélkül) a felhasználónév első betűjét, a Mastodon a bevitt barakterek alapján azonnal megjeleníti javaslatait. Ahogy a válaszok esetében, az adott felhasználó akkor is értesítést kap, ha valaki megemlítette egy tülkben. Ha egy üzenet említéssel (felhasználónévvel) kezdődik, a rendszer válaszként kezeli - ebben az esetben csak azon felhasználók Kezdőlapján jelenik majd meg, akik <i>egyaránt</i> követnek téged <i>és</i> az említett személyt. Az ilyen tülkök azonban – adatvédelmi beállításaidtól függően – láthatóak lehetnek profiloldaladon is..</p>
      <LinkableH4 id='content-warnings'>Content Warnings - Figyelmeztetés szenzitív tartalmakra</LinkableH4>
      <p>Ha olyan tartalmat készülsz tülkölni, amelyet nem szeretnél, hogy azonnal látsszon – például spoilerek egy új filmmel kapcsolatban, vagy olyan gondolatok, amelyeket mások felkavarónak találhatnak –, lehetőséged van azt egy „Figyelmeztetés” (Content Warning) mögé rejteni.</p>
      <div className='article--text__flex'>
        <p>Ehhez a tülk-beviteli mező alatti <img className='user-guide__icon--inline' src={composeCw} alt='CW icon' /> „CW” gombra kell kattintanod. Ez egy újabb, „Content warning” nevű mezőt jelenít meg - ide írhatsz egy rövid, semleges összefoglalást a tülköd tartalmáról, míg a tülk maga a megszokott „Mire gondolsz?” mezőbe kerüljön.</p>
        <img src={contentWarning} style={{ minWidth: '47%' }} alt='animation showing how to enable content warnings' />
      </div>
      <div className='article--text__flex'>
        <p>Ennek eredményeképp a teljes tülk egy „Show More” (Mutass többet) gomb mögé kerül, míg az időfolyamban csak a figyelmeztetés (a Content warning mezőbe írt szöveg) látszik majd:</p>
        <img src={cwToot} style={{ minWidth: '47%' }} alt='animation showing content warnings in the timeline' />
      </div>
      <p><strong>FIGYELEM</strong>, ez a funkció nem rejti el a tülkhöz csatolt képeket - a képek külön jelölhetők „érzékeny tartalomként”; az így jelölt képek csak kattintás után válnak láthatóvá. Erről bővebben a <a href='#posting-images'>Képek tülkölése</a> fejezetben olvashatsz.</p>
      <LinkableH4 id='hashtags'>Címkék</LinkableH4>
      <p>Ha olyan tartalmat tülkölsz, amely egy jobban körülhatárolható témába illeszkedik, érdemes lehet „megcímkézni” azt. Címkét a tülkbe gépelt, #-t (kettős keresztet) követő szóval, vagy kifejezéssel hozhatsz létre, például #bemutatkozás (ennek angol változata, az #introduction kedvelt címke a mastodon.social-instancián, ezt használják az új felhasználók, amikor bemutatkoznak a közösség többi tagjának), vagy #politika (a politikai témájú tülkök esetében). A tülkben lévő címkére kattintva új időfolyam jelenik meg, amely az adott címkével ellátott, publikus tülköket jeleníti meg (ez tulajdonképpen egy gyorskeresés az adott címkére). Ez a funkció lehetővé teszi, hogy az adott téma iránt érdeklődő felhasználó egy különálló időfolyamot hozzon létre a témába vágó tülkök kilistázására. A címkék a tülk-beviteli mező feletti kereső segítségével is lekereshetők.</p>
      <LinkableH4 id='boosts-and-favourites'>Reblogolás és kedvencekhez adás</LinkableH4>
      <p><i>Kedvenceidhez adhatod</i> egy másik felhasználó tülkjét a tülk alatti csillag-ikonra kattintva. A másik felhasználó ilyenkor értesítést kap arról, hogy kedveled a tülkjét; kontextustól függően ez jelentheti egyszerűen azt, hogy „Figyelek arra, amit tülkölsz”, de jelezhet tetszésnyilvánítást, vagy kifejezhet egyfajta egyetértést vagy helyeslést is a tülkben leírt gondolatokkal kapcsolatban.</p>
      <p>A fentiek mellett lehetőséged van <i>reblogolni</i> a tülköket az alattuk található „egymásba futó nyilak” ikonra kattintva. A reblogolt tülkök megjelennek a te profiloldaladon is és a követőid számára is láthatók lesznek, még akkor is, ha ők maguk nem követik azt a felhasználót, akinek tülkjét reblogoltad. Ez a funkció hasznos lehet, ha olyan tülköt látsz, ami szerinted másokat is érdekelhet - a reblog szélesíti az eredeti tülk közönségét, miközben megtartja az eredeti szerző adatait is. </p>
      <LinkableH3 id='posting-images'>Képek tülkölése</LinkableH3>
      <p className='article--text__float-container'>
        {/* eslint-disable jsx-a11y/img-redundant-alt */}
        <img className='user-guide__icon--heading' src={composeMedia} alt='Image icon' />
        {/* eslint-enable jsx-a11y/img-redundant-alt */}
        Képek tülköléséhez kattints a „Média hozzáadása” (Add media) ikonra a baloldali oszlopban a tülk-beviteli mező alatt és válaszd ki a feltölteni kívánt fájlt.
      </p>
      <p>You can also simply drag and drop your image from your desktop into the text box of your Compose column.</p>
      <div className='article--text__center'>
        {/* eslint-disable jsx-a11y/img-redundant-alt */}
        <img src={dragAndDropImage} alt='Image icon' />
        {/* eslint-enable jsx-a11y/img-redundant-alt */}
      </div>
      <p>Ha a képen látható tartalom „érzékeny”, vagy például munkahelyi megtekintésre nem ajánlott, a képet érzékenynek jelölheted az <img className='user-guide__icon--inline' src={composeNsfw} alt='NSFW toggle' /> NSFW (az angol „Not Safe For Work” kifejezésből) gombra kattintva, amely a kép feltöltése után jelenik meg. Ez alapértelmezésként elrejti a képet, aminek a bélyegképe így csak kattintás után jelenik meg. Ez tehát tulajdonképpen a <a href='#content-warnings'>Content Warning</a> médiatartalmakra alkalmazott megfelelője - és kombinálható is azzal, ha például mind a médiafájl, mind a tülk szöveges része érzékeny tartalom. Ha a szöveget nem ítéled érzékenynek, elég csak a médiafájlt NSFW-ként jelölnöd.</p>
      <p>Tülkjeidhez csatolhatsz videót vagy GIF-animációkat is. Ugyanakkor fontos, hogy ezek maximális mérete 4 MB lehet és a videóknak .webm vagy .mp4 formátumúaknak kell lenniük.</p>
      <LinkableH3 id='following-other-users'>Más felhasználók követése</LinkableH3>
      <p>Ha követsz egy felhasználót, akkor annak minden tülkje, valamint az általa <a href='#boosts-and-favourites'>reblogolt</a> tülkök megjelennek a Kezdőlapodon. Ez egy olyan, <a href='#the-public-timeline'>Publikus időfolyamtól</a> különálló időfolyamot biztosít számodra, ahol a számodra érdekes emberek tülkjei jelennek meg, az instancián zajló minden beszélgetés „zaja” nélkül.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={followIcon} alt='Follow icon' />
        Egy felhasználó követéséhez nyisd meg annak profilját a nevére vagy a profilképére kattintva és kattints a „Követés” (Follow) ikonra a profil bal felső sarkában.
      </p>
      <p>Amennyiben az illető neve mellett lakat ikont <img className='user-guide__icon--inline' src={lockedIcon} alt='Padlock icon' /> látsz, a felhasználó profilja nem nyilvános - ebben az esetben a felhasználó értesítést kap arról, hogy követni szeretnéd és jóvá kell hagynia a kérést. Jóváhagyás után felkerülsz a követői listájára és láthatod a tülkjeit is. Annak jelzésére, hogy követési kérésed jóváhagyásra vár, az eddigi „Követés” <img className='user-guide__icon--inline' src={followIcon} alt='Follow icon' /> ikon helyett egy homokóra <img className='user-guide__icon--inline' src={pendingIcon} alt='Pending icon' /> ikon fog látszani. Ha te is manuálisan szeretnéd jóváhagyni a követési kérelmeket, ezt a Beállításokban, a saját Profil szerkesztése oldalon tudod beállítani.</p>
      <p>Ha már követsz egy felhasználót, akkor a profiloldalán látható Követés ikon kékre <img className='user-guide__icon--inline' src={followingIcon} alt='Following icon' />; ennek újbóli megnyomásával hagyhatod abba a felhasználó követését. 
</p>
      <p>If you know someone's user name you can also open their profile for following by entering it in the <a href='#searching'>Search box</a> in the Compose column. This also works for remote users, though depending on whether they are known to your home instance you might have to enter their full name including the domain (e.g. <code>gargron@mastodon.social</code>) into the search box before their profile will appear in the suggestions.
Ha ismered egy adott felhasználó felhasználónevét, megnyithatod a profilját úgy is, hogy begépeled azt a bal oldali oszlopban található <a href='searching'>keresőmezőbe</a>. Ez más szervereken regisztrált felhasználók esetében is működik, ám annak függvényében, hogy az adott szerver federál-e a tiéddel, lehet, hogy a teljes – szervernévvel ellátott – felhasználónevet (pl. <code>gargron@mastodon.social</code>) be kell írnod, mielőtt a kereső megjeleníti az adott felhasználót javaslatként.</p>
      <p>Amennyiben a követni kívánt felhasználó profilja már meg van nyitva egy másik böngészőfülön, a legtöbb OStatus-alapú rendszer megjelenít egy „Követés” vagy „Feliratkozás” (Follow, ill. Subscribe) gombot a profiloldalon. Ezt megnyomva a rendszer kérni fogja a <strong>te</strong> teljes (szervernévvel ellátott) felhasználónevedet, <strong>amellyel</strong> követni kívánod az adott felhasználót (például ha a mastodon.social szerveren vagy regisztrálva, `felhasználóneved@mastodon.social` formában kell megadnod a fehasználóneved).</p>
      <LinkableH3 id='notifications'>Értesítések</LinkableH3>
      <p>Értesítést kapsz a rendszertől, ha valaki követni kezd, vagy kéri, hogy követhessen; ha megemlít téged vagy válaszol neked; illetve ha reblogolja, vagy kedvencnek jelöli egy tülködet. Ez megjelenik asztali értesítésként (ha a böngésződ támogatja az ilyen értesítéseket, te pedig engedélyezted őket), illetve az „Értesítések” (Notifications) oszlopban.</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={notificationsSettings} alt='Notification Settings icon' />
         A megjelenített értesítéseket testre szabhatod az Értesítések oszlop tetején található Értesítési beállítások (Notification Settings) ikonnal, jelölve azokat, amelyeket meg szeretnél jeleníteni, vagy épp el szeretnél rejteni.
      </p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={notificationsClear} alt='Clear icon' />
        Ha már túl sok értesítés halmozódott itt fel, törölheted azokat az oszlop tetején található Értesítések törlése (Clear notifications) ikonra kattintva.
      </p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        Az ismeretlenektől – azaz akiket nem követsz vagy akik nem követnek téged – érkező értesítéseket szintén kikapcsolhatod: ehhez kattints a bal oldali oszlopban található Beállítások ikonra, majd a megjelenő oldalon jelöld be a kívánt opciót („Block notifications from...”).
      </p>
      <LinkableH3 id='mobile-apps'>Mobilalkalmazások</LinkableH3>
      <p>A Mastodon API-ja nyitott, így bárki fejleszthet hozzá klienst vagy alkalmazást. Sokan már meg is tették, úgy Androidra, mint iOS-re. Az ismert mobilalkalmazások listáját <Link to='/documentation/apps'>itt találod</Link>. Ezen projektek közül sok maga is nyílt forráskódú és mindig szívesen fogadják a közreműködőket.</p>
      <LinkableH3 id='the-publlic-timelines'>Publikus időfolyamok</LinkableH3>
      <p>A Kezdőlapod mellett két másik, publikus időfolyam is elérhető: a Nyilvános időfolyam (Fedarated timeline) és a Helyi időfolyam (Local Timeline). Mindkettő kiválóan alkalmas arra, hogy új embereket ismerj meg és eszmét cseréljetek.</p>
      <LinkableH4 id='the-federated-timeline'>A Nyilvános időfolyam</LinkableH4>
      <p>A Nyilvános időfolyam (angolul: Federated Timeline) mutatja mindazon felhasználók publikus tülkjeit, akik „ismertek” az instanciád számára. Ez az „ismertség” két dolgot jelenthet: az adott felhasználó ugyanannak a szervernek a regisztrált tagja, mint te, vagy valaki a te szerveredről követi őt. A Nyilvános időfolyam éppen ezért nagyszerű hely arra, hogy kapcsolatot teremts a tágabb Mastodon-univerzummal. Más szerverek felhasználóit követve még több embert ismersz majd meg még több instanciáról, akiket követve még több felhasználóval ismerkedsz majd meg a teljes Mastodon- és OStatus-világban; és így tovább.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={federatedTimeline} alt='Federated Timeline icon' />
        A Nyilvános időfolyam megtekintéséhez kattints a baloldali oszlop „Nyilvános időfolyam” (Federated Timeline) ikonjára, vagy válaszd a megfelelő menüpontot a jobboldali „Első lépések” oszlopban. A Nyilvános időfolyam újbóli elrejtéséhez csak kattints a „Vissza” (Back) linkre az oszlop tetején jobbra.
      </p>
      <LinkableH3 id='the-local-timeline'>A Helyi időfolyam</LinkableH3>
      <p>A Helyi időfolyamban csak azokat a publikus tülköket látod, amelyeket a te instanciád felhasználói írtak. Ez akkor lehet nagyon hasznos, ha például a te szervereden olyan közösségi szabályok vannak érvényben az érzékeny tartalmakat illetően, amelyek más instanciákon nincsenek; illetve például akkor, ha a te instanciád a közös érdeklődésre épül.</p>
      <p className='article--text__float-container'>
        <img className='user-guide__icon--heading' src={localTimeline} alt='Local Timeline icon' />
        A Helyi időfolyam megtekintéséhez kattints a bal oldali oszlop „Helyi időfolyam” (Local Timeline) ikonjára, vagy válaszd a megfelelő menüpontot a jobb oldali „Első lépések” oszlopban.
      </p>
      <LinkableH3 id='searching'>Keresés</LinkableH3>
      <p>A Mastodon keresés funkcióját felhasználók és <a href='#hashtags'>címkék</a> keresésére egyaránt használhatod. A kereső nem keres a tülkök teljes szövegében, csak a címkék között. Keresés indításához gépelj be valamit a bal oldali oszlopban található keresőmezőbe és üsd le az <i>Entert</i>. Ekkor megjelenik a keresőpanel, amely mutatja a javaslatokat és találatokat. Ezekre kattintva nyithatod meg az egyes felhasználók profiloldalát, illetve az egyes címkék időfolyamát.</p>
      <LinkableH2 id='privacy-safety-and-security'>Adatvédelem és adatbiztonság</LinkableH2>
      <p>A Mastodonon számos – más nyilvános hálózatokhoz, például a Twitterhez képest jóval több – adatvédelmi és adatbiztonsági beállítási lehetőség található. Elsősorban az adatvédelmi beállítások adnak lehetőséget a finomhangolásra; ebben a fejezetben ezeket vesszük sorra.</p>
      <LinkableH3 id='two-factor-authentication'>Kétlépcsős azonosítás</LinkableH3>
      <p>A kétlépcsős azonosítás (angolul: Two-Factor Authentication, vagy 2FA) egy olyan mechanizmus, ami nagyban növeli Mastodon-fiókod biztonságát. Lényege, hogy bejelentkezéskor a jelszó mellett egy másik, a Mastodon-fiókodhoz hozzárendelt eszközre (jellemzően a mobiltelefonodra) küldött, számokból álló kódot is kér. Azaz hiába szerezte meg egy harmadik fél az e-mail címedet és a jelszavadat, a birtokodban lévő és a kódot fogadó eszköz nélkül nem tudja majd átvenni az irányítást a fiókod felett.</p>
      <p>A Mastodon a Google Authenticatort (vagy egy azzal kompatibilis alkalmazást, például az Authy-t) használja a kétlépcsős azonosításhoz. Ez <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2'>Androidos</a> és <a href='https://itunes.apple.com/gb/app/google-authenticator/id388497605'>iOS-t</a> futtató eszközökre is ingyenesen telepíthető; további implementációkat <a href='https://en.wikipedia.org/wiki/Google_Authenticator#Implementations'>ezen a Wikipedia oldalon</a> találsz.</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        A kétlépcsős azonosítás engedélyezéséhez kattints a bal oldali oszlopban a Beállítások ikonra, majd válaszd a „Kétlépcsős azonosítás” (Two-Factor Authentication) menüpontot és kövesd az ott megjelenő utasításokat. Aktiválás után minden bejelentkezéskor szükség lesz egy, a fiókodhoz hozzárendelt eszközön az Authenticator alkalmazás által generált, egyszerhasználatos kódra.
      </p>
      <LinkableH3 id='account-privacy'>Fiókod adatvédelme</LinkableH3>
      <p>Annak érdekében, hogy te határozhasd meg azt, hogy ki látja tülkjeidet, a Mastodon támogatja a „privát”, vagy „zárt” fiók létrehozását. A privát fiókkal rendelkező felhasználók minden alkalommal értesítést kapnak, ha valaki követni szeretné őket, és lehetőségük van jóváhagyni vagy elutasítani a kérést. Ezen felül a fiókod privátra állítása után minden tülk, amit írsz, a Privát alapértelmezést kapja (bővebben lásd a <a href='#toot-privacy'>Tülk adatvédelem</a> című fejezetben).</p>
      <p className='article--text__float'>
        <img className='user-guide__icon--heading' src={preferences} alt='Preferences icon' />
        Fiókod privátra állításához kattints a bal oldali oszlopban a Beállítások ikonra, majd válaszd a „Profil szerkesztése” menüpontot, jelöld be a „Fiók lezárása” (Lock account) opciót, majd kattints a Mentésre.
      </p>
      <div className='article--text__center'>
        <img src={privateAccount} alt='Screenshot of the "Private Account' />
      </div>
      <div className='article--text__flex'>
        <p>A követési kéréseket ezek után az Első lépések oszlopban fogod látni,</p>
        <img style={{ minWidth: '16em' }} src={followRequestsMenu} alt='Screenshot of the "Follow requests" menu' />
      </div>
      <div className='article--text__flex'>
        <p>ahol egyenként jóváhagyhatod vagy elutasíthatod őket.</p>
        <img style={{ minWidth: '16em' }} src={followRequests} alt='Screenshot of the approval/denial menu' />
      </div>
      <LinkableH3 id='toot-privacy'>Tülk adatvédelem</LinkableH3>
      <p>A tülkök adatvédelme független a fiókod adatvédelmétől és tülkönként külön szabályozható. A tülkök láthatóságának négy szintje a „Publikus” (Public, alapértelmezett), a Listázatlan (Unlisted), a Csak követőknek (Followers-only) és a Közvetlen (Direct). A tülk adatvédelmi szintjének beállításához kattints a <img className='user-guide__icon--inline' src={composePrivacy} alt='Globe icon' /> Földgömb (Adjust status privacy) ikonra. Az itt kiválasztott szint „öröklődik” a későbbi tülkökre, vagyis a „Csak követőknek” kiválasztásával minden későbbi tülködre ez lesz az alapértelmezett, mindaddig, amíg más szintet nem állítasz be. Az alapértelmezett szintet beállíthatod a bal oldali oszlop Beállítások ikonjára kattintva megjelenő oldalon is.</p>
      <p>A legtöbb felhasználó tülkjeinek beállítása a <strong>Publikus</strong>. A Publikus tülkök korlátozások nélkül megjelenhetnek minden más felhasználó nyilvános időfolyamaiban, legyenek azok a felhasználó saját szerverén vagy más instanciákon; valamint szerepelni fognak a felhasználó nyilvános profiloldalán is, így a keresőrobotok és olyan internethasználók is láthatják, akik nem Mastodon-felhasználók.</p>
      <p>A <strong>Listázatlan</strong> tülkök publikusak ugyan, ám nem jelennek meg a nyilvános időfolyamokban és keresési eredmények között. Mindazonáltal az ilyen tülkök megjelennek követőid Kezdőlapján és szerepelni fognak nyilvános profiloldaladon is (tehát látják majd a keresőrobotok és a Mastodonon kívüli internetezők is).</p>
      <p>A <strong>Csak követőknek</strong> szánt tülkök nem szerepelnek a nyilvános időfolyamokon és a profiloldaladon sem (kivéve ha olyan felhasználó jeleníti meg azt, aki követ téged). Ugyanakkor ez csak félmegoldást jelent abban az esetben, ha felhasználói fiókod nincs privátra állítva, hiszen bárki jóváhagyás nélkül bekövethet téged és így látni fogja a Csak követőknek szánt tülkjeidet is. Ugyanakkor privátra állított felhasználó fiókodról küldött tülkjeid szintjét is felülbírálhatod az egyes tülkök szintjén és Listázatlan, vagy akár Publikus tülköket is írhatsz.</p>
      <p>PA <strong>Csak követőknek</strong> beállítással küldött tülköket reblogolni sem lehet. Ilyen tülkök megtekintésekor látni fogod, hogy a „Reblog” ikon helyén egy lakat szerepel. <strong>VIGYÁZZ</strong>, ezt a beállítást más instanciák beállításai nem biztos, hogy tiszteletben tartják.</p>
      <p>Sajnos egyelőre nincs mód ellenőrizni, hogy egy másik szerver tiszteletben tartja-e a tülkök adatvédelmi beállításait. Más, nem Mastodont futtató szerverek (pl. egy GNU Social szerver) nem is támogatják a Mastodon adatvédelmi beállításait. Egy GNU Social felhasználó, akit @megemlítesz, nem is lesz tudatában annak, hogy a neki küldött üzenet privát, képes lesz azt reblogolni is, ezzel felülírva az eredeti üzenet adatvédelmi beállításait. Sőt, az is megtörténhet, hogy valaki egy olyan, módosított forráskódú Mastodon-instanciát üzemeltet, ami nem tartja tiszteletben a tülkök adatvédelmi beállításait. Csak követőknek szánt tülk írásakor a rendszer figyelmeztetni fog abban az esetben, ha a tülk federálódni fog más instanciákra. Ha ilyet látsz, érdemes elgondolkodnod azon, mennyire bízol meg az éppen @megemlített felhasználóban és abban az instanciában, ahol ő regisztrálva van.</p>
      <p>A „Csak követőknek” szánt tülkök és a @megemlítések titkosítva sem lesznek. Bíznod kell abban, hogy az instanciád adminisztrátora nem olvasgatja mások levelezését. Sose írj olyan dolgot, amely inkriminálhat téged.</p>
      <p>A <strong>Közvetlen</strong> tülkök csak azon felhasználók számára láthatók, akiket benne @megemlítesz és nem reblogolhatók. Ahogyan a „Csak követőknek” szóló tülkök esetében is említettük, más instanciák ezt nem feltétlenül tartják tiszteletben. Ha bizalmas beszélgetést szeretnél folytatni valakivel, érdemes lehet azt a Mastodonon kívül tenni.</p>
      <p>Egy táblázat a fentiek összefoglalására:</p>
      <table>
        <thead>
          <tr>
            <th>Tülk adatvédelmi szintje</th>
            <th>Látható-e a profiloldalon</th>
            <th>Látható-e a nyilvános időfolyamokban</th>
            <th>Federál-e más szerverekre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Publikus</td>
            <td>Igen, bárki számára</td>
            <td>Igen</td>
            <td>Igen</td>
          </tr>
          <tr>
            <td>Listázatlan</td>
            <td>Igen, bárki számára</td>
            <td>Nem</td>
            <td>Igen</td>
          </tr>
          <tr>
            <td>Csak követőknek</td>
            <td>Csak követőid számára</td>
            <td>Nem</td>
            <td>Csak más instanciák felhasználóinak @megemlítésekor</td>
          </tr>
          <tr>
            <td>Direkt</td>
            <td>Nem</td>
            <td>Nem</td>
            <td>Csak más instanciák felhasználóinak @megemlítésekor</td>
          </tr>
        </tbody>
      </table>
      <LinkableH3 id='blocking'>Felhasználók blokkolása</LinkableH3>
      <p>Letilthatsz (blokkolhatsz) más felhasználókat, ha nem szeretnéd, hogy azok kapcsolatba lépjenek veled. Ehhez a tülkjük alatt, vagy a profiloldalukon található Menü ikonra kattintva válaszd a „Blokkolás” (Block) menüpontot.</p>
      <p><strong>MEGJEGYZENDŐ</strong>, hogy Publikus tülkeidet a blokkolt felhasználó ugyan nem fogja látni, míg be van jelentkezve, de <i>kijelentkezve, vagy egy másik felhasználói fiókkal bejelentkezve igen</i>.</p>
      <p>A blokkolt felhasználók említései, reblogjai és kedvelései sem jelennek meg az időfolyamaidban. A blokkolt személyek tülkjeire érkező válaszokat sem fogod látni, még akkor sem, ha azokban @megemlítenek téged. A blokkolt személyek tülkjeit még akkor sem fogod látni, ha azokat olyan felhasználó reblogolja, akit te magad is követsz.</p>
      <p>A letiltott személy nem kap értesítést arról, hogy blokkoltad őt. A letiltott felhasználók a követőid listájában sem fognak megjelenni.</p>
      <LinkableH3 id='muting'>Felhasználók némítása</LinkableH3>
      <p><i>Lenémíthatsz</i> egy bizonyos személyt, akinek tülkjeit nem szeretnéd látni, de az nem zavar, ha ő látja az általad írt tülköket. Ehhez a tülkjük alatt, vagy a profiloldalukon található Menü ikonra kattintva válaszd a „@felhasználónév némítása” (Mute @felhasználónév) menüpontot. A lenémított személy nem fog tudomást szerezni arról, hogy lenémítottad.</p>
      <LinkableH3 id='reporting-toots-or-users'>Tülkök vagy felhasználók jelentése</LinkableH3>
      <div className='article--text__flex'>
        <p>Ha olyan tülkkel vagy felhasználóval találkozol, ami vagy aki megsérti az instanciád szabályzatát, vagy amire/akire fel szeretnéd hívni az instanciád adminisztrátorainak figyelmét (például valaki fenyeget másokat, pornográf spamet terjeszt vagy illegális tartalmat tülköl), akkor az adott tülk alatt, vagy a felhasználó profiloldalán található Menü ikonra kattintva válaszd a „@felhasználónév jelentése” (Report @felhasználónév) menüpontot. A jobb oldali oszlopban ilyenkor megjelenik a következő űrlap:</p>
        <img style={{ minWidth: '16em' }} src={report} alt='Report form' />
      </div>
      <p>Ezen az űrlapon megjelölheted mindazokat a tülköket, melyeket jelenteni szeretnél az adminok felé és megjegyzésekkel (például „spammer felhasználó” vagy „ez a tülk figyelmeztetés nélküli pornográfiát tartalmaz”) is segítheted őket a probléma azonosításában és megoldásában. Elküldés után a bejelentés láthatóvá válik a szerver adminisztrátorai számára, így megtehetik a szükséges lépéseket, például a felhasználó tükjeinek eltávolítását a nyilvános időfolyamokból vagy akár a felhasználó kizárását.</p>
    </div>
  </div>
);

export default UserGuide;
