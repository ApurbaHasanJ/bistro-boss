import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../../../hooks/useCarts";

const UserNavItems = () => {
  const [carts] = useCart();
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="flex flex-col md:gap-6 gap-4 items-start ml-2">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaHome className="md:text-2xl text-base" title="USER HOME" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                USER HOME
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/reservation"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaCalendarAlt
                className="md:text-2xl text-base"
                title="RESERVATION"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                RESERVATION
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaWallet
                className="md:text-2xl text-base"
                title="PAYMENT HISTORY"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                PAYMENT HISTORY
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-carts"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <div className="relative whitespace-nowrap">
                <FaCartShopping
                  className="md:text-2xl text-base"
                  title="MY CART"
                />
                <span className="absolute inline-flex items-center justify-center px-[2px] text-xs font-bold text-white bg-red-600 border border-white rounded-full -top-2 -end-2 ">
                  {carts?.length || 0}
                </span>
              </div>
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                MY CART
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-bookings"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaCalendarCheck
                className="md:text-2xl text-base"
                title="MY BOOKINGS"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                MY BOOKINGS
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-review"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <MdReviews
                className="md:text-2xl text-base"
                title="ADD REVIEWS"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                ADD REVIEWS
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavItems;
