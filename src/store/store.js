import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import sections from './../reducers/SectionReducer';

export default createStore(
  combineReducers({
    sections
  }),
  {},
  applyMiddleware(logger(), thunk)
);
