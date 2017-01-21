import React from 'react';
import {
  Clearfix
} from 'react-bootstrap';

export class Container extends React.Component {
  render() {
    return (
      <div className={`container ${this.props.className}`}>
        {this.props.children}
        <Clearfix/>
      </div>
    );
  }
};

export class Section extends React.Component {
  render() {
    return (
      <section className={`container ${this.props.className}`}>
        {this.props.children}
        <Clearfix/>
      </section>
    );
  }
};

export class Footer extends React.Component {
  render() {
    return (
      <footer className={`footer ${this.props.className}`}>
        {this.props.children}
      </footer>
    );
  }
};

export class Title extends React.Component {
  render() {
    const {
      header
    } = this.props;

    if (!header || header === "h1") {
      return <h1 className={this.props.className}>{this.props.children}</h1>;
    }

    switch (header) {
      case "h2":
        return <h2 className={this.props.className}>{this.props.children}</h2>;
      case "h3":
        return <h3 className={this.props.className}>{this.props.children}</h3>;
      case "h4":
        return <h4 className={this.props.className}>{this.props.children}</h4>;
      case "h5":
        return <h5 className={this.props.className}>{this.props.children}</h5>;
      default:
        return <p className={this.props.className}>{this.props.children}</p>;
    }
  }
};
