import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CSSstylesheet from './CSSstylesheet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Styling Components- CSS Stylesheets External Style.</h1>
    <p>You can write your CSS styling in a seperate file, just save the file with me .css file extension, and import it in your application.</p>
    <p>It is normal that our css depends on props or state</p>
    <CSSstylesheet check={true}/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
