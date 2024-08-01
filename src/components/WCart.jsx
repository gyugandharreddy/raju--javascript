// import React from "react";
//  export default function WCart (cartItems){
// // console.log(cartItems)
// const[totalPrice,setTotalPrice]=useState();
// const[totalQuantity,setTotalQuantity]=useState();
// useEffect(()=>{
//     let Price = 0;
//     let Quantity = 0;

// Object.keys(cartItems).map((cartItemId)=>{
//     const details=cartItems[cartItemId];
// Quantity += details.quantity;
// Price += details.quantity*details.price;
// });

// setTotalQuantity(Quantity);
// setTotalPrice(Price);


// },[]);


//     return(
// <div>
// <Row>
// <Col>
// <h3>Your Cart</h3>
// <Table>
// <thead>
// <tr>
//     <th>Name</th>
//     <th>Quantity</th>
//     <th>Price</th>
// </tr>
// </thead>
// <tbody>
// {
// Object.keys(cartItems).map((cartItemId)=>{
//     const itemDetails=cartItems[cartItemId];
    
//     return(
// <tr>
// <td>{itemDetails.title}</td>
// <td>{itemDetails.quantity}</td>
// <td>{itemDetails.quantity*itemDetails.price}</td>
// </tr>










//     )
// })}
// <tr>
// <td>Total</td>
// <td>{totalPrice}</td>
// <td>{totalQuantity}</td>
// </tr>
// </tbody>
// </Table>
// <Button>Checkout</Button>
// </Col>

// <Col>
// <img src={CARTIMG} style={{backgroundColor:"red",marginLeft:"2rem",marginTop:"2rem"}}></img>

// </Col>


// </Row>







// </div>

//     )
//  }

