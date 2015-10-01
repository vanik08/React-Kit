import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';
import SideNavLink from 'components/SideNavLink';


class SideNavBar extends React.Component {
  constructor() {
    super();
  }

  buildNavLinks(data){
    return data.map((link, i) => {
      link.setStyles = this.props.setStyles;
      return <SideNavLink {...link} key={i}/>;
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

export default SideNavBar;
