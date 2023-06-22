import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart/Cart";
import AuthContext from "./Components/Store/Auth-Context";

const App = () => {
  const productsArr = [
    {
      id:'1',
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:'2',
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:'3',
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:'4',
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
  const [cartQty,setQty]=useState(0)
  const cartItems = {
    cartItems: cartData,
    cartQty:cartQty
  };

//adding data in cartData useState
//adding data in cartData useState
//adding data in cartData useState
  const cartDataHandler = (data) => {
  // setCartData((prevData)=>{
  //   return [...prevData,data]
  // })
    console.log(data, "in app");
   if(cartData.includes(data.qty)){
    console.log('if condition working')
    setCartData((p)=>{
      return [...p,{...data,qty:data.qty+1}]
    })
   }
   else if(!cartData.includes(data)){
      setCartData((p)=>{
      return [...p,{...data,qty:'1'}]
    })

   }

   
    // console.log()
    // setQty(cartQty+1)
    
  };
  // removing cart item
  // removing cart item
  const removeCartItem=cartId=>{
   const rData=cartData.filter((ele)=>{
    console.log('filter method running')
    return ele.id!==cartId 
   })
   setCartData(rData)
    console.log(cartId,'this id is in app')
  }
const ctx=useContext(AuthContext)
  console.log(ctx.id,'this id is inside app ');
  return (
    <AuthContext.Provider value={cartItems}>
      <div>
        <div>
          <Header getCartItemId={removeCartItem} data={productsArr}></Header>
        </div>
        <div></div>
      </div>
      <div className=" m-auto w-1/2 ani grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {productsArr.map((ele) => (
          <ItemList key={ele.id} OnCartData={cartDataHandler} props={ele}></ItemList>
        ))}
      </div>

      {}
      <Footer></Footer>
    </AuthContext.Provider>
  );
};

export default App;
