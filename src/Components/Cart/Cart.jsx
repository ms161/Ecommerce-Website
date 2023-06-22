<<<<<<< HEAD
import React, { useContext } from "react";
import CarrtItems from "./CarrtItems";
import AuthContext from "../Store/Auth-Context";

const Cart = (props) => {
  //fetching data from context api authcontext
  const ctx = useContext(AuthContext);
  console.log(ctx.cartItems, "in cart ctx");
  const showCartHandler = (e) => {};

  return (
    <>
      <div>
        <div></div>
        <div>
          <CarrtItems getCartItemId={props.getCartItemId} onClick={showCartHandler} data={props}></CarrtItems>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Cart;
=======
import React from 'react'
import CarrtItems from './CarrtItems'

const Cart = (props) => {

    const showCartHandler=e=>{

    }

  return (
   <>
   <div>
    <div>
   
    </div>
    <div  >
        <CarrtItems onClick={showCartHandler} data={props.data}></CarrtItems>
       
    </div>
    <div >
      
    </div>
   </div>
   </>
  )
}

export default Cart
>>>>>>> 13db6a03115596c0046f37110c5a3a2aa33cb2a5
