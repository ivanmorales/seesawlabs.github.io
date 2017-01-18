import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import sections from './../reducers/SectionReducer';

export default createStore(
  combineReducers({
    sections
  }),
  {},
  applyMiddleware(logger())
);
