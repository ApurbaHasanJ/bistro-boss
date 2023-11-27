import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useMenu from "../hooks/useMenu";
import Loader from "../Pages/Shared/Loader/Loader";
import useBanner from "../hooks/useBanner";

const Main = () => {
  const [data, loading] = useMenu();
  const [banners, BannersLoading] = useBanner();
  console.log(data, banners);
  const location = useLocation();
  // console.log(location);
  const withOutHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      {loading || BannersLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader />
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
