import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WOMENIMG from "../assets/women.jpg";
import WOMENIMG2 from "../assets/women2.jpg";
import MENIMG from "../assets/men.jpg";
import  Button  from "react-bootstrap/Button";

import COMIMG from '../assets/com.jpg'
import COMAIMG from '../assets/coma.jpg'
import COMBIMG from '../assets/comb.png'
import COMCIMG from '../assets/comc.jpg'
import COMDIMG from '../assets/comd.png'
import CCOMEIMG from '../assets/ccome.png'
import { useNavigate } from "react-router-dom";

const Home = (user)=>{
const navigate=useNavigate();
const handleClick=()=>{
    if(user){
        console.log(user)
        // navigate to products page
        navigate('/Products');
    }else{
        navigate('/Login');
    }
}
   return(

<div className="home">
<Carousel>

<Carousel.Item>
<Row>
<Col><div style={{padding:40,marginLeft:'3rem'}}>
    <h3 style={{color:'red',fontWeight:500}}><i>SHOP WITH UTMOST</i></h3>
    <h2 style={{color:'#216ad9',fontWeight:650}}><i>STYLE</i></h2>
    <h6 >shop from the latest clthes to the best gaggets.
        with star shopper you saave 10%every time you shop!
     <div><Button onClick={handleClick} style={{marginTop:"5px",marginBottom:'none'}}>Browse Products</Button></div>
    </h6>
    <h5> products are available hear:
<img src={COMIMG} style={{height:25}}></img>
 <img src={COMAIMG} style={{height:25}}></img> 
<img src={COMBIMG} style={{height:25}}></img>
<img src={COMCIMG} style={{height:25}}></img>
<img src={COMDIMG} style={{height:25}}></img>
<img src={CCOMEIMG} style={{height:25}}></img> 
</h5>
    </div>
    
    </Col>
<Col><img src={WOMENIMG} style={{height:'70vh',width:"80vh",alignItems:'center',justifyContent:'center',paddingTop:20}}></img></Col>
</Row>
</Carousel.Item>


<Carousel.Item>
<Row>
<Col><div style={{padding:40,marginLeft:'3rem'}}>
    <h3 style={{color:'red',fontWeight:500}}><i>SHOP WITH UTMOST</i></h3>
    <h2 style={{color:'#216ad9',fontWeight:650}}><i>STYLE</i></h2>
    <h6>shop from the latest clthes to the 
        best gaggets.with star shopper you
        saave 10%every time you shop!
        <div><Button onClick={handleClick} style={{marginTop:"5px"}}>Browse Products</Button></div>
    </h6>
    <h5> products are available hear:
<img src={COMIMG} style={{height:25}}></img>
 <img src={COMAIMG} style={{height:25}}></img> 
<img src={COMBIMG} style={{height:25}}></img>
<img src={COMCIMG} style={{height:25}}></img>
<img src={COMDIMG} style={{height:25}}></img>
<img src={CCOMEIMG} style={{height:25}}></img> 
</h5>
    </div></Col>
<Col><img   src={WOMENIMG2} style={{height:'70vh',width:"80vh",alignItems:'center',justifyContent:'center',paddingTop:20}} ></img></Col>
</Row>
</Carousel.Item>

<Carousel.Item>
<Row>
<Col><div style={{padding:40,marginLeft:'3rem'}}>
    <h4 style={{color:'red',fontWeight:500}}><i>SHOP WITH UTMOST</i></h4>
    <h3 style={{color:'#216ad9',fontWeight:650}}><i>DISCOUNTS</i></h3>
    <h6>shop from the latest clthes to the 
        best gaggets.with star shopper you
        saave 10%every time you shop!
        <div><Button onClick={handleClick} style={{marginTop:"5px"}}>Browse Products</Button></div>
    </h6>
    <h5> products are available hear:
<img src={COMIMG} style={{height:25}}></img>
 <img src={COMAIMG} style={{height:25}}></img> 
<img src={COMBIMG} style={{height:25}}></img>
<img src={COMCIMG} style={{height:25}}></img>
<img src={COMDIMG} style={{height:25}}></img>
<img src={CCOMEIMG} style={{height:25}}></img> 
</h5>
    </div></Col>
<Col><img  src={MENIMG} style={{height:'70vh',width:"80vh",alignItems:'center',justifyContent:'center',paddingTop:20}}></img></Col>
</Row>
</Carousel.Item>

</Carousel>


    
</div>


   ) 
}
export default Home;