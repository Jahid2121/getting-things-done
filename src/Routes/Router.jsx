import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Dashboard from "../LayOut/Dashboard";
import Profile from "../Pages/Profile/Profile";



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
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: '/dashboard',
          element: <Profile />
        }
      ]
    }
  ]);