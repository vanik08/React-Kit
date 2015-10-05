import alt from 'alt';
import SideNavActions from 'actions/global/SideNavActions';


class SideNavStore {
  constructor() {
    this.state = {
      navStructure: [
        {
          href: '/about',
          title: 'Dashboard',
          icon: 'fa-dashboard',
        },
        {
          title: 'Channels',
          icon: 'fa-exchange',
          sub: [
            {
              href: '/contact',
              title: 'Contact Sub-Page',
            },
            {
              href: '/somethign',
              title: 'SOmething cool',
            },
          ],
        },
        {
          href: '/',
          title: 'Fleet',
          icon: 'fa-truck',
        },
        {
          href: '/contact',
          title: 'Products',
          icon: 'fa-cubes',
        },
        {
          href: '/',
          title: 'Inventory',
          icon: 'fa-database',
        },
      ],
      open: true,
    };

    this.bindListeners({
      toggleOpen: SideNavActions.TOGGLE_OPEN,
    });
  }
  toggleOpen() {
    this.state.open = !this.state.open;
  }
}

module.exports = alt.createStore(SideNavStore, 'SideNavStore');
