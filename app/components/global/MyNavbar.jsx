import React from 'react';

import SideNavActions from 'actions/global/SideNavActions';


import {mainNav} from 'styles/styles';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.onSideNavToggle = this.onSideNavToggle.bind(this);
    this.state = {
      expand: false,
    };
  }

  onSideNavToggle() {
    SideNavActions.toggleOpen();
  }

  render() {
    return (
      <nav className="navbar navbar-default" style={mainNav.nav}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <span className="fa fa-bars" onClick={this.onSideNavToggle} style={mainNav.bars}></span>
              <img alt="React" style={mainNav.logo} />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
