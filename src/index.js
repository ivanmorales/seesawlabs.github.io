import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import Routes from './config/Routes';
import { Provider } from 'react-redux';
import store from './store/store';
import BrowserHistory from './config/History';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory}>
      {Routes}
    </Router>
  </Provider>, document.getElementById('root'));
