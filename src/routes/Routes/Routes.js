import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home/Home";
import LogIn from "../../components/Pages/LogIn/LogIn";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
    ],
  },
]);
