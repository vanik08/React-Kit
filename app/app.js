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
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ol>
        <RouteHandler />
      </div>
    )
  }
}