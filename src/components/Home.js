import React, { Component } from 'react';

import {
  Columns,
  Column,

  Section,
  Title,
  Button } from 're-bulma';

import defaultAvatar from './../assets/images/default-avatar.jpg';

import { Hero } from './Hero';
import { Quote, Text, Who } from './Quote';
import { CaseStudy } from './CaseStudy';
import { Rockstars, Rockstar } from './Rockstars';

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
        <Hero title="YOU BE THE ROCKSTAR" subTitle="We'll Be Your Roadies">
          <p>Some text that calls out the greats. The thing they all had in
            common? A kickass team of roadies that make what they do
            possible. Continue to drive home the point and segway into how this
            applies to tech. We’re not here to steal the show, we’re here to
            partner and kick some ass togther.</p>
        </Hero>
        <Section>
          <Columns>
            <Column>
              <Section className="has-text-centered is-centered">
                <Title>FOCUS ONE</Title>
                <p>This is one of the things we are the best at
                and a little bit of context for you to imagine
                yourself using this service. Background photo
                instills all the confidence that it’s a real thing.
                Hovering might change to a branding color
                overlay and hyperlink to works page.</p>
              </Section>
            </Column>
            <Column align="center">
              <Section className="has-text-centered is-centered">
                <Title>FOCUS TWO</Title>
                <p>This is the other thing we are the best at and
                  a little bit of context for you to imagine
                  yourself using this service. Background photo
                  instills all the confidence that it’s a real thing.
                  Hovering might change to a branding color
                  overlay and hyperlink to works page.</p>
              </Section>
            </Column>
          </Columns>
        </Section>

        <Columns>
          <Column size="isFull">
            <Quote>
              <Text>“Really nice thing someone we know said about us”</Text>
              <Who
                firstName="Firstname"
                lastName="Lastname"
                from="SeeSaw Labs">
              </Who>
            </Quote>
          </Column>
        </Columns>
        <CaseStudy title="Someone That's Cool">
          <p>Some text prob about LinkNYC. It can be a summary
          paragraph of the more in depth version we’ll show on the
          work page. Basically we want to give you a sense of scale
          and awesomeness with which to frame the rest of the
          page. Did I mention there are a ton of these kiosk things?</p>
        </CaseStudy>
        <CaseStudy
          title="Cool Project We Did"
          align="right"
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
