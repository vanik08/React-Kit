import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {Button} from 'react-bootstrap';
import '../styles/about';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      text: 'About Page'
    }
  }
  handle(e) {
    this.setState({
      text: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="About" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
        <ul>
          <li><Link to="/about/company">Company</Link></li>
        </ul>
        <Button bsStyle='success'>Click!</Button>
        <RouteHandler />
      </div>
    )
  }
}