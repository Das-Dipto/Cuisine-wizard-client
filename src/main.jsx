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
import Register from './Component/PublicRoute/Register.jsx';
import MailLogin from './Component/PublicRoute/MailLogin.jsx';
import AuthProvider from '../src/Component/ContextProvider/AuthProvider.jsx'


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
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'signInWithMail',
        element:<MailLogin></MailLogin>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
