import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Customer,{Customer1,Customer2} from './Customer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>Destructuring props</h1>
  <p>
  Destructuring is a characteristics of js, it is used to take out sections of data from an array or objects, we can assign them to new own variables created by the developer.
 In destructuring, it does not change an array or any object, it makes a copy of the desired object or array element by assigning them in its own new variables, later we can use this new variable in React (class or functional) components.
  </p>
  <br></br>
  <p>Destructuring makes developer's liofe easy,by assigning their own variables . it improves sustainability, readability of code.it helps to cut the amount of code used in application.It trims the no. of steps taken to access data properties. It provides components with the exact data properties. it saves time from iterate over an array of objects multiple times.</p>

  <Customer name='haha' age={55}/>
  <Customer1 name="vishakha" age={22}/>
  <Customer2 name="Krishna" age={25}/>


  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
