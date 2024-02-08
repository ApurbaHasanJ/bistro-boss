import Lottie from "react-lottie";
import error from "/src/assets/payment/error";
import { Link } from "react-router-dom";

const PaymentError = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="shadow-xl p-8 md:w-2/5 mx-5 bg-[#D1A054] rounded-lg">
        <h3 className="text-gray-800 text-center text-2xl md:text-4xl font-bold mb-6">
          Payment Error
        </h3>
        <div className="h-44 w-44 -mt-10 mx-auto">
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
        <p className="text-gray-600 text-center mt-4">
          Oops! Something went wrong with your payment. Please try again later.
        </p>
      </div>
      <button className="mt-6 btn-card font-bold py-2 px-4 rounded-full">
        <Link to="/shop">Continue Shopping</Link>
      </button>
    </section>
  );
};

export default PaymentError;
