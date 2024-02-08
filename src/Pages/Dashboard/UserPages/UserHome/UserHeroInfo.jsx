import { FaPhone, FaShop } from "react-icons/fa6";
import useMenu from "../../../../hooks/useMenu";
import { MdOutlineMenuBook } from "react-icons/md";

const UserHeroInfo = () => {
  const [menus, ,] = useMenu();
  return (
    <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center text-white mt-6 items-center">
      <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full h-[150px] px-7 flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
        <MdOutlineMenuBook
          className="text-5xl"
          title="Wallet"
        />
        <div>
          <h1 className="text-3xl font-semibold">{menus?.length}</h1>
          <p className="text-xl">MENU</p>
        </div>
      </div>
      <div className="from-[#D3A256] bg-gradient-to-r w-full h-[150px] px-7 flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
        <FaShop className="text-5xl" title="Customers" />
        <div>
          <h1 className="text-3xl font-semibold">400</h1>
          <p className="text-xl">SHOP</p>
        </div>
      </div>
      <div className="from-[#FE4880] bg-gradient-to-r w-full h-[150px] px-7 flex  gap-4 justify-center items-center to-[#FECDE9]  rounded-lg">
        <FaPhone className="text-[40px]" title="Products" />
        <div>
          <h1 className="text-3xl font-semibold">18</h1>
          <p className="text-xl">CONTACT</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeroInfo;
