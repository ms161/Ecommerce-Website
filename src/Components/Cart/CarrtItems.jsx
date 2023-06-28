import React, { useContext, useState } from "react";
import AuthContext from "../Store/Auth-Context";
// import { AuthContext } from "../../App";

const CarrtItems = (props) => {
  const [btn,setBtn]=useState(true)
 
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
  };
  //removing element
  //removing element
  //removing element
  const removeElement = (e) => {
    ctx.cartQty = ctx.cartQty - 1;

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
