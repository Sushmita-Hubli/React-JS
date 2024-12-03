import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    ParentMethod=()=>{
        alert("hello!");
    }
    ParentMethod1=(childName)=>{
        alert(childName);
    }
  render() {
    return (
      <div>
      <ChildComponent callMethod={this.ParentMethod} callMethod1={this.ParentMethod1}/>
        
      </div>
    )
  }
}
