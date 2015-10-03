
jest.autoMockOff();
// jest.dontMock('../../components/global/SideNavLink.jsx');
// jest.dontMock('../../components/global/SideNavBar.jsx');

var React  = require('react/addons');
var ReactRouterContext = require('../ReactRouterContext.js');
var SideNavBar = require('components/global/SideNavBar');
var SideNavLink = require('components/global/SideNavLink');

let TestUtils = React.addons.TestUtils;


describe('Side navbar ', () => {
  it('checks the number of "a" elements inside the sidenavbar component', function() {
    let navLinks = [
          {href: '/about', title: 'Dashboard', icon: 'fa-dashboard'},
          {href: '/contact', title: 'Channels', icon: 'fa-exchange'},
          {href: '/', title: 'Fleet', icon: 'fa-truck'},
          {href: '/contact', title: 'Products', icon: 'fa-cubes'},
          {href: '/', title: 'Inventory', icon: 'fa-database'},
    ];
    let WrappedSideNavBar = ReactRouterContext(SideNavBar,{
      setStyles: {},
      navLinks: navLinks
    });
    let renderedSideNav = TestUtils.renderIntoDocument(
      <WrappedSideNavBar />
    );

    expect(TestUtils.isCompositeComponent(renderedSideNav)).toBeTruthy();
    let links = TestUtils.scryRenderedDOMComponentsWithClass(renderedSideNav, 'side-nav-link');

    expect(links.length).toBe(navLinks.length);
  });

  it('checks content of a rendered sideNavLink', function() {
    let href ='/about';
    let title = 'Dashboard';
    let icon = 'fa-dashboard';

    let WrappedLink = ReactRouterContext(SideNavLink, {
      setStyles: {},
      href,
      title,
      icon,
    });

    let renderedLink = TestUtils.renderIntoDocument(
      <WrappedLink />
    );

    expect(TestUtils.isCompositeComponent(renderedLink)).toBeTruthy();

    let link = TestUtils.findRenderedDOMComponentWithTag(renderedLink, 'a');
    let div = TestUtils.findRenderedDOMComponentWithTag(renderedLink, 'div');
    let renderedIcon = TestUtils.findRenderedDOMComponentWithTag(renderedLink, 'i');
    let span = TestUtils.findRenderedDOMComponentWithTag(renderedLink, 'span');

    expect(link.props.to).toEqual(href);
    expect(React.findDOMNode(div).className).toEqual('side-nav-link');
    expect(React.findDOMNode(renderedIcon).className).toEqual(`fa ${icon}`);
    expect(React.findDOMNode(span).textContent).toEqual(title);
    expect()
  });
});
