import StorePage from "./Components/Store-page.jsx/StorePage";
import CartTest from "./Components/Store-page.jsx/CartTest";
import {
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./Components/About-page/AboutPage";
import HomePage from "./Components/Home-page/HomePage";
import AuthContext from "./Components/Store/Auth-Context";
import { CartProvider } from "./Components/Store-page.jsx/CartProvider";
import UserInfo from "./Components/ContactUs/UserInfo";
// const router = createBrowserRouter([
//   { path: "/", element: <StorePage></StorePage> },
//   { path: "/about", element: <AboutPage></AboutPage> },
//   { path: "/home", element: <HomePage></HomePage> },
// ]);

//2nd approach for routing
//2nd approach for routing
//   const routeDefinition=createRoutesFromElements(
//     <Route>
//       <Route path="/about" element={<AboutPage></AboutPage>}/>
//       <Route path="/" element={<StorePage></StorePage>}/>
//     </Route>
//   )
// const router=createBrowserRouter(routeDefinition)

// const router=createBrowserRouter(router2)
const App = () => {
  // return <RouterProvider router={router}></RouterProvider>;
  return (

      <Routes>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/store" element={<CartTest/>} />
        <Route path="/Contact-Us" element={<UserInfo/>} />
        <Route index element={<HomePage/>} />
      </Routes>
   
  );
};

export default App;
