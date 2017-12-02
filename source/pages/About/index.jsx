import React from 'react';
import './style.sass';

import BodyClass from '../../components/BodyClass';
import Intro from '../../components/Intro';
import InlineSVG from '../../components/InlineSVG';

class About extends React.Component {
  render() {
    return (
      <BodyClass className="about">
        <Intro>
          <h1>
            Coop
          </h1>
        </Intro>

        <div className="content">
          <section>
            <p>
              Hello
            </p>
          </section>
        </div>
      </BodyClass>
    );
  }
}

export default About;
