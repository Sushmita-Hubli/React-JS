import React from 'react'
function Home() {
  return (
    <div>
       <div className="App">
       <h1>Absolute and Relative Path</h1>
       <br></br>
       <h2>What is the difference between absolute path and relative path</h2>
       <br></br>
       <p>Relative path dont start with forward slash / whereas absolute path starts with forward slash.<br></br>
       Relative paths will inherit closest route in which they are rendered. Absolute Path
       will construct path from the root of the app and not from the current URL.</p>
  <br></br>
  Absolute pathy is defined as specifying the location of file or directory from the root directory. In other words,
  we can say that an absolute path is a complete path from start of actual file system from / directory.
  Relative path is defined as the path related to the present working route.
        </div>
    </div>
  )
}

export default Home
