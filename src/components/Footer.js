import React, { Component } from 'react';
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

import logo from './../assets/images/nav-logo.png';

export default class SSLFooter extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <Footer>
        <Container>
          <Grid>
            <Row>
              <Col>
                <p>© {year} SeeSaw Labs. All Right Reserved</p>
              </Col>
              <Col>
                <Image src={logo}/>
              </Col>
              <Col>
                <a href="#"><FontAwesome name="linkedin" /></a>
              </Col>
            </Row>
          </Grid>
        </Container>
      </Footer>
    );
  }
};
