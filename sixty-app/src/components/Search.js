import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const handleSearch=(e)=>{
        e.preventDefault();
        alert(searchParams.get('q'));
    }
    return (
    <div>
      <h1>This is a search Page</h1>
      <form onSubmit={handleSearch}>
      <input type="button" value="Show All Users" onClick={()=>setSearchParams({q:'SUSHMITAAA'})}/>
        <label>Search</label>
        <input type="text" name="" placeholder='search something from here' onChange={(e)=>setSearchParams({q:e.target.value})} id="" />
        <br></br>
        <input type="submit" value="Search" />
        <input type="button" value="Reset" onClick={()=>setSearchParams({})} />
      </form>
    </div>
  )
}

export default Search
