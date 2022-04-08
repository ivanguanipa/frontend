import {useInputValue} from './useInputValue';
// source: https://dev.to/ppciesiolkiewicz/comment/i708
import React, { useState as useStateMock } from 'react'
// source: https://dev.to/ppciesiolkiewicz/comment/i708
import { mount } from 'enzyme'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('Header', () => {

  beforeEach(() => {
    ;(useStateMock as jest.Mock).mockImplementation(init => [init, useInputValue])
  })

  it('renders', () => {
    expect(useInputValue('test')).toBeDefined()
  })
  it('renders', () => {
    const event = {
      target: { value: 'the-value' }
    } as React.ChangeEvent<HTMLInputElement>;
    useInputValue('test').onChange(event)
    expect(test).toBeDefined()
  })
})