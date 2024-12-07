import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './state.png'
import USComponent,{USComponent1,USComponent2} from './USComponent';
import Logo1 from './haha.png'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>useState Hook</h1>
    <p>Hook state is the new way of declaring a state in React app.</p>
    <p>Hook uses useState() functional component for setting and retrieving state.</p>
    <p>useState Hook allows us to track state in a function component.State generally refers to the data or properties that need to be tracked in an application.<br></br>To use the useState Hook, we need to import it into our component.At the top of your component , import the useState Hook. </p><br></br>
    <p>We initialize our state by calling useState in our function component.<br></br>useState accepts initial state and returns two values: The current state and a function that updates the state.<br></br>Initialize state at the top of the function component.Notice that we are again destructuring the return values from useState.</p>
    <br></br><p>To update our state we use our state updater function.the second thing which we have used inside our array. <br></br>
    We should never directly update state. ex. color="red". this is not allowe.</p>
    <br></br><p>The useState Hook can be used to keep track of strings,numbers,booleans,arrays,objects, and any combination of these!<br></br>We could create multiple state Hooks to track individual values.</p>
    
    <img src={Logo}/><br></br><br></br>
    <USComponent/>
    <USComponent1/>
    <USComponent2/>
    <img src={Logo1}></img>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
