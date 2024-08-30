import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import {Start} from "@/pages/Start/Start";
import {MainPages} from "@/pages/MainPages/MainPages";

const router = createBrowserRouter([
  {
    path: "ChatGPT-Clone/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/login/start",
    element: <Start />,
  },
  {
    path: "/login/start/main",
    element: <MainPages />,
  },
]);



const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
