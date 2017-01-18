import React, { Component } from 'react';
import {
  Footer,
  Container,
  Content,
  Image,
  Columns,
  Column
} from 're-bulma';

import FontAwesome from 'react-fontawesome';

import logo from './../assets/images/nav-logo.png';

export default class SSLFooter extends Component {
  render() {
    const year = (new Date()).getFullYear();

    return (
      <Footer>
        <Container>
          <Content>
            <Columns>
              <Column>
                <p>© {year} SeeSaw Labs. All Right Reserved</p>
              </Column>
              <Column>
                <Image src={logo}/>
              </Column>
              <Column>
                <a href="#"><FontAwesome name="linkedin" /></a>
                <a href="#"><FontAwesome name="twitter" /></a>
              </Column>
            </Columns>
          </Content>
        </Container>
      </Footer>
    );
  }
};
