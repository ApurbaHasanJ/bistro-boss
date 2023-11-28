import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaCommentAlt,
  FaHome,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const UserNavItems = () => {
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="grid gap-6 ">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="USER HOME" />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              USER HOME
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reservation"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaCalendarAlt
              className="w-14 h-6 md:mx-0 mx-auto"
              title="RESERVATION"
            />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              RESERVATION
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaWallet
              className="w-14 h-6 md:mx-0 mx-auto"
              title="PAYMENT HISTORY"
            />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              PAYMENT HISTORY
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-cart"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaCartShopping
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MY CART"
            />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              MY CART
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/customer-feedback"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaCommentAlt
              className="w-14 h-6 md:mx-0 mx-auto"
              title="ADD REVIEWS"
            />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              ADD REVIEWS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-bookings"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaCalendarCheck
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MY BOOKINGS"
            />
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">
              MY BOOKINGS
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavItems;
