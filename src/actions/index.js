
export const gameUpdated = (game) => {
  return {
    type: "GAME_UPDATED",
    payload:game
	}	
}
export const addNextMove = (value) => {

  return {
    type: "NEXT_MOVE",
    payload:value
  }	
}