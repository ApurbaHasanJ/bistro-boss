import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdEmail, MdShoppingBag } from "react-icons/md";


const GeneralNavItems = () => {
    return (
        <nav className="w-full">
        <ul className="grid gap-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="HOME"/>
              <span className="text-base font-semibold md:block hidden whitespace-nowrap">HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <HiOutlineMenu className="w-14 h-6 md:mx-0 mx-auto" title="MENU"/>
              <span className="text-base font-semibold md:block hidden whitespace-nowrap">MENU</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <MdShoppingBag className="w-14 h-6 md:mx-0 mx-auto" title="SHOP"/>
              <span className="text-base font-semibold md:block hidden whitespace-nowrap">SHOP</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <MdEmail className="w-14 h-6 md:mx-0 mx-auto" title="CONTACT"/>
              <span className="text-base font-semibold md:block hidden whitespace-nowrap">CONTACT</span>
            </NavLink>
          </li>
          
        </ul>
      </nav>
    );
};

export default GeneralNavItems;