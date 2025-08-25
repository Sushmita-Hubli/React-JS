import logo from './image.png';
import './App.css';
import FetchAPI from './FetchAPI';

function App() {
  return (
    <div className="App">
      <h1>Fetch API</h1>
      <img src={logo}></img><br></br>
      <p>API (Application Programming Interface) is a software intermediary that allows two applications to talk to each other.<br></br>
      APIs are an accessible way to extract and share data within and across organizations.<br></br>
      It is also defined as a set of subroutine definitions,protocols, and tools for building software and applications.</p><br></br><br></br>
      <h2>What is fetch function?</h2>
      <p>The fetch() method in JS is used to request data from a server.<br></br>
      The request can be of any type of API that return data in JSON or XML.<br></br>
      The fetch() method requires one parameter, the URL to request, and returns a promise.</p>
   
   <FetchAPI/>
   <h3>We can also use React AXIOS library for working with APIs.</h3>
    </div>
  );
}

export default App;
