import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }
  return children;
}

export default ProtectedRoute;
