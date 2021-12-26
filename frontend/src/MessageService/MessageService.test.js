import {MessageService} from './MessageService'



describe('Test Message Service', () => {
  

 it('should backend url', () => { 
	const messageService = new MessageService()
	let url = messageService.getBackendUrl()
	expect(url).toBe("localhost:8080")
   })
})