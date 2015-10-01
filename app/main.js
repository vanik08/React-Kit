//Utills
import React from 'react';
import Router from 'react-router';
import Alt from 'alt';
import Immutable from 'immutable';
import request from 'superagent';
import _ from 'lodash';

//Project Specific
import App from 'app';


const Route = Router.Route,
      DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App} path="/">
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
