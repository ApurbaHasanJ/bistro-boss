import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { MdDone } from "react-icons/md";
import Swal from "sweetalert2";
import useAdminReservations from "../../../hooks/useAdminReservations";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageBookings = () => {
  // const [reservations, setReservations] = useState();
  const { reservations, refetch } = useAdminReservations();
  console.log(reservations);

  const [axiosSecure] = useAxiosSecure();

  // get all bookings

  const handleBookingActivity = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change this activity!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "change!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`https://bistro-boss-server-cyan-nu.vercel.app/reservation/admin/${id}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Activity updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              // Handle unexpected response status
              Swal.fire({
                icon: "error",
                title: "Update failed",
                text: "Unable to update activity. Please try again later.",
              });
            }
          })
          .catch((error) => {
            // Handle error scenarios
            console.error("Error updating activity:", error);
            Swal.fire({
              icon: "error",
              title: "Update failed",
              text: "An error occurred while updating activity. Please try again later.",
            });
          });
      }
    });
  };

  return (
    <section className=" pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle
        title={"MANAGE ALL BOOKINGS"}
        subTitle={"---At A Glance!---"}
      />

      {/* table */}
      <div className="my-container ">
        <h2 className="md:text-2xl mt-3 md:mb-1 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: {reservations?.length}
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8">
                  User
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
              {reservations &&
                reservations.map((reservation) => (
                  <tr
                    key={reservation?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8">
                      {reservation?.email}
                      <br />
                      {reservation?.phone}
                    </td>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {reservation?.date}
                    </th>
                    <td className="px-6 py-4">{reservation?.time}</td>
                    <td className="px-6 py-4 ">
                      <div className="text-[#D1A054] capitalize font-semibold">
                        {reservation?.activity || "Pending"}
                      </div>
                    </td>
                    <td className="flex items-center px-6 py-4">
                      <div className="h-full flex justify-center items-center my-3">
                        <MdDone
                          onClick={() =>
                            handleBookingActivity(reservation?._id)
                          }
                          className={`${
                            !reservation?.activity ||
                            reservation?.activity === "pending"
                              ? "bg-[#80E2B7] hover:bg-green-500"
                              : "bg-green-500 hover:bg-[#80E2B7]"
                          } p-1 rounded-full text-white text-3xl`}
                        />
                      </div>
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

export default ManageBookings;
