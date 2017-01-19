import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Col,
  Grid,
  Row,
  Button,
} from 'react-bootstrap';

import {
  Section,
  Title,
} from './../ui';

export class CaseStudy extends Component {
  render() {
    const {
      align = 'left',
      buttonText = 'Go Behind the Scenes',
      subTitle = 'Case Study',
      title,
      link
    } = this.props;

    const action = (
      <Col>
        <Section className="has-text-centered">
          {link && <Link to={link}>
            <Button size="isMedium">{buttonText}</Button>
          </Link>}
        </Section>
      </Col>
    );

    const text = (

      <Col>
        <Section>
          <h4>{subTitle}</h4>
          <Title>{title}</Title>
          {this.props.children}
        </Section>
      </Col>
    );

    if (align === 'left') {
      return <Grid><Row>{action}{text}</Row></Grid>;
    }

    return <Grid><Row>{text}{action}</Row></Grid>;
  }
};
