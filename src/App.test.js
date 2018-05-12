import React from 'react'
import App from './App'

import { shallow } from 'enzyme'

describe('<app />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<app />)
  })
})
