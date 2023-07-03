import React, { useEffect } from "react";
import { useContext, useState } from "react";
import AuthContext from "../Store/Auth-Context";
import Header from "../Header";
import Footer from "../Footer";
import ItemList from "../ItemList";
import Authentication from "../LoginPage/AuthenticationProvider";

const CartProvider = (props) => {
  //storing data in context api
  //storing data in context api
  //storing data in context api
  const [cartData, setCartData] = useState([]);
  const [cartQty, setQty] = useState(0);
  const [userData, setUserData] = useState([]);
  const [singleData, setSingleData] = useState();
 
  const ctx = useContext(Authentication);

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

    // console.log(sp, "this is sppreaded data");
    setQty((prevQty) => prevQty + 1);
    console.log(data, "this is data in cartprovider");
    setSingleData(data);
  };

  const removeCartItem = (cartId) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === cartId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    const filteredCartData = updatedCartData.filter(
      (item) => item.quantity > 0
    );
    setCartData(filteredCartData);
  };
  const userInfoHandler = (userData) => {
    setUserData((prevData) => {
      return [...prevData, userData];
    });
    console.log(userData, "this is userdata in cartporvider");
  };
  console.log(singleData, "this is single userData in cartprovider");

  // const ctx = useContext(AuthContext);
  // console.log(ctx.id, "this id is inside app ");
  const cartItems = {
    cartItems: cartData,
    cartQty: cartQty,
    onCartData: cartDataHandler, //need to change
    getCartItemId: removeCartItem, //need to change
    onUserInfo: userInfoHandler,
    userInfo: [],
  };
  let email1 = ctx.email;

  let emailObj = {
    data: singleData,
  };
  const sanitizedEmail = ctx.email.replace(/[@.]/g, "");
  useEffect(() => {
    if (cartData.length !== 0) {
      addDataToCrud();
      // addUserToFirebase()
    }
  }, [singleData]);

  async function addDataToCrud(e) {
    const response = await fetch(
      `
    https://newecommerce-aa761-default-rtdb.firebaseio.com/${sanitizedEmail}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailObj),
      }
    );
    const data = await response.json();
    console.log(data);
  }

  // async function addUserToFirebase(){
  //   const response = await fetch(`https://newecommerce-aa761-default-rtdb.firebaseio.com/${sanitizedEmail}.json`,
  //   {
  //     method: "POST",
  //     body: JSON.stringify(cartData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  // }

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
