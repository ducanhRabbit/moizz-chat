import Authentication from "@/layout/Authentication";
import HomeLayout from "@/layout/HomeLayout";
import Login from "@/page/Auth/Login";
import Register from "@/page/Auth/Register";
import VerifyEmail from "@/page/Auth/VerifyEmail";
import HomePage from "@/page/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "@/components/HOC/ProtectedRoute";
import ProtectedVerifyRoute from "@/components/HOC/ProtectedVerifyRoute";
import Wellcome from "@/components/Home/Wellcome";
import Chat from "@/components/Home/Chat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <ProtectedRoute>
          <HomeLayout />
        </ProtectedRoute>
    ),
    children: [
      {
        element: <HomePage />,
        children:[
          {
            index:true,
            element:<Wellcome/>
          },{
            path:'/group',
            element:<Chat/>
          }
        ]
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication></Authentication>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "verify-email",
        element: (
          <ProtectedVerifyRoute>
            <VerifyEmail />,
          </ProtectedVerifyRoute>
        ),
      },
    ],
  },
]);
