import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './../views/App';
import Home from './../views/Home';
import OurWork from './../views/OurWork';
import OurProcess from './../views/OurProcess';
import OurCrew from './../views/OurCrew';
import Contact from './../views/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="work" component={OurWork}/>
    <Route path="process" component={OurProcess}/>
    <Route path="crew" component={OurCrew}/>
    <Route path="connect" component={Contact}/>
  </Route>
);
