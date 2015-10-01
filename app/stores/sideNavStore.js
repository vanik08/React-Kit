import alt from '../alt';
import Immutable from 'immutable';
import SideNavActions  from '../actions/SideNavActions';


class SideNavStore {
  constructor() {
    
    this.state = {
      navStructure: [
            {href: '/about', title: 'Dashboard', icon: 'fa-dashboard'},
            {href: '/contact', title: 'Channels', icon: 'fa-exchange'},
            {href: '/', title: 'Fleet', icon: 'fa-truck'},
            {href: '/contact', title: 'Products', icon: 'fa-cubes'},
            {href: '/', title: 'Inventory', icon: 'fa-database'}
      ],
        open: true
      };

    this.bindListeners({
      updateOpen: SideNavActions.UPDATE_OPEN
    });
  }
  updateOpen(open) {
    this.state.open = open;
  }
}

module.exports = alt.createStore(SideNavStore, 'SideNavStore');
