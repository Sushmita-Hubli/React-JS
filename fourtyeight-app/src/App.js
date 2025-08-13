import logo from './image.png';
import './App.css';
import CallbackRefComp from './CallbackRefComp';

function App() {
  return (
    <div className="App">
      <h1>Callback Refs</h1> 
      <p>The function receives the React component instance or HTML DOM element as its argument, which can be stored and accessed elsewhere</p>
      <img src={logo}></img>
      <CallbackRefComp/>

    </div>
  );
}

export default App;
