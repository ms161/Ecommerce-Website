
import React from 'react'
import './Footer.css'
import Cart from './Cart/Cart'
import HeaderComp from './Store/HeaderComp'
const Header = (props) => {
  return (
    <>
    <div className='bg-black border fixed top-0  w-[100%] z-[0] border-black h-10 ani flex gap-20  text-[20px] text-sky-100'>
   <HeaderComp></HeaderComp>
       <div> <Cart data={props.data} getCartItemId={props.getCartItemId} ></Cart></div>
       
    </div>
    <div className='bg-gray-700 h-[8rem]   ani italic text-white text-center text-6xl align-text-center mt-[3rem] ' >The Generics</div>
    <div className="mt-3 m-auto italic text-[30px] w-10 font-serif font-bold " >Music</div>
    </>
  )
}

export default Header



