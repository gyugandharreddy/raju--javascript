import axios from "axios";
import React from "react";
import { Row,Col, Button,Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {useState ,useEffect } from "react";
export default function Details({cartItems,handleAddToCart}) {
    const location=useLocation();
    // const title=location.state
    const navigate =useNavigate();
  const {title,images,price,description,id} = location.state;
  const [othwerProducts,setOtherProducts,category]=useState([]);
useEffect(()=>{
    async function getData(){
        const responce=await axios.get(`https://api.escuelajs.co/api/v1/categories/${category || 3}/products?limit=25&offset=0`);
        // console.log(responce.data)
        setOtherProducts(responce.data);

    }
    getData();
},[])




//   console.log(title) ;
    return(
<div style={{padding:10,display:"flex" }}>
 <div className="main">

<Row >
    <Col >
<div>
{ images.map((image,index) =>{
    return(

        <img key={index}  src={image} 
        width={100}  style={{marginBottom:10,borderRadius:8,marginRight:"3px",display:"flex"}}></img>
    )
})}
</div>
</Col>

<Col lg={0}>
<div style={{}}>
<img  src={images[0]} width={200} style={{marginBottom:10,borderRadius:8}} ></img>
<h5 style={{fontSize:'10px'}}>{title}</h5>
<div >price:${price}</div>
<div style={{fontSize:"10px"}}>{description}</div>
<Button onClick={()=>{
    if(id in cartItems){
const currentitem=cartItems[id];
handleAddToCart({[id]:{title,price,quantity:currentitem.quantity+1}})
    }else{
        handleAddToCart({[id]:{title,price,quantity:1}})
    }
    navigate('/Cart');
}}>Add To Cart</Button>
</div>

</Col>
<Col lg={5}>
<h6 style={{color:"orange"}}>other products in same category</h6>
<div style={{display:"flex",flexWrap:"wrap"}} >
{ othwerProducts.map((product)=>{
    if(product.id==id)return
return(
<Card key={product.id}  style={{width:'6.5rem',border:'none',margin:"10px"}}>
<Card.Img src={product.images[0]}/>
<Card.Title style={{fontSize:'10px'}}>{product.title .split(" ")[0]}</Card.Title>
<Card.Text>${product.price}</Card.Text>
<Button onClick={()=>navigate(`/Product/${product.id}`,{state:product})} style={{}}>view item</Button>
</Card>

)
    })}
    </div>
</Col>




</Row>
</div>
</div>   




    )
}
