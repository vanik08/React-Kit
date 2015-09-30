import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';
import Radium from 'radium';

let styles = {
      backgroundColor: '#333'
    },
    navlinkStyles = {
      color: '#fff',
      ':hover': {
        color: '#aaa'
      }
    },
    iconStyles = {
      padding: '10px',
      width: '25px',
      marginLeft: '10px'
    };

let RadiumLink = Radium(Link);
class SideNavLink extends React.Component {
  constructor() {
    super();
    this.state = {styles, iconStyles};
  }

  render() {
    let { title, icon, href } = this.props;
    return (
      <div style={styles}>
        <RadiumLink to={href} style={navlinkStyles}>
            <i style={this.state.iconStyles} className={`fa ${icon}`}></i>
            <span> {title} </span>
        </RadiumLink>
      </div>
      );
  }
}

export default Radium(SideNavLink);
