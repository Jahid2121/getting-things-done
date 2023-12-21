import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            element: <Home />
        },
      ]
    },
  ]);