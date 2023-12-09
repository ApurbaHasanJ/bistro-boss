import { Outlet } from "react-router-dom";
import AdminNavItems from "../../Pages/Shared/DashNavItems/AdminNavItems";
import GeneralNavItems from "../../Pages/Shared/DashNavItems/GeneralNavItems";
import UserNavItems from "../../Pages/Shared/DashNavItems/UserNavItems";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Dashboard = () => {
  let [showTopNav, setShowTopNav] = useState(false);
  const admin = true;

  const handleShowTopNav = () => {
    setShowTopNav(!showTopNav);
  };

  return (
    <div className=" md:flex ">
      {/* Dashboard */}

      {/* sidebar for lg and md */}
      <div className="bg-[#D1A054] md:block hidden pr-2 bg-fixed relative max-w-xs lg:min-w-[260px] w-[90px] h-auto mx-auto overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14 ">
        <div className=" fixed">
          {/* title for large device */}
          <div className=" lg:block hidden md:ml-4 mx-auto">
            <h2 className="md:text-4xl text-2xl font-black font-[Cinzel] whitespace-nowrap">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
          {/* logo for smaller device */}
          <div className="w-14 ml-3 lg:hidden block drop-shadow-2xl  rounded-2xl bg-white p-2">
            <img src="https://i.postimg.cc/1tTCNWFH/logo.png" alt="Logo" />
          </div>
          {/* Nav items for lg and md  */}
          <div className="mt-16  md:ml-2 w-full">
            {admin ? <AdminNavItems /> : <UserNavItems />}
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </div>

      {/* Top bar for */}
      <nav className="bg-[#D1A054] py-4 md:hidden block ">
        {/* title for sm device */}
        <div className="flex justify-between items-center">
          <div className="block md:hidden md:ml-4 mx-6">
            <h2 className="md:text-4xl text-2xl font-black font-[Cinzel] whitespace-nowrap">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
          <button onClick={handleShowTopNav}>
            <HiOutlineMenu className="w-14 h-7 md:mx-0 ml-auto" title="MENU" />
          </button>
        </div>
        {showTopNav && (
          <div className="flex justify-end">
            <div className="md: pt-5 ">
              {admin ? <AdminNavItems /> : <UserNavItems />}
            </div>
          </div>
        )}
      </nav>

      {/* all pages here */}
      <div className="w-full h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
