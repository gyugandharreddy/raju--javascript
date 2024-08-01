import React, { useEffect, useState } from "react";
import { Table,Row,Col,Button } from "react-bootstrap";
import CARTIMG from '../assets/cart.jpg'
import { useNavigate } from "react-router-dom";
export default function Cart(cartItems){
console.log(cartItems)
const[totalPrice,setTotalPrice]=useState(0);
const[totalQuantity,setTotalQuantity]=useState(0);
const navigate=useNavigate();
useEffect(()=>{
let tempPrice = 0;
let tempQuantity = 0;
 Object.keys(cartItems).map((cartItemId)=>{
const details = cartItems [cartItemId];
tempQuantity+= details.quantity;
tempPrice += details.quantity*details.price;

 });
setTotalQuantity(tempQuantity);
setTotalPrice(tempPrice);
},[])
return(
<div>
<Row>
<Col>      
<h3 style={{marginLeft:"1rem"}}>YourCart</h3>
<div style={{marginLeft:"2rem"}}>
<Table>
<thead>
<tr>
<th>name</th>
<th>quantity</th>
<th>total</th>
</tr>
</thead>
<tbody>
{Object.keys(cartItems).map((cartItemId)=>{
const itemDetails = cartItems[cartItemId];
return(
<div>
<td>{itemDetails.title}</td>
<td>{itemDetails.quantity}</td>
<td>{itemDetails.quantity*itemDetails.price}</td>
</div>

    )
})}
<tr>
<td>Total</td>
<td>{totalQuantity}</td>
<td>{totalPrice}</td>
</tr>




</tbody>

</Table>
</div>


<Button  onClick={()=>navigate('/CheckOut')}   style={{marginLeft:"1rem"}}>Checkout</Button>
</Col> 

<Col>
<img src={CARTIMG} height={250} style={{marginTop:"2rem",marginLeft:"2rem"}}></img>


</Col>


</Row>
    </div>
)

}






