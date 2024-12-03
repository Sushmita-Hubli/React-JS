import React, { Component } from 'react'
import Mounting2 from './Mounting2';

export default class Mounting1 extends Component {
    constructor(props)
    {
        super(props)
      this.state={
        name:'sushmita',
        age:22
      }
      console.log("mounting1 constructor invoked.");
    }

    //getDerivedStateFromProps method implementation
    static getDerivedStateFromProps(props,state)
    {
      console.log("Mounting 1 getDerivedStateFromProps method");
      console.log(props);
      console.log(state);
      return null
    }

    componentDidMount()
    {
      console.log("component did mount method invoked.")
    }
  render() {
    console.log("mounting1 render method invoked...")
    return (
      <div>
      
      <h2>{this.state.name}</h2>
      <h2>{this.props.city}</h2>
      <Mounting2 city='Boston'/>

        
      </div>
    )
  }
}
