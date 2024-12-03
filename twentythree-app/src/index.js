import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './b5.png';
import ParentComponent from './ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>Passing Methods as Props</h1>
  <img src={logo}/>
  <ParentComponent/>

 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
