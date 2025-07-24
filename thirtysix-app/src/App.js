import logo from './logo.svg';
import './App.css';
import FunctionEffect from './FunctionEffect';

function App() {
  return (
    <div className="App">
      <h1>UseEffect Hook</h1>
      <p>Many developers were confused by the name of this hook "useEffect"
      What exactly is an "effect"?
      The word effect refers to a functional programming term called as "side effect"
      Some examples of side effects are: fetching data from API, directly updating the DOM, and timer
      This hook allows us to perform side effects in your functional component
      sometimes we want to run additional code after Rect has updqated the DOM.Network requests, manual DOM mutations, and logging are common examples of effects.
      The render method itself shouldn't cause side effects. It would be too early
      <br></br>
      Common side effects include:
      Making a request to an API for dtaa from a backend server
      To interact with browser APIs (that is, to use document or window directly)
      Using unpredictable timing functions like setTimeout or setInterval</p>
      <br>
      </br>

      <p>If you are familiar about the React Life Cycle Methods of Class Components, you can compare useEffect Hook as componentDidMount, componentDidUpdate and ComponentWillUnmount combined.
      </p>
      <br>
      </br>

      <p>In order to use this hook, we have to place it inside the function component's body
        When we ploace useEffect() hook inside the function component, then we have the access of props and state easily.
        useEffect runs after first render and also after every render update.
        useEffect accepts two arguments. The second argument is optional.
        <br></br>
        Syntax:<br></br>
        useEffect(function,dependency)<br></br>
        The function inside useEffect() will run after every render is committed.<br></br>
        The second argument of useEffect is the array of values which depends on effects<br></br>
        <b>Important Note:</b> you can call useEffect hook as many times as you need

      </p>

      <FunctionEffect/>

    </div>
  );
}

export default App;
