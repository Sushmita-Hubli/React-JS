import logo from './image.png';
import './App.css';
import HookuseRef from './HookuseRef';

function App() {
  return (
    <div className="App">
      <h1>useRef Hook and UnControlled Component</h1>
      <p>It can be used to access a DOM element directly.<br>

      </br>
      We can use useRef Hook in function component for the REF purpose which we did in the class component.
      <br></br>
      In React, we can add a ref attribute to an element to access it directly in the DOM.
      </p>
      <img src={logo} alt="" />

      <HookuseRef/>
    </div>
  );
}

export default App;
