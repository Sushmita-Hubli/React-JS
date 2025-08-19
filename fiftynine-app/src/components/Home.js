import React from 'react'
function Home() {
  return (
    <div>
       <div className="App">
       <h1>useParams in React Router </h1>
       <br></br>
       <p>
In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action.
<br></br><br></br>
The recat-router=dom package has useParams hook that let you access the parameters of the current route.
<br></br><br></br>
This use Params hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route Path 

       </p>
        </div>
    </div>
  )
}

export default Home
