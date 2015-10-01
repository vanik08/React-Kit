import alt from '../alt';
import Immutable from 'immutable';
import LocationActions  from '../actions/exampleActions';

class LocationStore {
  constructor() {
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
    });

    this.state = {
      locations: Immutable.List()
    };
  }
  handleUpdateLocations(location) {
    this.setState({locations: this.state.locations.concat(location)});
  }

}

module.exports = alt.createStore(LocationStore, 'LocationStore');
