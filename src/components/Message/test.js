
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import Message from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Message />', () => {
  it('should render self', () => {
    let props = {
      currentuser:"A",
      message : {
        player:"A",
        value:"-1",
        number : 19,
        divivend:3
      }
    }
    const  wrapper  = shallow(<Message {...props} />)
    expect(wrapper.find('.message-item').length).to.equal(1)
  })
})

