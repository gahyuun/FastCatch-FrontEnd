import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./constants";
import { Basket, Home } from "../pages";
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
    ],
  },
]);

export default router;
