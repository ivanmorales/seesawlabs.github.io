import React,{ Component } from 'react';

import {
  Button as BootstrapButton,
} from 'react-bootstrap';

export class Button extends Component {
  render() {
    return (
      <BootstrapButton className={`ssl--btn ${this.props.className}`} {...this.props}>{this.props.children}</BootstrapButton>
    );
  }
};

export class BackgroundImage extends Component {
  render() {
    const {
      src,
      size = 'cover',
      position = 'center',
    } = this.props;

    const style = {
      backgroundImage: `url(${src})`,
      backgroundSize: size,
      backgroundPosition: position,
    };

    return (
      <div style={style} className={`ssl--background-image ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
};
