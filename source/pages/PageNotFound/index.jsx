import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Intro from '../../components/Intro';

class PageNotFound extends React.Component {
  render() {
    return (
      <Intro>
        <h1>Couldn't find that one</h1>
        <p>
          <Link to="/">Let's go back to the beginning</Link>
        </p>
      </Intro>
    );
  }
}

export default PageNotFound;
