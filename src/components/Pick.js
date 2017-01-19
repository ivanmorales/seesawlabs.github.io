import React, { Component } from 'react';
import { Link } from 'react-router';

import "./Pick.scss";

export class SSLPick extends Component {
  render() {
    const {
      action
    } = this.props;

    let content = <span>{this.props.children}</span>;

    if (action) {
      content = (
        <Link to={action}>
          <span>{this.props.children}</span>
        </Link>
      );
    }

    return (
      <div className={`ssl--pick ${this.props.className} animated swing`}>{content}</div>
    );
  }
};
