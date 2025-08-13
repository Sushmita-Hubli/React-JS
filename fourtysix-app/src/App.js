import logo from './image.png';
import './App.css';
import RefComponent from './RefComponent';

function App() {
  return (
    <div className="App">
      <h1>React Refs</h1>
      <p>Refs are used to store the reference of an element<br></br>
      By using refs we can make changes to the element directly in actual DOM.<br></br>
      It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements<br></br>
      It provides a way to access React DOM nodes or React elements and how to interact with it.<br></br>
      It is used when we want to change the value of a child component, without making the use of props.<br></br>
      <b>Note:</b>You should have to avoid overuse of the Refs</p><br></br>

      <p>How to create Refs:<br></br>In React, Refs can be created by using React.createRef(). It can be assigned to React elements via the ref attribute.<br></br>
      It is commonly assigned to an instance property when a component is created, and then can be referenced throughout the component.
      </p>
      <br></br>
      <p>How to access Refs?:<br></br>In React, when a ref is passed to an element inside render method, a reference to the node can be accessed via the current attribute of the ref.</p>
      <img src={logo}></img>

      <RefComponent/>
    </div>
  );
}

export default App;
