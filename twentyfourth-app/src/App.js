import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import NewComponent from './NewComponent';

function App() {
  let name="Sushmita";
  let data;
  if(name=="Sushmita")
  {
    data= <Component1/>

  }
  else
  {
    data=<Component2/>
  }
  const age=22;

  return (
    <>
    {data}
    {name=="Sushmita" && <h1>Hello Sushmita</h1>}  {/*its like if name= sushmita then h1 will be printed . if name!= sushmita then nothing will be printed or rendered in the DOM*/}
    {age>18?<h1>can vote</h1>:<h1>cannot vote</h1>}
    <NewComponent/>

    </>
  );
}

export default App;
