import React from 'react'
import {shallow, mount, render} from 'enzyme'
import Comments from './Comments'

describe('<Comments />', () =>{
    const commentsMock = {
        1: {
            comment: 'test'
        },
        2: {
            comment: 'test 2'
        },
        3: {
            comment: 'test 3'
        }
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<Comments comments={commentsMock} />)
        expect(wrapper.length).toBe(1) 
        expect(wrapper.find('Comment').length).toBe(3)
    })
})