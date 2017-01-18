import React, { Component } from 'react';
import {
  Section,
  Columns,
  Column,
  Image
} from 're-bulma';

export class Rockstars extends Component {
  render() {
    return (
      <Section>
        <Columns isMultiline>
          {this.props.children}
        </Columns>
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
      <Column size="is2">
        <Image className="img-circle" src={avatar} title={name} />
      </Column>
    );
  }
};
