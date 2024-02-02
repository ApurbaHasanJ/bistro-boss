// import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
// import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
// import { SideCartContext } from "../../Providers/SideCartProvider";
const CartsCount = () => {
  const [carts, ,] = useCarts();

  return (
    <>
      <div>
        <button
          //   onClick={() => setSideCart(!sideCart)}
          className="text-lg duration-500 text-white hover:text-slate-900 relative md:hidden flex justify-center items-center gap-1">
          <FaCartShopping className="text-2xl " />
          <span className="absolute rounded-full text-sm -left-5 -top-1 px-1 py-[.5px] text-white text-center bg-slate-900">
            {carts.length}
          </span>
        </button>
        <Link
          to="dashboard/my-carts"
          className="text-lg md:flex hidden duration-500 text-white hover:text-slate-900 relative justify-center items-center gap-1">
          <FaCartShopping className="text-2xl " />
          <span className="absolute rounded-full text-sm -left-5 -top-1 px-1 py-[.5px] text-white text-center bg-slate-900">
            {carts.length}
          </span>
        </Link>
      </div>
    </>
  );
};

export default CartsCount;
