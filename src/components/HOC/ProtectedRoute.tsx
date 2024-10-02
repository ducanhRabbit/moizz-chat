import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { accessToken } = useAppSelector((state) => state.auth);
  console.log(accessToken)
  if (!accessToken) {
    console.log("Faild")
    return <Navigate to={"/auth/login"} replace={true} />;
  }
  return children;
}

export default ProtectedRoute;
