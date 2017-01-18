import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './../components/App';
import Home from './../components/Home';
import OurWork from './../components/OurWork';
import OurProcess from './../components/OurProcess';
import OurCrew from './../components/OurCrew';
import Contact from './../components/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="our-work" component={OurWork}/>
    <Route path="our-process" component={OurProcess}/>
    <Route path="our-crew" component={OurCrew}/>
    <Route path="contact" component={Contact}/>
  </Route>
);
