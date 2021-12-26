

export class MessageService {

    async getMessage() { 
        return fetch(this.getBackendUrl())
	}
	
	getBackendUrl() { 
        return process.env.BACKEND_URL // eslint-disable-line
	}
	
}