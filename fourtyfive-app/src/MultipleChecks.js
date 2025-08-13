import React, { useState } from 'react'

const MultipleChecks = () => {
    const[checked,setChecked]=useState(false);
    const[fruitsArray,setFruitsArray]=useState([]);
    const handleChange=(e)=>{
        const value=e.target.value;
        const checked=e.target.checked;
        if(checked)
        {
            setFruitsArray([
                ...fruitsArray,value
            ])


        }
        else{
            setFruitsArray(fruitsArray.filter((e)=>(e!==value)))

        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(fruitsArray);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Fruits: &nbsp;</label>
        <input type='checkbox' name="fruits" value="Apple" onChange={handleChange}/>
        <label>Apple</label>
        <input type='checkbox' name="fruits" value="Mango" onChange={handleChange}/>
        <label>Mango</label>
        <input type='checkbox' name="fruits" value="Banana" onChange={handleChange}/>
        <label>Banana</label>
        <input type='checkbox' name="fruits" value="Pear" onChange={handleChange}/>
        <label>Pear</label>
        <br></br>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default MultipleChecks
