import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BsComponent from './BsComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <h1>How to Add and use Bootstrap in React</h1>
  <p>Bootstrap is a free frontend framework for faster and easier web development.<br></br>Bootstrap also gives you the ability to easily create responsive designs.</p><br></br>
  <p>There are 2 ways to add bootstrap:<br></br>1.By Adding CDN-online<br></br>2.By Adding Bootstrap using NPM-Offline</p><br></br><br></br>
  <p>You will get the CDN from getbootstrap.com. Add that CDN in your "index.html" file inside your public folder in your React App.</p>
<BsComponent/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
