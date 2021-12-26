
import React, { Component } from 'react';
import {MessageService} from './MessageService/MessageService'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Hello World"
    }
  }
	
  getMessage() {
	const messageService = new MessageService() 
	this.setStat({
		message: messageService.getMessage()
	})
  }

  componetDidMount() {
	this.getMessage()
  }

  render() {
     return (
        <div>
          <form>
             <label>
                Message:
                <input type="text" name="message" readOnly value= {this.state.message}/>
             </label>
           </form>
         </div>
      )
    }
}

export default App;
