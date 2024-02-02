import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";
import { loadStripe } from "@stripe/stripe-js";

const MyCarts = () => {
  const [carts, refetch, cartsLoading] = useCarts();
  // calculating total price

  if (cartsLoading) {
    return;
  }

  const totalPrice = carts.reduce((total, cart) => total + cart?.price, 0);

  // handle delete from cart
  const handleDeleteItem = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${cart?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Item deleted successfully",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // stripe payment integration for item
  const handleMakePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OewvnFpHUUs9w8URcOP9gVZ6RYoiehU9ZFvU3mClWSe22TTXUJKB3VTyfWgnJVD04p20CgbG1slCTOz9wcRqhvt00529Ts0cv"
    );

    const body = {
      items: carts,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
 
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if(result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="py-8  min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"WANNA ADD MORE?"} subTitle={"---My Cart!---"} />

      {/* table */}
      <div className="mt-20 my-container">
        <div className="md:flex grid items-center justify-between">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Items: {carts?.length}
          </h2>
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            total price: ${totalPrice}
          </h2>
          <button
            onClick={handleMakePayment}
            className="bg-[#D1A054] hover:bg-[#b97c20] text-white shadow-lg hover:shadow-2xl mb-3 py-2 px-5 rounded-lg text-base font-semibold font-[Cinzel]">
            PAY
          </button>
        </div>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8 text-base">
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
              </tr>
            </thead>
            <tbody className=" ">
              {carts.map((cart, index) => (
                <tr
                  key={cart?._id}
                  className="bg-white border-b py-10 hover:bg-gray-50 ">
                  <td className="w-4 p-8">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    <img
                      className="md:w-32 md:h-full object-cover h-16 w-24"
                      src={cart?.image}
                      alt={cart?.name}
                    />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {cart?.name}
                  </th>

                  <td className="px-6 py-4">${cart?.price}</td>

                  <td className=" px-6 py-4 h-full">
                    <MdDeleteForever
                      onClick={() => handleDeleteItem(cart)}
                      className="bg-red-600 hover:bg-red-700 text-center  p-1 rounded-md text-white text-[32px]"
                    />
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

export default MyCarts;
