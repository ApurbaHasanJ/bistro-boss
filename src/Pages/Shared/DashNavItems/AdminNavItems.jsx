import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full">
      <ul className="grid gap-6 ">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="ADMIN HOME"/>
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">ADMIN HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-items"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <ImSpoonKnife className="w-14 h-6 md:mx-0 mx-auto" title="ADD ITEMS"/>
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">ADD ITEMS</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-items"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaList className="w-14 h-6 md:mx-0 mx-auto" title="MANAGE ITEMS"/>
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">MANAGE ITEMS</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-items"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaBook className="w-14 h-6 md:mx-0 mx-auto" title="MANAGE BOOKINGS"/>
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">MANAGE BOOKINGS</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaUsers className="w-14 h-6 md:mx-0 mx-auto" title="ALL USERS"/>
            <span className="text-base font-semibold md:block hidden whitespace-nowrap">ALL USERS</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavItems;
