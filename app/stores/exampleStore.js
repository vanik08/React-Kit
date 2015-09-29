import alt from '../alt';
import Immutable from 'immutable';
import LocationActions  from '../actions/exampleActions';

let map1 = Immutable.Map({a:1, b:2});

class LocationStore {
  constructor() {

    this.locations = [];

    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS
    });
  }
  handleUpdateLocations(locations) {
    this.locations = locations;
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');