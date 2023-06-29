import React, { useContext, useState } from "react";
import HeaderComp from "../Store/HeaderComp";
import FooterComponent from "../FooterComponent/FooterComponent";
import AuthContext from "../Store/Auth-Context";

const UserInfo = () => {
    const ctx=useContext(AuthContext)
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()

    const nameHandler=(e)=>{
    setName(e.target.value)

    }
    const emailHandler=(e)=>{
setEmail(e.target.value)

    }
    const phoneHandler=(e)=>{
setPhone(e.target.value)

    }
    let obj={
        name:name,
        email:email,
        phone:phone 

    }
    const submitHandler=(e)=>{
        e.preventDefault()
   ctx.onUserInfo(obj)

    }

    console.log(name,email,phone)
  return (
    <>
      <div className="flex bg-black h-10  text-[20px] text-white">
        <HeaderComp></HeaderComp>
      </div>
      <div className="bg-gray-700 h-[8rem]   ani italic text-white text-center text-6xl align-text-center mt-[3rem] ">
        The Generics
      </div>
      {/* Form ///////////////////////////////////////////////////////// */}
      {/* Form ///////////////////////////////////////////////////////// */}
      {/* Form ///////////////////////////////////////////////////////// */}
      <div className=" font-serif m-auto w-[50rem] h-[30rem]">
        <form action="">
          <div className="flex flex-col w-[50rem] ]">
            <label className="mt-[2rem]" htmlFor="name">
              Name
            </label>
            <input
            required
            onChange={nameHandler}
              className="bg-white border h-[4rem] rounded-md  border-black"
              type="text"
              id="name"
            />
          </div>
          <div className="flex flex-col w-[50rem] ]">
            <label className="mt-[2rem]" htmlFor="email">
              Email
            </label>
            <input
            required
            onChange={emailHandler}
              className="bg-white border h-[4rem] rounded-md  border-black"
              type="text"
              id="email"
            />
          </div>
          <div className="flex flex-col w-[50rem] ]">
            <label className="mt-[2rem]" htmlFor="phone">
              Phone Number
            </label>
            <input
            required
            onChange={phoneHandler}
              className="bg-white border h-[4rem] rounded-md  border-black"
              type="text"
              id="phone"
            />
          </div>
          <div className="w-[50rem] mt-[2rem] ">
            <div className="w-[5rem] m-auto">
              <button onClick={submitHandler} className="border mx-auto w-[8rem] font-extrabold h-[3rem] rounded-lg border-black">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
};

export default UserInfo;
