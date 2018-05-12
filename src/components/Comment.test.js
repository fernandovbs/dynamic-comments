import React from 'react'
import {shallow, mount, render} from 'enzyme'
import Comment from './Comment'

describe('<Comment />', () =>{
    const handleNewCommentMock = jest.fn()

    it('renders without crashing', () => {
        const wrapper = shallow(<Comment comment={'test'} />)
        expect(wrapper.length).toBe(1) 
        expect(wrapper.is('.card.card-body.bg-light')).toBe(true)
    })
})