import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import classNames from 'classnames';

import AsyncDocumentationRoute from './AsyncDocumentationRoute';
import AsyncRoute from './AsyncRoute';
import PreparedIntlProvider from './PreparedIntlProvider';
import ScrollToTop from './ScrollToTop';
import Title from './Title';

const App = ({ usersLocale }) => (
  <PreparedIntlProvider locale={usersLocale}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)}>
          <AsyncDocumentationRoute exact path='/documentation/apps' directory='apps' />
          <AsyncDocumentationRoute exact path='/documentation/faq' directory='faq' />
          <AsyncDocumentationRoute exact path='/documentation/user-guide' directory='user-guide' />
          <AsyncRoute exact path='/' module='Home' />
          <AsyncRoute path='/sponsors' module='Sponsorship' />
          <Title />
        </div>
      </ScrollToTop>
    </Router>
  </PreparedIntlProvider>
);

export default App;
