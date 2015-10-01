import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import SideNavActions from '../actions/SideNavActions';
import SideNavStore from '../stores/SideNavStore';


import {mainNav} from '../styles/styles';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this._sideNavToggle = this._sideNavToggle.bind(this);
    this.state = {
        expand: false
    };
  }

  handleExpand(e) {
    if(window.innerWidth < 768) {
      this.setState({expand: !this.state.expand});
    }
  }

  _sideNavToggle(){
    SideNavActions.toggleOpen();
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={mainNav.nav}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <span className="fa fa-bars" onClick={this._sideNavToggle}></span>
              <img alt="React" style={mainNav.bars} />

            </a>
          </div>
          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav">
              <li className="active"><a href="#/">Home <span className="sr-only"></span></a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
