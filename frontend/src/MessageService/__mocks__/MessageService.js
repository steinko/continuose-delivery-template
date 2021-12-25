import MessageService from '../MessageService'

jest.mock('../MessageService', ()=> {
   return class MessageService {
	
	static getMessage() {
		return "Hello World"
	}
  }
})