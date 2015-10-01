var alt = require('../alt');

class SideNavActions {
  toggleOpen() {
      this.dispatch();
  }
}

module.exports = alt.createActions(SideNavActions);
