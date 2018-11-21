
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import MessagesList from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<MessagesList />', () => {
  it('should render self', () => {
    let props = {
      currentuser:"A",
      divivend:3,
      messages : [{
        player:"A",
        value:"-1",
        number : 19
      },
      {
        player:"B",
        value:"0",
        number : 6
      }]
    }

    const  wrapper  = shallow(<MessagesList {...props} />)
    expect(wrapper.find('#messages-list').length).to.equal(1)
  
  })
})

