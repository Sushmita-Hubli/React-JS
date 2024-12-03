import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './b4.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>React Life Cycle Methods</h1>
  <b>Mounting</b>
  <p>Mounting means putting elements into the DOM.<br></br>In this phase, an instance of a component is being created and inserted into the DOM.<br></br><b>React has four built-in methods that gets called, in the order, when mounting a component:<br></br>1.constructor()<br></br>2. getDerivedStateFromProps()<br></br>3. render()<br></br>4. componentDidMount()</b></p>
  <p>render() method is required and will always be called, the others are optional and will be called if you define them. </p>
<br></br><br></br>
<b>Updating</b>
<p>next phase in a life cycle is when a component is updated. component is updated whenever there is a change in component's state or props</p>
<p>React has five built-in methods that gets called, in this order, when a component is updated: <br></br><b>1.getDerivedStateFromProps()<br></br>2.shouldComponentUpdate()<br></br>3.render()<br></br>4.getSnapshotBeforeUpdate()<br></br>5.componentDidUpdate()</b></p>
<p>render() method is required and will always be called, the others are optional and will be called if you define them. </p>
<br></br><br></br>
<b>Unmounting</b>
<p>next phase in a lifecycle is when a component is removed from the DOM, or uncounting as React likes to call it.</p>
<p>React has only one built-in method that gets called when a component is unmounted:<br></br><b>componentWillUnmoubnt()</b></p>
<img src={Logo}></img>


 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
