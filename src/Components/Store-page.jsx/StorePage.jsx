import React from "react";
import { useContext, useState } from "react";
import AuthContext from "../Store/Auth-Context";
import Header from "../Header";
import Footer from "../Footer";
import ItemList from "../ItemList";

const StorePage = () => {
  const productsArr = [
    {
      id: "1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  //storing data in context api
  //storing data in context api
  //storing data in context api
  const [cartData, setCartData] = useState([]);
  const [cartQty, setQty] = useState(0);
  const cartItems = {
    cartItems: cartData,
    cartQty: cartQty,
    id: "",
  };
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
    console.log(sp, "this is sppreaded data");
    setQty((prevQty) => prevQty + 1);
  };
  console.log(cartData, "this is cartData in app");

  // removing cart item
  // removing cart item
  const removeCartItem = (cartId) => {
    const rData = cartData.filter((ele) => {
      console.log("filter method running");
      return ele.id !== cartId;
    });
    setCartData(rData);
    console.log(cartId, "this id is in app");
  };
  const ctx = useContext(AuthContext);
  console.log(ctx.id, "this id is inside app ");
  return (
    <>
      <>
        <AuthContext.Provider value={cartItems}>
          <div>
            <div>
              <Header
                getCartItemId={removeCartItem}
                data={productsArr}
              ></Header>
            </div>
            <div></div>
          </div>
          <div className=" m-auto w-1/2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {productsArr.map((ele) => (
              <ItemList
                key={ele.id}
                OnCartData={cartDataHandler}
                props={ele}
              ></ItemList>
            ))}
          </div>

          {}
          <Footer></Footer>
        </AuthContext.Provider>
      </>
    </>
  );
};

export default StorePage;

