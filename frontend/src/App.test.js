import App from './App' 
import {render} from '@testing-library/react'
import React from 'react'

it('should display hello world', async () => {
     let {getByLabelText} =  render(<App/>)
    expect(await getByLabelText('Message:').value).toBe('Hello World')
  })