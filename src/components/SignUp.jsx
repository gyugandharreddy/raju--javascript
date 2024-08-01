import React ,{useState}from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SPECALIMG from "../assets/specal.jpg";
import { useNavigate } from "react-router-dom";


const SignUp=({setUser})=>{
    const[email,setEmail]=useState('')
    const navigate=useNavigate();
    return(
<div style={{backgroundColor:"#216ad9"}}>
<Row style={{padding:5}}>
<Col  style={{padding:20}}>

<div>
   <h1 style={{color:'white'}}>E-commerce!</h1> 
   <h3 style={{color:'white'}}>one place for all your needs</h3>
    
    
    
    <Form>
        <div style={{width:"100%",display:"flex" ,justifyContent:"space-between"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" onRateChange={(e)=>setEmail(e.currentTarget.value)} placeholder="Enter email"/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" style={{marginLeft:"10px"}} />
      </Form.Group>
      
      </div>
      <Form.Group className="mb-3" controlId="formBasicText">
        
        <Form.Control type="Text" placeholder="Enter Full name" style={{width:"70%"}} />
      </Form.Group>
      



      <Button onClick={()=>{
        localStorage.setItem('userEmail',email);
        setUser(email)
        navigate('/');
      }}
      style={{width:"70%",backgroundColor:"blue",borderWidth:1,borderColor:"white",color:'white',marginBottom:"5px"}} variant="primary" type="submit">
        Join The Club
      </Button>
      <div style={{color:"white"}}>Allready A Member?<a style={{color:"white"}} onClick={()=>navigate('/Login')}>click hear</a></div>
    </Form></div>
</Col>

<Col style={{padding:50}}>
<img src={SPECALIMG} style={{height:'15rem',borderRadius:"20px"}}></img>

</Col>

</Row>



</div>









    )
}
export default SignUp;
