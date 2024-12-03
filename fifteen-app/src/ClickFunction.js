import React from 'react'
import './App.css'




function ClickFunction() {
    function HelloFunc()  //modern js supports creating a function inside another function
{
    alert("Hello Sushmita");
    
}
  return (
    <div className='App'>
      <button onClick={HelloFunc}>Click</button> {/*we dont apply parenthesis in front of function name*/}
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
        <button onClick={this.HeluFunc}>Click1</button>
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
