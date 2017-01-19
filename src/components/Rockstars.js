import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image
} from 'react-bootstrap';

import {
  Section,
} from './../ui';

export class Rockstars extends Component {
  render() {
    return (
      <Section>
        <Grid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </Section>
    );
  }
};

export class Rockstar extends Component {
  render() {
    const {
      avatar,
      name
    } = this.props;

    return (
      <Col size="is2">
        <Image className="img-circle" src={avatar} title={name} />
      </Col>
    );
  }
};
