import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Conditional Rendering</h1>
    <br></br>
    <p>When you are building react applications you may often need to hide or show some HTML based on a certain condition.Conditional Rendering in react works in same way conditions works in js.<br></br>There are many ways to achieve conditional rendering:<br></br>
    1.if-esle-->we cannot use it inside return statement<br></br>
    2.Logical && Operator<br></br>
    3.Ternary Operator
    </p>
    <App/>
    <br></br><br></br>
    <b>Printing new component where we have achieved conditional rendering in class component</b>
    <NewComponent/>


    <br></br><br></br>
    <b>Element variables:</b><p>variables which are used to store elements.</p>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
