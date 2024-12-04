import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Stylesheet3 from './Stylesheet3';
import Stylesheet4 from './Stylesheet4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <h1>Styling React Components- CSS Modules</h1><br></br>

  <p>css modules are convenient for components that are placed in seperate files.<br></br>The css inside a module is available only for the component that imported it , and you dont have to worry about the name conflicts.</p>
 <App/>
 <p>here we see the background color of both the components are same which should not happen. but this occurs because of name conflict. its like whenever we run our React app, all the css files are merged inton one css file and one css file cannot have twoi classes with the same name. so this is called as name conflict in external css. <br></br>To avoid this problem we make use of CSS modules.</p>
 
 <br></br><br></br>
 <h1>Below components use css modules for styling</h1>
 <Stylesheet3/>
 <Stylesheet4/>
 <br></br><br></br>
 <p>  CSS Modules are locally scoped. CSS External style are globally scoped.CSS Module are converted in different format in browser(Filename_classname_hashcode).</p><br></br>
 <p>In Inline Style we cannot use pseudo classes , e.g- :hover, :active, :visited, etc.</p>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
