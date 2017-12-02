import React from 'react';
import {Link} from 'react-router';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';

class Home extends React.Component {
  render() {
    return (
      <BodyClass className="home" hasIntro="true">
        <Intro>
          <h1>Craft the future</h1>
          <h2>We believe it takes a different kind of company to make a different kind of software</h2>
        </Intro>

        <section className="home-work">
          <h2>Coming soon</h2>
          <p>
            iOS
          </p>
        </section>
      </BodyClass>
    );
  }
}

export default Home;
