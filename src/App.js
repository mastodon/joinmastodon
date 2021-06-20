import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classNames from 'classnames';

import Home from './Home';
import Sponsorship from './Sponsorship';
import Imprint from './Imprint';
import BrowseApps from './BrowseApps';
import ScrollToTop from './ScrollToTop';
import Covenant from './Covenant';
import BrowseCommunities from './BrowseCommunities';
import PrivacyPolicy from './PrivacyPolicy';

import { addLocaleData, IntlProvider } from 'react-intl';
import ar from 'react-intl/locale-data/ar';
import ca from 'react-intl/locale-data/ca';
import cs from 'react-intl/locale-data/cs';
import cy from 'react-intl/locale-data/cy';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import eu from 'react-intl/locale-data/eu';
import fi from 'react-intl/locale-data/fi';
import fr from 'react-intl/locale-data/fr';
import he from 'react-intl/locale-data/he';
import it from 'react-intl/locale-data/it';
import ja from 'react-intl/locale-data/ja';
import ko from 'react-intl/locale-data/ko';
import nl from 'react-intl/locale-data/nl';
import no from 'react-intl/locale-data/no';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import ru from 'react-intl/locale-data/ru';
import sk from 'react-intl/locale-data/sk';
import sq from 'react-intl/locale-data/sq';
import sv from 'react-intl/locale-data/sv';
import th from 'react-intl/locale-data/th';
import tr from 'react-intl/locale-data/tr';
import uk from 'react-intl/locale-data/uk';
import zh from 'react-intl/locale-data/zh';

addLocaleData([
  ...ar,
  ...ca,
  ...cs,
  ...cy,
  ...de,
  ...en,
  ...es,
  ...eu,
  ...fi,
  ...fr,
  ...he,
  ...it,
  ...ja,
  ...ko,
  ...nl,
  ...no,
  ...pl,
  ...pt,
  ...ru,
  ...sk,
  ...sq,
  ...sv,
  ...th,
  ...tr,
  ...uk,
  ...zh,
]);

const messages = require.context('./locales/', false, /\.json$/);

const messagesForLocale = locale => messages(`./${locale}.json`);

const App = ({ usersLocale }) => (
  <IntlProvider locale={usersLocale} messages={messagesForLocale(usersLocale)}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)} lang={usersLocale} dir={usersLocale === 'ar' ? 'rtl' : 'ltr'}>
          <Route exact path='/' component={Home} />
          <Route exact path='/communities' component={BrowseCommunities} />
          <Route path='/communities/:category' component={BrowseCommunities} />
          <Route path='/sponsors' component={Sponsorship} />
          <Route path='/imprint' component={Imprint} />
          <Route path='/apps' component={BrowseApps} />
          <Route path='/covenant' component={Covenant} />
          <Route path='/ios/privacy' component={PrivacyPolicy} />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

App.propTypes = {
  usersLocale: PropTypes.string.isRequired,
};

export default App;
