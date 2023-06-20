import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="">
        <div className="flex  justify-center">
          <button className="text-[20px] mt-10 h-[3rem] w-[8rem] rounded-sm bg-gray-700 text-white p-1.5 ">See the cart</button>
        </div >
        <div className="bg-sky-400 mt-4 text-white h-[5rem]  ">
        <div className="flex justify-around pt-[1.1rem] ">
          <footer className="text-[30px] "  >The Generics</footer>
          <div className="flex gap-8 h-4 mt-2  justify-center snap-center">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=512&id=0PaFy1V8I5DO&format=png" alt="" />
            <img className="w-10 h-10"  src="https://img.icons8.com/?size=512&id=iefkXAGbJmaP&format=png" alt="" />
            <img className="w-10 h-10"  src="https://img.icons8.com/?size=512&id=AOftlHRbkPBF&format=png" alt="" />
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
