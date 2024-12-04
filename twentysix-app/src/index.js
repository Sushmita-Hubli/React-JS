import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Students from './Students';
import Student1 from './Student1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>List and Keys</h1>
    <br></br>
    <p><b>If we use List without keys in React then we come across the following warning: </b><br></br>Each child in an array or iterator should have a unique "key" prop.</p><br></br>
    <h1>Below mwntioned component is the example of rendering List without Keys</h1>
    <Students/><br></br><br></br>
    <h1>Now the below mentioned component is thye example of rendering list using keys.</h1>
    <Student1/><br></br><br></br>
    <p>Keys allow React to keep track of elements. This way , if an item is updated or removed, only that item will be re-rendered instead of the entire list.<br></br>Keys need to be unique to each sibling.<br></br>Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key</p>
    <p>Key is a special string attribute you need to include when creating lists of elements in React.<br></br>Keys are used by React to identify which items in the list arec changed,updated or deleted.in other words keys are used to provide unique identity to the elements in the list.It helps in efficient update of user interface.</p>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
