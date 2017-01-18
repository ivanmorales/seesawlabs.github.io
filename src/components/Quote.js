import React, { Component } from 'react';
import {
  Title,
  Content,
  Section,
  Image,
  Media,
  MediaLeft,
  MediaContent
} from 're-bulma';

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
        <MediaLeft>
          <Image
            src={avatar || defaultAvatar}
            size="is32X32"
            ratio="isSquare"/>
        </MediaLeft>
        <MediaContent>
          <Content>
            <p>{firstName}, {lastName}<br/>{from}</p>
          </Content>
        </MediaContent>
      </Media>
    );
  }
};
