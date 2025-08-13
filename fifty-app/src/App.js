import logo from './useRef.png';
import './App.css';
import HookUseRef2 from './HookUseRef2';

function App() {
  return (
    <div className="App">
      <h1>useRef Hook</h1>
      <p>It can be used to store a mutable value that does not cause re-render when updated<br></br>
      This hook allows you to persist values between renders.<br></br>
      The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument(initialValue).<br></br>
      The returned object will persist for the full lifetime of the component.</p>
      <br></br>
      <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since the Hook itself causes re-render.<br></br>
      To avoid this, we use the useRef Hook</p>
      <img src={logo}></img>

      <p>useState → Reactive storage (UI updates when value changes).
<br></br>
useRef → Silent storage (value changes, but UI stays the same).</p>
      <HookUseRef2/>
    </div>
  );
}

export default App;
