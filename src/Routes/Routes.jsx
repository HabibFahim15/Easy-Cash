import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import NotFoundPage from "../Pages/ErrorPages/ErrorPage";
import SignUp from "../Pages/Authentication/SignUp";
import Signin from "../Pages/Authentication/Signin";


export const router = createBrowserRouter([
{
  path: '/',
  element: <Main />,
  errorElement: <NotFoundPage />,
  children:[
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/signin',
      element: <Signin />
    }
  ]
}
]);