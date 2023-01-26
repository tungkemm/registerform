import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../page/HomePage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import NotfoundPage from "../page/NotfoundPage";

const RouterPage = () => {
  let Routes = useRoutes([
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <NotfoundPage />,
    },
  ]);

  return Routes;
};

export default RouterPage;
