import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>Introduction To Hooks</h1>
  <p>It allows you to use state and other React features without writing a class.<br></br>
  Hooks allow function components to have access to state and other React features like life cycle methods.<br></br>
  <br></br>Hooks are additional feature in React, which means it doesnt contain any breaking changes.
  </p>
  <br></br><br></br>
  <p>Hooks are basically functions. Hooks allow us to "hook" into React features such as state and lifecycle methods.</p><br></br>
  <b>Hook Rules</b>
  <p>1.Hooks can only be called inside React function components<br></br>2.Hooks can only be called at the top level of a component.<br></br>
  3.We should not call Hooks inside loops, conditions or nested functions.<br></br>
4. Only call Hooks from React functions, we should not call Hooks from regular JS  functions.<br></br>
5.Hooks cannot be conditional.<br></br>
6.React relies on the order in which Hooks are called.<br></br>
7.Hooks are not used for class based components.
  </p><br></br><br></br>
  <b>Custom Hooks</b><p>If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks</p><br></br>

  <h2>Hooks Available</h2>
  <p>useState<br></br>useEffect<br></br>useContext<br></br>useRef<br></br>useReducer<br></br>useCallback<br></br>useMemo<br></br>Custom Hooks</p>

 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
