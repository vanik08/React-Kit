import color from 'color';

let navBarColor = "#fafafa";
let sideNavStyles = {
    col: {
      paddingRight: '0px'
    },
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
  },
  mainNavStyles = {
      nav: {
        marginBottom:'0px'
      },
      bars: {
        display: 'inline',
        paddingLeft: '10px'

      }
  };

export { sideNavStyles as sideNav };
export { mainNavStyles as mainNav };
