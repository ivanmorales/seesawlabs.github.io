import React, { Component } from 'react';
import {
  Col,
  Grid,
  Row,
} from 'react-bootstrap';

import {
  Title
} from './../ui';

import './Focus.scss';

export class Focuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: this.getChildrenArray(),
    };
  }
  getChildrenArray() {
    const { toArray } = React.Children;
    return toArray(this.props.children);
  }
  render() {
    return (
      <section className={`ssl--focuses ${this.props.className}`}>
        <Grid>
          <Row>
            {this.state.kids.map((kid, i) => {
              return (
                <Col key={i} xs={12} sm={12 / this.state.kids.length}>
                  {kid}
                </Col>
              );
            })}
          </Row>
        </Grid>
      </section>
    );
  }
}

export class Focus extends Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <div className={`ssl--focus ${this.props.className}`}>
        <Title header="h3">{title}</Title>
        {this.props.children}
      </div>
    );
  }
};
