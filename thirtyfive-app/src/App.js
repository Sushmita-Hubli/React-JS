import logo from './logo.svg';
import './App.css';
import ClassState from './ClassState';
import FunctionState from './FunctionState';

function App() {
  return (
    <div className="App">
     <ClassState/>

     <h1>Now calling functional component</h1>
     <FunctionState/>
    </div>
  );
}

export default App;
