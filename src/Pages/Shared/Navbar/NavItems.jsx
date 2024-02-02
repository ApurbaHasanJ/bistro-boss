import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import {
  MdContactSupport,
  MdOutlineMenuBook,
  MdSpaceDashboard,
} from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import UserAccount from "./UserAccount";

const NavItems = () => {
  return (
    <>
      {/* Home route */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <HiHome className="text-lg" />
            <span>HOME</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <MdContactSupport className="text-lg" />
            <span>CONTACT US</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <MdSpaceDashboard className="text-lg" />
            <span>DASHBOARD</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <MdOutlineMenuBook className="text-lg" />
            <span>OUR MENU</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <FaShop className="text-lg" />
            <span>OUR SHOP</span>
          </div>
        </NavLink>
      </li>
      <li className="hidden md:block">
        <UserAccount />
      </li>
    </>
  );
};

export default NavItems;
