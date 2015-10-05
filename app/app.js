import React from 'react';

import {RouteHandler} from 'react-router';
import {Row, Col} from 'react-bootstrap';

import MyNavbar from 'components/global/MyNavbar';
import SideNavBar from 'components/global/SideNavBar';

import SideNavStore from 'stores/global/SideNavStore';

import 'font-awesome-webpack';
import 'styles/app';

import {sideNav} from 'styles/styles';

//test
import Datepicker from 'components/Datepicker';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = SideNavStore.getState();

    this.onSideNavStoreChange = this.onSideNavStoreChange.bind(this);
  }

  componentDidMount() {
    SideNavStore.listen(this.onSideNavStoreChange);
  }

  onSideNavStoreChange() {
    this.setState(SideNavStore.getState());
  }

  componentWilUnmount() {
    SideNavStore.unlisten(this.onSideNavStoreChange);
  }

  render() {
    if (this.state.open) {
      sideNav.col.display = 'block';
    } else {
      sideNav.col.display = 'none';
    }

    return (
      <div>
        <MyNavbar />
        <Row>
          <Col md={2} style={sideNav.col}>
            <aside className={'sidenavCol'}>
              <SideNavBar navLinks={this.state.navStructure}
                          setStyles={sideNav} />
            </aside>
          </Col>
          <Col md={10}>
            <h5>{this.state.text}</h5>
            <RouteHandler />
            <Datepicker />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
