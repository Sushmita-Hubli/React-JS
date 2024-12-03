import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
   <h1>Updating Phase in React Life Cycle</h1><br></br>
    <p>The next phase in the lifecycle is when a component is updated.
    A component is updated whenever there is a change in component's state or props.<br></br><br></br>React has five built-in methods that gets called , in this order, when a component is updated:<br></br></p>
    <p><b>1.getDerivedStateFromProps():this method is rarely used</b><br></br><b>2.shouldComponentUpdate():this method is rarely used</b><br></br><b>3.render():</b><br></br><b>4.getSnapshotBeforeUpdate():this method is rarely used</b><br></br><b>5.componentDidUpdate():</b></p>
    <br></br><br></br>
    <b>shouldComponentUpdate()--></b><p>This method is used to let React know if a component's output is not affected by the current change in state or props.It means should React re-render or not?. this method is called before render method. this method returns true by default.Render method will not be called if this method returns false.<br></br>We cannot use HTTP requests(API calls) in this metgod and also we cannot call the setState() method.<br></br>This is rarely used method according to React documentation. <br></br><b>Syntax can be seen in below used component's code</b></p>
    <Person city="Solapur"/>

    <br></br><br></br>
    <b>render()--></b>
    <p>
    only required method in class component. in this method we can read props and state and return jsx. in this method we cannot change the state or interact with DOM or make ajax calls. Children components life cycle methods are also executed.
    </p>

    <br></br><br></br>
    <b>getSnapshotBeforeUpdate()--></b>
    <p>
   This method is called right before the virtual DOM is about to make changes to the Actual DOM (Before DOM is updated).<br></br>It allows our components to capture the current values or some information from the DOM before it is potentially changed.<br></br>This method will return null or return a value.<br></br>Any returned value by this function will be passed as gthird parameter to last function componentDidUpdate(). This is also rarely used method. <br></br><b>Syntax:can be seen in the code of Person component</b>   </p>
   <br></br><br></br>
   <b>componentDidUpdate()--></b>
   <p>
    This method is invoked right after updating occurs.<br></br>This method is not called for the initial render.<br></br>This method is called after the render is completed in the re-render cycles.<br></br>This method is guaranteed to call only once in a life cycle.You can make Ajax calls in this method.<br></br>This method will not be called if shouldComponentUpdatepdate() returns false.
   </p>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
