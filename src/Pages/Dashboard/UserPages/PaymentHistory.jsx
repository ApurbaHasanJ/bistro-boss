import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  // const [data, loading, refetch] = useMenu();
  // console.log(data);

  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pay-history/user/${user?.email}`)
      .then((res) => {
        setPaymentHistory(res.data);
      });
  }, [user?.email]);
  console.log(paymentHistory);

  return (
    <div className=" pt-12 min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"PAYMENT HISTORY"} subTitle={"---At A Glance!---"} />

      {/* table */}
      <div className="mt-20 my-container">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Items: {paymentHistory?.length}
        </h2>
        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
            <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
              <tr>
                <th scope="col" className="p-8">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory?.map((history) => (
                <tr
                  key={history?._id}
                  className="bg-white border-b py-10 hover:bg-gray-50 ">
                  <td className="w-4 p-8">{history?.userEmail}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Food Order
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap ">
                    ${history?.totalPrice}
                  </th>
                  <td className="px-6 py-4">{history?.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
