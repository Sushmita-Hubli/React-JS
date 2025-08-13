import React, { Component } from 'react'

export default class CallbackRefComp extends Component {
    constructor(props) {
      super(props)
    
      this.myRef=null;
      this.setMyRef=(element)=>{
        this.myRef=element;
      }
    }
    componentDidMount()
    {
        console.log(this.myRef)
        this.myRef.focus();
        
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.myRef.style.color='Red'
        this.myRef.style.backgroundColor='Yellow'
        console.log(this.myRef.value)

    }
    
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
       <label>Enter Name:</label>
        <input type="text" ref={this.setMyRef} name="" id="" /><br></br>
        <input type="submit" value="Submit" />
     

      </form>
        </div>
    )
  }
}
