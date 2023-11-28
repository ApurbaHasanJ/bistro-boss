import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDone } from "react-icons/md";

const ManageBookings = () => {
  return (
    <section className="pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle
        title={"MANAGE ALL BOOKINGS"}
        subTitle={"---At A Glance!---"}
      />

      {/* table */}
      <div className="md:mx-28 mx-12 mt-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: 6
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8">
                  User Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Booking Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Booking Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Activity
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  +8801884167824
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  12/12/20
                </th>
                <td className="px-6 py-4">10:30am</td>
                <td className="px-6 py-4 ">
                  <div className="text-[#D1A054] font-semibold">Pending</div>
                </td>
                <td className="flex items-center px-6 py-4">
                  <div className="h-full flex justify-center items-center my-3">
                    <MdDone className="bg-[#80E2B7] p-1 rounded-full text-white text-3xl" />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  +8801884167824
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  12/12/20
                </th>

                <td className="px-6 py-4">10:30am</td>
                <td className="px-6 py-4 ">
                  <div className="text-[#D1A054] font-semibold">Pending</div>
                </td>
                <td className="flex items-center px-6 py-4">
                  <div className="h-full flex justify-center items-center my-3">
                    <MdDone className="bg-[#80E2B7] p-1 rounded-full text-white text-3xl" />
                  </div>
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  +8801884167824
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  12/12/20
                </th>
                <td className="px-6 py-4">10:30am</td>
                <td className="px-6 py-4 ">
                  <div className="text-[#D1A054] font-semibold">Pending</div>
                </td>
                <td className="flex items-center px-6 py-4">
                  <div className="h-full flex justify-center items-center my-3">
                    <MdDone className="bg-[#80E2B7] p-1 rounded-full text-white text-3xl" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageBookings;
