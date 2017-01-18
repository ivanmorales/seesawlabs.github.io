import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './config/Routes';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>, document.getElementById('root'));
