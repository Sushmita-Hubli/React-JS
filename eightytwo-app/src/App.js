import logo from './DataFlow.png';
import logo1 from './Directory.png';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { increase,decrease } from './actions';
function App() {
  const myState=useSelector((state)=>state.inc_dec);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>3 Principles and Data Flow of Redux App</h1>
      <p><b>1st Principle: SINGLE SOURCE OF TRUTH</b><br/>
      The state of your whole application is stored in an object tree whithin in a single store.<br></br>
      The global state of your application is stored as an object inside a single store.<br></br>
      Maintain our application state in a single object which would be managed by the Redux Store.
      <br></br><br></br>
      <b>2nd Principle:State is Read only(immutable)</b><br></br>
      You are not allowed to directly update the state object.<br></br>
      The only way to change the state is to emit an action(an object describing what happened).<br></br>
      To update the state of your application, you need to let Redux know about that with an action.<br></br><br></br>

      <b>3rd Principle:CHANGES ARE MADE WITH PURE REDUCERS</b><br></br>
      To specify how the state tree is transformed by actions, you write pure reducers.
      </p><br></br><br></br>
      <b>Data Flow Redux</b><br></br>
      1. Application (UI / React component)

This is where the user interacts.

Example: You click a button → “Add to Cart”.

2. Action

The application dispatches (sends) an Action.
It has a type field defined as String constant
We can have other properties as well along with the type property when writing the action creator
Action = just an object that says what happened.

{/* Example: { type: "ADD_TO_CART", payload: { item: "Book" } } */}

3. Reducer

Reducer is like a chef in the kitchen.

It takes the current state + the action and cooks up a new state.

Example: Old state = [] → after action → new state = ["Book"].

4. Redux Store (State container)

The store is like a big box where the latest state of your app lives.
We have single store in a Redux Application.
It is an object which provides the state of the application.
<b>This object is accessible with the help of the Provider in the files of the project.<br/>Whenever a store is created in Redux, you need to specify the reducer.<br></br>
The only way to change the state inside a reducer is to dispatch an action on it. A store is not a class. It's just an object with a few methods on it.<br/>
To create it, pass your root reducing function to createstore</b>

It does not change directly → only reducers can update it.

5. Subscribed Application (React listens)

The application is subscribed to the store.

Whenever the store updates, the UI automatically re-renders with the new data.

Example: Your cart now shows "Book".

❌ Why the red cross in the diagram?

It’s saying:
👉 The Application (UI) cannot directly change the State.
It must always go through Action → Reducer → Store.
That’s what “One Way Data Flow” means.

🔁 Full Cycle in Simple Words

User clicks → Application dispatches an Action.

Reducer processes that Action and returns a new State.

Store saves the new State.

Application (UI) re-renders with updated data.

<br></br>
<img src={logo}></img>
<br></br><br></br>
The directory structure which we need to follow to implement all of the above is as follows in the following image:
<img src={logo1}></img>
<br></br><br></br>

<input type='text' value={myState}></input><br></br>
<button className='btn btn-primary' onClick={()=>dispatch(increase())}>Add</button>
<button className='btn btn-danger' onClick={()=>dispatch(decrease())}>Minus</button>
    </div>
  );
}

export default App;
