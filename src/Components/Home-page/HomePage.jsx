import React from "react";
import HeaderComp from "../Store/HeaderComp";
import FooterComponent from "../Cart/FooterComponent";

const HomePage = () => {
  return (
    <>
      <div className="flex bg-black">
        <HeaderComp></HeaderComp>
        {/* <div></div> */}
      </div>
      <div className="bg-gray-500 h-[20rem] mt-[1rem] ">
        <div className="ml-auto w-auto text-center text-[6rem]  text-white font-serif font-bold">
          The Generics
        </div>
        <div className="text-center m-auto border border-sky-500 p-[0.5rem] rounded-lg w-[20rem] text-white text-[2rem]">
          Get our Latest album
        </div>
        <div className="border m-auto mt-4 border-sky-500 w-[4rem] h-[4rem] rounded-full "></div>
      </div>
      <div className="text-[2rem] font-serif font-bold text-center mt-6">
        Tours
      </div>
      <div className="border-b border-black pt-3 pb-3 flex m-auto w-[70rem]  justify-between">
        <p className=" font-serif font-thin ">JUL16</p>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className="text-white bg-sky-500 p-[0.5rem] pl-[2rem] pr-[2rem] rounded-md">
          Buy tickets
        </button>
      </div>
      <div className="border-b border-black pt-3 pb-3 flex m-auto w-[70rem]  justify-between">
        <p>JUL16</p>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className="text-white bg-sky-500 p-[0.5rem] pl-[2rem] pr-[2rem] rounded-md">
          Buy tickets
        </button>
      </div>
      <div className="border-b border-black pt-3 pb-3 flex m-auto w-[70rem]  justify-between">
        <p>JUL16</p>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className="text-white bg-sky-500 p-[0.5rem] pl-[2rem] pr-[2rem] rounded-md">
          Buy tickets
        </button>
      </div>
      <div className="border-b border-black pt-3 pb-3 flex m-auto w-[70rem]  justify-between">
        <p>JUL16</p>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className="text-white bg-sky-500 p-[0.5rem] pl-[2rem] pr-[2rem]  rounded-md">
          Buy tickets
        </button>
      </div>
      <div className="border-b border-black pt-3 pb-3 flex m-auto w-[70rem]  justify-between">
        <p>JUL16</p>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className="text-white bg-sky-500 p-[0.5rem] pl-[2rem] pr-[2rem]  rounded-md">
          Buy tickets
        </button>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default HomePage;
