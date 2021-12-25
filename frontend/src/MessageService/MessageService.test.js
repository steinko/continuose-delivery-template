import MockedMessageService from './MessageService'
jest.mock('./MessageService' , () => {
  return class MessageService {
   static  getMessage() {
      return "Hello World"
    }
  }
})

describe('Test Message Service', () => {
  it('should exsists a message', async () => { 
	let message =  await MockedMessageService.getMessage()
	expect(message).toBe("Hello World")
  })
})