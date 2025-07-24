import logo from './logo.svg';
import './App.css';
import ControlledFile from './ControlledFile';

function App() {
  return (
    <div className="App">
      <h1>Controlled Components in React Form</h1>
      <p>In HTML, form elements typically maintain their own state and update it according to the user input.
      <br></br>In controlled component, the input form element is handled by the component rather than the DOM.
       <br></br>Here the mutable state is kept in the state property and will be updated only with setState() method.<br></br>
       Controlled components have functions that govern the data passing into them on every onChange event, rather than grabbing the data only once, e.g., when you click a submit button. 
       <br></br>This data is then saved to state and updated with setState() method or useState() Hook. This makes component have better control over the form elements and data. </p>
      <ControlledFile/>
    </div>
  );
}

export default App;
