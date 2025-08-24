import React from 'react'
import usestateimg from './useState.png'

import useReducerimg from './useReducer.png'
import Reducers from './Reducers'
const UseReducerHook = () => {
  return (
    <div>
      <h1>It is a hook which is used for state management.<br></br>
      It is an alternate to useState<br></br>
      useState is built using useReducer.<br></br>
      useState uses useReducer internally. <br></br>
      useState is a basic Hook for managing simple state transformation, and useReducer is an additional Hook for managing more complex state logic.<br></br>
      You can use useReducer for everything you can do with useState. 
      </h1>
      <img src={usestateimg}></img>
      <br></br><br></br>
      <p>useReducer Hook accepts a Reducer. Reducer is a pure function. Pure function is a function that always returns same output if the same arguments are passed in. Also pure function does not produce any side-Effects.<br></br>
      {/* <br></br>Syntax of reducer function is as follows:<br></br>
      const reducer=(state,action)=>{return singleValue/newStatew;} */}
      Reducer function accepts two parameters: state and action. and it returns a singlevalue or a newstate.
      </p>
      <br></br><br></br>
      Syntax of useReducer Hook is as follows:
      <br></br>
      const[count,dispatch]=useReducer(reducer, initialState);
      <br></br>It accepts reducer function and initialState .We will be destructuring our useReducer into count and dispatch.<br></br>
      so count stores the value returned by our reducer function, dispatch returns a value to action parameter of our reducer function, initialState is stored into state of our reducer function for the first time.
      <img src={useReducerimg}></img>

      <br></br>\
      <Reducers/>
    </div>
  )
}

export default UseReducerHook
