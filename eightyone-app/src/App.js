import logo from './whyredux.png';
import logo1 from './React-Redux.png';
import logo2 from './realex.png';
import logo3 from './comparewithredux.png';
import logo4 from './Action.png';
import logo5 from './Reducers.png';
import logo6 from './Store.png';
import './App.css';


function App() {
  return (
    <div className="App">
    <h1>Redux</h1>
    <p>
      Redux is a predictable state container for Javascript apps.<br></br>
      <b>1.It is used for Javascript Apps.</b><br/>
      <b>2.It is a state container</b><br/>
      <b>3.It is predictable</b>

      <br></br><br/>
      <p>1.Redux is a library for JS applications.<br></br>
      It is not connected with React only.<br></br>
      Redux can be used with React,VueJS,Angular and Vanilla JS.
      </p>
      <br></br><br/>

      <p>
        2.Redux is used to store the state of your application.<br></br>
        State of an application is the state represented by all individual components of that app.<br/>
        Redux will store and manage the application state.
      </p><br></br><br/>
      <p>
        Redux is Predictable<br></br>
        Redux is a State Container. The state of a application can change.<br/>
        Example: todo list-- task(pending)--task(completed)<br/>
        In Redux, all state changings are explict and it is possible to keep track of them.<br/>
        The changes to your application's state become predictable.
      </p>
      <br></br><br></br>
      <b>So we can say Redux is a predictable state container for JS applicationsBy using Redux, we can manage the state of our application in a predictable way.</b><br/><br/>
      <b>React+Redux</b><br/>
      <p>Why would we want to use Redux in a React Application?<br/>
      React Components have their own state then why do we need another thing to help manage the state?<br/>
      <img src={logo}></img><br/><br></br>
      <b>React Redux library</b>
      <img src={logo1}></img>
      </p>
    </p>

    <br></br><br></br>
    <p>When should I use Redux in my React Application? <br></br>
    Ans:when an application has many components, and in each component we are managing state and we want to transfer these stae from one compoennt to another , it becomes very complex resulting in prop drilling and very complex scvenario so to avoid this, we use React-Redux in this case.
    </p>
    <br></br><br></br>
    <p>
      Should Redux be added to all of your Application?<br></br>
      Answer:Add only where it is required.
    </p>
    <br></br><br/>

    <b>Three core concepts of Redux</b>
    <p>Let us undersatnd this with the help of real world example.<br></br>
    <img src={logo2}></img>
    <br></br><br></br>
    Now lets compare this with Redux as below:
    <br></br>
    <img src={logo3}></img><br></br><br></br>
    A Store that holds the state of your application.<br></br>
    An action that describes the type of change in the state of the application.<br></br>
    A reducer which actually does the state transition depending on the action.<br></br>
    <br></br>So basically Action tells us what to do <br></br>Reducer tells us how to do
    </p>
    <br></br><br></br>
    <p><b>Action</b><br></br>
    Actions are plain JS objects. It has a type field which tells us the type of Action.  Actions only tell what to do, but they dont tell how to do.<br></br>
    We create a Action Creator which is basically a function which returns the action object.
    Action Creators are written in the following way:
    <img src={logo4}></img>
    <br></br>
    </p><br></br><br/>

    <p><b>Reducers</b><br></br>
    Reducers are the functions that take the initial state/ current state/ previous state and an action as arguments and return a new state.<br></br>
    This is a way in which Reducer functions are written
    <br></br>
    <img src={logo5}></img>
    <br></br><br/>
    We can create multiple reducers in our application. Each Reducer represents a specific task.<br></br>
    We have to register all the reducers inside a single ROOT REDUCER.
    </p>
    <br></br><br></br>
    Redux store brings together the state, actions and reducers. <b>We have only a single store in a Redux Application.</b>
    <img src={logo6}></img>
    </div>
  );
}

export default App;
