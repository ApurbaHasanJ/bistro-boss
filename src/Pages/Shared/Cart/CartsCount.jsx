import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
const CartsCount = () => {
  const [carts, ,] = useCarts();

  return (
    <>
      <div>
        <Link
          to="/dashboard/my-carts"
          className="text-lg flex duration-500 text-white hover:text-slate-900 relative justify-center items-center gap-1">
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
