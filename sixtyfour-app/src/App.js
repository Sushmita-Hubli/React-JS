import logo from './logo.svg';
import './App.css';
import FormikForm from './FormikForm';

function App() {
  return (
    <div className="App">
      <h1>Introduction to FORMIK and YUP for Form Validation.</h1>
      <p>Formik is a small group of React components and hooks for building forms in React and React Native.<br></br>
      It provides built in form components which we can use to create a form like Field, Button, Option etc or we can apply Formik on our built in html input types.
        <br/>It helps with the three most annoying parts:
        1.Getting values in and out of form state. 2. Validation and error messages. 3.Handling form submission
      </p>
      <br></br><br></br>
      <p>What us YUP in React?<br></br>
      It can be used with HTML input fields and custom validation rules, or YUP and the custom validation it provides.
      Formik makes form validation easy when paired with YUP.
      <br></br>They abstract all the complexities that surround handling forms in React.YUP is a JS object schema validator.</p>
    <h2>Steps to do in Formik:</h2>
    <b>1.Create a form</b><br></br>
    <b>2.Use the useFormik Hook of Formik Library</b>
    <br></br>
    <b>3.Setting up the onchange and value attribute of text field</b><br></br>
    <b>4.Then getting form data by setting up the onsubmit event on form.</b>
     <FormikForm/>
    </div>
  );
}

export default App;
