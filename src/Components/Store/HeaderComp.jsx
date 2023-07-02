import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Authentication from "../LoginPage/AuthenticationProvider";

const HeaderComp = () => {
  const ctx=useContext(Authentication)
  console.log(ctx,'this is in header component')
 const logoutHandler=()=>{
  ctx.logOut()
  }
  return (
    //flex m-auto gap-5 bg-black text-center text-white p-0.5
    <div className=" flex gap-12 h-10 text-[20px] text-white m-auto bg-black">
      <div>
       
        <Link to={"/"}> Home</Link>
      </div>
     
      <div>
        <Link to={"/about"}> About</Link>
      </div>
      <div>
        <Link to={ctx.isLoggedIn?"/store":"/login"}>{ctx.isLoggedIn?'Store':'Login'}</Link>
      </div>
      <div>
        <Link to={'/login'}><button onClick={logoutHandler}>Logout</button></Link>
      </div>
      <div>
        <Link to={"/Contact-Us"}> Contact Us</Link>
      </div>
    </div>
  );
};

export default HeaderComp;
