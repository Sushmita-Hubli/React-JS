import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClickFunction,{ClickFunction1,ClickFunction2,ClickFunction3} from './ClickFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>React Events</h1>
    <p>Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML.</p>
    <ClickFunction/>
    <p>Class component</p>
    <ClickFunction1/>
    <br></br>
    <p>React events are written in camelCase syntax. onClick instead of onclick. React event handlers are written inside curly braces.<br></br>
    to pass an argument to an event handler use an arrow function </p>
    <ClickFunction2 name="Pallavi" />
    <ClickFunction3 name='Sayali' />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
