import logo from './logo.svg';
import './App.css';
import image1 from './image1.png'
import image from './image.png'
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';

import React,{Suspense,lazy} from 'react';

const Comp1=lazy(()=>import('./Comp1'));
const Comp2=lazy(()=>import('./Comp2'));


function App() {
  return (
    <div className="App">
      <h1>Lazy Loading...</h1><br></br><br></br>
      First we will display the following image<br></br><br></br>
    <img src={image1}></img><br></br>
    Then we will display the component after it has been completely loaded<br></br><br></br>
    <img src={image}></img><br></br>
    <p>Lazy Loading is a design pattern for optimizing web and mobile apps.<br></br>
    The concept of Lazy Loading is simple:initialize objects that are critical to the user interface first and quietly render noncritical items later.
    <br></br>So by using the concept of Lazy Loading, the loading of an item be it a picture, video, web page, music file , or document, is delayed until it is required, saving bandwidth and precious computing resources.
    <br></br>
    React has two features that make it easy to apply code-splitting and lazy loading to React Components: React.lazy() and React.Suspense.<br></br>
    THe React.lazy() function allows you to render a dynamic import as a normal component. It makes it simple to construct components that are loaded dynamically yet rendered as regular components.
    <br></br> React.Suspense: A component built with React.lazy() is only loaded when it is required to be displayed.While the lazy component is loading, you should probably show some form of placeholder content, such as loading indication. 
    </p>

    <br></br>
    <h1>Lazy Loading Demo</h1>
     <Suspense fallback={<div>LOADING COMPONENT 1...</div>}>
    <Comp1/>
    </Suspense>
     
    <Suspense fallback={<div>LOADING...</div>}>
    <Comp2/>
    </Suspense>
    
    </div>
  );
}

export default App;
