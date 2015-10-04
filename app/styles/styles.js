import color from 'color';

const navBarColor = '#fafafa';
const sideNavStyles = {
  col: {
    paddingRight: '0px',
  },
  navLink: {
    backgroundColor: navBarColor,
    ':hover': {
      backgroundColor: color(navBarColor).darken(0.2).hexString(),
      cursor: 'pointer',
    },
  },
  links: {
    color: '#333',
    margin: '0',
  },
  linkIcon: {
    padding: '10px',
    width: '25px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  subNav: {
    marginLeft: '50px',
  },
  subNavLink: {
    color: '#333',
  },
};
const mainNavStyles = {
  nav: {
    marginBottom: '0px',
  },
  bars: {
    padding: '5px 10px 0px 5px',
  },
  logo: {
    display: 'inline',
  },
};

export { sideNavStyles as sideNav };
export { mainNavStyles as mainNav };
