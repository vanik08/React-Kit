jest.dontMock('../ReactRouterContext.js');
jest.dontMock('../../app/Components/About.js');

var React = require('react/addons');
var About = require('../../app/Components/About.js');
var ReactRouterContext = require('../ReactRouterContext.js');
var TestUtils = React.addons.TestUtils;

describe('About', function() {
  it('checks the number of li elements inside the About component', function() {
    About = ReactRouterContext(About, {});
    var DOM = TestUtils.renderIntoDocument(<About />);
    var li = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'li');
    expect(li.length).toBe(2);
  });
});