import React, { Component } from 'react';

import {
  Title
} from './../ui';

import './Focus.scss';

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
