import { Outlet } from "react-router-dom";
import AdminNavItems from "../../Pages/Shared/DashNavItems/AdminNavItems";
import GeneralNavItems from "../../Pages/Shared/DashNavItems/GeneralNavItems";
import UserNavItems from "../../Pages/Shared/DashNavItems/UserNavItems";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const[isAdmin, adminLoading]=useAdmin()
  // const isAdmin = true;
  // const adminLoading = false;

  const handleToggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className=" md:flex ">
      {/* Dashboard */}

      {/* sidebar for lg and md */}
      <div
        className={`bg-[#D1A054] ${
          adminLoading ? "-left-[400px]" : "left-0"
        } lg:block hidden pr-5 bg-fixed relative  w-[295px]  overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14`}>
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
          <div className="mt-16  w-full">
            {isAdmin ? <AdminNavItems /> : <UserNavItems />}
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </div>

      {/* Top bar for */}
      <nav className="bg-[#D1A054] py-4 md:hidden block ">
        {/* title for sm device */}
        <div className="flex justify-between items-center md:ml-4 mx-6">
          <div className="block md:hidden ">
            <h2 className="md:text-4xl text-2xl font-black font-[Cinzel] whitespace-nowrap">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
          {showDashboard ? (
            <button onClick={handleToggleDashboard}>
              <RxCross2 className="w-11 h-7  -mr-3" title="MENU" />
            </button>
          ) : (
            <button onClick={handleToggleDashboard}>
              <HiOutlineMenu className="w-11 h-7  -mr-3" title="MENU" />
            </button>
          )}
        </div>

        <div
          className={`fixed bg-[#D1A054] h-full pb-4 pr-2 ${
            showDashboard ? "left-0" : "-left-[400px]"
          } transform duration-700 shadow-2xl top-[89px] z-50`}>
          <div className=" pt-5 ">
            {isAdmin ? <AdminNavItems /> : <UserNavItems />}
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </nav>

      {/* all pages here */}
      <div className="w-full min-h-screen grid grid-cols-1 justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
