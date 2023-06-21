import React from 'react'
import CarrtItems from './CarrtItems'

const Cart = (props) => {

    const showCartHandler=e=>{

    }

  return (
   <>
   <div>
    <div>
   
    </div>
    <div  >
        <CarrtItems onClick={showCartHandler} data={props.data}></CarrtItems>
       
    </div>
    <div >
      
    </div>
   </div>
   </>
  )
}

export default Cart