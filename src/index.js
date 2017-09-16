import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import AppContainer from './AppContainer';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
