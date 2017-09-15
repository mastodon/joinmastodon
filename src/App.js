import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Sponsorship from './Sponsorship';

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route path='/sponsors' component={Sponsorship} />
    </div>
  </Router>
);

export default App;
