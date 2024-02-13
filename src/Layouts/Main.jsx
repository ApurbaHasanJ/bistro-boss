import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useMenu from "../hooks/useMenu";
import useBanner from "../hooks/useBanner";
import LandingPage from "../Pages/LandingPage";
import CartsCount from "../Pages/Shared/Cart/CartsCount";

const Main = () => {
  const [, loading] = useMenu();
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
