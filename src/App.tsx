import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import Product from './screens/Product'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/product-showcase",
    element: <Product />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
