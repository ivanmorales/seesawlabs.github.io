import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Footer,
  Container,
} from './../ui';

import {
  Grid,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';

import logo from './../assets/images/desktopLogo.svg';
import './Footer.scss';


export default class SSLFooter extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <Footer className="ssl--footer">
        <Container>
          <Grid>
            <Row>
              <Col sm="4">
                <p>© {year} SeeSaw Labs. All Right Reserved</p>
              </Col>
              <Col sm="4">
                <Link to=""><Image src={logo} className="ssl--footer-logo"/></Link>
              </Col>
              <Col sm="4" className="text-right">
                <a href="#"><FontAwesome name="linkedin" /></a>
              </Col>
            </Row>
          </Grid>
        </Container>
      </Footer>
    );
  }
};
