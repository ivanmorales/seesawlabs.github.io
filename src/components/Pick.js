import React, { Component } from 'react';
import { Link } from 'react-router';

import "./Pick.scss";

export class SSLPick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swing: true
    };

  }
  swingMe() {
    this.setState({
      swing: !this.state.swing
    });
  }

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
      <div
        className={`ssl--pick ${this.props.className} animated ${this.state.swing ? 'swing' : ''}`}
        onMouseOver={this.swingMe.bind(this)}
        onMouseLeave={this.swingMe.bind(this)}
        >{content}</div>
    );
  }
};
