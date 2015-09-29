import React from 'react';
import {RouteHandler, Link} from 'react-router';
import LocationComponent from './LocationComponent';
import LocationStore from '../stores/exampleStore';
import LocationActions from '../actions/exampleActions';
import '../styles/contact';

let inputValue;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = LocationStore.getState();
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    LocationStore.listen(this.onChange);
  }
  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  handleClick(e) {
    this.state.locations.push({name: inputValue});
    LocationActions.updateLocations(this.state.locations);
  }
  handleInput(e) {
    inputValue = e.target.value;
  }
  render() {
    return (
      <div>
        <h3>Welcome to the magical Contact Page!</h3>
        <Link to="/contact/2">Contact Page #2</Link>
        <RouteHandler />
      </div>
    );
  }
}


export default Contact;
