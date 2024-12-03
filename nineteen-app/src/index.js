import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mounting1 from './Mounting1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <h1>Mounting phase methods implementation</h1>
  <p>Putting elements inside the DOM. a instance of a component is being created and inserted into the DOM. React has 4 built in methods that gets called, in the order when mounting a component:<br></br>1.constructor(props)-->special function that executes when a new component is created.we can use constructor for 2 purposes:1.for initializing state. 2.for binding the event handlers.<br></br>you cannot use HTTPrequests(APIs) in the constructor. we have to call parent class constructor in our child class constructor by using super(props).When implementing the constructor for a React.Component subclass, we have to call super(props) on the first place in the constructor otherwise this.props will be undefined in the constructor, which can lead to bugs.
  <br></br>2.static getDerivedStateFromProps(props,state)-->it is used when the state of the component depends on changes in props over time. Lets say you have a component but the initial state of the component depends in the props being passed to the component, in this scenario you can use this method to set the state. This is very rarely used method.This is invoked right before calling the render functin, both on the initial mount and on subsequent updates. We cannot use this keyword inside this function, it means we cannot update the state by using this.setState method. It should return an object to update the state, or null to update nothing.
  <br></br>3.render()--> only required method in class component. in this method we can read props and state and return jsx. in this method we cannot change the state or interact with DOM or make ajax calls. Children components life cycle methods are also executed.
  <br></br>componentDidMount()-->It is invoked immediately after a component is mounted , after the render() method. Invoked immediately after the component have been rendered to the DOM. Invoked immediately afterv a component and all its children components have been rendered to the DOM. We can use HTTP requests, interaction with the DOM or make ajax calls in this method. This method is executed only once in a life cycle of a component. This method is also used for integration with other js frameworks and other functions with delayed execution like setTimeout or setInterval. 
  </p>
  <Mounting1 city='solapur'/>

</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
