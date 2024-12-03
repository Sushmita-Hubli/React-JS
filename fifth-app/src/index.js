import React from 'react';
import logo from './scc2.png';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloMessage from './HelloMessage';
import House from './House';

let a="Panera"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <img src={logo}/>
    <HelloMessage name="Sushmita" age="21"/>
    <HelloMessage name="Hubli" age="21">
    <p>sushmita hubli studies in Northeastern University.</p>
    </HelloMessage>
    <HelloMessage name={a} age="130"/> {/*passed variable as a prop*/} 


    <House/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
