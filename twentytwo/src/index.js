import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ParentClass from './ParentClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Unmounting Phase in React LifeCycle</h1><br></br>
    <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.<br></br>React has only one built-in method that gets called when a component is unmounted:<br></br><b>1.componentWillUnmount</b><br></br>Just before the component gets removed from actual DOM, this method gets called. Along with removal of this component from DOM tree, all children of this component also gets removed automatically.<br></br>This method allows us to execute the React code/cleanup code when the component gets destroyed or unmounted from DOM.<br></br>This method is called before the component gets unmounted.</p>
    <p>All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block. Cleanup activities helps in improving performances, memory leakages and maintain security.<br></br>You should not call setState() method in this method because the component will never be re-rendered.</p>
    <ParentClass/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
