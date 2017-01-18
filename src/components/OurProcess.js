import React, { Component } from 'react';

import {
  Container
} from 're-bulma';

import { Hero } from './Hero';
import Processes from './Processes';

class OurProcess extends Component {
  render() {
    return (
      <Container>
        <Hero title="BEHIND THE SCENES" subTitle="Our Process">
          <p>Some text about our process, why it’s advantageous , strict but not dogmatic etc. Perhaps tie back in the rockstar analogy.</p>
        </Hero>
        <Processes/>
      </Container>
    );
  }
};

export default OurProcess;
