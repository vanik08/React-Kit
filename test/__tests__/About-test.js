jest.dontMock('../ReactRouterContext.js');
jest.dontMock('../../app/Components/About.js');

describe('About', function() {
  it('sees if About can be rendered', function() {
    var React = require('react/addons');
    var About = require('../../app/Components/About.js');
    var ReactRouterContext = require('../ReactRouterContext.js');
    var TestUtils = React.addons.TestUtils

    About = ReactRouterContext(About, {someProp: 'foo' });

    var About = TestUtils.renderIntoDocument(
      <About />
    );
  })
});