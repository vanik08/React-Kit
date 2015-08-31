import React from 'react';
import '../styles/contact';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      text: 'Contact Page'
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
        <input type="text" placeholder="Contact" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
      </div>
    )
	}
}