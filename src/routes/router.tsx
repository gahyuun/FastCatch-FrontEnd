import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constants";
import {
  Basket,
  Home,
  Accommodation,
  Order,
  Members,
  OrderList,
  Signup,
  Login,
} from "../pages";
import App from "../App";

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
      {
        path: PATH.MEMBERS,
        element: <Members />,
      },
      {
        path: PATH.ORDERLIST,
        element: <OrderList />,
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
