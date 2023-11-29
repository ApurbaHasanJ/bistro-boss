import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyBookings = () => {
  return (
    <div className="pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle
        title={"MY BOOKINGS"}
        subTitle={"---Excellent Ambience---"}
      />

      {/* table */}
      <div className="my-container mt-20">
        <div className="md:flex grid items-center justify-between">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Items: 6
          </h2>
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            total price: $88.2
          </h2>
          <button className="bg-[#D1A054] hover:bg-[#b97c20] text-white shadow-lg hover:shadow-2xl mb-3 py-3 px-5 rounded-lg text-lg font-semibold font-[Cinzel]">
            PAY
          </button>
        </div>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8 text-base">#</th>
                <th scope="col" className="px-6 py-3">
                  ITEM IMAGE
                </th>
                <th scope="col" className="px-6 py-3">
                  Guest Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>

                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>

                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  5 Guests
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Category
                </th>
                <td className="px-6 py-4">$2999</td>

                <td className="flex items-center px-6 my-3 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  5 Guests
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Category
                </th>

                <td className="px-6 py-4">$1999</td>

                <td className="flex items-center px-6 my-3 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  5 Guests
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Category
                </th>
                <td className="px-6 py-4">$99</td>

                <td className="flex items-center px-6 my-3 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
