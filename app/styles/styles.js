import color from 'color';

let navBarColor = "#fafafa";
let navStyles = {
    navLink: {
      backgroundColor: navBarColor,
      ':hover': {
        backgroundColor: color(navBarColor).darken(0.2).hexString()
      }
    },
    links: {
      color: '#333'
    },
    linkIcon: {
      padding: '10px',
      width: '25px',
      marginLeft: '10px'
    }
  };

export { navStyles as nav };
