import React from 'react';

import {RouteHandler, Link} from 'react-router';
import {Nav, Navbar, NavItem, Row, Col} from 'react-bootstrap';

import MyNavbar from 'components/MyNavbar';
import SideNavBar from 'components/SideNavBar';

import SideNavStore from 'stores/SideNavStore';

import 'font-awesome-webpack';
import 'styles/app';

import { sideNav } from  'styles/styles';


class App extends React.Component {
  constructor(props) {
    super(props);
    let {open, navStructure} = SideNavStore.getState();

    this.state = {
      open,
      navStructure
    };

    this._sideNavStoreChange = this._sideNavStoreChange.bind(this);
  }

  componentDidMount(){
    SideNavStore.listen(this._sideNavStoreChange);
  }

  componentWilUnmount(){
    SideNavStore.unlisten(this._sideNavStoreChange);

  }

  _sideNavStoreChange(){
    this.setState(SideNavStore.getState());
  }

  render() {
    if(this.state.open){
      sideNav.col.display = "block";
    }else{
      sideNav.col.display = "none";
    }

    return (
      <div>
        <MyNavbar />
        <Row>
          <Col md={2} style={sideNav.col}>
            <aside className={'sidenavCol'}>
              <SideNavBar itemType="righticon"
                          itemHeight="32px"
                          navLinks={this.state.navStructure}
                          setStyles={sideNav}>
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
