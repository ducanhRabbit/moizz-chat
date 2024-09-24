import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedVerifyRoute({ children }) {
  const { verifying } = useAppSelector((state) => state.auth);
  const location = useLocation();
  if (location.pathname.includes("verify-email") && !verifying) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }
  return children;
}

export default ProtectedVerifyRoute;
