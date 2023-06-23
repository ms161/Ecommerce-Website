import StorePage from "./Components/Store-page.jsx/StorePage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutPage from "./Components/About-page/AboutPage";
import HomePage from "./Components/Home-page/HomePage";
const router = createBrowserRouter([
  { path: "/", element: <StorePage></StorePage> },
  { path: "/about", element: <AboutPage></AboutPage> },
  {path:'/home',element:<HomePage></HomePage>}

]);
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
  return <RouterProvider router={router}></RouterProvider>;
};

export { App };
