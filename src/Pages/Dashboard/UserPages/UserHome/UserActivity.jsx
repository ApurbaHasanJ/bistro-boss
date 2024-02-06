import { FaCalendarAlt, FaStar, FaWallet } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import usePayHistory from "../../../../hooks/usePayHistory";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import axios from "axios";
import useReservation from "../../../../hooks/useReservation";

const UserActivity = () => {
  const { payHistories } = usePayHistory();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { reservation } = useReservation();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/reviews/user/${user.email}`)
      .then((res) => {
        console.log(res.data);
        setReviews(res.data);
      });
  }, [user.email]);

  return (
    <div className="bg-[#FEF9C3] h-full p-10 border-[#D1A054] border-l-2">
      <div className="md:pl-20 pl-7">
        <h2 className="md:text-3xl text-2xl  font-semibold  font-[Cinzel] whitespace-nowrap">
          Your Activities
        </h2>
        <ul className="mt-8 flex flex-col gap-2">
          <li className="flex items-center gap-3 text-[#0088FE]">
            <FaCartShopping className="text-2xl" />
            <span className="text-xl font-semibold">
              Orders: {payHistories?.length}
            </span>
          </li>
          <li className="flex items-center gap-3 text-[#00C4A1]">
            <FaStar className="text-2xl" />
            <span className="text-xl font-semibold">
              Reviews: {reviews.length}
            </span>
          </li>
          <li className="flex items-center gap-3 text-[#FFBB28]">
            <FaCalendarAlt className="text-2xl" />
            <span className="text-xl font-semibold">
              Bookings: {reservation.length}
            </span>
          </li>
          <li className="flex items-center gap-3 text-[#FF8042]">
            <FaWallet className="text-2xl" />
            <span className="text-xl font-semibold">
              Payment: {payHistories?.length}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserActivity;
