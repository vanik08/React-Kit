import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import SideNavLink from './SideNavLink';


let headerItemStyle = {
    borderRadius: '0px'
  },
  iconStyles = {
      width: '25px',
      marginLeft: '10px'
    };

class SideNavBar extends React.Component {
  constructor() {
    super();
    this.state = {headerItemStyle, iconStyles};
  }

  buildNavLinks(data){
    return data.map((link, i) => <SideNavLink {...link} key={i}/> );
  }
  render() {

    return (
      <ListGroup>
        {this.buildNavLinks(this.props.navLinks)}
      </ListGroup>
    );
  }
}

export default SideNavBar;
