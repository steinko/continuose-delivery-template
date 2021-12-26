import App from './App' 
import {render} from '@testing-library/react'
import React from 'react'
import {MessageService} from './MessageService/MessageService'

jest.mock('./MessageService/MessageService')

it('should display hello world', async () => {
     const mockGetMessage = jest.fn()
     MessageService.prototype.getMessage = mockGetMessage
     const expectedMessage = "Hello World"
     mockGetMessage.mockReturnValue(expectedMessage)

     let {getByLabelText} =  render(<App/>)
     expect(await getByLabelText('Message:').value).toBe(expectedMessage)
 })