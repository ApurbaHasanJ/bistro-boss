import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import LandingPage from "../Pages/LandingPage";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin();
  const location = useLocation();
  if (loading || adminLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LandingPage />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
