import React, { Component } from 'react';
import {
  Image,
  Media,
} from 'react-bootstrap';

import {
  Title,
  Section,
} from './../ui';

import defaultAvatar from './../assets/images/default-avatar.jpg';

export class Quote extends Component {
  render() {
    return (
      <Section className="ssl-quote is-centered has-text-centered">
        {this.props.children}
      </Section>
    );
  }
};

export class Text extends Component {
  render() {
    return (
      <Title>{this.props.children}</Title>
    );
  }
};

export class Who extends Component {
  render() {
    const {
      firstName,
      lastName,
      avatar,
      from
    } = this.props;

    return (
      <Media>
        <Media.Left>
          <Image src={avatar || defaultAvatar}/>
        </Media.Left>
        <Media.Body>
          <p>{firstName}, {lastName}<br/>{from}</p>
        </Media.Body>
      </Media>
    );
  }
};
