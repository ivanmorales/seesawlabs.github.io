import React, { Component } from 'react';
import Headroom from 'react-headroom';

import {
  Image,
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

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
    const routes = ['Work', 'Process', 'Crew', 'Connect'];
    // const toggle = this.state.toggle ? '__re-bulma_is-active' : '';

    return (
      <Headroom>
          <Navbar className="ssl--navigation" staticTop>
            <Navbar.Header>
              <LinkContainer to="">
                <NavItem>
                  <Image src={logo} className="ssl--nav-logo" alt="logo" />
                </NavItem>
              </LinkContainer>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="pull-right">
              <Nav>
                {routes.map( (route, i) => {
                  let routeTo = route.toLowerCase().replace(/\W+/,'-');
                  return (
                    <LinkContainer key={i} to={routeTo}>
                      <NavItem onClick={this.toggleNavigation.bind(this)} className={'ssl--nav-item ssl--nav-item-' + routeTo}>
                        <span>{route.toUpperCase()}</span>
                      </NavItem>
                    </LinkContainer>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </Headroom>
    );
  }
};

export default Navigation;
