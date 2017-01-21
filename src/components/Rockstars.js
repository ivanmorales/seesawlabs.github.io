import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Image,
} from 'react-bootstrap';

import {
  Section,
  Title,
  Button
} from './../ui';

import rockstarsImg from './../assets/images/rockstars.png';
import './Rockstars.scss';

export class Rockstars extends Component {
  render() {
    return (
      <Section className="ssl--rockstars">
        <Title header="h2">Some of our Favorite Rockstars</Title>
        <div className="text-center">
          <Image src={rockstarsImg} className="clearfix" />
          <Link to="connect">
            <Button size="isMedium">Let's Connect</Button>
          </Link>
        </div>
      </Section>
    );
  }
};
