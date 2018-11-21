import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import Game from './index'

Enzyme.configure({ adapter: new Adapter() })

xdescribe('<Game />', () => {
  it('should render self', () => {
    const  wrapper  = shallow(<Game  />)
    expect(wrapper.find('.main-content').length).equals(1);
  })
})

