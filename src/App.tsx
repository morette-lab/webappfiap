import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import Product from './screens/Product'
import ConfirmPayment from './screens/Payment/Confirm';

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
  },
  {
    path: "/confirm-payment",
    element: <ConfirmPayment />
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
