// import CartTest from "./Components/Store-page.jsx/CartTest";
// import {
//   Route,
//   // RouterProvider,
//   Routes,
//   // createBrowserRouter,
//   // createRoutesFromElements,
// } from "react-router-dom";
// import AboutPage from "./Components/About-page/AboutPage";
// import HomePage from "./Components/Home-page/HomePage";
// import AuthContext from "./Components/Store/Auth-Context";

// import UserInfo from "./Components/ContactUs/UserInfo";
// import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import Login from "./Components/LoginPage/Login";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// // const router = createBrowserRouter([
// //   { path: "/", element: <StorePage></StorePage> },
// //   { path: "/about", element: <AboutPage></AboutPage> },
// //   { path: "/home", element: <HomePage></HomePage> },
// // ]);

// //2nd approach for routing
// //2nd approach for routing
// //   const routeDefinition=createRoutesFromElements(
// //     <Route>
// //       <Route path="/about" element={<AboutPage></AboutPage>}/>
// //       <Route path="/" element={<StorePage></StorePage>}/>
// //     </Route>
// //   )
// // const router=createBrowserRouter(routeDefinition)

// // const router=createBrowserRouter(router2)
// const App = () => {
//   const ctx=useContext(AuthContext)
//   const dec=ctx.isLoggedIn

//   // return <RouterProvider router={router}></RouterProvider>;
//   return (
//     <Routes>
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/store" element={<CartTest />} />
//       <Route path="/Contact-Us" element={<UserInfo />} />
//       <Route path="/products/:productId" element={<ProductDetails />} />
//       <Route path="/login" element={<Login />} />

//       <Route index element={<HomePage />} />
//     </Routes>
//   );
// };

// export default App;
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
    if (dec) {
      navigate("/store"); // Redirect to the store page if dec is true
    }
  }, [dec, navigate]);

  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      {dec && <Route path="/store" element={<CartTest />} />}
      <Route path="/Contact-Us" element={<UserInfo />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default App;
