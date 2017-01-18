import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Section,
  Title,
  Content
} from 're-bulma';

export class Processes extends Component {
  render() {
    const {
      processes
    } = this.props;

    if (!processes) {
      return (
        <Section>
          <Title>Nothing to see here</Title>
        </Section>
      );
    }
    return (
      <div>
        {processes.map( (item, i)=> {
          return (
            <Section key={i} className="has-text-centered">
              <Title>{item.title}</Title>
              <Content>{item.content}</Content>
            </Section>
          );
        })};
      </div>
    );
  }
}

class ProcessContainer extends Component {
  render() {
    return (
      <Processes processes={this.props.sections.processes} />
    );
  }
};

const mapStateToProps = state => {
  return {
    sections: state.sections
  };
};

export default connect(mapStateToProps)(ProcessContainer);
