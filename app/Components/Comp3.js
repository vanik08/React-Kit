import React from 'react';

export default class Comp3 extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      text: 'Comp 3'
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
        <input type="text" placeholder="Comp3" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
      </div>
    )
	}
}