import logo from './logo.svg';
import './App.css';
import React  from 'react';

function App() {
  return (
    <div>
      <form>
        <label>
           Message:
           <input type="text" name="message" readOnly value= "Hello World"/>
       </label>
</form>
    </div>
  );
}

export default App;
