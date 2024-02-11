import { TbEdit } from "react-icons/tb";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDeleteForever } from "react-icons/md";
import useMenu from "../../../hooks/useMenu";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateItem from "./UpdateItem";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menus, loading, refetch] = useMenu();
  const [item, setItem] = useState({});
  const [updating, setUpdating] = useState(false);

  const [axiosSecure] = useAxiosSecure();

  // handle update item details
  const handleUpdateItem = (item) => {
    setUpdating(!updating);
    setItem(item);
  };

  const handleDeleteItem = (menu) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`http://localhost:5000/menus/admin/${menu?._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="py-12 w-full min-h-screen bg-[#F6F6F6]">
      <div className=" w-full">
        {updating ? (
          <UpdateItem item={item} setUpdating={setUpdating} refetch={refetch} />
        ) : (
          <>
            <SectionTitle
              title={"MANAGE ALL ITEMS"}
              subTitle={"---Hurry Up!---"}
            />
            <div className="my-container">
              <h2 className="md:text-2xl mt-3 md:mb-1 uppercase font-semibold font-[Cinzel] whitespace-nowrap">
                Total Items: {menus?.length}
              </h2>
              <div className="relative overflow-x-auto shadow-md rounded-lg">
                {loading ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
                    <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
                      <tr>
                        <th scope="col" className="p-8 font-semibold">
                          #
                        </th>
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
                      {menus.map((menu, index) => (
                        <tr
                          key={menu?._id}
                          className="bg-white border-b py-10 hover:bg-gray-50 ">
                          <td className="w-4 p-8 font-semibold">{index + 1}</td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <img
                              className="md:w-32 md:h-full object-cover h-16 w-24"
                              src={menu?.image}
                              alt={menu?.name}
                              title={menu?.name}
                            />
                          </th>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {menu?.name}
                          </th>

                          <td className="px-6 py-4">${menu?.price}</td>
                          <td className="px-6 py-4 my-3">
                            <TbEdit
                              onClick={() => handleUpdateItem(menu)}
                              className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]"
                            />
                          </td>
                          <td className=" px-6 py-4 my-3">
                            <MdDeleteForever
                              onClick={() => handleDeleteItem(menu)}
                              className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageItems;
