
import React from 'react'
import Enzyme, { mount ,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {expect} from 'chai';
import FLoatButton from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('<FLoatButton />', () => {
  it('should render self', () => {
    let props = {
        value : "+1",
        disabled:false
    }

    const  wrapper  = shallow(<FLoatButton {...props} />)
    expect(wrapper.find('.float-button').length).to.equal(1)
  
  })

  it('on disable true', () => {
    let props = {
        value : "0",
        disabled:true
    }

    const  wrapper  = shallow(<FLoatButton {...props} />)
    expect(wrapper.find('.float-button').hasClass("disabled")).to.equal(true)
    expect(wrapper.find('.float-button').text().trim()).to.equal("0")
  
  })

  it('on disable false', () => {
    let props = {
        value : "-1",
        disabled:false
    }

    const  wrapper  = shallow(<FLoatButton {...props} />)
    expect(wrapper.find('.float-button').hasClass("disabled")).to.equal(false)
    expect(wrapper.find('.float-button').text().trim()).to.equal("-1")
  
  })


})

