import App from './App' 
import {render} from '@testing-library/react'
import React from 'react'

jest.mock('./MessageService/MessageService' , () => {
  return class MessageService {
   static  getMessage() {
      return "Hello World"
    }
  }
})

it('should display hello world', async () => {
     let {getByLabelText} =  render(<App/>)
     expect(await getByLabelText('Message:').value).toBe('Hello World')
 })