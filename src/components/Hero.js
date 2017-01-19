import React, { Component } from 'react';
import {
  Title,
  Container
} from './../ui';

import {
  Jumbotron
} from 'react-bootstrap';

import './Hero.scss';

export class Hero extends Component {
  render() {
    const {
      title,
      subTitle,
      backgroundImage = 'hero-1'
    } = this.props;

    return (
      <Jumbotron size="isLarge" color="isDark" className={'hero ' + backgroundImage}>
        <Container>
            <Title size="is1">{title}</Title>
            <Title header="h3">{subTitle}</Title>
            {this.props.children}
        </Container>
      </Jumbotron>
    );
  }
};
