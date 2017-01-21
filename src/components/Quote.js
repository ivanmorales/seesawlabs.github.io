import React, { Component } from 'react';
import {
  Image,
  Media,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

import {
  Section,
} from './../ui';

import defaultAvatar from './../assets/images/default-avatar.jpg';
import './Quote.scss';

export class Quote extends Component {
  render() {
    const {
      sm = 12,
      md = 10,
      lg = 8
    } = this.props;

    return (
      <Section className="ssl--quote">
        <Grid>
          <Row>
            <Col
              sm={sm} smOffset={(12 - sm)/2}
              md={md} mdOffset={(12 - md)/2}
              lg={lg} lgOffset={(12 - lg)/2}
              >
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
};

export class QuoteText extends Component {
  render() {
    return (
      <p>"{this.props.children}"</p>
    );
  }
};

export class QuoteWho extends Component {
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
          <p>{firstName} {lastName}<br/><strong>{from}</strong></p>
        </Media.Body>
      </Media>
    );
  }
};
