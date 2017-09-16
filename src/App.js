import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Sponsorship from './Sponsorship';
import ScrollToTop from './ScrollToTop';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);

const messages = require.context('./locales/', false, /\.json$/);

const messagesForLocale = locale => messages[`./${locale}.json`];

const App = ({ usersLocale }) => (
  <IntlProvider locale={usersLocale} messages={messagesForLocale(usersLocale)}>
    <Router>
      <ScrollToTop>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route path='/sponsors' component={Sponsorship} />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

export default App;
