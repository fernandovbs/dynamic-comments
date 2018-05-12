import React from 'react'
import App from './App'
import { shallow, mount, render } from 'enzyme'

describe('<App />', () => {
  const base = {
    syncState : jest.fn()
  }
  
  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.length).toBe(1)
  })
  
  it('should have a container class', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('Shows comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })  

  it('Shows Comments', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })    

  it('Shows NewComment', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })      

  it('Post new comment when createNewComment is called', () =>{
    const wrapper = mount(<App base={base} />)
    wrapper.instance().createNewComment({comment: 'test'})
    wrapper.instance().createNewComment({comment: 'test'})
    wrapper.instance().createNewComment({comment: 'test'})    
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })
})
