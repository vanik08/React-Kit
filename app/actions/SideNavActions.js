var alt = require('../alt');

class SideNavActions {
  updateOpen(open) {
    return open;
  }
}

module.exports = alt.createActions(SideNavActions);
