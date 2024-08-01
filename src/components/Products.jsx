import React,{useEffect, useState} from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function (){
    const navigate=useNavigate();
const [products,setProducts]=useState([])
    useEffect(()=>{
async function Products(){
    const responce=await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=25');
// console.log(responce.data);
setProducts(responce.data);
}

Products();
    },[])
    return(
<div style={{padding:50}}>
<h3>Select a Product</h3>
<div style={{display:'flex',flexWrap:"wrap"}}>
    { products.map((product)=>{
return(
<Card key={product.id}  style={{width:'7rem',border:'none',margin:"10px"}}>
<Card.Img src={product.images[0]}/>
<Card.Title style={{fontSize:'10px'}}>{product.title}</Card.Title>
<Card.Text>${product.price}</Card.Text>
<Button onClick={()=>navigate(`/Product/${product.id}`,{state:product})} style={{}}>view item</Button>
</Card>

)
    })}
</div>

</div>



        
    )
}

