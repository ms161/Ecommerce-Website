import React from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    //flex m-auto gap-5 bg-black text-center text-white p-0.5
    <div className=" flex gap-12 h-10 text-[20px] text-white m-auto bg-black">
      <div>
        <Link to={"/home"}> Home</Link>
      </div>
      <div>
        <Link to={"/"}> Store</Link>
      </div>
      <div>
        <Link to={"/about"}> About</Link>
      </div>
    </div>
  );
};

export default HeaderComp;