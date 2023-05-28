import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <main className="min-h-[calc(100vh-70px)]">
            <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;