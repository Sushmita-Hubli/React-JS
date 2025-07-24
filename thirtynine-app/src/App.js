import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>React Forms</h1>
      <p>Forms are an ingtegral part of any modern web application.
      It allows the users to interact with web application as well as gather information from the users.
      Forms can perform many tasks that depend on the nature of your business requirements and logic such as authentication of the user, adding user, searching, filtering, booking, ordering, etc.
      A form can contain text fields,buttons, checkbox, radio button, etc.
      The form has the default HTML form behavior of browsing to a new page when the user submits the form.
      If you want this behavior in React, it just works.But in most cases, it's convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. 
      The standard way to achieve this is called as "Controlled components."
      HTML form elements work a bit differently from other DOM elements in React,because form elements naturally keep some internal state in normal HTML.</p>
      <br></br>
      <p>In React, state is typically kept in the state property of components, and only updated with setState().<br></br>
      We can use useState() hook in functional components with react forms.</p><br></br>
      <p><h1>Handling Forms</h1><br></br>
      Handling forms is about how you handle the data when it changes value or gets submitted.
      In HTML , form data is uaually handled by the DOM.<br></br>
      In React, form data is usually handled by the components in which forms are created.<br></br>
      When the data is handled by the components, all the data is stored in the component state.
      You can control changes by adding event handlers in the onChange attribute.</p>
      <br></br>
      <p>Reqact offers a stateful, reactive approach to build a form.The component rather than the DOM usually handles the React form. 
      In React, the form is usually implemented by using controlled components.
      <br></br>
      <b>There are mainly two types of form input in React.</b><br></br>
      1.Controlled Component <br></br>
      2.Uncontrolled Component</p>
    </div>
  );
}

export default App;
