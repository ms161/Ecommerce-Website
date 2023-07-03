import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/Auth-Context";
import Authentication from "../LoginPage/AuthenticationProvider";
// import { AuthContext } from "../../App";

const CarrtItems = (props) => {
  const ctxEmail=useContext(Authentication)
  const [cartData,setCartData]=useState([])
  const [fData,setFData]=useState([])
  const [qty,setQty]=useState(0)
  const sanitizedEmail = ctxEmail.email.replace(/[@.]/g, "");

  const [btn,setBtn]=useState(true)
  useEffect(()=>{
    // getCrudData()
    
  },[])
//  async function getCrudData(){
//   const res= await fetch(`https://crudcrud.com/api/6a2025d7ca6d4810bcc9794630f1fa15/${sanitizedEmail}`)
//   const data=await res.json() 
//   setCartData(data)
//   console.log(data,'its in cartItems......................')
//   // data.forEach(element => {
//   //   console.log(element.singleData.title,'its in cartItems...................')
//   // });
//  }

async function firebaseData(){
  const res=await fetch(`https://newecommerce-aa761-default-rtdb.firebaseio.com/${sanitizedEmail}.json`)
  const data=await res.json()
  console.log(data,'this is cart data form firebase')
//   data.map((ele)=>{
// console.log(ele,'this is data from firebase')
//   })

let loadedMovies=[]
for(let key in data){
console.log(data[key].data,'why we are getting error here')
console.log(data[key].data.title,'why we are getting error here')
  loadedMovies.push({
    title:data[key].data.title,
    price:data[key].data.price,
    imageUrl:data[key].data.imageUrl
  }
     
  )
  console.log(key)
  console.log(data[key] ,'this is cart data form firebase')
}
setFData(loadedMovies)
setQty(loadedMovies.length)
console.log(loadedMovies)


}

  const ctx = useContext(AuthContext);
  
  let z = 0;
  let totalAmount = ctx.cartItems.map((i) => {
    return (z = i.price * i.quantity + z);
  });
  console.log(totalAmount);
  console.log(ctx, "this is in ctx");
  const [showCart, setShowCart] = useState(false);
  console.log(ctx, "this is in cartitems ctx");
  // console.log(props, "this is in cartitem");
  //showing cart
  //showing cart
  //showing cart
  const showCartHandler = (e) => {
    setShowCart(!showCart);
    firebaseData()
    // getCrudData()

  };
  //removing element
  //removing element
  //removing element
  const removeElement = (e) => {
    ctx.cartQty = ctx.cartQty - 1;
    // e.target.parentElement.parentElement.remove()

    ctx.getCartItemId(e.target.value);
    // props.getCartItemId(e.target.value);
  };
  return (
    <>
      <div className="mr-[2rem] flex gap-2 ">
        <button onClick={showCartHandler}>Cart</button>
        <p className="text-red-600">{ctx.cartItems.length}</p>
      </div>
      {showCart && (
        <div className="  border border-black h-[100vh] bg-white w-[32rem]  ">
          <div className="flex justify-around">
            <button className=" text-center  text-black italic text-[40px]">
              Cart
            </button>
            <button
              onClick={showCartHandler}
              className=" text-center  bg-red-700 w-[2rem] h-[0.1rem] mt-[0.8rem] pb-[2.4rem] text-white  italic text-[26px]"
            >
              X
            </button>
          </div>
          <div className="flex gap-[4rem] ml-[1rem] text-black justify-start ">
            <div className="border-b italic font-bold border-black w-[7rem]">
              Item
            </div>
            <div className="border-b italic font-bold border-black">Price</div>
            <div className="border-b italic font-bold border-black">
              Quantity
            </div>
          </div>

          {ctx.cartItems.map((ele) => (
            <div className="mt-[1rem]">
              <>
                <div className=" "></div>
                <div className="text-black italic text-[15px] pb-[1rem]  border-b border-black  mt-[1rem] gap-1 flex justify-start">
                  <div className="w-[5rem] ">
                    <img src={ele.imageUrl} alt="" />
                  </div>
                  <div className="  w-[5rem] "> {ele.title} </div>
                  <div className=" ml-[2rem]  w-[3rem] "> ${ele.price} </div>
                  <div className="">
                    <input
                      defaultValue="1"
                      value={ele.quantity}
                      className=" border ml-[4rem] bg-white border-black h-[2rem] w-[2rem]"
                      type="text"
                    />
                  </div>
                  <div className="ml-[4rem] ">
                    <button
                      value={ele.id}
                      onClick={removeElement}
                      className="bg-red-500 p-[0.5rem] rounded-md text-white"
                    >
                      {ele.quantity>1?'Decrease Quantity':'Remove'}
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
          <div className="flex justify-evenly font-bold font-serif">
            <div className="text-black font-serif font-bold">Total Amount</div>
            <div className="text-black">${z}</div>
          </div>
          <button className="text-white p-[0.5rem] animate-bounce rounded-md font-mono ml-[9rem] bg-green-500  text-[40px] mt-[2rem]">
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default CarrtItems;
