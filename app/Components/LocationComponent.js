import React from 'react';
import {Row, Col, Button, Input} from 'react-bootstrap';
import LocationStore from '../stores/exampleStore';
import LocationActions from '../actions/exampleActions';
import '../styles/contact';

let inputValue;
class LocationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = LocationStore.getState();
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onChange = this.onChange.bind(this);
    console.log(this.state);
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
      <Row fluid>
        <Col md={6} sm={12} xs={12}>
          <form>
            <Input inline onChange={this.handleInput} type="text" placeholder="Enter Location Name"/>
            <Button onClick={this.handleClick}>Add Location</Button>
            <ul>
              {this.state.locations.map((location, i) => {
                return (
                  <li key={i}>{location.name}</li>
                );
              })}
            </ul>
          </form>
        </Col>
      </Row>
    );
  }
}

export default LocationComponent;