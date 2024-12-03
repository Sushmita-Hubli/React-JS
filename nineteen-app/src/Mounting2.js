import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props)
    {
        super(props);
      this.state={
        name:'shivani',
        age:22
      }
      console.log("mounting2 constructor invoked.");
    }

    //getDerivedStateFromProps method implementation
    static getDerivedStateFromProps(props,state)
    {
      console.log("Mounting 2 getDerivedStateFromProps method");
      console.log(props);
      console.log(state);
      return null
    }

    componentDidMount()
    {
      console.log("component did mount method invoked.")
    }
  render() {
    console.log("mounting2 render method invoked...")
    return (
      <div>
      
      <h2>{this.state.name}</h2>
      <h2>{this.props.city}</h2>

        
      </div>
    )
  }
}
