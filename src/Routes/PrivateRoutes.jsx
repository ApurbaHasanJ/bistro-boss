import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Shared/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
