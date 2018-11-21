import { gameUpdated, addNextMove } from '../actions'

describe('update game', () => {
  it('should create an action to unpdate game', () => {
    const game = {}
    const action = {
      type: "GAME_UPDATED",
      payload:{}
    }
    expect(gameUpdated(game)).toEqual(action)
  })
})

describe('add new move', () => {
  it('should create an action to add new move', () => {
    const value = "-1"
    const action = {
      type: "NEXT_MOVE",
      payload:"-1"
    }
    expect(gameUpdated(value)).toEqual(action)
  })
})
