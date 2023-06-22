import React from 'react'
import './Footer.css'
import Cart from './Cart/Cart'
const Header = (props) => {
  return (
    <>
    <div className='bg-blue-700 border fixed top-0  w-[100%] z-[0] border-black h-10 ani flex gap-20  text-[20px] text-sky-100'>
    <div className='flex m-auto   gap-5  p-0.5'>
        <h1 >Home</h1>
        <h1>Store</h1>
        <h1>About</h1>
        </div>
       <div> <Cart data={props.data} getCartItemId={props.getCartItemId} ></Cart></div>
       
    </div>
    <div className='bg-gray-700 h-[8rem]   ani italic text-white text-center text-6xl align-text-center mt-[3rem] ' >The Generics</div>
    <div className="mt-3 m-auto italic text-[30px] w-10 font-serif font-bold " >Music</div>
    </>
  )
}

export default Header

