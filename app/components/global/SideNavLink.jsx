import React, {PropTypes} from 'react';
import Radium from 'radium';

import {Row} from 'react-bootstrap';
import {Link} from 'react-router';


const RadiumLink = Radium(Link);

const propTypes = {
  'setStyles': PropTypes.object.isRequired,
  'title': PropTypes.string.isRequired,
  'icon': PropTypes.string.isRequired,
  'href': PropTypes.string,
};

class SideNavLink extends React.Component {
  constructor() {
    super();
    this.state = {open: false};

    this.onToggleSubNavClick = this.onToggleSubNavClick.bind(this);
  }

  onToggleSubNavClick() {
    this.setState({open: !this.state.open});
  }

  subNav() {
    if (!this.props.sub) {
      return '';
    }
    const { sub } = this.props;
    const { subNav, subNavLink } = this.props.setStyles;
    const subLink = sub.map((link, idx) => {
      return (
        <RadiumLink to={link.href} style={subNavLink} key={idx}>
          <div className="sub-side-nav-link">
            <span>{link.title}</span>
          </div>
        </RadiumLink>
      );
    });

    if (this.state.open) {
      subNav.display = 'block';
    } else {
      subNav.display = 'none';
    }
    return (
      <div style={subNav}>
        {subLink}
      </div>
    );
  }

  render() {
    const { title, icon, href } = this.props;
    const { navLink, links, linkIcon } = this.props.setStyles;
    let subOpener = '';

    if (this.props.sub) {
      const chevronDir = (this.state.open) ? 'down' : 'right';

      subOpener = (
        <span className="pull-right">
          <i style={linkIcon} className={`fa fa-chevron-${chevronDir}`}></i>
        </span>
      );
    }
    let Container = RadiumLink;

    if (this.props.sub) {
      Container = Radium(Row);
    }
    return (
      <Container to={href} style={links} onClick={this.onToggleSubNavClick}>
        <div style={navLink} className="side-nav-link">
          <i style={linkIcon} className={`fa ${icon}`}></i>
          <span>{title}</span>
          {subOpener}
          {this.subNav(this.props)}
        </div>
      </Container>
      );
  }
}

SideNavLink.propTypes = propTypes;

export default SideNavLink;
