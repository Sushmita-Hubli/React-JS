import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyleComponent from './StyleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Styling Components- Inline Style</h1><br></br>
    <p><b>To style an element with the inline style attribute, the value must be a JS object.</b></p>
    <p>In JSX, JS expressions are written inside curly braces, and since JS objects also use curly braces, the styling in the example above is written inside two sets of curly braces</p><br></br>
    <p>Since the inline   CSS is written in JS object6, properties with two names like background-color, must be written with camel case syntax.It should be written like backgroundColor</p><br></br>
    <p>You can also create an object with styling information, and refer to it in the style attribute.</p>
<StyleComponent/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
