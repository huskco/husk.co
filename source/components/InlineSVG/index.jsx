import React from 'react';
import {Link} from 'react-router';

class InlineSVG extends React.Component {

  imagePath() {
    return (
      require(`../../images/${this.props.src}`)
    )
  }

  render() {
    const className = this.props.className || "";
    const parallax = this.props["data-rellax-speed"] || "";
    return (
      <span dangerouslySetInnerHTML={{__html: this.imagePath()}} className={className} data-rellax-speed={parallax} />
    );
  }
}

export default InlineSVG;
