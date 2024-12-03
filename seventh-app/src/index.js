import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h1>Arrow Functions</h1>
  <p>allows us to write shorter function syntax</p>
  <p>It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword</p>
  <br></br>
  <p>We can also create arrow functions with parameters. </p>
  <p>Arrow functions were introduced in ES6</p>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
