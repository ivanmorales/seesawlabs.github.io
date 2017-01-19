import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Alert
} from 'react-bootstrap';

export class Processes extends Component {
  render() {
    const {
      processes
    } = this.props;

    if (!processes) {
      return (
        <Alert bsStyle="warning">
          <h2>Nothing to see here</h2>
        </Alert>
      );
    }
    return (
      <div>
        {processes.map( (item, i)=> {
          return (
            <section key={i} className="has-text-centered">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </section>
          );
        })};
      </div>
    );
  }
}

class ProcessContainer extends Component {
  render() {
    return (
      <Processes
        processes={this.props.sections.processes}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    sections: state.sections
  };
};

export default connect(mapStateToProps)(ProcessContainer);
