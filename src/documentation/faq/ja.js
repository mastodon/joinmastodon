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
      <h1>よくある質問</h1>
    </div>
    <div className='article article--text'>
      <LinkableH2 id='what-is-a-mastodon'>マストドンって何ですか？</LinkableH2>
      <p>先史時代にかつて存在した動物で、マンモスの祖先と言われています。</p>
      <LinkableH2 id='why-the-name-mastodon'>何故マストドンという名前なのですか？</LinkableH2>
      <p>同名のヘヴィメタルバンドがあります。私(訳者注: 開発者の Gargron氏)はそのバンドのファンで、また私が興味を引く動物でした。私はこの名前と動物がクールだと思い、この名前を付けました。</p>
      <LinkableH2 id='how-exactly-is-it-decentralized'>マストドンはどのように分散化されているのですか？</LinkableH2>
      <p>何かを分散させるには様々な方法があります。この場合、マストドンは「連合」型になります。BitTorrentではなく、電子メールで考えてみましょう。電子メールでは、それぞれ異なるサーバー(インスタンス)があり、ユーザーはそのうち1つにアカウントを持っています。しかしアカウントの存在する場所に関係なく、相互にやり取りを行う事ができます。</p>
      <LinkableH2 id='technically-how-does-the-federation-work'>技術的には連合はどのように機能していますか？</LinkableH2>
      <p>OStatusプロトコル群を使用しています。</p>
      <ol>
        <li>ドメイン上のユーザーの検索にWebfinger</li>
        <li>AtomフィードとActivityStreams、Portable Contacts、実際のコンテンツのスレッド拡張機能</li>
        <li>Atomフィードを購読するためのPubSubHubbub</li>
        <li>Atomフィードから特定の項目、宛先ユーザー、メッセージの送信者、フォローされているユーザーなどの情報を利害関係者に配信するためのSalmon</li>
      </ol>
      <LinkableH2 id='what-is-mastodon-social'>mastodon.social とは何ですか？</LinkableH2>
      <p>マストドンのフラグシップインスタンス、またはサーバーで、私自身が最新のコードを適用して運用しています。これは最終的に想定される唯一のインスタンスではありません。</p>
      <LinkableH2 id='what-else-is-part-of-the-federated-network'>連合ネットワークには他に何がありますか？</LinkableH2>
      <p>それらを「勢力」と呼んでみましょう。以前より、GNU SocialサーバーとしてFriendica、Hubzilla、Diasporaなどが存在していました。これらのサーバーのすべてが他のサーバーと完全な互換性があるわけではありません。マストドンは完全に標準準拠するように努めており、GNU Socialとの互換性は他のものに比べて優先的になっています。</p>
      <LinkableH2 id='i-tried-logging-into-a-gnu-social-client-app-with-mastodon-and-it-didnt-work-why'>私はマストドンでGNU Social対応のクライアントアプリケーションにログインしようとしましたが、うまくできませんでした。それはなぜですか？</LinkableH2>
      <p>マストドンはサーバー間通信という点でGNU Socialと互換性がありますが、クライアントからサーバーへのAPI(またはマストドンへのアクセス方法)は異なります。 したがって、特にGNU Social向けに作られたクライアントアプリケーションはマストドンでは動作しません。 この理由の半分は技術的なもの、半分は思想的なものです。</p>
      <p>マストドンは1から作成されているため、エミュレーションレイヤを構築するより、内部構造を反映したAPIを作る方が簡単です。 第二に、GNU SocialのクライアントAPIは実際のところ、その半分は従来のTwitter APIの実装です。これが、以前のTwitterクライアントアプリケーションで動作する理由です。 しかし、それらのアプリケーションの多くはもはやメンテナンスされておらず、GNU Social APIは実際のTwitter APIに追いつかず、すべての機能を完全には実装していません。同時に、Twitter APIは連合サービスを考慮していないため、APIからは利用できない機能もあります。</p>
      <LinkableH2 id='how-is-mastodon-funded'>マストドンはどのように資金提供を受けていますか？</LinkableH2>
      <p>マストドンの開発とmastodon.socialのホスティングは、私の<a href='https://www.patreon.com/user?u=619786'>Patreon (also BTC/PayPal donations)</a>を通じて資金提供されています。それ以上のVCによる資金調達、収益化および広告などには興味がありません。私は必要に応じて、セットアップおよびメンテナンスサービスを提供することができます。</p>
      <p>ソフトウェアは無償かつオープンソースであり、コミュニティが自らのサーバーをホストする必要がある場合は、多かれ少なかれコストが分散されます。文字通り、すべてのユーザーがmastodon.socialのインスタンスのみを使用することになるとしたら、私がその請求を支払うのは難しいでしょう。</p>
      <LinkableH2 id='this-looks-a-lot-like-twitter-whats-the-difference'>これはTwitterと似ているようですが、何が違いますか？</LinkableH2>
      <p>マストドンは分散化されています。誰でも自分のコミュニティルール内でマストドンサーバーを実行できます。Twitterは中央集権機関によって運営され、全ユーザーにルールが適用されています。</p>
      <LinkableH2 id='what-is-a-federation'>"連合"とは何ですか？</LinkableH2>
      <p>相互にトゥートを共有しているマストドンサーバーのグループです。</p>
      <LinkableH2 id='what-is-an-instance'>"インスタンス"とは何ですか？</LinkableH2>
      <p>アカウントを持つ事ができるサーバーです。誰でも実行することができ、それぞれ毎に独自のポリシーやルールがあります。</p>
      <LinkableH2 id='how-should-i-choose-which-instance-to-use'>どのインスタンスを使用すればいいですか？また、どのように選択する必要がありますか？</LinkableH2>
      <p>趣味や興味などによって<a href='https://instances.mastodon.xyz/list'>多くのインスタンスが存在しています</a>。気に入ったサーバーを見つけるために、公開されているものを色々試してみるのもよいでしょう。もし分からない場合は、<a href='https://mastodon.social'>Mastodon.Social</a>のようなパブリックインスタンスであなたの趣味や興味について話してみてください。他のインスタンスへの招待の手助けになるかもしれません。</p>
      <p>インスタンス内での会話がどのようなものかを見てみるには、<a href='https://mastodon.social/@kevinmarks'>Kevin Marks</a>によって作成された<a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>このプレビューツール</a>を使ってみてください。.</p>
      <LinkableH2 id='how-many-people-signed-up-for-mastodon-can-i-see-a-chart-of-user-counts-over-time'>マストドンにはどれくらいの人が登録していますか？時系列でユーザー数のグラフを見ることはできますか？?</LinkableH2>
      <p>もちろんです。<a href='https://social.lou.lt/@mastodonusercount'>@mastodonusercount@social.lou.lt</a>をフォローしてみてください。</p>
      <LinkableH2 id='how-do-yo-really-spell-mast-don'>「マストドン」のスペルはどういう綴りになりますか?</LinkableH2>
      <p><strong>mastodon</strong>です。2つのOを使います。</p>
      <LinkableH2 id='how-do-i-get-this-on-android'>Androidではどうやって使用できますか？</LinkableH2>
      <p><a href='https://play.google.com/store/apps/details?id=com.keylesspalace.tusky'>Tusky</a>を試してみてください。</p>
      <LinkableH2 id='on-android-i-really-want-multiple-account-support'>Androidですが、複数アカウントで使用したいです</LinkableH2>
      <p><a href='https://play.google.com/store/apps/details?id=ch.kevinegli.tootyfruity221258'>TootyFruity</a>を試してみてください。</p>
      <LinkableH2 id='how-do-i-get-this-on-iphone'>iPhoneではどうやって使用できますか？</LinkableH2>
      <p><a href='https://itunes.apple.com/us/app/amaroq-for-mastodon/id1214116200'>Amaroq</a>を試してみてください。また、ブラウザを使用するという選択もあります。</p>
      <LinkableH2 id='are-there-other-mobile-desktop-cli-apps'>他のモバイル/デスクトップ/コマンドラインアプリはありますか？</LinkableH2>
      <p><Link to='/documentation/apps'>はい</Link></p>
      <LinkableH2 id='can-tusky-do-how-about-feature-and-whats-with-tuskys'>Tuskyは‘<span aria-label='あんなことは' role='img'>💇</span>’できますか？ “<span aria-label='これ' role='img'>🔥</span>”はどのような機能ですか？ また、Tuskyの “<span aria-label='それ' role='img'>⛱</span>,”とは何ですか？</LinkableH2>
      <p>Tuskyについては<a href='https://mastodon.social/@Tusky'>@Tusky@mastodon.social</a>や開発者(<a href='https://mastodon.social/@Vavassor'>@Vavassor@mastodon.social</a> と <a href='https://mastodon.social/@daycode'>@daycode@mastodon.social</a>) をフォローしたり、彼らに尋ねてみるとよいでしょう。</p>
      <LinkableH2 id='how-do-i-search'>検索はどのようにしたらいいですか？</LinkableH2>
      <div className='article--text__flex'>
        <p>ユーザーやハッシュタグは検索できますが、一般的なテキストは検索できません。 投稿画面の上にあるテキストボックスからできます。</p>
        <img src={search} alt='Search Box' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-dm-direct-message'>DM (ダイレクトメッセージ)はどうやって送れますか？</LinkableH2>
      <div className='article--text__flex'>
        <p>DMを含むトゥートのプライバシーオプションは、地球儀マークをクリックして選択します。</p>
        <img src={globe} alt="Privacy Globe" height="400"/>
      </div>
      <LinkableH2 id='i-dont-get-the-local-vs-federated-timeline-thing'>ローカルと連合タイムラインの違いが分かりません</LinkableH2>
      <p>"ローカル"に表示されるトゥートは、あなたがログインしているサーバー内のトゥートです。"連合"はあなたのサーバが受信しているすべてのトゥートです。(これは少々複雑ですが、簡単に言うと"あなたと他のローカルユーザーがフォローしている人のトゥート"です。)</p>
      <LinkableH2 id='are-there-instances-that-my-instance-doesnt-federated-with-how-do-i-know'>私のインスタンスが接続していないインスタンスがありますか？ どうやって分かりますか？</LinkableH2>
      <p>一部のインスタンスはプライベートであり、インスタンスと接続しません。あなたのインスタンスによって特定のインスタンスがブロックされている可能性もあります。あなたのインスタンスがどのように外部と連携しているかについては、インスタンスの管理者に問い合わせてください。(参照: 「<a href='#who-is-my-admin-and-how-do-i-contact-follow-them'>Who is my admin, and how do I contact/follow them?</a>」)</p>
      <LinkableH2 id='can-i-have-more-than-one-account-can-i-use-the-same-email-on-different-instances'>複数のアカウントを持つことはできますか？ 別のインスタンスで同じメールを使用することはできますか？</LinkableH2>
      <p>もちろんです！あなたが参加したい別のインスタンスを見つけたら、登録してみてください。ただし、すべてのインスタンスが新規登録を受け付けているわけではなく、また誰かが既にあなたが利用したいユーザー名を取得している可能性もあります。</p>
      <LinkableH2 id='can-i-import-the-people-i-follow-to-another-instance'>私がフォローする人を別のインスタンスにインポートすることはできますか？</LinkableH2>
      <p>はい。 これは、移行先のインスタンスに応じて時間がかかることがあります。 問題がある場合は、移行先のインスタンスの管理者に相談してください。 あなたの移行先のインスタンスがあなたがフォローしている人のインスタンスと接続していない場合、それらのフォローは移行できないかもしれません。</p>
      <LinkableH2 id='how-do-i-prevent-people-from-impersonating-me'>他の人が私に偽装するのを防ぐにはどうすればいいですか？</LinkableH2>
      <p>誰でも任意のインスタンスでユーザー名を作成できるため、他のインスタンスで同じユーザー名を使用できないようにすることは不可能です。一部の人は、自分が誰であるかを証明できるように自分専用のインスタンスを運用したり、<a href='https://keybase.io/'>Keybase</a>を使用しています。</p>
      <LinkableH2 id='how-do-i-enable-two-factor-authentication'>二段階認証を使うにはどうしたら良いですか？</LinkableH2>
      <p>インスタンスでサポートされている場合、[ユーザー設定]の[二段階認証]から利用できます。<a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/2FA.md'>マストドンの二段階認証</a>では、QRコードまたは文字列キーで設定を行うことができます。</p>
      <LinkableH2 id='why-cant-i-see-someones-toots'>なぜある人のトゥートを見ることができないのですか？</LinkableH2>
      <p>これにはいくつかの理由が考えられます。Mastodonでは投稿ごとに公開範囲を限定することができます。非公開の投稿を表示するには、あなたはそのアカウントのフォロワーでなければなりません。さらに、誰かがあなたをブロックした場合、その人の非公開投稿を見ることはできなくなります。</p>
      <LinkableH2 id='whats-trending'>トレンドを調べるには？</LinkableH2>
      <p>トレンドを調べるには、<a href='https://mastodon.social/@TrendingBot'>@TrendingBot@mastodon.social</a>をフォローしてください。</p>
      <LinkableH2 id='whats-cw'>"CW"とは何ですか？</LinkableH2>
      <p>"CW"は 「Content Warning」の略で「閲覧注意」の意味です。ネタバレなどの理由でトゥート本文を隠したい場合に使うとよいでしょう。</p>
      <LinkableH2 id='how-does-the-mark-image-as-sensitive-feature-work-nsfw'>「画像を閲覧注意としてマークする」機能("NSFW")はどのように機能しますか？</LinkableH2>
      <p>カメラアイコンをクリックして投稿に画像を追加すると、通常 "NSFW" と書かれたボタンが追加されます。これをクリックすると、あなたの画像を「閲覧注意」の警告表示の後ろに隠し、他の人はこれをクリックしないと画像を見ることができなくなります。</p>
      <LinkableH2 id='whats-with-the-pineapples'>パイナップルとは何ですか？</LinkableH2>
      <p>それはおいしくて、みんなが笑顔になります。そのままの意味です。</p>
      <LinkableH2 id='i-see-awoo-a-lot-what-does-that-mean'>"Awoo"をよく見ます、それはどういう意味ですか？</LinkableH2>
      <p>それを大声で叫んでみましょう。楽しいよ！</p>
      <LinkableH2 id='how-do-i-delete-my-account'>アカウントを削除するにはどうすればいいですか？</LinkableH2>
      <p>現時点では、インスタンスの管理者にその旨を伝える必要があります。</p>
      <LinkableH2 id='who-is-my-admin-and-how-do-i-contact-follow-them'>管理者は誰ですか？どのように連絡またはフォローできますか？</LinkableH2>
      <p><strong>スタート</strong>をクリックし、その後<strong>このインスタンスについて</strong>をクリックすると、そのインスタンスの情報ページが表示されます。設定されていれば、そこに連絡先が記されています。</p>
      <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
      <img src={gettingStartedExtendedInformation} alt='Extended Information' height='200'/>
      <img src={admin} alt='Admin Info' height='200'/>
      <LinkableH2 id='wow-i-keep-seeing-offensive-stuff-from-a-particular-instance-is-there-a-way-to-block-all-of-it'>特定のインスタンスから攻撃的なものが送られ続けています！これらを<i>全て</i>ブロックする方法はありますか？</LinkableH2>
      <div className='article--text__flex'>
        <p>残念ながら、あなた自身でそういったことを行うことはできません。しかしインスタンス管理者はできるので、彼らに連絡してください。</p>
      </div>
      <LinkableH2 id='is-mastodon-moderated'>マストドンはモデレートされていますか？</LinkableH2>
      <p>各インスタンスはそれぞれのやり方でモデレーションを行い、それぞれに独自のモデレータがいます。あなたがいるインスタンスのルールが何であるか尋ねるのもよいでしょう。通常、ルールはインスタンスのページ(<a href='https://mastodon.social/about/more'>例えばMastodon.socialの"このインスタンスについて</a>)に掲載されています。</p>
      <LinkableH2 id='how-do-i-report-offensive-content'>攻撃的なコンテンツを報告するにはどうすればよいですか？</LinkableH2>
      <p>各投稿の下に、3つの点が並んだボタンが表示されています。これをクリックすると、投稿を展開したり、モデレーターや管理者に報告したりできます。コンテンツを報告するときは、モデレータが判断を必要とするすべての投稿を選択してください。</p>
      <LinkableH2 id='how-do-i-handle-harrasment'>他人から嫌がらせを受けた場合はどうすればよいですか？</LinkableH2>
      <p>あなたのインスタンスの管理者がこれに対応してくれるのであれば、投稿の報告機能で嫌がらせを知らせることができます。 これは投稿の下の三点リーダ("...")ボタンから利用できますが、管理者に直接相談してもよいでしょう。</p>
      <LinkableH2 id='will-my-private-messages-reach-people-on-other-instances'>プライベートメッセージは他のインスタンスの人にも届くでしょうか？</LinkableH2>
      <p>はい、届きます。ただし、プライベートメッセージだからといって<i>安全というわけではありません</i>。 機密情報を送信することは避けてください。</p>
      <LinkableH2 id='what-does-adjust-status-privacy-mean-and-how-does-it-work'>「投稿のプライバシー設定を変更する」とは何を意味し、どのように機能しますか？</LinkableH2>
      <p>トゥートエリアの下の<strong>地球儀</strong>アイコンからあなたの投稿を見ることができる人を変更することができます。それぞれの設定は次のような意味を持ちます：</p>
      <table>
        <thead>
          <tr>
            <th>プライバシー設定</th>
            <th>配信先</th>
            <th>見える人</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>公開</td>
            <td>グローバル、公開タイムライン</td>
            <td>全員</td>
            <td>連合。 他のインスタンスの人にも表示されるでしょう。</td>
          </tr>
          <tr>
            <td>未収載</td>
            <td>フォロワーのみ</td>
            <td>全員</td>
            <td>ブーストされたり、他のインスタンスで見ることができます。</td>
          </tr>
          <tr>
            <td>非公開</td>
            <td>フォロワーのみ</td>
            <td>フォロワーのみ</td>
            <td>ブーストすることはできません。</td>
          </tr>
          <tr>
            <td>ダイレクト</td>
            <td>宛先ユーザーのみ</td>
            <td>宛先ユーザーのみ</td>
            <td>電子メールのようなもの</td>
          </tr>
        </tbody>
      </table>
      <LinkableH2 id='can-i-use-hashtags-should-i'>ハッシュタグは使えますか？ 使ったほうがいいですか？</LinkableH2>
      <p>はい！ハッシュタグは話題を追いかけるのに役立ち、往々にして楽しいものですが、いくつかのタグは議論の種になる投稿を見たくない人にも役立ちます。例えば #POLITICS （政治）、 #HEALTH （健康）、 #DEPRESSION （憂鬱）、#LEWD （わいせつ）や #NSFW （職場での閲覧に適さない）といった話題についての公開投稿に使うとよいでしょう。CW（Content Warning）はこういった投稿に役立つ機能でもあります。</p>
      <LinkableH2 id='how-do-i-get-verified-with-a'>認証マーク<span aria-label='verified account mark' role='img'>“✅”</span>はどのようにして付けられますか？</LinkableH2>
      <p><span aria-label='verified account mark' role='img'>“✅”</span>はただの絵文字です。マストドンにはアカウントの認証制度はありません。<span aria-label='verified account mark' role='img'>“✅”</span>をコピーしてプロフィールにペーストすれば希望通りになるでしょう。</p>
      <LinkableH2 id='can-i-edit-a-toot'>トゥートを編集することはできますか？</LinkableH2>
      <p>残念ながらできません。しかし一度削除して改めて投稿し直すことはできます。</p>
      <LinkableH2 id='if-i-delete-a-post-does-it-get-deleted-everywhere'>投稿を削除した場合、投稿はどこでも削除されますか？</LinkableH2>
      <p>投稿を削除すると、ローカルタイムラインから削除されます。 しかし、すでにブーストされている場合は、連合や他のインスタンス上で見られるかもしれません。</p>
      <LinkableH2 id='how-do-i-view-my-favourite-toots'>お気に入りにしたトゥートはどうやって見られますか？</LinkableH2>
      <div className='article--text__flex'>
        <div>
          <p><strong>スタート</strong>から<strong>お気に入り</strong>をクリックします。</p>
        </div>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedFavourites} alt='Favourites' height='200'/>
      </div>
      <LinkableH2 id='can-i-quote-a-toot'>引用トゥートはできますか？</LinkableH2>
      <p>現時点ではできません。 テキストを手動でコピー＆ペーストして引用する必要があります。</p>
      <LinkableH2 id='if-my-instance-shuts-down-forever-do-i-lose-my-data'>インスタンスが永久にシャットダウンされた場合、データは失われますか？</LinkableH2>
      <p>はい、その通りです。</p>
      <LinkableH2 id='can-i-save-my-data'>自分のデータを保存できますか？</LinkableH2>
      <div className='article--text__flex'>
        <p>はい、いくつかについてはできます。<strong>ユーザー設定 -> データのエクスポート</strong>から行えます。</p>
        <img src={preferencesDataExport} alt='Data Export' height='400'/>
      </div>
      <LinkableH2 id='i-cant-see-toots-of-a-remote-user-under-their-bio'>リモートユーザーのプロフィールの下にその人のトゥートが表示されません</LinkableH2>
      <div className='article--text__flex'>
        <p>プロフィール画面のアバターをクリックすると、相手のインスタンス上のユーザーページを開くことができます。そこでその人の公開トゥートを見ることができるでしょう。</p>
        <img src={profileAvatarClick} alt='Click their avatar' height='200'/>
        <img src={profileWebpageURL} alt='Native webpage view' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-see-threads'>スレッドはどのように見えますか？</LinkableH2>
      <p>トゥート本文をクリックし、<strong>拡大表示</strong>します。これにより、連なっているトゥートが表示されます。</p>
      <LinkableH2 id='how-do-i-link-to-toots'>トゥートへのリンクはどうしたら良いですか？</LinkableH2>
      <p>トゥートには2つのパーマリンクがあります。タイムライン上のトゥートではタイムスタンプを<strong>右クリック</strong>します。拡大されたトゥート画面では、下の日付表示を<strong>右クリック</strong>します。</p>
      <div className='article--text__center'>
        <img src={inlineTootTimestampLink} alt='Inline View Permalink' height='200'/>
        <img src={expandedViewPermaLink} alt='Expanded View Permalink' height='200'/>
      </div>
      <LinkableH2 id='how-do-i-link-to-my-profile'>プロフィールにリンクするにはどうしたら良いですか？</LinkableH2>
      <div className='article--text__flex'>
        <p>Firefoxでは<strong>あなたのアバター画像</strong>を右クリックして、<strong>リンク先のコピー</strong>を選択します。</p>
        <img src={linkToProfile} alt='URL for Profile' height='200'/>
      </div>
      <LinkableH2 id='does-clicking-a-hashtag-show-local-results-or-federated'>#hashtag をクリックするとローカルでの検索結果が表示されますか？それとも連合での検索結果が表示されますか？</LinkableH2>
      <p>連合での検索結果が表示されます。</p>
      <LinkableH2 id='when-i-mute-a-boost-who-gets-muted-the-booster-or-the-original-author'>ブースト投稿に対してミュートした場合、ブーストした人とオリジナルの投稿者のどちらがミュートされますか？</LinkableH2>
      <p>オリジナルの投稿者です。</p>
      <LinkableH2 id='can-i-preview-the-people-on-an-instance-and-what-theyre-saying'>あるインスタンスにどんな人がいるか、何を話しているかをプレビューすることはできますか？</LinkableH2>
      <p>はい、<a href='http://www.unmung.com/mastoview?url=mastodon.social&view=local'>instance preview tool</a>を試してみてください。</p>
      <LinkableH2 id='how-do-i-hide-the-toots-of-launguages-i-dont-understand'>私が読めない言語のトゥートを非表示にするにはどうしたらいいですか？</LinkableH2>
      <p><strong>スタート</strong>から<strong>ユーザー設定</strong>をクリックし、<strong>除外する言語</strong>から非表示にしたい言語にチェックを入れ、<strong>変更を保存</strong>ボタンを押してください。</p>
      <LinkableH2 id='is-automatic-translation-supported'>自動翻訳はサポートされていますか？</LinkableH2>
      <p>いいえ、まだです。しかし<a href='https://github.com/tomouchuu/mastodon-translate'>Firefox TamperMonkey script</a>によってで実現できるかもしれません。</p>
      <LinkableH2 id='do-toots-automatically-broadcast-federated-or-stay-local'>トゥートは自動的に連合に向けて配信されますか？ローカルに留まりますか？</LinkableH2>
      <p>デフォルトではトゥートは連合に配信(公開)され、どちらのタイムラインにも表示されます。デフォルトの公開範囲は、<strong>設定 -> ユーザー設定 -> 投稿プライバシー</strong>から変更することができます。</p>
      <div className='article--text__center'>
        <img src={toolbarGettingStarted} alt='Getting Started Button' height='200'/>
        <img src={gettingStartedPreferences} alt='Preferences' height='200'/>
        <img src={preferencesPostPrivacy} alt='Post Privacy' height='400'/>
      </div>
      <LinkableH2 id='what-is-the-default-image-upload-size-limit-and-how-can-i-change-it'>画像アップロードのサイズ制限のデフォルトはいくつですか？どうすれば変更できますか？</LinkableH2>
      <p>デフォルトの制限は 8MB です。これは<code>mastodon/app/models/media_attachment.rb</code>で次の行を編集することで変更できます:</p>
      <code>validates_attachment_size :file, less_than: 8.megabytes</code>
      <p>制限サイズを変更するには、8を別の整数に変更します。</p>
      <LinkableH2 id='how-do-i-start-my-own-instance'>自分のインスタンスを立ちあげるにはどうすればいいですか？</LinkableH2>
      <p>See the <a href='https://github.com/tootsuite/documentation/blob/master/README.md'>User Guide</a>の “Running Mastodon” の見出しを参照してください。</p>
      <LinkableH2 id='i-found-a-bug-or-have-a-suggestion-for-mastodon'>バグを発見したり、マストドンに提案がある場合はどうしたら良いですか？</LinkableH2>
      <p><a href='https://github.com/tootsuite/mastodon/issues'>MastodonのIssue Tracker</a>にバグを報告したり、提案を提出することができます。</p>
      <LinkableH2 id='hey-i-love-mastodon-faqs-can-i-have-more'>マストドンのよくある質問が好きです！もっと他にないですか？</LinkableH2>
      <p>以下に、個別にヘルプを作成してくれている人たちがいます。</p>
      <ul>
        <li><a href='https://hastebin.com/raw/xuqogukimu'>https://hastebin.com/raw/xuqogukimu</a></li>
        <li><a href='https://github.com/ThomasLeister/masto-faq'>https://github.com/ThomasLeister/masto-faq</a></li>
        <li><a href='http://mastoguide.info/Pages/FAQindex.html'>http://mastoguide.info/Pages/FAQindex.html</a></li>
        <li><a href='https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7'>https://medium.com/tebelorg/my-first-10-days-on-mastodon-fediverse-f6f1d73db8d7</a></li>
        <li><a href='https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md'>https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/FAQ.md</a></li>
      </ul>
      <footer>
        <p>このFAQは、<a href='https://mastodon.social/@Gargron'>@Gargron</a>, <a href='https://mastodon.social/@Raccoon'>@raccoon</a>, <a href='https://octodon.social/@upside'>@upside</a>, <a href='https://mastodon.social/@zacanger'>@zacanger</a>, <a href='https://octodon.social/@NthTensor'>@NthTensor</a>, <a href='https://mastodon.social/@ametlles'>@ametlles</a>および連合の多くの方々の協力によって作成されました。</p>
      </footer>
    </div>
  </div>
);

export default Faq;
