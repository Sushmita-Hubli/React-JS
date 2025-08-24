import logo from './image.png';
import './App.css';
import GridBS from './GridBS';
import ImagesDemo from './ImagesDemo';

function App() {
  return (
    <div className="App">
      <h1>Containers and Grid System with React-Bootstrap</h1>
      <p>Grid means Table, Table means rows and columns , Grid system can be achieved using React;s built in components in react-bootstrap like Col and Row</p>
      <br></br>
      <p>React-Bootstrap requires a containing element to wrap site contents.<br></br>
      Containers are used to GATHER the content inside of them, and there are two containers available:1.container. 2. container-fluid<br></br>
      Container provides a responsive fixed width container.
      <br></br>
      Container-fluid provides a full width container, spanning the entire width of the viewport.<br></br>
      Note: By default, containers have left and right padding, with no top or bottom padding.
      <br></br>
      Each row allows upto 12 columns across the page.<br></br>
      The grid system is responsive, and the columns will re-arrange automatically depending on the screen size.<br></br>
      Make sure that the sum adds up to 12 or fewer (it is not required that you use all 12 available columns)<br></br>
      
      </p>
      <img src={logo} alt="" />
      

      <br></br>
      <GridBS/>



      <br></br><br></br>
      <p>Now we will see how to add images in our React App in 3 different ways</p>
      <ImagesDemo/>
    </div>
  );
}

export default App;
