import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Col,
  Grid,
  Row,
} from 'react-bootstrap';

import {
  Title,
  Button,
} from './../ui';

import './CaseStudy.scss';

export class CaseStudy extends Component {
  render() {
    const {
      align = 'left',
      buttonText = 'Go Backstage',
      subTitle = 'Case Study',
      title,
      link,
    } = this.props;

    const action = (
      <Col sm={6} className="ssl--casestudy-cta">
        <figure></figure>
        {link && <Link to={link}>
          <Button size="isMedium">{buttonText}</Button>
        </Link>}
      </Col>
    );

    const text = (
      <Col sm={6} className="ssl--casestudy-content">
        <div>
          <h4>{subTitle}</h4>
          <Title header="h2">{title}</Title>
          {this.props.children}
        </div>
      </Col>
    );

    const className = `ssl--casestudy ssl--casestudy-${align} ${this.props.className}`;

    if (align === 'left') {
      return <Grid className={className} ><Row>{action}{/* this is a comment */}{text}</Row></Grid>;
    }

    return <Grid className={className} ><Row>{text}{/* this is a comment */}{action}</Row></Grid>;
  }
};
