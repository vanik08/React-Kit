
jest.dontMock('../../components/global/SideNavLink.jsx');
jest.dontMock('../../components/global/SideNavBar.jsx');

import React from 'react/addons';
// import ReactRouterContext from '../ReactRouterContext.js';
import SideNavBar from 'components/global/SideNavbar';

const TestUtils = React.addons.TestUtils;

describe('Side navbar ', () => {
  it('checks the number of "a" elements inside the sidenavbar component', () => {
    const navLink = {href: '/about', title: 'Dashboard', icon: 'fa-dashboard'};
    const renderedSideNav = TestUtils.renderIntoDocument(
      <SideNavBar setStyles={{color: 'red'}} navLinks={[navLink]}/>
    );

    expect(TestUtils.isCompositeComponent(renderedSideNav)).toBeTruthy();
    console.log(TestUtils.scryRenderedComponentsWithType(renderedSideNav, 'SideNavLink'));
  });
});
