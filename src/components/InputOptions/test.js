
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import InputOptionsComponent from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<MessagesList />', () => {
  it('should render self', () => {
      let props = {
        inputs : [ "-1","0","-1"]
      }
    const  wrapper  = shallow(<InputOptionsComponent {...props}  />)
    expect(wrapper.find('.input-options').length).to.equal(1)
  })
})

