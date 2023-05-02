import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/PublicRoute/Root.jsx';
import Home from './Component/PublicRoute/Home.jsx';
import Login from './Component/PublicRoute/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'home',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
