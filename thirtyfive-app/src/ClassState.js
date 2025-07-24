import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            counter:0
        }
    }

    changestate = ()=>{
      this.setState({
        counter: this.state.counter+1
      })
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.changestate}>Increment</button>
      </div>
    )
  }
}
