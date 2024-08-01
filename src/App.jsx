// import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';

import SHOPJPG from "../src/assets/Shop.jpg";
import CheckOut from './components/CheckOut';
import Cart from './components/Cart';
import Details from './components/Details';
import Products from './components/Products';
import SignUp from './components/SignUp';
import Login from './components/login'; 
import Home from './components/Home';
import { Routes,Route} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  
const navigate=useNavigate();
const[user,setUser]=useState('');
const [cartItems,setCartItems]=useState({})
useEffect(()=>{
const userEmail=localStorage.getItem('userEmail');
if(userEmail){
  setUser(userEmail)
}
},[])
const handleAddToCart = (item)=>{
  setCartItems({...cartItems,...item})

}





  return (
    <div>
<Navbar className="butyNav">
      <Container>
        <Navbar.Brand onClick={()=>navigate('/')}>
        <img        
        alt=''
        src={SHOPJPG}
        width="35"
        height="35"
        
        className='d-inline-block-align-top'
        />{' '}
        E-commerce!</Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          {/* {user && <Button onClick={()=>navigate('/Cart')}>Cart &nbsp;{Object.keys(cartItems).length>0 && (<Badge bg='success'>{Object.keys(cartItems).length}</Badge>)}</Button>}
          &nbsp;&nbsp;&nbsp; */}
        <Button onClick={()=>navigate('/Login')}>{user ? 'Logout':'Login'}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Routes>
<Route path='/'  element={<Home user={user}/>}></Route>
<Route path='/Login'  element={<Login setUser={setUser}/>}></Route>
<Route path='/SignUp'  element={<SignUp setUser={setUser}/>}></Route>
<Route path='/Products'  element={<Products/>}></Route>
<Route path='/Product/:id'  element={<Details handleAddToCart={handleAddToCart} cartItems={cartItems} />}></Route>
<Route path='/Cart'  element={<Cart cartItems={cartItems}/>}></Route>
<Route path='/CheckOut' element={<CheckOut/>}/>
</Routes>



</div>
  )
 }


  


export default App
