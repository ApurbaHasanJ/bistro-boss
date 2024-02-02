import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="flex flex-col justify-start md:gap-6 gap-4 ">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaHome className="w-14 h-6" title="ADMIN HOME" />
              <span className="text-base font-semibold whitespace-nowrap">
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
                className="w-14 h-6"
                title="ADD ITEMS"
              />
              <span className="text-base font-semibold whitespace-nowrap">
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
                className="w-14 h-6"
                title="MANAGE ITEMS"
              />
              <span className="text-base font-semibold whitespace-nowrap">
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
                className="w-14 h-6"
                title="MANAGE BOOKINGS"
              />
              <span className="text-base font-semibold whitespace-nowrap">
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
              <FaUsers className="w-14 h-6" title="ALL USERS" />
              <span className="text-base font-semibold whitespace-nowrap">
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
