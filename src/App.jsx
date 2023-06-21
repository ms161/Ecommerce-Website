import React from "react";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <div>
        <div>
          <Header data={productsArr}></Header>

        </div>
        <div>
        
        </div>

      </div>
      <div className=" m-auto w-1/2 ani grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {productsArr.map((ele) => (
          <ItemList props={ele}></ItemList>
        ))}
      </div>

      {}
      <Footer></Footer>
    </>
  );
};

export default App;
