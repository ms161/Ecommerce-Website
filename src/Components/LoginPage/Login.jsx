import React, { useRef, useState } from "react";
import HeaderComp from "../Store/HeaderComp";
import { useContext } from "react";
import Authentication, { AuthenticationProvidor } from "./AuthenticationProvider";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const email = useRef();
  const password = useRef();
  const ctx=useContext(Authentication)
  console.log(ctx,'this is ctx')
  const switchHandler = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };
  async function submitHandler(e) {
    try {
        e.preventDefault();
        console.log('clicked')
      setIsLoading(true);

      let enteredEmail = email.current.value;
      let enteredPassword = password.current.value;
    
      let url;
      if (isLogin) {
        console.log('login url')
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG6ekDHKKcQMhIXYYYleXAgA2GqNOS860"
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBG6ekDHKKcQMhIXYYYleXAgA2GqNOS860";
      }
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
    //   console.log(data.error.message, "this is data");
      console.log(res);
      if (res.ok) {
        console.log(data.email,'this is data we need')
       ctx.userEmail(data.email)
        ctx.logIn(data.idToken)
        setIsLoading(false);
        console.log('login succesfull')
      } else {
        setIsLoading(false);

        setError(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex bg-black h-10  text-[20px] text-white">
        <HeaderComp></HeaderComp>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div className="flex flex-col gap-7 justify-center text-center mt-[1rem]  items-cente ">
          <div>
            <input
              className="p-[1rem] text-white"
              type="text"
              placeholder="Email"
              ref={email}
            />
          </div>
          <div>
            <input
              className="p-[1rem] text-white"
              type="password"
              placeholder="Passowrd"
              ref={password}
            />
          </div>
          <div>
            <p>{error}</p>
            {isLoading && <p>Sending Request</p>}
            {isLogin && (
              <button type="" className="p-[1rem] bg-blue-500 pr-[2rem] text-white text-[20px] pl-[2rem]">
                Login
              </button>
            )}
            <div>
              <div>
                {!isLogin && (
                  <button className="p-[1rem] bg-blue-500 pr-[2rem] text-white text-[20px] pl-[2rem]">
                    Sign Up
                  </button>
                )}
              </div>

              {isLogin && (
                <button
                  onClick={switchHandler}
                  className="bg-gray-400 p-[1rem] mt-[1rem]"
                >
                  Create a new account
                </button>
              )}
              {!isLogin && (
                <button
                  onClick={switchHandler}
                  className="bg-gray-400 p-[1rem] mt-[1rem]"
                >
                  Login with existing account
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
