import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Home from "../../components/Pages/Home/Home";
import LogIn from "../../components/Pages/LogIn/LogIn";
import ServiceDetails from "../../components/Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../components/Pages/Services/Services/Services";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      { path: "/details/:id", element: <ServiceDetails></ServiceDetails> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
