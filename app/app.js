import React from 'react';
import {RouteHandler, Link} from 'react-router';
import './styles/app'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'App'
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.text}</h3>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <RouteHandler />
      </div>
    )
  }
}