
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<Header />', () => {
  it('should render self', () => {
    let props = {
        player :"A"
    }

    const  wrapper  = shallow(<Header {...props} />)
    expect(wrapper.find('.header-component').length).to.equal(1)
    expect(wrapper.find('.header-component .username').text().trim()).to.equal("Player : A")
  
  })
})

