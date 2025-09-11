import logo from './image.png';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './reduxToolkit/counterSlice';
function App() {
  const mystate=useSelector((state)=>state.counter.count);
  const dispatch =useDispatch();
  return (
    <div className="App">
     <h1>Redux Tool Kit In React</h1>
     <br></br>
     Redux Toolkit is a set of tools that helps simplify Redux development.<br></br>
     It is also intended to be a standard way to write Redux logic in your application.<br/>
     It includes utilities for creating and managing Redux stores,as well as for writing Redux actions and reducers.<br/>
     The Redux team recommends using Redux Toolkit anytime you need to use Redux.<br/>
     You can say that REdux Toolkit is simplified and upgraded version of Redux.
     <br/><br/>
     It was originallyu created to help address three common concerns about Redux:
     <br/>
     <b>1.Configuring a Redux store is too complicated.<br/>
     2.We have to add a lot of packages to get Redux to do anything useful.<br/>
     3.Redux requires too much boilerplate code.</b><br/><br/>
     Redux Toolkit serves as an abstraction over Redux. It hides the difficult parts ensuring you have a good developer experience.
     <br/><br/>
     In Redux Toolkit, we just have to create 2 filkes: 1.Slice which has Action and Reducer 2.store
     <br></br><br/>
    Flow of Redux Toolkit is as shown in the following figure:
    <img src={logo}></img><br></br><br></br>

    <input type='textbox' value={mystate}></input>
    <button onClick={()=> dispatch(increment())}>plus</button>
    <button onClick={()=>dispatch(decrement())}>minus</button>

    </div>
  );
}

export default App;
