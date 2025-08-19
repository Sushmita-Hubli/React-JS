import React from 'react'
import logo from '.././logo.png'
import logo1 from '.././image.png'
function Home() {
  return (
    <div>
       <div className="App">
            <h1>Dynamic Routes in React Router </h1>
            There are two types of routing:<br></br>
            1.Static Routing:Here you need to define all the routes in a centralized location in your application. Then these routes will be imported to the top level of the application before it starts rendering.<br></br>
            2.Dynamic Routing:<br></br>
            scenario:<br></br>
            <img src={logo} alt="" /><br></br>
            <img src={logo1}></img>

            <p>The difference between static vs. dynamic routing is the time at which the routing takes place.
            In dynamic routing, routes are initialized dynamically when the page gets rendered.</p>
          </div>
    </div>
  )
}

export default Home
