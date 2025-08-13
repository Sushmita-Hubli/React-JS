import logo from './image.png';
import logo1 from './image2.png';
import './App.css';
import MultipleInputs from './MultipleInputs';

function App() {
  return (
    <div className="App">
      <h1>Handling Multiple Inputs in React Form</h1>
      <img src={logo} alt="" />
       <img src={logo1} alt="" />
       <MultipleInputs/>
    </div>
  );
}

export default App;
