import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Students from './Students';
import Student1 from './Student1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>List Rendering</h1>
    <p>List are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying list of things in a website.eg.list of products,etc..<br></br>In react, you will render lists with some type of loop. In js map() array method is generally the preferred method</p>
    <Students/>
    <br></br><br></br>
    <h1>Below mentioned component is the example where i have implemented List rendering using map function</h1><br></br>
    <Student1/><br></br><br></br>
    <p>map() creates a new array from calling a function for every array element.<br></br>map() calls a function once for each element in an array.<br></br>map() doesnt execute the function for empty element.<br></br>map() does not chsnge the original array.</p>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
