import React, { Component } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div>{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
