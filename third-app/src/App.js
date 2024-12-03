import logo from './screenshot.png';
import './App.css';


let name="Sushmita Hubli";
const car_obj={name:"Honda BRV",color:"white",make:"2008"};
let a=3;
let msg="";
if(a>5)
{
  msg="greater";
}
else
{
  msg="smaller";
}
function App() {
  return (
    <div className="App">
     {/* <h1>{name}</h1>  js expression example */}
<h1>{msg}</h1>
<h1>{(a>5)?"hello kumar":"bye kumar"}</h1>
    <img src={logo} className="App-logo" />
     <p>JSX stands for JavaScript XML
JSX is an extension of JS Language
JSX allows us to write HTML in React
JSX makes it easier to write and add HTML in React 


JSX allows us to write HTML elements in js and place them in dom without any createElement method and/or appendChild methods.
JSX converts HTML tags into react elements
you are not required to use JSX, but JSX makes it easier to write REACT Applications.
JSX is an extension of js language based on ES6, and is translated into regular js at runtime.

<br></br><br></br>
With JSX you can write expressions inside curly braces .<br></br>
The expression can be a React variable, or property, or object or any other valid js expression. JSX will execute and return the result
</p>
     <h1>{name}</h1>
     <h2>{7+3}</h2>
     <h2>{car_obj.name}</h2>
     <h2>{car_obj.color}</h2>

     <br></br>
     <label htmlFor="jhjk"></label> {/*in normal html we used to write <label for="jhjx"></label>*/}
     <br></br>
     <p>In order to iuse images in your webpage, you have to copy paste that image in your src folder in React. </p>
     <br></br>
     <p>React supports if statements, but not inside JSX. To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead</p>
    </div>
  );
}

export default App;
