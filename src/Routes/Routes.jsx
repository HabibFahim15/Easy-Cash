import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import NotFoundPage from "../Pages/ErrorPages/ErrorPage";


export const router = createBrowserRouter([
{
  path: '/',
  element: <Main />,
  errorElement: <NotFoundPage />,
  children:[
    {
      path: '/',
      element: <Home />
    }
  ]
}
]);