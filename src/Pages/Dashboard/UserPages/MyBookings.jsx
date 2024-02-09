import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios(`http://localhost:5000/reservation/user/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setReservations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
      });
  }, [user?.email]);

  return (
    <div className="pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle
        title={"MY BOOKINGS"}
        subTitle={"---Excellent Ambience---"}
      />

      {/* table */}
      <div className="my-container md:my-6 mt-3">
        <div className="md:flex grid items-center justify-between">
          <h2 className="md:text-2xl mb-3 uppercase font-semibold font-[Cinzel] whitespace-nowrap">
            Total Bookings: {reservations?.length}
          </h2>
        </div>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8 text-base">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  CONTACT
                </th>
                <th scope="col" className="px-6 py-3">
                  DATE
                </th>

                <th scope="col" className="px-6 py-3">
                  GUEST NUMBER
                </th>

                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {reservations &&
                reservations.map((reservation, index) => (
                  <tr
                    key={reservation?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {reservation?.name}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      <div>
                        {reservation?.phone}
                        <br />
                        {reservation?.email}
                      </div>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      <div>
                        {reservation?.date}
                        <br />
                        {reservation?.time}
                      </div>
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {reservation?.guests} Guests
                    </td>

                    <td className="flex items-center px-6 my-3 py-4">
                      <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
