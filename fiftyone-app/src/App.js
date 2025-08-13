import logo from './image.png';
import logo1 from './router.png';
import logo2 from './topics.png'
import './App.css';

function App() {
  return (
    <div>
    <h1>React Router</h1>
    <p>React router is a standard library for routing in React</p>
    <br></br>
    <p><b>What is Routing?</b><br></br>
    Routing is the mechanism by which requests (as specified by a URL and HTTP method) are routed to the code that handles them.<br></br>
     
    </p>
    <img src={logo}></img>
    <img src={logo1}></img>
    <p>It enables the navigation among views of various components in a React Application, allows changing the browser URL,
    and keeps the UI in sync with the URL. React Router is a fully-featured cliend and server-side routing libraryfor React, a JavaScript library for building user interfaces.<br></br>
    React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native</p>
    <br></br>
    <p>Create React App doesnt include page routing by default. React Router is the most popular solution.<br></br>
    It provides unique URLs for different components in the app and makes UI easily shareable with other users.<br></br>

    </p>
    <img src={logo2}></img>
    </div>
  );
}

export default App;
