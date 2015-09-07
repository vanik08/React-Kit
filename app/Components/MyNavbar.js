import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = {expand: false}
  }
  handleExpand(e) {
    this.setState({expand: !this.state.expand});
  }
  render() {
    return (
      <div>
        <Navbar brand='React' fluid toggleNavKey={0} navExpanded={this.state.expand} onToggle={this.handleExpand}>
          <Nav eventKey={0}>
            <NavItem onClick={this.handleExpand} eventKey={1} href='#/'>Home</NavItem>
            <NavItem onClick={this.handleExpand} eventKey={2} href='#/about'>About</NavItem>
            <NavItem onClick={this.handleExpand} eventKey={3} href='#/contact'>Contact</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}