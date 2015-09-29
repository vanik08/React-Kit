import React from 'react';
import {RouteHandler, Link} from 'react-router';
import {Nav, Navbar, NavItem, Row, Col} from 'react-bootstrap';
import MyNavbar from './Components/MyNavbar';
import 'font-awesome-webpack';
import './styles/app';


import SideNav from "react-sidenav";

let nav = [
        {key: 'landing', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard'},
        {key: 'channels', title: 'Channels', 'iconClassName': 'fa fa-exchange'},
        {key: 'fleet', title: 'Fleet', 'iconClassName': 'fa fa-truck'},
        {key: 'products', title: 'Products', 'iconClassName': 'fa fa-cubes'},
        {key: 'inventory', title: 'Inventory', 'iconClassName': 'fa fa-database'}
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
            <div className={'sidenavCol'}>
              <SideNav className={'sidenav'} itemType="righticon"
                       itemHeight="32px" navigation={nav}>
              </SideNav>
            </div>
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
