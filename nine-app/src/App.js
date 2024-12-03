import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//this is method 1
class App extends React.Component
{
  render(){
    return(
      <>
    <h1>Sushmita Hubli</h1>
    <h2>PICT</h2>

</>
)  }
}

export default App;


//method 2 of creating class component
// import React ,{Component} from 'react';
// class App extends Component
// {
//   render(){
//     return(
//     <h1>Sushmita Hubli</h1>


// )  }
// }
// export default App;


//now we want to do named export of this functional componentr then we can do it as we mentioned in the previous video or simply we can write export keyword while beginning to write the function as written below

export function App2()
{
  return(
    <>
<h2>This is functional component</h2>

    </>

  );
}


//rcc is a shortcut to create react class component
//rccp-->shortcut for creating class component with prop-types


//rfc--> shortcut to create react functional component
//rfce-->
//rfcp-->same but with props and prop-types
//rafc--> arrow function
//rafce-->
//rafcp-->arrow function with props








