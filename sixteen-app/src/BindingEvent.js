import React, { Component } from 'react'
import './App.css'


//method 1
export default class BindingEvent extends Component {
 constructor()
 {
    super();
    this.Handleevent=this.Handleevent.bind(this); //binding this keyword with the event handler . this is necessary in order to avoid errors and obtain an output
    this.state={
        name:'Sushmita',
        age:22

    }
 }

 Handleevent()
 {
    this.setState({
        name:'Aditi'
    })
 }
    render() {
    return (
      <div className='App'>
      <h1>{this.state.name}</h1>
      <button onClick={this.Handleevent}>Click</button>
        
      </div>
    )
  }
}



//method 2
export class BindingEvent1 extends React.Component {
    constructor()
    {
       super();
        this.state={
           name:'Sushmita',
           age:22
   
       }
    }
   
    Handleevent()
    {
       this.setState({
           name:'Aditi'
       })
    }
       render() {
       return (
         <div className='App'>
         <h1>{this.state.name}</h1>
         <button onClick={this.Handleevent.bind(this)}>Click</button>
           
         </div>
       )
     }
}


//method 3

export class BindingEvent3 extends React.Component {
    constructor()
    {
       super();
        this.state={
           name:'Sushmita',
           age:22
   
       }
    }

    Handleevent1()
    {
       this.setState({
           name:'Ashwin'
       })
    }
   
    Handleevent=()=>
    {
       this.setState({
           name:'Aditi'
       })
    }
       render() {
       return (
         <div className='App'>
         <h1>{this.state.name}</h1>
         <button onClick={this.Handleevent}>Click</button>
         <button onClick={()=>this.Handleevent1()}>Click2</button>
           
         </div>
       )
     }
}
