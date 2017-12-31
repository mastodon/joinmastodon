import React from 'react';
import { Link } from 'react-router-dom';
import { LinkableH2 } from '../../LinkableHeadings';
import Navigation from '../../Navigation';

const Faq = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>Najczęściej zadawane pytania (FAQ)</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='what-is-a-mastodon'>Czym jest Mastodon?</LinkableH2>
      <p>Mastodont jest prehistorycznym zwierzęciem, przodkiem mamuta. Wydaje dźwięk "toot."</p>
      <LinkableH2 id='why-the-name-mastodon'>Dlaczego ta nazwa – Mastodon?</LinkableH2>
      <p>Gargron (autor Mastodona) jest fanem zespołu progressive metalowego o tej samej nazwie. Stwierdził, że jest to fajne zwierzę/nazwa.</p>
      <LinkableH2 id='how-exactly-is-it-decentralized'>Na czym właściwie polega ta decentralizacja?</LinkableH2>
      <p>Decentralizacja może odbywać się na kilka sposobów. Mastodon opiera się na „federacji”. Myśl o tym jak o e-mailu, nie jak o BitTorrent. Jest wiele serwerów (zwanych instancjami), a posiadając konto na jednym z nich, możemy wchodzić w interakcje z członkami pozostałych instancji.</p>
      <LinkableH2 id='technically-how-does-the-federation-work'>Jak (z technicznego punktu widzenia) wygląda ta federacja?</LinkableH2>
      <p>Korzystamy z zestawu protokołów OStatus</p>
      <ol>
        <li>Webfinger do wyszukiwania użytkowników</li>
        <li>Kanały Atom z rozszerzeniami ActivityStreams, Portable Contacts i Threads</li>
        <li>PubSubHubbub do śledzenia tych kanałów Atom</li>
        <li>Salmon dostarcza określone fragmenty kanałów Atom w odpowiednie miejsca (np. osobom biorącym udział w rozmowie, wspomnianym we wpisie, śledzącym daną osobę itp.)</li>
      </ol>
      <LinkableH2 id='what-is-mastodon-social'>Czym jest mastodon.social?</LinkableH2>
      <p>„Flagową” instancją prowadzoną przez Gargrona opartą na najnowszych wydaniach Mastodona. Docelowo nie będzie to jedyna instancja.</p>
      <LinkableH2 id='what-else-is-part-of-the-federated-network'>Co jeszcze jest częścią federacji?</LinkableH2>
      <p>Nazwijmy to „fediwersum” Istniało ono już wcześniej, w jego skład wchodziły serwery GNU social, Friendica, Hubzilla, Diaspora itp. Nie wszystkie z nich są ze sobą w pełni kompatybilne. Mastodon stara się być zgodny ze standardami, a kompatybilność z GNU social jest ważniejsza, niż w przypadku innychrozwiązań.</p>
      <LinkableH2 id='i-tried-logging-into-a-gnu-social-client-app-with-mastodon-and-it-didnt-work-why'>Próbowałem użyć klienta GNU social, aby połączyć się z Mastodonem. Dlaczego to nie zadziałało?</LinkableH2>
      <p>Chociaż Mastodon jest kompatybilny z GNU social pod względem komunikacji między serwerami, ma zupełnie inne API. Wskutek tego, aplikacje powstałe, aby obsługiwać GNU social, nie będą działać z Mastodonem. Powody tego są w połowie ideologiczne, w połowie techniczne.</p>
      <p>Jest to opisane szczegółowo w angielskim FAQ</p>
      <LinkableH2 id='how-is-mastodon-funded'>Jak jest opłacany Mastodon?</LinkableH2>
      <p>Rozwój Mastodona i hosting instancji mastodon.social jest opłacany na <a href='https://www.patreon.com/user?u=619786'>Patreonie (lub przez dotacje BTC/PayPal)</a> Gargrona. Autor nie jest zainteresowany monetyzacją portalu ani płatnymi reklamami. Może zapewnić instalację/aktualizację Twojej instancji.</p>
      <p>Społeczności powinny prowadzić własne instancje, aby rozdrobnić płatności. Opłacanie jednej instancji, gdyby każdy zdecydował się na korzystanie z niej, byłoby bardzo trudne.</p>
      <LinkableH2 id='this-looks-a-lot-like-twitter-whats-the-difference'>To wygląda trochę jak Twitter, czym się one różnią?</LinkableH2>
      <p>Mastodon jest zdecentralizowany. Każdy właściciel instancji może ustalić własne zasady. Twitter jest scentralizowany, każdego obowiązują te same zasady.</p>
      <LinkableH2 id='what-is-a-federation'>Czym jest „federacja”?</LinkableH2>
      <p>Jest to grupa serwerów Mastodona i kompatybilnych serwisów, które dzielą ze sobą wpisy użytkowników.</p>
      <LinkableH2 id='what-is-an-instance'>Czym jest „instancja”?</LinkableH2>
      <p>Jest serwerem, na którym możesz założyć konto. Każda może mieć inne zasady, ponieważ każdy może założyć swoją.</p>
      <LinkableH2 id='how-should-i-choose-which-instance-to-use'>Jak wybrać instancję?</LinkableH2>
      <p><a href='https://instances.mastodon.xyz/list'>Istnieje wiele instancji</a> na każdą potrzebę. Dobrze jest spróbować kilku, aby sprawdzić, która z publicznych instancji spełnia Twoje oczekiwania. Rozmawiając na publicznej instancji, takiej jak <a href='https://mastodon.social'>Mastodon.Social</a> możesz dostać zaproszenie na instancję tematyczną.</p>
      <p>Aby zobaczyć, o czym dyskutują członkowie różnych instancji, użyj <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>tego narzędzia</a> autorstwa <a href='https://mastodon.social/@kevinmarks'>Kevina Marksa</a>.</p>
      <LinkableH2 id='how-many-people-signed-up-for-mastodon-can-i-see-a-chart-of-user-counts-over-time'>Ile osób posiada konto na Mastodonie? Czy mogę to sprawdzić?</LinkableH2>
      <p>Oczywiście, wystarczy zaobserwować <a href='https://social.lou.lt/@mastodonusercount'>@mastodonusercount@social.lou.lt</a>.</p>
      <LinkableH2 id='how-do-i-get-this-on-android'>Mogę korzystać z tego na Androidzie?</LinkableH2>
      <p>Wypróbuj aplikację <a href='https://play.google.com/store/apps/details?id=com.keylesspalace.tusky'>Tusky</a>.</p>
      <LinkableH2 id='on-android-i-really-want-multiple-account-support'>Fajnie, ale chcę obsługę wielu kont naraz.</LinkableH2>
      <p>Wypróbuj <a href='https://play.google.com/store/apps/details?id=ch.kevinegli.tootyfruity221258'>TootyFruity</a>.</p>
      <LinkableH2 id='how-do-i-get-this-on-iphone'>A na iPhone?</LinkableH2>
      <p>Wypróbuj <a href='https://itunes.apple.com/us/app/amaroq-for-mastodon/id1214116200'>Amaroq</a>. Safari też może być dobrym wyborem. ;)</p>
      <LinkableH2 id='are-there-other-mobile-desktop-cli-apps'>Istnieją inne aplikacje mobilne/desktopowe/cli?</LinkableH2>
      <p><Link to='/documentation/apps'>Tak.</Link></p>
      <LinkableH2 id='can-tusky-do-how-about-feature-and-whats-with-tuskys'>Czy Tusky może ‘<span aria-label='foo' role='img'>💇</span>’? A co z “<span aria-label='bar' role='img'>🔥</span>”? Jak z “<span aria-label='baz' role='img'>⛱</span>,” w Tusky?</LinkableH2>
      <p>Możesz zaobserwować Tusky'ego na <a href='https://mastodon.social/@Tusky'>@Tusky@mastodon.social</a>, lub jego programistów <a href='https://mastodon.social/@Vavassor'>@Vavassor@mastodon.social</a> i <a href='https://mastodon.social/@daycode'>@daycode@mastodon.social</a>.</p>
      <LinkableH2 id='how-do-i-search'>Jak korzystać z wyszukiwania?</LinkableH2>
      <p>Możesz szukać ludzi i hashtagów, ale nie tekstu w postach. Użyj pola nad polem wprowadzania tekstu.</p>
      <LinkableH2 id='how-do-i-dm-direct-message'>Jak wysłać prywatną wiadomość?"</LinkableH2>
      <p>Naciśnij ikonę globusa, aby uzyskać opcje prywatności.</p>
      <LinkableH2 id='i-dont-get-the-local-vs-federated-timeline-thing'>Nie rozumiem różnicy między lokalnymi a federowanymi wpisami.</LinkableH2>
      <p>Wpisy (zwane tu często „tootami”) lokalne to te wysłane przez użytkowników Twojej instancji, a federowane to te z instancji, które zna używana przez Ciebie instancja.</p>
      <LinkableH2 id='are-there-instances-that-my-instance-doesnt-federated-with-how-do-i-know'>Czy każda instancja federuje się z innymi?</LinkableH2>
      <p>Niektóre instancje są prywatne i nie federują się ze wszystkimi. Instancja może być zablokowana z innego powodu, np. gdy jest niezgodna z regulaminem tej instancji. Aby dowiedzieć się, jak wygląda to na Twojej instancji, przeczytaj jej opis, lub skontaktuj się z jej właścicielem.</p>
      <LinkableH2 id='can-i-have-more-than-one-account-can-i-use-the-same-email-on-different-instances'>Czy mogę posiadać więcej niż jedno konto? Czy mogę użyć tego samego adresu e-mail na innej instancji?</LinkableH2>
      <p>Dwa razy tak! Jeżeli stwierdzisz, że chcesz założyć konto na innej instancji, zrób to. Pamiętaj, że nie każda instancja zawsze pozwala na rejestrację.</p>
      <LinkableH2 id='can-i-import-the-people-i-follow-to-another-instance'>Czy mogę zaimportować listę osób, które obserwuję na inną instancję?</LinkableH2>
      <p>Tak. Może to zająć trochę czasu, w zależności od instancji. W wypadku problemów, skontaktuj się z administratorem instancji.</p>
      <LinkableH2 id='how-do-i-prevent-people-from-impersonating-me'>Jak mogę zapobiec podszywaniu się pode mnie?</LinkableH2>
      <p>Ponieważ każdy może założyć konto o dowolnej nazwie na danej instancji, nie można temu łatwo zapobiec. Niektórzy posiadają własne, jednoosobowe instancje lub korzystają z <a href='https://keybase.io/'>Keybase</a>.</p>
      <LinkableH2 id='how-do-i-enable-two-factor-authentication'>Jak aktywować dwuetapowe uwierzytelnianie?</LinkableH2>
      <p>Jeżeli Twoja instancja obsługuje tą możliwość, możesz aktywować ją w ustawieniach. <a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md'>2FA Mastodona</a> korzysta zarówno z kodów QR, jak i kluczy tekstowych.</p>
      <LinkableH2 id='why-cant-i-see-someones-toots'>Dlaczego nie widzę czyichś wpisów?</LinkableH2>
      <p>Może to być spowodowane wieloma przyczynami. Wpisy tego użytkownika mogą być widoczne tylko dla śledzących go, bądź użytkownik zablokował Cię.</p>
      <LinkableH2 id='whats-trending'>Co jest teraz na czasie?</LinkableH2>
      <p>Możesz zobaczyć popularne treści, obserwując <a href='https://mastodon.social/@TrendingBot'>@TrendingBot@mastodon.social</a>.</p>
      <LinkableH2 id='whats-cw'>Czym jest “CW”?</LinkableH2>
      <p>“CW” oznacza “Content Warning”, czyli „Ostrzeżenie o zawartości”. Możesz oznaczać tym np. spoilery.</p>
      <LinkableH2 id='how-does-the-mark-image-as-sensitive-feature-work-nsfw'>Jak działa opcja oznaczania wrażliwej zawartości (“NSFW”)?</LinkableH2>
      <p>Po dodaniu obrazu, możesz wybrać opcję NSFW, aby wyświetlenie obrazu wymagało kliknięcia na ostrzeżenie.</p>
      <LinkableH2 id='who-is-my-admin-and-how-do-i-contact-follow-them'>Kto jest moim administratorem, jak mogę skontaktować się z nim/śledzić go?</LinkableH2>
      <p>Informacje kontaktowe, wraz z innymi informacjami o instancji powinny znajdować się w jej szczegółowym opisie.</p>
      <LinkableH2 id='wow-i-keep-seeing-offensive-stuff-from-a-particular-instance-is-there-a-way-to-block-all-of-it'>Wszędzie widzę treści, które mi się nie podobają pochodzące z tej samej instancji, jak mogę je zablokować?</LinkableH2>
      <p>Odwiedź profil użytkownika tej instancji, w rozwijanym menu znajdziesz tą opcję.</p>
      <p>Jeżeli Twoja instancja opiera się na starszej wersji Mastodona, nie zrobisz tego łatwo, możesz jednak skontaktować się z administratorem, aby zablokował tą instancję, lub zaktualizował mastodona.</p>
      <LinkableH2 id='is-mastodon-moderated'>Czy Mastodon jest moderowany?</LinkableH2>
      <p>Każda instancja ma własne zasady i jest moderowana w inny sposób. Dobrze jest poznać zasady swojej instancji.</p>
      <LinkableH2 id='how-do-i-report-offensive-content'>Jak zgłosić nieodpowiednie treści?</LinkableH2>
      <p>Przy każdym poście widoczna jest ikona składająca się z trzech kropek. W rozwijanym menu możesz wybrać opcję służącą do zgłoszenia wpisu.</p>
      <LinkableH2 id='how-do-i-handle-harrasment'>Jak zgłosić nękanie?</LinkableH2>
      <p>Jeżeli administrator Twojej instancji traktuje to poważnie, możesz zgłosić wpisy korzystając ze sposobu opisanego w poprzednim akapicie. Możesz też skontaktować się bezpośrednio z administratorem.</p>
      <LinkableH2 id='will-my-private-messages-reach-people-on-other-instances'>Czy wiadomości prywatne dotrą do użytkowników innych instancji?</LinkableH2>
      <p>Tak. Nie powinny być jednak wykorzystywane do przekazywania ważnych informacji, nie jest to bezpieczna metoda.</p>
      <LinkableH2 id='can-i-use-hashtags-should-i'>Mogę korzystać z hashtagów?</LinkableH2>
      <p>Tak! Hashtagi są tu wykorzystywane do wyszukiwania postów, często pomagają szukać postów, które możesz woleć ominąć (#POLITICS, #NSFW itp.).</p>
      <LinkableH2 id='how-do-i-get-verified-with-a'>Jak zweryfikować profil i uzyskać <span aria-label='verified account mark' role='img'>“✅”</span>?</LinkableH2>
      <p><span aria-label='verified account mark' role='img'>“✅”</span> to tylko emoji, *just* for lulz. Mastodon nie posiada weryfikacji kont. Jak chcesz, możesz skopiować <span aria-label='verified account mark' role='img'>“✅”</span> do swojej nazwy.</p>
      <LinkableH2 id='can-i-edit-a-toot'>Czy mogę edytować wpis?</LinkableH2>
      <p>Przepraszamy, nie możesz. Możesz go jednak usunąć i napisać na nowo…</p>
      <LinkableH2 id='if-i-delete-a-post-does-it-get-deleted-everywhere'>Czy jeżeli usunę wpis, zniknie on wszędzie?</LinkableH2>
      <p>Usunięcie postu spowoduje jego zniknięcie z lokalnej osi czasu. Może on jednak nie zniknąć, jeżeli został podbity przez użytkowników innej instancji.</p>
      <LinkableH2 id='can-i-quote-a-toot'>Czy mogę zacytować wpis?</LinkableH2>
      <p>Jeszcze nie. Musisz skopiować i wkleić go do wpisu ręcznie.</p>
      <LinkableH2 id='if-my-instance-shuts-down-forever-do-i-lose-my-data'>Czy jeżeli moja instancja zniknie, stracę dane?</LinkableH2>
      <p>Tak.</p>
      <LinkableH2 id='can-i-save-my-data'>Czy mogę zapisać swoje dane?</LinkableH2>
      <p>Tak, wejdź w Preferencje > Eksport danych.</p>
      <LinkableH2 id='i-cant-see-toots-of-a-remote-user-under-their-bio'>Nie mogę zobaczyć wszystkich wpisów użytkownika innej instancji.</LinkableH2>
      <p>W rozszerzonym widoku, kliknij w jego awatar, znajdziesz się na stronie instancji, gdzie zobaczysz wszystkie publiczne wpisy użytkownika.</p>
      <LinkableH2 id='how-do-i-see-threads'>Jak mogę wyświetlić całą dyskusję?</LinkableH2>
      <p>Naciśnij zawartość wpisu, aby wyświetlić całą dyskusję.</p>
      <LinkableH2 id='how-do-i-link-to-toots'>Jak uzyskać link do wpisów?</LinkableH2>
      <p>Naciśnij prawym przyciskiem myszy na czas dodania wpisu. Możesz skopiować link.</p>
      <LinkableH2 id='how-do-i-link-to-my-profile'>Jak uzyskać link do mojego profilu?</LinkableH2>
      <p>Kliknij prawym przyciskiem na awatar. Możesz skopiować link.</p>
      <LinkableH2 id='does-clicking-a-hashtag-show-local-results-or-federated'>Czy kliknięcie w #hashtag wyświetla wpisy lokalne, czy z federacji?</LinkableH2>
      <p>Z federacji.</p>
      <LinkableH2 id='when-i-mute-a-boost-who-gets-muted-the-booster-or-the-original-author'>Jeżeli wyciszę podbity wpis, kto zostanie wyciszony? Autor, czy osoba, która go podbiła?</LinkableH2>
      <p>Autor oryginalnego wpisu.</p>
      <LinkableH2 id='can-i-preview-the-people-on-an-instance-and-what-theyre-saying'>Mogę zobaczyć, o czym rozmawiają użytkownicy innych instancji?</LinkableH2>
      <p>Tak, spróbuj świetnego <a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>instance preview tool</a>.</p>
      <LinkableH2 id='how-do-i-hide-the-toots-of-launguages-i-dont-understand'>Jak ukryć wpisy w językach, których nie rozumiem?</LinkableH2>
      <p>W ustawieniach znajdziesz opcję „Filtrowane języki”.</p>
      <LinkableH2 id='is-automatic-translation-supported'>Czy automatyczne tłumaczenia są wspierane?</LinkableH2>
      <p>Jeszcze nie, ale istnieje <a href='https://github.com/tomouchuu/mastodon-translate'>skrypt TamperMonkey</a>, który może spełnić Twoje oczekiwania.</p>
      <LinkableH2 id='do-toots-automatically-broadcast-federated-or-stay-local'>Gdzie domyślnie pojawiają się wpisy?</LinkableH2>
      <p>Domyślnie, wysłane wpisy stają się publiczne, widoczne dla całej federacji. Możesz zmienić tą opcję w ustawieniach.</p>
      <LinkableH2 id='what-is-the-default-image-upload-size-limit-and-how-can-i-change-it'>Jaki jest domyślny limit wielkości obrazów? Czy mogę go zmienić?</LinkableH2>
      <p>Domyślny limit to 8 MB, może być on jednak zmieniony przez właściciela instancji opcją <code>mastodon/app/models/media_attachment.rb</code>:</p>
      <code>validates_attachment_size :file, less_than: 8.megabytes</code>
      <p>Zmień 8 na inną liczbę (w megabajtach).</p>
      <LinkableH2 id='how-do-i-start-my-own-instance'>Jak mogę założyć własną instancję?</LinkableH2>
      <p>Zobacz <a href='https://github.com/tootsuite/documentation/blob/master/README.md'>Podręcznik użytkownika</a> (w języku angielskim), pod nagłówkiem “Running Mastodon.”</p>
      <LinkableH2 id='i-found-a-bug-or-have-a-suggestion-for-mastodon'>Znalazłem błąd lub chciałbym zaproponować nową funkcję.</LinkableH2>
      <p>Możesz zgłaszać błędy lub sugestie <a href='https://github.com/tootsuite/mastodon/issues'>tutaj, na GitHubie.</a></p>
      <LinkableH2 id='i-found-a-mistake-in-translation-pl'>Znalazłem błąd w polskim tłumaczeniu Mastodona, gdzie mogę go zgłosić?</LinkableH2>
      <p>Skontaktuj się ze <a href='https://glitch.social/@MarcinMikolajczak'>mną</a>, lub dokonaj zmiany samodzielnie.</p>
      <LinkableH2 id='who-is-translator-pl'>Kto jest autorem polskiego tłumaczenia Mastodona?</LinkableH2>
      <p>Kolejność na podstawie liczby commitów:</p>
      <ul>
        <li><a href='https://glitch.social/@MarcinMikolajczak'>@m4sk1n</a></li>
        <li><a href='https://mastodon.social/@rysiek'>@rysiekpl</a></li>
      </ul>
      <p>Podziękowania dla Polaków z całego Fediwersum za wysyłanie swoich uwag dotyczących tłumaczenia.</p>
      <LinkableH2 id='untranslated-missing-image'>Oryginalne FAQ posiada ilustracje. Dlaczego je zjadłeś?</LinkableH2>
      <p>Wkrótce wykonam je w języku polskim, na podstawie aktualnej wersji Mastodona.</p>
      <LinkableH2 id='hey-i-love-mastodon-faqs-can-i-have-more'>Bardzo apetyczne FAQ, mogę prosić o dokładkę?</LinkableH2>
      <p>Proszę, to dla Ciebie. ;)</p>
      <ul>
        <li><a href='https://hastebin.com/raw/xuqogukimu'>https://hastebin.com/raw/xuqogukimu</a></li>
        <li><a href='https://github.com/ThomasLeister/masto-faq'>https://github.com/ThomasLeister/masto-faq</a></li>
        <li><a href='http://mastoguide.info/Pages/FAQindex.html'>http://mastoguide.info/Pages/FAQindex.html</a></li>
        <li><a href='https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7'>https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7</a></li>
        <li><a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md'>https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md</a></li>
      </ul>
      <footer>
        <p>To FAQ powstało dzięki <a href='https://mastodon.social/@Gargron'>@Gargron</a>, <a href='https://mastodon.social/@Raccoon'>@raccoon</a>, <a href='https://octodon.social/@upside'>@upside</a>, <a href='https://mastodon.social/@zacanger'>@zacanger</a>, <a href='https://octodon.social/@NthTensor'>@NthTensor</a>, <a href='https://mastodon.social/@ametlles'>@ametlles</a> i wielu innym członkom Fediwersum!</p>
      </footer>
    </div>
  </div>
);

export default Faq;
