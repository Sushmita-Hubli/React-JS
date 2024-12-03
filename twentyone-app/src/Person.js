import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Sushmita"
      }
      console.log("Constructor called...")
    }

    changestate=()=>{
        this.setState({
            name:"Sbhivani"
        });
        console.log("Button clicked...");
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps method called...");
        console.log(props);
        console.log(state);
        return null;
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate method called...");
        console.log(nextProps);
        console.log(nextState);
        return true;   //it is necessary to return something if you are writing this method . if you dont write this method, then true will be returned by default
    }
    

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getSnapshotBeforeUpdate method called...");
        console.log(prevProps);
        console.log(prevState);
        return "Hello";
    }

    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log("componentDidUpdate method is called...");
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
    }

  render() {
    console.log("Render called...");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changestate}>Change State</button>
      </div>
    )
  }
}
