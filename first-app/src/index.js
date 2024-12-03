import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h3>React is js library for building ui
  it is used to build single page applications
  it allows us to create reusable ui components
  it is a free and open source library
  
  it is declarative,flexible and efficient js library
  it lets you compose complex UIs from small and isolated pieces of code called components
  it is referred to as a frontend js framework, is a js library created by fb
  it is a tool for building ui components
  
  
  react community also provides advanced concepts like state management, routing, etc., on top of react library.
  
  react creates a virtual dom in memory.
  instead of manipulating the browser's dom directly, react creates a virtual dom in memory, where it does all the necessary manipulating,  before making the changes in the browser dom.
  
  declarative approach: you tell the browser exactly what to do, instead of telling it what you need. the react declarative approach abstracts that fir us. with declarative code, we tell js what we want to be done, and let js take care of performing the steps.
  
  
  
  lect 2:
  babel is js compiler
  it is used to convert ECMAScript 2015+ code into a backwards compatible version of js in current and older browsers or environments
  when we create an app by using "create-react-app", then babel automatically included in our react app.
  babel can convert jsx syntax.
  <br></br>
  <br></br>
  npm install -g create-react-app
  <br></br>
  create-react-app first-app
  <br></br>
  npm start
  <br></br><br></br>

  index.html in public folder, index.js in src folder, app.js in src folder
entry point of our application is index.js.
file which is visible on our browser is index.html
app.js consists of components which we want to display on our screen

index.js takes data from app.js. then it renders html of that data from app.js into index.html.
<br></br> <br></br>
react render html: react renders html to web page by using a function called ReactDOM.render method .
purpose of this function is to display the specified HTML code inside the specified HTML element.
it is rendered in index.html file present in public folder.
you will notice a single div with id "root" in the body of this file. this is where our react app will be rendered.
  </h3>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
