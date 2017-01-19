import React, { Component } from 'react';

import Navigation from './../components/Navigation';
import Footer from './../components/Footer';
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
