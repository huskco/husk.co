import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <section>
          <p className="copyright">
            Made by your friends in Colorado. &copy; Husk LLC. All rights reserved.
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
