import React, { Component } from 'react';

import {
  Grid,
  Row,
  Col,

  Button } from 'react-bootstrap';

import {
  Section,
  Title
} from './../ui';

import defaultAvatar from './../assets/images/default-avatar.jpg';

import { Hero } from './../components/Hero';
import { Quote, Text, Who } from './../components/Quote';
import { CaseStudy } from './../components/CaseStudy';
import { Rockstars, Rockstar } from './../components/Rockstars';
import { SSLPick } from './../components/Pick';
import { Focus } from './../components/Focus';

class Home extends Component {
  constructor(args) {
    super(args);

    this.state = {
      rockstars: (()=>{
        return Array(14).fill().map((_,i)=>{
          return {
            avatar: defaultAvatar,
            name: `User ${i+1}`
          };
        });
      })()
    };
  }

  render() {
    return (
      <div>
        <Hero title="YOU BE THE ROCKSTAR" subTitle="We'll Be Your Tech Roadies">
          <p>Consistent execution separates the legends from the one-hit-wonders,
            but it takes a team of dedicated roadies to make it happen.</p>
          <p>SeeSaw Labs is a creative technology company - your team of
            experienced roadies - climbing on board to execute each new idea
            more impressively than the last</p>
          <SSLPick action="connect">Let's Play</SSLPick>
        </Hero>
        <section className="ssl--focus-container">
          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <Focus title="Digital Execution">
                  <p>The difference between stellar execution and "almost works"
                    happens backstage.</p>

                  <p>We rock at full-lifecycle, cross-platform execution&emdash;
                    taking you from big idea to production reality&dots;and
                    keeping you there</p>
                </Focus>
              </Col>
              <Col xs={12} sm={6}>
                <Focus title="Digital Innovation">
                  <p>Virtual reality, artificial intelligence, chat bots, touch
                    screen interfaces&emdash;we can't get enough of building
                    cool stuff.</p>

                  <p>Let's blaze a new trail together</p>
                </Focus>
              </Col>
            </Row>
          </Grid>
        </section>

        <Grid>
          <Row>
            <Col>
              <Quote>
                <Text>“Really nice thing someone we know said about us”</Text>
                <Who
                  firstName="Firstname"
                  lastName="Lastname"
                  from="SeeSaw Labs">
                </Who>
              </Quote>
            </Col>
          </Row>
        </Grid>
        <CaseStudy title="Someone That's Cool">
          <p>Some text prob about LinkNYC. It can be a summary
          paragraph of the more in depth version we’ll show on the
          work page. Basically we want to give you a sense of scale
          and awesomeness with which to frame the rest of the
          page. Did I mention there are a ton of these kiosk things?</p>
        </CaseStudy>
        <CaseStudy
          title="Cool Project We Did"
          subTitle="From the Lab"
          link="our-work">
          <p>A bunch of text about the cool project, why we did it and
          why it makes us totally capable to do your awesome idea.
          Soething something something about the technology. Sick
          picture covers the entire space but focus is on the side
          opposite this text.</p>
        </CaseStudy>
        <Section className="ssl-rockstars">
          <Title>Some of Our Favorite Rockstars</Title>
          <Rockstars>
            {this.state.rockstars.map((star,i)=> {
              return <Rockstar key={i} avatar={star.avatar} name={star.name} />;
            })}
          </Rockstars>
          <div className="is-centered has-text-centered">
            <Button size="isMedium">Go Behind the Scenes</Button>
          </div>
        </Section>
      </div>
    );
  }
};

export default Home;
