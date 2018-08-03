import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import classNames from 'classnames';

import Home from './Home';
import Sponsorship from './Sponsorship';
import Imprint from './Imprint';
import ScrollToTop from './ScrollToTop';
import Title from './Title';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import pl from 'react-intl/locale-data/pl';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';
import ja from 'react-intl/locale-data/ja';
import pt from 'react-intl/locale-data/pt';
import zh from 'react-intl/locale-data/zh';
import ru from 'react-intl/locale-data/ru';
import it from 'react-intl/locale-data/it';
import ar from 'react-intl/locale-data/ar';
import tr from 'react-intl/locale-data/tr';

addLocaleData([...en, ...pl, ...fr, ...es, ...ja, ...de, ...pt, ...zh, ...ru, ...it, ...ar, ...tr]);

const messages = require.context('./locales/', false, /\.json$/);

const messagesForLocale = locale => messages(`./${locale}.json`);

const App = ({ usersLocale }) => (
  <IntlProvider locale={usersLocale} messages={messagesForLocale(usersLocale)}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)}>
          <Route exact path='/' component={Home} />
          <Route path='/sponsors' component={Sponsorship} />
          <Route path='/imprint' component={Imprint} />
          <Title />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

export default App;
