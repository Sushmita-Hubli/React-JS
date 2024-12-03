import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {App2} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>Components are independent and reusable pieces of code</h1>
      <h1>Components are the building blocks of any react app</h1>
      <h1>Components are like functions that return HTML elements</h1>
      <h1>Components are of two types: 1. class components and 2. function components</h1>
      <h2>Class Components:</h2>
      <p>These components are simple classes (made up of multiple functions that add functionality to the application).
      All class based components are child classes for the Component class of ReactJS (React.Component).<br></br>
      The calss must implement a render() member function which returns a React component to be rendered, similar to a return value of a functional component.
      </p>
      <br></br>
      <h2>Calling the class component</h2>
      <App/>
      <br></br>
      <h2>Calling functional component</h2>
      <App2/>

      <br></br><br></br>
      <p>Component name always starts with Capital Letter. If you write tag in lowercase then react treats it as a DOM tags but if you write tag in first letter uppercase, then it represents a react component.</p>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
