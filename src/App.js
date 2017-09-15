import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Sponsorship from './Sponsorship';
import ScrollToTop from './ScrollToTop';

const App = () => (
  <Router>
    <ScrollToTop>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route path='/sponsors' component={Sponsorship} />
      </div>
    </ScrollToTop>
  </Router>
);

export default App;
