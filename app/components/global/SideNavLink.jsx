import React, {PropTypes} from 'react';
import Radium from 'radium';

import {Link} from 'react-router';


const RadiumLink = Radium(Link);

const propTypes = {
  'setStyles': PropTypes.object.isRequired,
  'title': PropTypes.string.isRequired,
  'icon': PropTypes.string.isRequired,
  'href': PropTypes.string.isRequired,
};

class SideNavLink extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, icon, href } = this.props;
    const { navLink, links, linkIcon } = this.props.setStyles;

    return (
      <RadiumLink to={href} style={links}>
        <div style={navLink}>
          <i style={linkIcon} className={`fa ${icon}`}></i>
          <span> {title} </span>
        </div>
      </RadiumLink>
      );
  }
}

SideNavLink.propTypes = propTypes;

export default SideNavLink;
