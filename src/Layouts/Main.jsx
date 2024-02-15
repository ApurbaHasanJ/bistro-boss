import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useMenu from "../hooks/useMenu";
import useBanner from "../hooks/useBanner";
import LandingPage from "../Pages/LandingPage";
import CartsCount from "../Pages/Shared/Cart/CartsCount";
import Popup from "../Pages/Shared/Popup/Popup";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Main = () => {
  const [, loading] = useMenu();
  const { user } = useContext(AuthContext);
  const [, isPending] = useBanner();
  const location = useLocation();

  const isLoginOrRegister =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <>
      {!isLoginOrRegister && (loading || isPending) ? (
        <div className="h-screen flex justify-center items-center">
          <LandingPage />
        </div>
      ) : (
        <div>
          {isLoginOrRegister || <Navbar />}
          <main className="min-h-[calc(100vh-70px)]">
            <Outlet />
            <div
              className={`fixed right-4 bottom-4 ${
                user?.email === "admin@gmail.com" && "hidden"
              }`}>
              <Popup />
            </div>
            <div className="border bg-[#D1A054] shadow-xl p-3 fixed z-[49] right-0 top-1/2 transform -translate-y-1/2">
              <CartsCount />
            </div>
          </main>
          {isLoginOrRegister || <Footer />}
        </div>
      )}
    </>
  );
};

export default Main;
