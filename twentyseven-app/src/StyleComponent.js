import React, { Component } from 'react'

export default class StyleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:false
      }
    }
    changecssonclick=()=>{
        this.setState({
            active:true
        })
    }
  render() {
    let obj={
        color:"green",
        backgroundColor:"orange",
        
    }
    let obj1={
fontSize:"50px",
fontFamily:"cooper"
    }


    if(this.state.active)
    {
        obj.backgroundColor="pink";
    }
    

    return (
      <div>
        <h1 style={{color:"red",backgroundColor:"yellow"}}>Sushmita Hubli</h1>  {/*this is an example of inline styling in React*/}
        <h2 style={obj}>Shivani Hubli</h2>
        <h2 style={{...obj,...obj1}}>Shridhar Hubli</h2> {/*use of spread operator to apply two css object properties to a element*/}<br></br>
        <h3>We can change style of component's element based on certain condition by using state.</h3>
        <button style={obj} onClick={this.changecssonclick}>Click</button>
      </div>
    )
  }
}
