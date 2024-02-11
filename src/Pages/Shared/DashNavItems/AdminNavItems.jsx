import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="flex flex-col justify-start md:gap-6 gap-4 ml-2">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaHome className="md:text-2xl text-base" title="ADMIN HOME" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                ADMIN HOME
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-items"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <ImSpoonKnife
                className="md:text-2xl text-base"
                title="ADD ITEMS"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                ADD ITEMS
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-items"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaList
                className="md:text-2xl text-base"
                title="MANAGE ITEMS"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                MANAGE ITEMS
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-bookings"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaBook
                className="md:text-2xl text-base"
                title="MANAGE BOOKINGS"
              />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                MANAGE BOOKINGS
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-users"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaUsers className="md:text-2xl text-base" title="ALL USERS" />
              <span className="md:text-base text-xs font-semibold whitespace-nowrap">
                ALL USERS
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavItems;
