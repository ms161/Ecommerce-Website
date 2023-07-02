
import CartTest from "./Components/Store-page.jsx/CartTest";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutPage from "./Components/About-page/AboutPage";
import HomePage from "./Components/Home-page/HomePage";
import Authentication from "./Components/LoginPage/AuthenticationProvider";
import { CartProvider } from "./Components/Store-page.jsx/CartProvider";
import UserInfo from "./Components/ContactUs/UserInfo";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Login from "./Components/LoginPage/Login";
import { useContext, useEffect } from "react";
import { AuthenticationProvidor } from "./Components/LoginPage/AuthenticationProvider";

const App = () => {
  const navigate = useNavigate();
  const ctx = useContext(Authentication);
  const dec = ctx.isLoggedIn;
  console.log(ctx, "this is in app true false");

  useEffect(() => {
    if ( ctx.isLoggedIn) {
      console.log('useeffect in app')
      navigate("/store"); // Redirect to the store page if dec is true
    }
    else{
      // navigate("/login"); 
    }
  },[dec]);


  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
    {/* {  !dec?<Route path="/login" element={<Login />}> </Route> : <Route path="/store" element={<CartTest />} />} */}
    <Route path="/store" element={<CartTest />} />
      <Route path="/Contact-Us" element={<UserInfo />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default App;
