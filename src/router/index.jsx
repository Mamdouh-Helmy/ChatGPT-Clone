import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import {Start} from "@/pages/Start/Start";
import {MainPages} from "@/pages/MainPages/MainPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Start",
    element: <Start />,
  },
  {
    path: "/main",
    element: <MainPages />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
