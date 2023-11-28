import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  return (
    <div className="my-container pt-8 min-h-screen bg-[#F6F6F6]">
      <SectionTitle title={"PAYMENT HISTORY"} subTitle={"---At A Glance!---"} />

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
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Order
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $71.5
                </th>
                <td className="px-6 py-4">12/12/20 10:30am</td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Order
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $71.5
                </th>

                <td className="px-6 py-4">12/12/20 10:30am</td>
              </tr>
              <tr className="bg-white border-b py-10 hover:bg-gray-50 ">
                <td className="w-4 p-8">apurbahasanj@gmail.com</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  Food Order
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $71.5
                </th>
                <td className="px-6 py-4">12/12/20 10:30am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
