import React, { Component } from 'react';
import './style.scss'; 
import PropTypes from 'prop-types'

class GameStatus extends Component {

  render() {
    const status = this.props.winner ? "won" : "lose";
      return ( <div className="game-status">
        <div className="image-wrapper">
            <img   alt={status} src={`assets/images/${status}.png`}/>
        </div>
        <div className="info">
            <div className="message">{`You ${status}`}</div>
            <button onClick={this.props.onRestart}> New Game </button>
        </div>
    </div>)
    }
}

GameStatus.propTypes = {
  winner: PropTypes.bool.isRequired,
  onRestart:PropTypes.func.isRequired
}

GameStatus.defaultProps = {
  winner: false,
  onRestart:()=>{}
};

export default GameStatus
