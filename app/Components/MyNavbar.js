import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navbar brand='React' fluid>
          <Nav>
            <NavItem eventKey={1} href='#/'>Home</NavItem>
            <NavItem eventKey={2} href='#/about'>About</NavItem>
            <NavItem eventKey={3} href='#/contact'>Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}