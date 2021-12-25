export default class MessageService {

	 static async getMessage(){ 
	   return fetch("http://localhost:8080/helloworld")
	}
}