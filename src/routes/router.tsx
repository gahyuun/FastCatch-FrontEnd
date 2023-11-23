import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constants";
import { Basket, Home, Accommodation } from "../pages";
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
    ],
  },
]);

export default router;
