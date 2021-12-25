
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Hello World"
    }
  }
	
  getMessage() {
	this.setStat({
		message: "Hello World"
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
