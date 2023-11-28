import { FaCalendarAlt, FaStar, FaWallet } from "react-icons/fa";
import { FaCartShopping, FaPhone, FaShop } from "react-icons/fa6";

const UserHome = () => {
  return (
    <div className="my-container min-h-screen mt-8">
      <h2 className="md:text-3xl text-2xl font-semibold font-[Cinzel] whitespace-nowrap">
        HI, WELCOME BACK!
      </h2>
      <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 justify-center text-white mt-6 items-center">
        <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full h-[150px] px-7 flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
          <FaWallet className="w-12 h-12 md:mx-0 mx-auto" title="Wallet" />
          <div>
            <h1 className="text-3xl font-semibold">1000</h1>
            <p className="text-xl">MENU</p>
          </div>
        </div>
        <div className="from-[#D3A256] bg-gradient-to-r w-full h-[150px] px-7 flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
          <FaShop className="w-12 h-12 md:mx-0 mx-auto" title="Customers" />
          <div>
            <h1 className="text-3xl font-semibold">1500</h1>
            <p className="text-xl">SHOP</p>
          </div>
        </div>
        <div className="from-[#FE4880] bg-gradient-to-r w-full h-[150px] px-7 flex  gap-4 justify-center items-center to-[#FECDE9]  rounded-lg">
          <FaPhone className="w-12 h-12 md:mx-0 mx-auto" title="Products" />
          <div>
            <h1 className="text-3xl font-semibold">1500</h1>
            <p className="text-xl">CONTACT</p>
          </div>
        </div>
      </div>

      {/* user profile */}
      <div className="grid md:grid-cols-2 items-center justify-start mt-8 font-[Cinzel]">
        <div className="bg-[#FFEDD5] grid justify-center items-center p-10 border-[#D1A054] border-r-2">
          <div className="bg-white border-2 border-[#D1A054] mx-auto w-[200px] h-[200px] rounded-full"></div>
          <p className="mt-11 text-center font-semibold md:text-3xl text-2xl font-[Cinzel] whitespace-nowrap">
            Apurba Hasan J
          </p>
        </div>
        {/* user activities */}
        <div className="bg-[#FEF9C3] h-full p-10 border-[#D1A054] border-l-2">
          <div className="pl-20">
            <h2 className="md:text-3xl text-2xl  font-semibold  font-[Cinzel] whitespace-nowrap">
              Your Activities
            </h2>
            <ul className="mt-8 flex flex-col gap-2">
              <li className="flex items-center gap-3 text-[#0088FE]">
                <FaCartShopping className="text-2xl" />
                <span className="text-xl font-semibold">Orders: 6</span>
              </li>
              <li className="flex items-center gap-3 text-[#00C4A1]">
                <FaStar className="text-2xl" />
                <span className="text-xl font-semibold">Reviews: 2</span>
              </li>
              <li className="flex items-center gap-3 text-[#FFBB28]">
                <FaCalendarAlt className="text-2xl" />
                <span className="text-xl font-semibold">Bookings: 1</span>
              </li>
              <li className="flex items-center gap-3 text-[#FF8042]">
                <FaWallet className="text-2xl" />
                <span className="text-xl font-semibold">Payment:3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
