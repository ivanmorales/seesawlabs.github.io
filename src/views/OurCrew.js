import React, { Component } from 'react';

import {
  Container,
  Section,
  Title
} from './../ui';

import { Hero } from './../components/Hero';

class OurCrew extends Component {
  constructor(args) {
    super(args);

    this.state = {
      process: [
        {
          title: 'Discovery',
          content: 'Review business objectives, identify product features, identify user stories and use cases. Identify success criteria for all the types of users/roles who will be using the product.'
        }, {
          title: 'Design',
          content: 'There is more to our design phase than what meets the eye. Our design phase includes User Interface (UI) design, User Experience (UX) design, Software Architecture design, Hardware Architecture design, designing Quality Assurance (QA) test criteria, and designing a project plan for the remainder of the project.'
        }, {
          title: 'Rapid UX Prototyping',
          content: 'There is more to our design phase than what meets the eye. Our design phase includes User Interface (UI) design, User Experience (UX) design, Software Architecture design, Hardware Architecture design, designing Quality Assurance (QA) test criteria, and designing a project plan for the remainder of the project.'
        }, {
          title: 'Development and Testing',
          content: 'There is more to our design phase than what meets the eye. Our design phase includes User Interface (UI) design, User Experience (UX) design, Software Architecture design, Hardware Architecture design, designing Quality Assurance (QA) test criteria, and designing a project plan for the remainder of the project.'
        }, {
          title: 'Launch',
          content: 'There is more to our design phase than what meets the eye. Our design phase includes User Interface (UI) design, User Experience (UX) design, Software Architecture design, Hardware Architecture design, designing Quality Assurance (QA) test criteria, and designing a project plan for the remainder of the project.'
        }
      ]
    };
  }
  render() {
    return (
      <Container>
        <Hero title="BEHIND THE SCENES" subTitle="Our Crew">
          <p>Some text about our process, why it’s advantageous , strict but not dogmatic etc. Perhaps tie back in the rockstar analogy.</p>
        </Hero>
        {this.state.process.map( (item,i)=> {
          return (
            <Section key={i} className="has-text-centered">
              <Title>{item.title}</Title>
              <p>{item.content}</p>
            </Section>
          );
        })}
      </Container>
    );
  }
};

export default OurCrew;
