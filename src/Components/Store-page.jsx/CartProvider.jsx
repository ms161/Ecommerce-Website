import React, { useEffect } from "react";
import { useContext, useState } from "react";
import AuthContext from "../Store/Auth-Context";
import Header from "../Header";
import Footer from "../Footer";
import ItemList from "../ItemList";

const CartProvider = (props) => {
  //storing data in context api
  //storing data in context api
  //storing data in context api
  const [cartData, setCartData] = useState([]);
  const [cartQty, setQty] = useState(0);
  const [userData,setUserData]=useState([])
  const [singleData,setSingleData]=useState()

  console.log("cartdatahandler in running");
  
  const cartDataHandler = (data) => {
    const existingItem = cartData.find((item) => item.id === data.id);

    if (existingItem) {
      const updatedCartData = cartData.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartData(updatedCartData);
    } else {
      const newItem = { ...data, quantity: 1 };
      setCartData((prevData) => [...prevData, newItem]);
    }
    let sp = { data };
    // console.log(sp, "this is sppreaded data");
    setQty((prevQty) => prevQty + 1);
  };
  
const removeCartItem = (cartId) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === cartId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  
    const filteredCartData = updatedCartData.filter((item) => item.quantity > 0);
    setCartData(filteredCartData);
  };
  const userInfoHandler=(userData)=>{
    setUserData((prevData)=>{
      return [...prevData,userData]
    })
    setSingleData(userData)
    console.log(userData,'this is single userData in cartprovider')
   
  }
  
  // const ctx = useContext(AuthContext);
  // console.log(ctx.id, "this id is inside app ");
  const cartItems = {
    cartItems: cartData,
    cartQty: cartQty,
    onCartData: cartDataHandler, //need to change
    getCartItemId: removeCartItem, //need to change
    onUserInfo:userInfoHandler,
    userInfo:[]
  };
 
  useEffect(()=>{
    addUserToFirebase()
  },[singleData])
  async function addUserToFirebase(){
    const response = await fetch('https://ecommercewebsite-82961-default-rtdb.firebaseio.com/ecommercewebsite.json',
    {
      method: "POST",
      body: JSON.stringify(singleData),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  return (
    <>
      <>
        <AuthContext.Provider value={cartItems}>
          {props.children}
        </AuthContext.Provider>
      </>
    </>
  );
};

export default CartProvider;
