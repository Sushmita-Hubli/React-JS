import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import New from './App';
import {Named1, Named2} from './NamedExport';
import Defaultone,{NamedExportone} from './Both';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <h1>here we are using default export where we have used default keyword while exporting in App.js file and it is not necessary to import with the same name i mean alia name can be different while we aqre importing the file in our index.js file. you can refer to line number 4 to  understand this.</h1>
   <New/>
   <br></br>
   <h1>so now we will do named export and import where we can export more than one function in curly braces as shoen in NamedExport.js file also we have not used default keyword while exporting the two functions. Ok so while importing this file which have used NamedExport, we have to write the same name of the function as we have written in the NameExport.js.refer line number 5 to understand this.</h1>
<Named1/>
<Named2/>
<br></br><br></br>
<h2>so a js file can export one default function and one namedexport as well as shown in Both.js . but it cannot support two default exports together. it can support one or more than one named exports together</h2>
<Defaultone/>
<NamedExportone/>
<br></br><br></br><br></br>
<p>ES6 provides us to import a module and use it in other files. ES6 provides us two ways to export a module from a file: named export and default export.<br></br>
One can have only one default export per file. When we import we have to specify a name.<br></br>
With named exports, one can have multiple named exports per file. Then import the specific exports they wangt surrounded in curly braces. The name of the imported module have to be the same as the name of the exported module.
</p>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
