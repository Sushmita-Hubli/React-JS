import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo2 from './cons1.png';
import Logo3 from './cons2.png';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Constructors in React</h1>
    <h2>Constructor is a method used to initialize an object's state in a class.</h2>
    <h2>It is automatically called during the creatrion of an object in a class. The concept of constructor is same in React </h2>
    <h2>If you dont initialize state and you dont bind methods in your project, then you dont need to implement a constructor for your React component.</h2>
    <h2>If you create a constructor for a React Component, you need to call super(props) method before any other statement.</h2> 
    <h2>If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.</h2>
    <img src={Logo2}/>  
    <img src={Logo3}/>
    <Student/>
    <Student name="Preety"/>
    
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
