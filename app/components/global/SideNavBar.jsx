import React, {PropTypes} from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import SideNavLink from 'components/global/SideNavLink';

const propTypes = {
  navLinks: PropTypes.array.isRequired,
  setStyles: PropTypes.object.isRequired,
};

class SideNavBar extends React.Component {
  constructor() {
    super();
  }

  buildNavLinks(data) {
    return data.map((link, idx) => {
      link.setStyles = this.props.setStyles;
      return <SideNavLink {...link} key={idx}/>;
    });
  }

  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <img src=""/>
          <h5>Hello, Admin</h5>
          <span>Connected</span>
        </ListGroupItem>
        {this.buildNavLinks(this.props.navLinks)}
      </ListGroup>
    );
  }
}
SideNavBar.propTypes = propTypes;

export default SideNavBar;
