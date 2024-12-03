import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './cons3.png'
import Employee ,{Employee2} from './Employee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>States in React</h1>
    <h2>The State is a built-in React object that is used to contain the data or information about the component.</h2>
    <p>A component's state can change over time, whenever it changes, the component re-renders.The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.<br></br><b>Constructor is used to initialize the object's state.</b><br></br>
    <b>Imp points:</b> <br></br>
    State is similar to props , but it is private and fully controlled by the component.<br></br>
    We can create state only in class component.<br></br>
    It is possible to update the state.<br></br>
    A state can be modified based on user action or network changes.<br></br>
    Every time the state of an object changes, React re-renders the component to the browser.<br></br>
    State object can store multiple properties<br></br>
  this.setState() is used to change the value of the state object.<br></br>
  We can set props data to state<br></br><br></br>


  The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.<br></br>

  Always use the setState() method to change the state object, since it will ensure that the component knows it's been updated and calls the render() method.
    </p>

    <h2>There are 2 ways of initializing state</h2>
    <p><b>1.With Constructor</b><br></br><b>2.Without Constructor</b></p><br></br><br></br>
    <p><b>Differences between props and state:</b><br></br>
    props get passed to the component. State is created and managed within the component<br></br>
    props are accepted as patrameters. state is stored as variable<br></br>
    props are immutable/unchangeable. state is mutable/changeable<br></br>
    props--Functional Components.  useState Hook-- Functional Component<br></br>
    this.props---class components.  this.state---class component
    </p>
    <img src={Logo}/>
    <Employee name='Sushmita'/>

    <h1>Creation of state withoiut using constructor</h1>
    <Employee2/>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
