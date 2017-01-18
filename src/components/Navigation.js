import React, { Component } from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';

import {
  Nav,
  NavGroup,
  NavItem,
  NavToggle
} from 're-bulma';

import logo from './../assets/images/nav-logo.png';
import './Navigation.scss';

class Navigation extends Component {
  constructor(args) {
    super(args);
    this.state = {
      toggle: false
    };
  }
  toggleNavigation() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  render() {
    const routes = ['Our Work', 'Our Process', 'Our Crew', 'Contact'];
    const toggle = this.state.toggle ? '__re-bulma_is-active' : '';

    return (
      <Headroom>
        <Nav className="ssl--navigation">
          <NavGroup align="left">
            <NavItem isBrand>
              <Link to=""><img src={logo} className="ssl--nav-logo" alt="logo" /></Link>
            </NavItem>
          </NavGroup>
          <NavToggle onClick={this.toggleNavigation.bind(this)}/>
          <NavGroup align="right" isMenu id="nav-menu" className={`ssl--nav-group ${toggle}`}>
            {routes.map( (route, i) => {
              let routeTo = route.toLowerCase().replace(/\W+/,'-');
              if (route === 'Home') {
                routeTo = '';
              }
              return (
                <NavItem key={i} onClick={this.toggleNavigation.bind(this)}>
                  <Link to={routeTo} className="ssl--nav-item">{route}</Link>
                </NavItem>
              );
            })}
          </NavGroup>
        </Nav>
      </Headroom>
    );
  }
};

export default Navigation;
