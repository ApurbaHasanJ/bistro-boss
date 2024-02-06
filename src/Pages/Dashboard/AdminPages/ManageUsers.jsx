import { MdAdminPanelSettings, MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUserEdit } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, refetch] = useUsers();

  const handleUsersRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change his role!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "change!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is admin now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "change!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} deleted from the list`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  console.log(users);
  return (
    <section className=" pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"MANAGE ALL USERS"} subTitle={"---How Many!?---"} />

      {/* table */}
      <div className="my-container mt-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: {users?.length}
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
              {users &&
                users.map((user, index) => (
                  <tr
                    key={user?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {user?.name}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {user?.email}
                    </th>
                    <td className="px-6 py-4 ">
                      {user?.role === "user" && (
                        <FaUserEdit
                          title={user?.role}
                          onClick={() => handleUsersRole(user)}
                          className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]"
                        />
                      )}
                      {user?.role === "admin" && (
                        <MdAdminPanelSettings
                          onClick={() => handleUsersRole(user)}
                          title={"Admin role  can't be change"}
                          className="bg-[#D1A054] hover:bg-[#c8841f] p-1 rounded-md text-white text-[32px]"
                        />
                      )}
                    </td>
                    <td className=" px-6 py-4">
                      <MdDeleteForever
                        onClick={() => handleDeleteUser(user)}
                        className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageUsers;
