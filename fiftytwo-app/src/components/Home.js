import React from 'react'
import logo from '.././image.png';
import logo1 from '.././ss.png';
const Home = () => {
  return (
    <div>
      <h1>Installing and setup React Router</h1>
      <img src={logo}></img><br></br>
      <b>Configuring Routes</b><br></br>
      <img src={logo1}></img>
      <p>We need to use 3 components from react-router-dom.<br></br>
      BrowserRouter, Routes and Route <br></br>
      steps: 1. Import BrowserRouter component from 'react-router-dom' inside index.js file in our React App.<br></br>
      2.Wrap our App Component with BrowserRouter Component <br></br>
      3.Now we have to create a folder called components in our src folder and add 3 components called Home.js, About.js and Contact.js inside components folder.<br></br>
        4.Import Routes and Route Component from 'react-router-dom' in App.js     </p>

    </div>
  )
}

export default Home
