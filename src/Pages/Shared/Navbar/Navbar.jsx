import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/"  className={({ isActive }) => (isActive ? "active" : "default")}>HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us"
         className={({ isActive }) => (isActive ? "active" : "default")}
         >CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard"
         className={({ isActive }) => (isActive ? "active" : "default")}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "default")}>OUR MENU</NavLink>
        
      </li>
      <li>
        <NavLink to="/shop/salad"
         className={({ isActive }) => (isActive ? "active" : "default")}>OUR SHOP</NavLink>
      </li>
    </>
  );
  return (
    <header className="navbar fixed z-10 bg-gray-900 bg-opacity-30 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            
            className=" dropdown-content mt-3 p-2 shadow  w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className=" normal-case text-xl">
          <div>
            <h2 className="text-3xl font-black font-serif">Bistro Boss</h2>
            <p className="">Restaurant</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn-card text-lg font-medium py-2 px-3">login</Link>
      </div>
    </header>
  );
};

export default Navbar;
