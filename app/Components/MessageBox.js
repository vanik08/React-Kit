import React from 'react';
import io from 'socket.io-client';
import {Button, Input} from 'react-bootstrap';

let socket = io('http://localhost:3000');
let value = '';

class MessageBox extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      val: undefined
    };
  }

  handleChange(e) {
    this.setState({val: e.target.value});
  }

  handleClick(e) {
    socket.emit('myMessage', this.state.val);
  }

  render() {
    return (
      <div>
        <Input type="text" onChange={this.handleChange} placeholder="Message" value={this.state.val} />
        <Button onClick={this.handleClick}>Send Message</Button>
      </div>
    );
  }
}

export default MessageBox;
