import React from 'react';
import {Link} from 'react-router';
import './style.sass';

class Intro extends React.Component {
  render() {
    return (
      <div className={`intro ${this.props.className}`} style={this.props.styles}>
        <div className="intro-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Intro.defaultProps = {
  className: "",
  styles: {}
}

export default Intro;
