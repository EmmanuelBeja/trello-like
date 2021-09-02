import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  const shallowWrapper = shallow(<App />)

  it('should render correctly', () => {
    expect(shallowWrapper).toMatchSnapshot()
  })
})
