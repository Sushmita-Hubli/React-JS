
import './App.css';
import CompA from './CompA';
import { createContext } from 'react';
import logo from './image.png';
import logo2 from './useContext.png'
export const NameContext=createContext();


function App() {
  return (
    <div className="App">
    <h1>React Context is the way to manage state globally</h1>
    <p>It can be used together with useState Hook to share state between deeply nested components more easily than with useState alone.</p>
    <p>Imagine your app has many components, and you want to send data (a prop) from a top-level component all the way down to a deep child component.

To do that, you have to pass the data through every level, even if those middle components don't need it.This unnecessary passing is called prop drilling.
useContext lets you share data globally without passing it through every level manually.

Think of it as a global storage box that any component can access directly.
</p>
<img src={logo2}/><br></br>
    <img src={logo} />
    
    <NameContext.Provider value={'Sushmita'}>
      <CompA/>
    </NameContext.Provider>
    
    </div>
  );
}

export default App;
