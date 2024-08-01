import React, { useState } from "react";
import MEGAIMG from "../assets/mega.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Login=({setUser})=>{
const[email,setEmail]=useState('')
const navigate=useNavigate();
    return(
<div style={{backgroundColor:"#216ad9"}}>
<Row style={{padding:5}}>
<Col  style={{padding:40}}>

<div>
   <h1 style={{color:'white'}}>E-commerce!</h1> 
   <h3 style={{color:'white'}}>one place for all your needs</h3>
    
    
    
    <Form>
        <div style={{width:"100%",display:"flex" ,justifyContent:"space-between"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" onChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email"  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" style={{marginLeft:"10px"}} />
      </Form.Group>
      
      </div>
      <Button onClick={()=>{
        localStorage.setItem('userEmail',email);
        setUser(email)
        navigate('/');
      }} style={{width:"70%",backgroundColor:"blue",borderWidth:1,borderColor:"white",color:'white',marginBottom:"5px"}} variant="primary" type="submit">
        Start Shoping
      </Button>
      <div style={{color:"white"}}>Join the club,<a style={{color:"white"}} onClick={()=>navigate("/SignUp")}>click hear</a></div>
    </Form></div>
</Col>

<Col style={{padding:50}}>
<img src={MEGAIMG} style={{height:'10rem'}}></img>

</Col>

</Row>



</div>

    )
}
export default Login;
