import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


  const { worker } = require('./mocks/worker'); // eslint-disable-line
  worker.start();
  console.log("worker started")


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
