import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";
import AddItems from "../Pages/Dashboard/AdminPages/AddItems";
import ManageItems from "../Pages/Dashboard/AdminPages/ManageItems";
import ManageBookings from "../Pages/Dashboard/AdminPages/ManageBookings";
import UpdateItem from "../Pages/Dashboard/AdminPages/UpdateItem";
import ManageUsers from "../Pages/Dashboard/AdminPages/ManageUsers";
import Reservation from "../Pages/Dashboard/UserPages/Reservation";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory";
import MyCart from "../Pages/Dashboard/UserPages/MyCart";
import MyBookings from "../Pages/Dashboard/UserPages/MyBookings";
import AddReview from "../Pages/Dashboard/UserPages/AddReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-items",
        element: <AddItems />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-item",
        element: <UpdateItem />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
    ],
  },
]);
