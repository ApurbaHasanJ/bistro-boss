import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import useMenu from "../../../../hooks/useMenu";
import useUsers from "../../../../hooks/useUsers";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminHeroInfo = () => {
  const [menus] = useMenu();
  const [users] = useUsers();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pay-history/admin").then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  }, []);

  const totalRevenue = orders.reduce((total, order) => {
    const price = parseFloat(order.totalPrice);
    return total + price;
  }, 0);
  // console.log("Total Revenue:", totalRevenue);

  return (
    <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center text-white mt-6 items-center">
      <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
        <FaWallet className="w-12 h-12" title="Wallet" />

        <div>
          <h1 className="text-3xl ">{totalRevenue}</h1>
          <p className="text-xl capitalize">Revenue</p>
        </div>
      </div>
      <div className="from-[#D3A256] bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
        <FaUsers className="w-12 h-12" title="Customers" />
        <div>
          <h1 className="text-3xl ">{users?.length}</h1>
          <p className="text-xl capitalize">Customers</p>
        </div>
      </div>
      <div className="from-[#FE4880] bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#FECDE9]  rounded-lg">
        <SiCodechef className="w-12 h-12" title="Products" />
        <div>
          <h1 className="text-3xl ">{menus?.length}</h1>
          <p className="text-xl capitalize">products</p>
        </div>
      </div>
      <div className="from-[#6AAEFF] bg-gradient-to-r w-full h-[150px] px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#B6F7FF]  rounded-lg">
        <FaTruck className="w-12 h-12" title="Orders" />
        <div>
          <h1 className="text-3xl ">{orders?.length}</h1>
          <p className="text-xl capitalize">Orders</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHeroInfo;
