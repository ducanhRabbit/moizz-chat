import { useAppSelector } from "@/redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedVerifyRoute({ children }) {
  const { verifying, accessToken } = useAppSelector((state) => state.auth);
  const location = useLocation();
console.log(accessToken)
  if (!verifying && !accessToken) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }
  return children;
}

export default ProtectedVerifyRoute;
