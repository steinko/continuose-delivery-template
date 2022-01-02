

export class MessageService {

    async getMessage() { 
        return fetch(this.getBackendUrl())
	}
	
	getBackendUrl() { 
        return process.env.REACT_APP_BACKEND_URL // eslint-disable-line
	}
	
}