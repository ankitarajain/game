//import * as types from '../constants/ActionTypes'
import io from "socket.io-client"
import {gameUpdated} from '../actions'
import {  } from '../actions'

let socket;

const setupSocket = (dispatch) => {

  socket = io.connect("http://localhost:8999")
  socket.on('game',(game)=>{
    dispatch(gameUpdated(game))
  })
  
  return socket
}

const getSocket = ()=>{
 return socket;
}

export  { setupSocket ,getSocket }
