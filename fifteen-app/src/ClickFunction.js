import React from 'react'
import './App.css'




function ClickFunction() {
    function HelloFunc()  //modern js supports creating a function inside another function
{
    alert("Hello Sushmita");
    
}
  return (
    <div className='App'>
      <button onClick={()=>HelloFunc()}>Click</button> {/*we dont apply parenthesis in front of function name or we can pass an arrow function inside which can point to a function which has paranthesis. note that we donot write this keyword because our component is a fiunction component*/}
    </div>
  )
}

export default ClickFunction




export class ClickFunction1 extends React.Component {
     HeluFunc()  //we dont write function keyword in front of the name of the function in class component. otherwise it will give error
    {
        alert("helu hubli");

    }
  render()
   {
    return (
      <div className='App'>
        <button onClick={this.HeluFunc}>Click1</button> {/*here we can write either onClick={this.HeluFunc} or onClick={()=>this.HeluFunc()} . these both things signify the same thing. also if the function HeluFunc is made inside the render function, then we need not have to write this keyword in front of class name . but in this case , we have made the function outside the render function so we will have to use this keyword.*/}
      </div>
    )
  }
}


//functional component with arguments
function ClickFunction2(props) {
    const HelloFunction= (name)=>{
        alert("Hello "+name);
    }
  return (
    <div className='App'>
      <button onClick={()=>HelloFunction(props.name)}>Click3</button>
    </div>
  )
}

export {ClickFunction2};


//class component with arguments
export class ClickFunction3 extends React.Component {
    HelloFunction(name)
    {
        alert("hello "+name);
    }
  render() {
    return (
      <div className='App'>
      <button onClick={()=>this.HelloFunction(this.props.name)}>Click4</button>
        
      </div>
    )
  }
}
