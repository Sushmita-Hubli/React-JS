import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './scc3.png'


const root = ReactDOM.createRoot(document.getElementById('root'));
const friends=["Sayali","Pallavi","Himani","Ashwin"];
root.render(
  <React.StrictMode>
  <h1>Prop types</h1>
  <img src={logo}/>
  <p>We pass different types of information, such as integers,strings,arraya,etc., as props to the components. We can either create default props or pass the props directly as attributes of the components. <i>We pass props from outside the component and use them inside that component</i></p>
  <p>To install and add the dependency for PropTypes use this command :   npm install prop-types. After installing we have to import the proptypes in our Component file which is App.js</p><br></br>
  <p>Now I have installed prop-types in my project so we can execfute the following thing</p><br></br>
  <p>To apply type checking on the props for a component, you have to use built-in propTypes property which is included in 'prop-types' module</p>
  <App name="Sushmita" age={24} isMarried={false} arr={friends}/>
  <p><b>Note:</b> When an invalid datatype is provided to a prop, a warning will be shown in js console. </p>
  <br></br>
  <p><b>isRequired: </b>means that props element defined is required to be passed from parent component. If you don't pass it, React will give you a warning message.</p>
  <App name="Priya" isMarried={true}  arr={friends}/>
  <br></br>
  <p>Setting default prop values: we can add default values for the props by using defaultProps built-in property in 'prop-types' module.</p>
  <App name="Giya" />
  <br></br>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
