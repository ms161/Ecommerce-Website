import React, { useContext } from "react";
import ItemList from "../ItemList";
import Footer from "../Footer";
import Header from "../Header";
import CartProvider from "./CartProvider";
import AuthContext from "../Store/Auth-Context";

const productsArr = [
  {
    id: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const CartTest = () => {
    const ctx=useContext(AuthContext)
    console.log(ctx.cartItems)
  return (
  
    <div>
      <div>
        <div>
          <Header data={productsArr}></Header>
        </div>
        <div></div>
      </div>
      <div className=" m-auto w-1/2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {productsArr.map((ele) => (
          <ItemList key={ele.id} props={ele}></ItemList>
        ))}
      </div>

      {}
      <Footer></Footer>
    </div>
    
  );
};

export default CartTest;
