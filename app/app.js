import React from 'react';
import {RouteHandler, Link} from 'react-router';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import MyNavbar from './Components/MyNavbar';
import './styles/app'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome to the homepage, hope you\'re having a wonderful day!'
    }
  }
  render() {
    return (
      <div>
        <MyNavbar />
        <div className='container-fluid'>
          <h5>{this.state.text}</h5>
          <RouteHandler />
        </div>
      </div>
    )
  }
}