
import './App.css';
import PropTypes from 'prop-types';


function App(props) {
  return (
    <>
    
      <h1>Hey {props.name}</h1>
      <h1>Hey {props.age}</h1>
      <h1>Marital status: {props.isMarried.toString()}</h1> {/*toString() method is used because we wanted to peint a boolean value on the webpage*/}
      <h1>{props.arr}</h1>
      <h1>{props.arr[0]}</h1>
    </>
  );
}

App.propTypes={
  name: PropTypes.string,
  age: PropTypes.number.isRequired, //this field is required to be passed by the parent component in which App.js is called that is inside the index.js . if we dont pass this attribute there, then we will get an warning in the console.
  isMarried:PropTypes.bool,
  arr:PropTypes.array
  
}

App.defaultProps={  //Adding default properties or defaultProps to a prop
  name: 'Anonymous',
  age:80,
  isMarried:true,
  arr:["ilji","jkhiwhi","suqiwhiwo"]
}
export default App;
