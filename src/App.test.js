import React from 'react'
import App from './App'
import { shallow, mount, render } from 'enzyme'
import { wrap } from 'module';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })
  
  it('should have a container class', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('Shows comments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Comments').length).toBe(1)
  })  

  it('Shows Comments', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Comments').length).toBe(1)
  })    

  it('Shows NewComment', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })      
})
