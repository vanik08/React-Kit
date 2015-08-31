import React from 'react';
import {RouteHandler} from 'react-router';
import '../Styles/main';

export default class Comp2 extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      text: 'Comp2'
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
        <input type="text" placeholder="Comp2" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
        <RouteHandler />
      </div>
    )
	}
}