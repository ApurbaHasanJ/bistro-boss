import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUserEdit } from "react-icons/fa";

const ManageUsers = () => {
  return (
    <section className="my-container mt-8 min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"MANAGE ALL USERS"} subTitle={"---How Many!?---"} />

      {/* table */}
      <div className="md:mx-28 mx-12 mt-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: 6
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8"></th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apurba
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  apurbahasanj@gmail.com
                </th>
                <td className="px-6 py-4 ">
                  <FaUserEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apurba
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  apurbahasanj@gmail.com
                </th>

                <td className="px-6 py-4 ">
                  <FaUserEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8"></td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apurba
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  apurbahasanj@gmail.com
                </th>

                <td className="px-6 py-4 ">
                  <FaUserEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageUsers;
