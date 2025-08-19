import logo from './logo.svg';
import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  const navigate=useNavigate();

  const NavigateToAbout =()=>{
    navigate('/about');
  }

  const NavigateTo=(url)=>{
    navigate(url);
  }

  const NavigateToWhere=()=>{
    let name='sushmita';
    if(name=='sush')
    {
      navigate('/about');
    }
    else 
    {
      navigate('/contact');
    }
  }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}>
      
      <Route index element={<Shirts/>}></Route>
        <Route path='shirts' element={<Shirts/>}/>
        <Route path='jeans' element={<Jeans/>}/>
      </Route>
      
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     
      <Route path='/users' element={<Users/>}>
      <Route path=':id' element={<UserDetails/>}/>
      <Route path='admin' element={<Admin/>}/>
      </Route>

       <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   
    </>
    
  );
}

export default App;
