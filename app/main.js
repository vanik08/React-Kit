import React from 'react';
import Router from 'react-router';
import Comp2 from './Components/Comp2';
import Comp3 from './Components/Comp3';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={Comp2} path="/">
    <Route path="about" handler={Comp3}/>
    <Route path="inbox" handler={Comp2}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

