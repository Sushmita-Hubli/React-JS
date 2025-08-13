import logo from './image.png';
import './App.css';
import UnControlled from './UnControlled';

function App() {
  return (
    <div className="App">
      <h1>Un-Controlled Component</h1>
      <p>In most cases , we recomment using controlled components to implement forms.In a controlled component, form data is handled by a React Component.<br></br>
      The alternative is uncontrolled components, where form data is handled by the DOM itself.<br></br>
      To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.<br></br>
      In an Uncontrolled component, the form data is handled by the DOM.</p>
      <b>Ref is used in Un-Controlled Component in React Form.</b>
      <img src={logo}></img>
<UnControlled/>

    </div>
  );
}

export default App;
