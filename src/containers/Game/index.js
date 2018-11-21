import React, { Component}  from 'react';
import { connect } from 'react-redux'
//import {addNextMove} from '../../actions'

import  MessagesList  from '../../components/MessageList'
import Header from '../../components/Header/index';
import InputOptionsComponent from '../../components/InputOptions'
import GameStatus from '../../components/GameStatus'
import {setupSocket} from '../../sockets'
import './style.scss'; 

var socket;
class Game extends Component {
    constructor(props){
      super(props);
        this.state = {
            game:{}
        }
      const {dispatch} = this.props;
       socket =  setupSocket(dispatch);

	   socket.on('game',(game)=>{
		   this.setState({game:game})
       })
    }
    
    componentWillUnmount() {    
        socket.emit('disconnect')
        socket.disconnect()
       
    }
    onAddNextMove(value){
      // this.props.dispatch(addNextMove(value))
       socket.emit('next-move',value)
    }
  
    render() {
       const {dispatch} = this.props

      let winnerJsx = ''
       if(this.state.game.winner){
           const winner =  socket.id === this.state.game.winner 
           winnerJsx =  <GameStatus winner={winner} onRestart={()=>{ 
               socket.emit('restart') 
            } } /> 
       }
       let player = "Not Allowed"
       if(this.state.game &&  this.state.game.playerA && this.state.game.playerA.id === socket.id){
        player = "A"
       }else
       if(this.state.game &&  this.state.game.playerB && this.state.game.playerB.id === socket.id){
        player = "B"
       }
       
      return (
        <div>
            <Header player={player} />
            
            <div className="main-content">
                { winnerJsx }
                <div className="starting-number">Starting Number : {this.state.game.randomNumber}</div>
                <MessagesList currentuser={socket.id} messages={this.state.game.messages} divident={this.state.game.divident}/>
            </div>
            <InputOptionsComponent dispatch={dispatch}
             inputs={this.state.game.inputs} 
             onClick={this.onAddNextMove.bind(this)}
             disabled = {this.state.game.movingPlayerId !== socket.id}
            />
      </div>
      );
    }
  }
  

const mapDispatchToProps = dispatch => ({
    dispatch: () => { }
  })

const mapStateToProps = state =>({
    game: state.game,
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Game)
  
  