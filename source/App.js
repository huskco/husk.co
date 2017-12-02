import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

function App({ children, routes }) {
  return (
    <div>
      <div className="app">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

export default App;
