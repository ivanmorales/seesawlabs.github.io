import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import {
  Container,
  Section,
  Title,
} from './../ui';

import { Hero } from './../components/Hero';
import { CaseStudy } from './../components/CaseStudy';

class OurWork extends Component {
  render() {
    return (
      <Container>
        <Hero title="BEHIND THE SCENES" subTitle="Our Work">
          <p>Some text that calls out the greats. The thing they all had in
          common? A kickass team of roadies that make what they do
          possible. Continue to drive home the point and segway into how this
          applies to tech. We’re not here to steal the show, we’re here to
          partner and kick some ass togther.</p>
        </Hero>
        <CaseStudy title="Someone That's Cool" align="right">
          <p>Some text prob about LinkNYC. It can be a summary
          paragraph of the more in depth version we’ll show on the
          work page. Basically we want to give you a sense of scale
          and awesomeness with which to frame the rest of the
          page. Did I mention there are a ton of these kiosk things?</p>
          <p>Some secondary text that talks more about the project, any
          particular challenges and the relationship with the client.
          We might even tie in some of the service icons below here
          to show what services were used by the client for this
          project.</p>
        </CaseStudy>
        <CaseStudy title="Someone That's Cool">
          <p>Some text prob about LinkNYC. It can be a summary
          paragraph of the more in depth version we’ll show on the
          work page. Basically we want to give you a sense of scale
          and awesomeness with which to frame the rest of the
          page. Did I mention there are a ton of these kiosk things?</p>
          <p>Some secondary text that talks more about the project, any
          particular challenges and the relationship with the client.
          We might even tie in some of the service icons below here
          to show what services were used by the client for this
          project.</p>
        </CaseStudy>
        <Grid>
        <Row>
          <Col>
            <Section className="has-text-centered is-centered">
              <Title>FOCUS ONE</Title>
              <p>This is one of the things we are the best at
              and a little bit of context for you to imagine
              yourself using this service. Background photo
              instills all the confidence that it’s a real thing.
              Hovering might change to a branding color
              overlay and hyperlink to works page.</p>
            </Section>
          </Col>
          <Col>
            <Section className="has-text-centered is-centered">
              <Title>FOCUS TWO</Title>
              <p>This is the other thing we are the best at and
                a little bit of context for you to imagine
                yourself using this service. Background photo
                instills all the confidence that it’s a real thing.
                Hovering might change to a branding color
                overlay and hyperlink to works page.</p>
            </Section>
          </Col>
        </Row>
      </Grid>
        {Array(3).fill().map( (_,i)=> {
          return (
            <Section key={i} className="has-text-centered">
              <Title>Other Service {i}</Title>
              <p>
                More detailed text about this specific service. These three sections will likely be from our current menu of services where they do not overlap the two main focuses above. Their function is to round out a bit the types of things we want to be doing and convey a breadth of knowledge without being too general.
              </p>
            </Section>
          );
        })}
      </Container>
    );
  }
};

export default OurWork;
