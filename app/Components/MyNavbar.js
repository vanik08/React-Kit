import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = {expand: false}
  }
  handleExpand(e) { 
    if(window.innerWidth < 768) {
      this.setState({expand: !this.state.expand});
    }
  }
  render() {
    return (
      <div>
        <Navbar brand='React' fluid toggleNavKey={0} navExpanded={this.state.expand} 
                onClick={this.handleExpand}>
          <Nav eventKey={0}>
            <NavItem  eventKey={1} href='#/'>Home</NavItem>
            <NavItem  eventKey={2} href='#/about'>About</NavItem>
            <NavItem  eventKey={3} href='#/contact'>Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default MyNavbar;