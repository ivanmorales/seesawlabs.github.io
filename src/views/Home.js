import React, { Component } from 'react';

import {
  BackgroundImage,
} from './../ui';

import { Hero } from './../components/Hero';
import { Quote, QuoteText, QuoteWho } from './../components/Quote';
import { CaseStudy } from './../components/CaseStudy';
import { SSLPick } from './../components/Pick';
import { Focuses, Focus } from './../components/Focus';
import { Rockstars } from './../components/Rockstars';

import chrisAvatar from './../assets/images/quoteHeadshot.png';
import caseStudyBg from './../assets/images/backgrounds/desktop_caseStudy_home.jpg';
import heroBg from './../assets/images/backgrounds/desktop_hero.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <BackgroundImage src={heroBg}>
          <Hero title="YOU BE THE ROCKSTAR" subTitle="We'll Be Your Tech Roadies">
            <p>Consistent execution separates the legends from the one-hit-wonders,
              but it takes a team of dedicated roadies to make it happen.</p>
            <p>SeeSaw Labs is a creative technology company - your team of
              experienced roadies - climbing on board to execute each new idea
              more impressively than the last</p>
            <SSLPick action="connect">Let's Play</SSLPick>
          </Hero>
        </BackgroundImage>
        <Focuses className="ssl--focus-container">
          <Focus title="Digital Execution">
            <p>The difference between stellar execution and "almost works" happens backstage.</p>

            <p>We rock at full-lifecycle, cross-platform execution–taking you from big idea to production reality…and keeping you there</p>
          </Focus>
          <Focus title="Digital Innovation">
            <p>Virtual reality, artificial intelligence, chat bots, touch screen interfaces–we can't get enough of building cool stuff.</p>

            <p>Let's blaze a new trail together</p>
          </Focus>
        </Focuses>
        <Quote>
          <QuoteText>SeeSaw has been like an extension of the team as we've grown, SeeSaw has grown with us and been an adaptable partner and an on-demand pool of talent we couldn't have done without</QuoteText>
          <QuoteWho
            firstName="Chris"
            lastName="Hale"
            avatar={chrisAvatar}
            from="CEO kountable">
          </QuoteWho>
        </Quote>
        <BackgroundImage src={caseStudyBg}>
          <CaseStudy
            className="ssl--casestudy-linknyc"
            title="LinkNYC KIOSKS"
            link="backstage"
            align="right"
            >
            <p>A dynamic, context-aware, cutting edge digital advertising platform on over 500 LinkNYC kiosks across NYC.</p>
            <p>The best part? Super fast, completely free Wifi for all.</p>
          </CaseStudy>
        </BackgroundImage>
        <BackgroundImage src={caseStudyBg}>
          <CaseStudy
            className="ssl--casestudy-lemlet"
            title="LEMLET"
            subTitle="From the Lab"
            link="crew"
            buttonText="Our Crew">
            <p>A bunch of text about the cool project, why we did it and
            why it makes us totally capable to do your awesome idea.
            Soething something something about the technology. Sick
            picture covers the entire space but focus is on the side
            opposite this text.</p>
          </CaseStudy>
        </BackgroundImage>
        <Rockstars/>
      </div>
    );
  }
};

export default Home;
