import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Dashboard from "../LayOut/Dashboard";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Task from "../Pages/Task/Task";
import CreateTask from "../components/CreateTask/CreateTask";



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
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
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
        },
        {
          path: '/dashboard/task',
          element: <Task />
        },
        {
          path: '/dashboard/createTask',
          element: <CreateTask />
        },
      ]
    }
  ]);