import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import classNames from 'classnames';

import AsyncRoute from './AsyncRoute';
import PreparedIntlProvider from './PreparedIntlProvider';
import ScrollToTop from './ScrollToTop';
import Title from './Title';

const App = ({ usersLocale }) => (
  <PreparedIntlProvider locale={usersLocale}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)}>
          <AsyncRoute exact path='/' module='Home' />
          <AsyncRoute path='/sponsors' module='Sponsorship' />
          <Title />
        </div>
      </ScrollToTop>
    </Router>
  </PreparedIntlProvider>
);

export default App;
