import logo from './logo.svg';
import './App.css';
import CardBS from './CardBS';
import MyNavbar from './MyNavbar';
import MyCarousel from './MyCarousel';
import UseReducerHook from './UseReducerHook';

function App() {
  return (
    <div >
    <h1> Creating responsive Navbar using React-bootstrap</h1>
    <MyNavbar/>
      <br></br>
      <br></br>
        <h1>Creating Cards using React Bootstrap</h1>
      <CardBS/>
      <br></br><br></br>
      <h1>Creating Carousel using React-Bootstrap</h1>
      <MyCarousel/>

      <br></br><br></br>
      <h1>UseReducer Hook</h1>
      <UseReducerHook/>
    </div>
  );
}

export default App;
