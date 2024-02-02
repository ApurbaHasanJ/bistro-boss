import { Link } from "react-router-dom";

import { useState } from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

 

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
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end  lg:hidden">
        <div className="dropdown" onClick={handleShowNavbar}>
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
        </div>
        {showNavbar && (
          <ul className=" absolute top-16 right-0 mt-5 p-2 px-5 shadow bg-opacity-30 grid gap-2 items-start rounded-bl-xl bg-gray-900">
            <NavItems />
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
