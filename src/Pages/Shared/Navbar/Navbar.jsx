import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          SIGN UP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          LOGIN
        </NavLink>
      </li>
    </>
  );
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
        <ul className="flex gap-4 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
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
          <ul className=" dropdown-content mt-5 right-0 p-2 shadow bg-opacity-30 grid gap-2 bg-gray-900">
            {navItems}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
