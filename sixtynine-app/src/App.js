import logo from './logo.svg';
import './App.css';
import ReactBS from './ReactBS';

function App() {
  return (
    <div className="App">
      <h1>React-Bootstrap Library</h1>
      <p>React Bootstrap is a complete re-implementation of the Bootstrap components using React.
      <br></br>It has no dependency on bootstrap.js or jQuery.<br></br>
      If you have React setup and React-Bootstrap installed, you have everything you need.<br></br>
      Recat-Bootstrap have lots of built-in components.<br></br>Command to install:  npm install react-bootstrap bootstrap
      </p>
      <ReactBS/>
   
    </div>
  );
}

export default App;
