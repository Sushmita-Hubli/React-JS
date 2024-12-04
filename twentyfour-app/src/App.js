import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  var name="Sushmita";
  // if(name=="Sushmita")
  // {
  //   return <Component1/>
  // }
  // else
  // {
  //   return <Component2/>
  // }

const age=22;
  return(
    <div>
      {name=="Sushmita" && <h1>Hello Sushmita</h1>}  {/*its like if name= sushmita then h1 will be printed . if name!= sushmita then nothing will be printed or rendered in the DOM*/}
       {age>18?<h1>can vote</h1>:<h1>cannot vote</h1>}
    </div>
  );
}

export default App;
