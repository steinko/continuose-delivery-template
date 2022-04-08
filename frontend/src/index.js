import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
console.log(process.env.REACT_APP_USE_MSW)  // eslint-disable-line
const useMock = process.env.REACT_APP_USE_MSW  // eslint-disable-line

if (useMock) {  // eslint-disable-line
  console.log('worker start')
  const { worker } = require('./mocks/worker'); // eslint-disable-line
  worker.start();
  console.log("worker started")
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
