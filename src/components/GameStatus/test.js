
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import GameStatus from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<GameStatus />', () => {
  it('should render self', () => {
    let props = {
        winner : true
    }

    const  wrapper  = shallow(<GameStatus {...props} />)
    expect(wrapper.find('.game-status').length).to.equal(1)
  
  })

  it('on won', () => {
    let props = {
        winner : true
    }

    const  wrapper  = shallow(<GameStatus {...props} />)
    expect(wrapper.find('.game-status').length).to.equal(1)
    expect(wrapper.find('.game-status .message').text().trim()).to.equal("You won")
  
  })

  it('on lose', () => {
    let props = {
        winner : false
    }

    const  wrapper  = shallow(<GameStatus {...props} />)
    expect(wrapper.find('.game-status').length).to.equal(1)
    expect(wrapper.find('.game-status .message').text().trim()).to.equal("You lose")
  
  })


})

