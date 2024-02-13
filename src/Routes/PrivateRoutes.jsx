import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LandingPage />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
