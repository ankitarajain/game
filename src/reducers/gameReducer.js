
//import * as types from '../constants/ActionTypes'
import { getSocket } from '../sockets'
const defaultState = {}
const socket = getSocket();
const gameReducer = (state = defaultState, action) => {
  let newState = Object.assign({},state);
  switch (action.type) {
   
    case 'NEXT_MOVE':
         socket.emit('next-move',action.payload)
         break;
    case 'GAME_UPDATED':
        newState =  action.payload;
       break;
       
    default:
      return newState
  }
}

export default gameReducer
