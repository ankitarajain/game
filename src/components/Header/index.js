import React, { Component } from 'react';
import Icon from '../Icon'
import './style.scss'; 
import PropTypes from 'prop-types'

class Header extends Component {

  render() {
   const {player} = this.props;
      
  return ( <div className="header-component">
    <div className="icon-wrapper">
         <Icon text={player}/>
    </div>
    <div className="info">
        <div className="username">{`Player : ${player}`}</div>
        <div className="message">Win the game or win the job</div>
    </div>
</div>)
}
}

Header.propTypes = {
    player: PropTypes.string
}

Header.defaultProps = {
  player: ""
};

export default Header
