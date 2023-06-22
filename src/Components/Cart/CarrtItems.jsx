<<<<<<< HEAD
import React, { useContext, useState } from "react";
import AuthContext from "../Store/Auth-Context";

const CarrtItems = (props) => {
  const ctx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
console.log(ctx,'this is in cartitems ctx')
  console.log(props, "this is in cartitem");
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
    // e.target.parentElement.parentElement.remove()
    ctx.cartQty = ctx.cartQty - 1;
    console.log(e.target.value, "its in remove button");
    // ctx.id = e.target.id;
    // ctx.removeItem(e)
    props.getCartItemId(e.target.value);
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
                      className=" border ml-[4rem] border-black h-[2rem] w-[2rem]"
                      type="text"
                    />
                  </div>
                  <div className="ml-[4rem] ">
                    <button
                      value={ele.id}
                      onClick={removeElement}
                      className="bg-red-500 p-[0.5rem] rounded-md text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}

          <button className="text-white p-[0.5rem] animate-bounce rounded-md font-mono ml-[9rem] bg-green-500  text-[40px] mt-[2rem]">
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default CarrtItems;
=======
import React, { useState } from 'react'


const CarrtItems = (props) => {
   const [showCart,setShowCart]= useState(false)
   //showing cart
   //showing cart
   //showing cart
   const showCartHandler=e=>{
    setShowCart(!showCart)
   }
   //removing element
   //removing element
   //removing element
   const removeElement=e=>{
    e.target.parentElement.parentElement.remove()
   }
  return (
    <>
    <button onClick={showCartHandler}>Cart</button>
 { showCart&& <div className='  border border-black h-[100vh] bg-white w-[32rem]  ' >  
   <div className='flex justify-around'>

   <button className=' text-center  text-black italic text-[40px]'>Cart</button>
   <button onClick={showCartHandler} className=' text-center  bg-red-700 w-[2rem] h-[0.1rem] mt-[0.8rem] pb-[2.4rem] text-white  italic text-[26px]'>X</button>
    </div>  
    <div className='flex gap-[4rem] ml-[1rem] text-black justify-start '>
        <div className='border-b italic font-bold border-black w-[7rem]'  >Item</div>
        <div className='border-b italic font-bold border-black'>Price</div>
        <div className='border-b italic font-bold border-black'>Quantity</div>
    </div>
   <div className='mt-[1rem]'>
   {props.data.map(ele=>(
    <>
    <div className=' '>
    
    </div >
    <div className='text-black italic text-[15px] pb-[1rem]  border-b border-black  mt-[1rem] gap-1 flex justify-start'>
        <div className='w-[5rem] '><img src={ele.imageUrl} alt="" /></div>
        <div  className='  w-[5rem] '> { ele.title } </div>
        <div className=' ml-[2rem]  w-[3rem] '> ${ ele.price } </div>
        <div className=''><input defaultValue='1' className=' border ml-[4rem] border-black h-[2rem] w-[2rem]' type="text" /></div>
        <div  className='ml-[4rem] '><button onClick={removeElement} className='bg-red-500 p-[0.5rem] rounded-md text-white'>Remove</button></div>
    </div>
    </>
   ))}
   </div >

   <button className='text-white p-[0.5rem] animate-bounce rounded-md font-mono ml-[9rem] bg-green-500  text-[40px] mt-[2rem]'>
Purchase
   </button>
   </div>}

   </>
  )


}

export default CarrtItems
>>>>>>> 13db6a03115596c0046f37110c5a3a2aa33cb2a5
