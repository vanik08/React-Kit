import React from 'react';
import _ from 'lodash';
import color from 'color';
import Radium from 'radium';

import {Link} from 'react-router';

let RadiumLink = Radium(Link);
class SideNavLink extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { title, icon, href } = this.props,
        { navLink, links, linkIcon } = this.props.setStyles;

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

export default Radium(SideNavLink);
