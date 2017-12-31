import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';

const Index = () => (
  <div>
    <div className='intro'>
      <Navigation />
      <h1>ドキュメント</h1>
    </div>
    <div className='article documentation'>
      <Link className='feature container' to='/documentation/faq'>
        <div className='right visual'><i className='ion-chatbubbles' /></div>
        <div className='left text'>
          <h2>よくある質問</h2>
          <p>特にMastodonを使っているときに疑問に思ったことがあったら、このページに答えがあるかもしれません。</p>
        </div>
      </Link>
      <Link className='feature container' to='/documentation/user-guide'>
        <div className='right visual'><i className='ion-android-contacts' /></div>
        <div className='left text'>
          <h2>ユーザーズガイド</h2>
          <p>ユーザーズガイドは様々な事柄を網羅する、全てのユーザーのための案内を提供します。</p>
        </div>
      </Link>
      <Link className='feature container' to='/documentation/apps'>
        <div className='right visual'><i className='ion-android-apps' /></div>
        <div className='left text'>
          <h2>アプリ一覧</h2>
          <p>携帯端末でMastodonを使うつもりなら見ておいて損はありません。</p>
        </div>
      </Link>
      <a className='feature container' href='https://github.com/tootsuite/documentation'>
        <div className='right visual'><i className='ion-ios-paper' /></div>
        <div className='left text'>
          <h2>GitHub上のドキュメント</h2>
          <p>GitHub上のドキュメントはもっと踏み込んだ情報や開発者、サーバー管理者向けの情報を提供します。</p>
        </div>
      </a>
    </div>
  </div>
);

export default Index;
