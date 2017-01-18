import React, { Component } from 'react';
import {
  Hero as BulmaHero,
  HeroBody,
  Title,
  Subtitle,
  Container
} from 're-bulma';
import './Hero.scss';

export class Hero extends Component {
  render() {
    const {
      title,
      subTitle,
      backgroundImage = 'hero-1'
    } = this.props;

    return (
      <BulmaHero size="isLarge" color="isDark" className={'hero ' + backgroundImage}>
        <Container>
          <HeroBody>
            <Title>{title}</Title>
            <Subtitle>{subTitle}</Subtitle>
            {this.props.children}
          </HeroBody>
        </Container>
      </BulmaHero>
    );
  }
};
