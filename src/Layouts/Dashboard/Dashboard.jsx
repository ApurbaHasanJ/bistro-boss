import { Outlet } from "react-router-dom";
import AdminNavItems from "../../Pages/Shared/DashNavItems/AdminNavItems";
import GeneralNavItems from "../../Pages/Shared/DashNavItems/GeneralNavItems";

const Dashboard = () => {
  return (
    <div className=" flex ">
      {/* Dashboard */}
      <div className="bg-[#D1A054]  relative max-w-xs md:w-3/12 w-24 h-auto mx-auto overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14 ">
        <div className="fixed md:left-2 left-3 ">
          {/* title for large device */}
          <div className=" md:block hidden md:ml-4 mx-auto">
            <h2 className="md:text-4xl text-2xl font-black font-[Cinzel] whitespace-nowrap">
              Bistro Boss
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Restaurant
            </p>
          </div>
          {/* logo for smaller device */}
          <div className="w-14 mx-auto md:hidden block drop-shadow-2xl  rounded-2xl bg-white p-2">
            <img src="https://i.postimg.cc/1tTCNWFH/logo.png" alt="Logo" />
          </div>
          {/* Nav items  */}
          <div className="mt-16  md:ml-2 w-full">
            <AdminNavItems />
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </div>

      {/* all pages here */}
      <div className="w-full h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
