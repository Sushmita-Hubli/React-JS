import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo1 from './b1.png'
import Logo2 from './b2.png'
import Logo3 from './b3.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Life Cycle or Phases of Components</h1>
    <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.</p>
    <img src={Logo1}></img>
    <img src={Logo2}></img>
    <img src={Logo3}></img>

    <br></br>
    <p><b>React;s Virtual DOM</b>
    React uses Virtual DOM exixts which is like a lightweight copy of the actual DOM(a virtual representation of the DOM).<br></br>So for every object that exists in a original DOM, there is an object for that in React Virtual DOM.<br></br>It is exactly the same, but it does not have the power to directly change the layout of the document.<br></br>Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.
    </p> <br></br>
    <b>Important point</b>
    <p><br>These 3 phases or life cycle only applied to class components not on functional component.<br></br>There is another way of applying life cycle on functional components are called hooks.</br></p><br></br>
    <b>Mounting:</b>
    <p>Mounting means putting elements into the DOM. In this phase, an instance of a component is being created and inserted into the DOM.</p><br></br>
    <b>Updating:</b>
    <p>The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.</p><br></br>
    <b>Unmounting:</b>
    <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</p><br></br><br></br>
    <p>Each component has several "lifecycle methods" that you can override to run code at particular times in the process.</p>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
