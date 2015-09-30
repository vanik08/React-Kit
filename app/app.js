import React from 'react';
import io from 'socket.io-client';
import {RouteHandler, Link} from 'react-router';
import {Nav, Navbar, NavItem, Row, Col} from 'react-bootstrap';
import MyNavbar from './Components/MyNavbar';
import SideNavBar from './Components/SideNavBar';
import 'font-awesome-webpack';
import './styles/app';

//Test
let socket = io('http://localhost:3000');

socket.on('connect', function() {
  socket.emit('myMessage', 'This is a a test message from the client');
});


let nav = [
        {href: '/about', title: 'Dashboard', icon: 'fa-dashboard'},
        {href: '/contact', title: 'Channels', icon: 'fa-exchange'},
        {href: '/', title: 'Fleet', icon: 'fa-truck'},
        {href: '/contact', title: 'Products', icon: 'fa-cubes'},
        {href: '/', title: 'Inventory', icon: 'fa-database'}
    ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome to the homepage, hope you\'re having a wonderful day!'
    };
  }
  render() {
    return (
      <div>
        <MyNavbar />
        <Row>
          <Col md={2}>
            <aside className={'sidenavCol'}>
              <SideNavBar itemType="righticon" itemHeight="32px" navLinks={nav}>
              </SideNavBar>
            </aside>
          </Col>
          <Col md={10}>
            <h5>{this.state.text}</h5>
            <RouteHandler />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
