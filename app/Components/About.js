import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {Button} from 'react-bootstrap';
import '../styles/about';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      text: 'About Page',
      show: false,
      list: [1, 2, 3]
    }
  }
  handle(e) {
    this.setState({
      text: e.target.value
    });
  }
  handleClick(e) {
    this.setState({show: !this.state.show});
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="About" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
        <ul>
          <li><Link to="/about/company">Company</Link></li>
        </ul>
        <Button bsStyle='success' onClick={this.handleClick}>Click!</Button>
        <RouteHandler />
        <li>{5+5}</li>
        <p>
        {(() => {
          if(this.state.show) {
            return 'Clicked Button!';
          }
        })()}
        </p>
      </div>
    )
  }
}

export default About;