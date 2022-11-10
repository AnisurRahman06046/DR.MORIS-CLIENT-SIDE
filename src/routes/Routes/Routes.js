import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../components/Pages/AddServices/AddServices/AddServices";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Error from "../../components/Pages/Error/Error";
import Home from "../../components/Pages/Home/Home";
import LogIn from "../../components/Pages/LogIn/LogIn";
import MyReviews from "../../components/Pages/MyReviews/MyReviews/MyReviews";

import Register from "../../components/Pages/Register/Register/Register";
import ServiceDetails from "../../components/Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../../components/Pages/Services/Services/Services";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },

      { path: "/blog", element: <Blog></Blog> },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
