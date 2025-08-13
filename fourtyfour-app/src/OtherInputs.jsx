import React, { useState } from 'react'

const OtherInputs = () => {
    const[textArea,setTextArea]=useState("");
    const[selectMenu,setSelectMenu]=useState("USA");
    const[checked,setChecked]=useState(false);
  return (
    <div>
      <form>
        <label>Comments:</label>
        <textarea value={textArea} onChange={(e)=>setTextArea(e.target.value)}></textarea>
        <br></br>
        <label>Select Country:</label>
        <select value={selectMenu} onChange={(e)=>setSelectMenu(e.target.value)}>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Brazil">Brazil</option>
        </select>
        <br></br>
        <label>Yes I Agree</label>
        <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)} />
        <br></br>
        <input type='submit' value="submit"/>
      </form>
    </div>
  )
}

export default OtherInputs
