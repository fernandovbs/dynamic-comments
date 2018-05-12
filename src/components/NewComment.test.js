import React from 'react'
import {shallow, mount, render} from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () =>{
    const handleNewCommentMock = jest.fn()

    it('renders without crashing', () => {
        const wrapper = shallow(<NewComment handleNewComment={handleNewCommentMock} />)
        expect(wrapper.length).toBe(1) 
    })
    it('handleEnter to create a new comment', () => {
        const wrapper = mount(<NewComment handleNewComment={handleNewCommentMock} />)
        const eventMock = {
            keyCode: 13,
            preventDefault: jest.fn()
        }
        wrapper.instance().refs.comment.value = 'test'
        wrapper.instance().handleEnter(eventMock)
        expect(eventMock.preventDefault.mock.calls.length).toBe(1) 
        expect(handleNewCommentMock.mock.calls.length).toBe(1)
        expect(wrapper.instance().refs.comment.value).toBe('')
    })    
})