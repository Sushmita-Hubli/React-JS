import React from 'react'


//1st tareeka/way of destructuring props
function Customer({name,age}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default Customer


//2nd tareeka/way of destructuring props
export function Customer1(props)
{
    const {name,age}=props;
    return(
        <>
        <h2>{name}</h2>
        <h2>{age}</h2>

        </>

    );
}




//DESTRUCTURING STATES IN CLASS COMPONENTS
//method 1
export class Customer2 extends React.Component {
   
  render() {
    const {name,age}=this.props;
    return (
      <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
        
      </div>
    )
  }
}


//method2
export class Customer3 extends React.Component {
    constructor()
    {
        super();
        this.state={
            name:"Preetizinta",
            age:22
        }
    }
  render() {
    const {name,age}=this.state;
    return (
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}
