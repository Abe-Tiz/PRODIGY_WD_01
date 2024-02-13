import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from '../pages/About';
import Main from '../layout/main';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
        path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element:<Home />
          }
        ]
  },
]);

export default router
