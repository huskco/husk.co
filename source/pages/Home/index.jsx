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
          <p>Coming soon</p>

          <img className="home-peek" src="/source/images/peek.png" />
        </Intro>
      </BodyClass>
    );
  }
}

export default Home;
