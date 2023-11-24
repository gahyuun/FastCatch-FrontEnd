import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constants";
import { Basket, Home, Accommodation, Signup, Login } from "../pages";
import App from "../App";
import Order from "../pages/order/Order";

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.BASKET,
        element: <Basket />,
      },
      {
        path: PATH.ACCOMMODATION,
        element: <Accommodation />,
      },
      {
        path: PATH.ORDER,
        element: <Order />,
      },
    ],
  },
  {
    path: PATH.SIGN_UP,
    element: <Signup />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
]);

export default router;
