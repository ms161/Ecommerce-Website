import React from "react"
const AuthContext=React.createContext({
    cartItems:[],
    id:'',
    onCartData:()=>{},
    userInfo:[]
   

    
})

export default AuthContext


