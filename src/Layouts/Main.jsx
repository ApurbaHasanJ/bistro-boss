import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation()
    // console.log(location);
    const withOutHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
           {withOutHeaderFooter || <Navbar/>}
            <main className="min-h-[calc(100vh-70px)]">
            <Outlet/>
            </main>
            {withOutHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;