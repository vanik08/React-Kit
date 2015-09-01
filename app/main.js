//Utills
import React from 'react';
import Router from 'react-router';
import Alt from './alt';
import _ from 'lodash';
import $ from 'jquery';
//Project Specific
import App from './app';
import About from './Components/About';
import AboutCompany from './Components/AboutCompany';
import Contact from './Components/Contact';

console.log($('div'));

const Route        = Router.Route,
      DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App} path="/">
    <Route path="about" handler={About}>
      <Route path="company" handler={AboutCompany}/>
    </Route>
    <Route path="contact" handler={Contact}/>
  </Route> 
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

