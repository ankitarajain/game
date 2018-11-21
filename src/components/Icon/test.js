
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import Icon from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Icon />', () => {
  it('should render self', () => {
    let props = {
        text :"sample"
    }

    const  wrapper  = shallow(<Icon {...props} />)
    expect(wrapper.find('.icon').length).to.equal(1)
    expect(wrapper.find('.icon').text().trim()).to.equal("sample")
  
  })
})

