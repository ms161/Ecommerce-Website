

import React from "react";
import './Footer.css'
import FooterComponent from "./Cart/FooterComponent";
const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex  justify-center">
          <button className="text-[20px] mt-10 h-[3rem] w-[8rem] rounded-sm bg-gray-700 text-white p-1.5 ">See the cart</button>
        </div >
        <FooterComponent></FooterComponent>
     
      </div>
    </>
  );
};

export default Footer;

