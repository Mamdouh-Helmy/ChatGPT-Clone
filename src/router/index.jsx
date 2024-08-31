import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import {Start} from "@/pages/Start/Start";
import {MainPages} from "@/pages/MainPages/MainPages";

const router = createBrowserRouter([
  {
    path: "/ChatGPT-Clone/",
    element: <Welcome />,
  },
  {
    path: "/ChatGPT-Clone/login",
    element: <Login />,
  },
  {
    path: "/ChatGPT-Clone/start",
    element: <Start />,
  },
  {
    path: "/ChatGPT-Clone/main",
    element: <MainPages />,
  },
]);




const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
