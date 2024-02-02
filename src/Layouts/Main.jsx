import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useMenu from "../hooks/useMenu";
import useBanner from "../hooks/useBanner";
import LandingPage from "../Pages/LandingPage";
import { useState, useEffect } from "react"; // Import useState and useEffect
import CartsCount from "../Pages/Shared/Cart/CartsCount";

const Main = () => {
  const [, loading] = useMenu();
  const [, isPending] = useBanner();
  const location = useLocation();

  const [visitedBefore, setVisitedBefore] = useState(false);
  const isLoginOrRegister =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  // Introduce state for tracking whether to show the loading page
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // check session storage visited before
    const hasVisitedBefore = sessionStorage.getItem("visitedBefore");
    if (hasVisitedBefore) {
      setVisitedBefore(true);
    } else {
      // set the flag in session storage
      sessionStorage.setItem("visitedBefore", "true");
    }
    // Hide the loading page after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {loading || isPending || showLoading ? (
        <div className="h-screen flex justify-center items-center">
          {isLoginOrRegister || (!visitedBefore && <LandingPage />)}
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
