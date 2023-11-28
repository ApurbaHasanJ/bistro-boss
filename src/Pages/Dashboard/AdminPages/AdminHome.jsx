import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const AdminHome = () => {
  return (
    <div className="my-container min-h-screen  mt-8">
      <h2 className="md:text-3xl text-2xl font-semibold font-[Cinzel] whitespace-nowrap">
        HI, WELCOME BACK!
      </h2>
      <div className="grid gap-5 md:grid-cols-4 sm:grid-cols-2 justify-center text-white mt-6 items-center">
        <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full h-[150px] flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
          <FaWallet className="w-12 h-12 md:mx-0 mx-auto" title="Wallet" />

          <div>
            <h1 className="text-3xl ">1000</h1>
            <p className="text-xl">products</p>
          </div>
        </div>
        <div className="from-[#D3A256] bg-gradient-to-r w-full h-[150px] flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
          <FaUsers className="w-12 h-12 md:mx-0 mx-auto" title="Customers" />
          <div>
            <h1 className="text-3xl ">1500</h1>
            <p className="text-xl">products</p>
          </div>
        </div>
        <div className="from-[#FE4880] bg-gradient-to-r w-full h-[150px] flex  gap-4 justify-center items-center to-[#FECDE9]  rounded-lg">
          <SiCodechef className="w-12 h-12 md:mx-0 mx-auto" title="Products" />
          <div>
            <h1 className="text-3xl ">1500</h1>
            <p className="text-xl">products</p>
          </div>
        </div>
        <div className="from-[#6AAEFF] bg-gradient-to-r w-full h-[150px] flex  gap-4 justify-center items-center to-[#B6F7FF]  rounded-lg">
          <FaTruck className="w-12 h-12 md:mx-0 mx-auto" title="Orders" />
          <div>
            <h1 className="text-3xl ">1500</h1>
            <p className="text-xl">products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
