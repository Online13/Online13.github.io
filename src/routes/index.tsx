import { RouteObject } from "react-router-dom";
import HomePage from "src/pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

export default routes;