import { Link } from "react-router-dom";

import { useState } from "react";
import NavItems from "./NavItems";
import UserAccount from "./UserAccount";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className=" navbar lg:flex-row flex-row-reverse justify-between fixed z-10 bg-gray-900 bg-opacity-50 text-white px-10 lg:pt-6 lg:pb-4 pt-3 pb-2.5">
      <div className="lg:hidden block">
        <UserAccount />
      </div>
      <div className="lg:navbar-start">
        <Link className=" normal-case text-xl">
          <div>
            <h2 className="lg:text-[35px] text-xl font-black font-[Cinzel]">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] lg:text-base text-xs font-bold tracking-[5px] lg:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
        </Link>
      </div>
      <div className="lg:navbar-end w-full hidden lg:flex">
        <ul className="flex items-center gap-4 menu-horizontal px-1">
          <NavItems />
        </ul>
      </div>

      <div className="lg:navbar-end  lg:hidden">
        <div className="dropdown" onClick={handleShowNavbar}>
          <label tabIndex={0} className=" lg:hidden">
            {showNavbar ? (
              <GiCrossedBones className="text-xl text-[#EEFF25]" />
            ) : (
              <FaBarsStaggered className="text-xl hover:text-[#EEFF25]" />
            )}
          </label>
        </div>

        {showNavbar && (
          <ul className=" absolute top-12 left-0 mt-5 p-2 px-5 shadow bg-opacity-50 grid gap-2 items-start rounded-br-xl bg-gray-900">
            <NavItems />
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
