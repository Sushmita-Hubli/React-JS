import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BindingEvent,{BindingEvent1,BindingEvent3} from './BindingEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <h1>Binding Event Handlers</h1>
  <h2>In ReactJS, we need to bind events so that the this keyword would not return an "undefined".  </h2>
  <p>There are few methods to achieve binding</p>
  <h2>Method 1: doing it in the constructor itself.
  In this approach, we are going to bind the event handler inside the constructor. This is also the approach that is mentioned in ReactJS documentation. This has performance benefits as the events aren't binding every time the method is called.</h2>
  <BindingEvent/>
  <h2>Method 2: using bind() method in the render method where the function is called</h2>
  <BindingEvent1/>
  <h2>Method 3: Binding Event Handler using Arrow Function</h2>
  <BindingEvent3/>
  <br></br><br></br>
  <p>Event Binding tells the browser that this function should be called whenever this event is triggered or in other words whenever the event is triggered the function which is bind with the event should be called. <br></br>Bind creates a new functrion that will have this set to the first parameter passed to bind().<br></br>
  <b>binding event handlers is primarily associated with class components in React, not functional components.</b> </p>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
