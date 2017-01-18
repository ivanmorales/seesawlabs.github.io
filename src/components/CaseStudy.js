import React, { Component } from 'react';
import { Link } from 'react-router';

import {
  Columns,
  Column,
  Button,
  Section,
  Title,
  Subtitle
} from 're-bulma';

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
      <Column className="is-centered">
        <Section className="has-text-centered">
          {link && <Link to={link}>
            <Button size="isMedium">{buttonText}</Button>
          </Link>}
        </Section>
      </Column>
    );

    const text = (
      <Column>
        <Section>
          <Subtitle>{subTitle}</Subtitle>
          <Title>{title}</Title>
          {this.props.children}
        </Section>
      </Column>
    );

    if (align === 'left') {
      return <Columns>{action}{text}</Columns>;
    }

    return <Columns>{text}{action}</Columns>;
  }
};
