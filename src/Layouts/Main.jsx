import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useMenu from "../hooks/useMenu";
import useBanner from "../hooks/useBanner";
import LandingPage from "../Pages/LandingPage";
import { useState, useEffect } from "react"; // Import useState and useEffect

const Main = () => {
  const [, loading] = useMenu();
  const [, isPending] = useBanner();
  const location = useLocation();
  const withOutHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  // Introduce state for tracking whether to show the loading page
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
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
          <LandingPage />
        </div>
      ) : (
        <div>
          {withOutHeaderFooter || <Navbar />}
          <main className="min-h-[calc(100vh-70px)]">
            <Outlet />
          </main>
          {withOutHeaderFooter || <Footer />}
        </div>
      )}
    </>
  );
};

export default Main;
