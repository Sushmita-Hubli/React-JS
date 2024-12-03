import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Updating1 from './Updating1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Updating Phase in React Life Cycle</h1><br></br>
    <p>The next phase in the lifecycle is when a component is updated.
    A component is updated whenever there is a change in component's state or props.<br></br><br></br>React has five built-in methods that gets called , in this order, when a component is updated:<br></br></p>
    <p><b>1.getDerivedStateFromProps():this method is rarely used</b><br></br><b>2.shouldComponentUpdate():this method is rarely used</b><br></br><b>3.render():</b><br></br><b>4.getSnapshotBeforeUpdate():this method is rarely used</b><br></br><b>5.componentDidUpdate():</b></p>
    <br></br><br></br>
    <b>getDerivedStateFromProps()--></b><p>it is used when the state of the component depends on changes in props over time. Lets say you have a component but the initial state of the component depends in the props being passed to the component, in this scenario you can use this method to set the state. This is very rarely used method.This is invoked right before calling the render functin, both on the initial mount and on subsequent updates. We cannot use this keyword inside this function, it means we cannot update the state by using this.setState method. It should return an object to update the state, or null to update nothing.</p>
    <Updating1/>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
