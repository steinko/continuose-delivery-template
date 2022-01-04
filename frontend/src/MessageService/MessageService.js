

export class MessageService {
	

    async getMessage() { 
         let text = ""
         try {
                const url = this.getBackendUrl() +"/helloworld" 
                console.log(url)
                const response = await fetch(url)

                if (!response.ok) { 
                    console.log(response.statusText)
                    throw Error(response.statusText)
                }

                text = await response.text()
                console.log(text)
              }
         catch (error) {
            console.log(error)
         }
       console.log(text)
       return text
    }


	getBackendUrl() { 
        return process.env.REACT_APP_BACKEND_URL // eslint-disable-line
	}
	
}