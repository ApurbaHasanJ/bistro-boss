import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const router =  createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contact-us',
                element:<ContactUs/>

            },
            {
                path: '/menu',
                element: <Menu/>
            },
            {
                path: '/shop',
                element: <OurShop/>
            },
            {
                path: '/login',
                element: <Login/>
            }
            ,
            {
                path: '/register',
                element: <SignUp/>
            }
        ]
    }
])

