import React from 'react';
import Router from 'react-router';
import App from './app';
import About from './Components/About';
import Contact from './Components/Contact';

const Route        = Router.Route,
      DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App} path="/">
    <Route path="about" handler={About}/>
    <Route path="contact" handler={Contact}/>
  </Route> 
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

