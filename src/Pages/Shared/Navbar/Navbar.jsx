import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { loading, user, logOut } = useContext(AuthContext);
  const [showLogOut, setShowLogOut] = useState(false);
  console.log(user);

  const handleShowLogOut = () => {
    setShowLogOut(!showLogOut);
  };

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Error logout user",
          text: "Please try again.",
        });
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          OUR SHOP
        </NavLink>
      </li>
      {loading || user ? (
        <>
          <li className="relative">
            <div
              onClick={handleShowLogOut}
              className=" border-[#D1A054] rounded-full">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  alt={user?.displayName}
                />
              ) : (
                <FaUser
                  className="w-6 h-6 md:mx-0 mx-auto"
                  title={user?.displayName}
                />
              )}
            </div>
            {showLogOut && (
              <button
                onClick={handleLogout}
                className="absolute right-0 top-11 font-semibold drop-shadow-2xl px-5 py-2 rounded-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap">
                Log Out
              </button>
            )}
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              SIGN UP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              LOGIN
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <header className=" navbar justify-between fixed z-10 bg-gray-900 bg-opacity-30 text-white px-10 md:pt-6 md:pb-4 pt-3 pb-2.5">
      <div className="navbar-start">
        <Link className=" normal-case text-xl">
          <div>
            <h2 className="md:text-[35px] text-2xl font-black font-[Cinzel]">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
        </Link>
      </div>
      <div className="navbar-end w-full hidden lg:flex">
        <ul className="flex items-center gap-4 menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className=" dropdown-content mt-5 right-0 p-2 shadow bg-opacity-30 grid gap-2 ite bg-gray-900">
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
