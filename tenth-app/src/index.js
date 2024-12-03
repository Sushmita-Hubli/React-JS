import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyClass from './MyClass';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>PROPS WITH CLASS COMPONENT</h1>
    <p>In a class-based components, props are accessible via this.props</p>
    <p>Send them into the component as attributes</p>
    <p>React is all about re-using code, and it can be smart to insert some of your components in seperate vfiles. To do that, create a new file with a .js file extension and put the code inside it</p>
    <p><b>Note: </b> the file must start by importing React(as before) , and it has to end with statement export default Component_Name</p>
    <p>If you have a variable to send, and not a string. you just put the variable name inside curly brackets.</p>
<p>React props are read-only. you cannot change them </p>
<p>Props can be used as Children Props</p>
<p>props are also about how you pass data from one component to another.</p>
    <MyClass name='Chandrashekhar'/>
    <MyClass name='KJKJJH' >
      <button>haha</button>
    </MyClass>
    <MyClass name='hbjb' age={22} />
    


  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
