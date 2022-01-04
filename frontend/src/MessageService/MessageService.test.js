import {MessageService} from './MessageService'



describe('Test Message Service', () => {
	beforeEach(() => {
    fetch.resetMocks()
  })
  

 it('should backend url', () => { 
	const messageService = new MessageService()
	let url = messageService.getBackendUrl()
	expect(url).toBe("http://localhost:80")
   })

  it("should return hello world", async () => {
	   fetch.mockResponse("Hello World")
       	const messageService = new MessageService()
        const message = await messageService.getMessage()
        expect(message).toBe("Hello World")
  })
})