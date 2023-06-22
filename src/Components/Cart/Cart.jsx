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
