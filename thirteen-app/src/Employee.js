import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:this.props.name,
            age:1
        }
    }

    changeName()
    {
        this.setState({
            name:"Now in USA",
            age:this.state.age+1
        })
    }
  render() {
    
    return (
      <div>
      <h1>Hello Sushmita</h1>
      <h1>{this.state.name}</h1>
      <h1>{this.state.age}</h1>
        <button onClick={()=>this.changeName()}>Click to change text</button>
      </div>
    )
  }
}



export class Employee2 extends Component {

    changeName()
    {
        this.setState({
            name:"Sushmita Chandrashekhar",
            age:22,
            surname:"haha"
        })
    }


    state={
        name:"Sushmita",
        age:1,
        surname:"Hubli"
    }
  render() {
    return (
      <div>
      <h1>Hello Sushmita</h1>
      <h1>{this.state.name}</h1>
      <h1>{this.state.age}</h1>
      <h1>{this.state.surname}</h1>
        <button onClick={()=>this.changeName()}>Click to change text</button>
  
        
      </div>
    )
  }
}
