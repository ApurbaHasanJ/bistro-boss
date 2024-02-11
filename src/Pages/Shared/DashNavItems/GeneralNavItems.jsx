import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdEmail, MdOutlineMenuBook, MdShoppingBag } from "react-icons/md";

const GeneralNavItems = () => {
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="flex flex-col md:gap-6 gap-4 ml-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaHome className="md:text-2xl text-base" title="HOME" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                HOME
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <MdOutlineMenuBook className="md:text-2xl text-base" title="MENU" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                MENU
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <MdShoppingBag className="md:text-2xl text-base" title="SHOP" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                SHOP
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <MdEmail className="md:text-2xl text-base" title="CONTACT" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                CONTACT
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GeneralNavItems;
