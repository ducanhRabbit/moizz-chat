import Authentication from "@/layout/Authentication";
import HomeLayout from "@/layout/HomeLayout";
import Login from "@/page/Auth/Login";
import Register from "@/page/Auth/Register";
import HomePage from "@/page/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },{
    path:'/auth',
    element: <Authentication></Authentication>,
    children:[{
      path:'login',
      element:<Login></Login>
    },{
      path:'register',
      element:<Register></Register>
    }]
  }
]);
