import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../page/Home";
import Register from "../page/Register";
import Login from "../page/Login";
import Notfound from "../page/Notfound";

const RouterPage = () => {
  let Routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return Routes;
};

export default RouterPage;
