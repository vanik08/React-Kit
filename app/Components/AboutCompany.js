import React from 'react';
import LocationComponent from './LocationComponent'
import '../styles/about';

export default class AboutCompany extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      text: 'About Company Page'
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
        <input type="text" placeholder="About Company" onChange={this.handle}/>
        <h3>{this.state.text}</h3>
        <LocationComponent />
      </div>
    )
  }
}