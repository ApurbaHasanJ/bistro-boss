import { TbEdit } from "react-icons/tb";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";

const ManageItems = () => {
  return (
    <div className="pt-12  min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"MANAGE ALL ITEMS"} subTitle={"---Hurry Up!---"} />

      {/* table */}
      <div className="my-container mt-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: 6
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8 font-semibold">#</th>
                <th scope="col" className="px-6 py-3">
                  ITEM IMAGE
                </th>
                <th scope="col" className="px-6 py-3">
                  ITEM NAME
                </th>

                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8 font-semibold">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Apple MacBook Pro 17
                </th>

                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 my-3">
                  <TbEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4 my-3">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8 font-semibold">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Microsoft Surface Pro
                </th>

                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 my-3 ">
                  <TbEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4 my-3">
                  <MdDeleteForever className="bg-red-600 hover:bg-red-700 p-1 rounded-md text-white text-[32px]" />
                </td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8 font-semibold">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <img src="#" alt="" />
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Magic Mouse 2
                </th>

                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4 my-3 ">
                  <TbEdit className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]" />
                </td>
                <td className="flex items-center px-6 py-4 my-3">
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

export default ManageItems;
