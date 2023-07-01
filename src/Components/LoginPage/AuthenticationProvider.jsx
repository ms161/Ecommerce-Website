import React, { useEffect, useState } from "react";

const Authentication = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});

export const AuthenticationProvidor = (props) => {
  const initialToken = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(initialToken);

  useEffect(()=>{
      setIsLoggedIn(!!token)

  },[])
  const loginHandler = (token) => {
    setIsLoggedIn(true);
    console.log(token, "this is token is authencation provider");
    localStorage.setItem("token", token);
  };

  const logoutHandler = (e) => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  const value = {
    isLoggedIn: isLoggedIn,
    logIn: loginHandler,
    logOut: logoutHandler,
  };
  return (
    <Authentication.Provider value={value}>
      {props.children}
    </Authentication.Provider>
  );
};

export default Authentication;
