import { useEffect, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    // Clear the timeout when the component unmounts or when showPopup changes
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="bg-[#af8626] md:text-sm text-xs w-fit px-4 object-cover mx-auto shadow-md z-[1000000000000] rounded-md transition-all duration-300 relative">
          <span
            className="absolute -top-3 -right-0 text-white hover:text-slate-950 cursor-pointer text-3xl transition-all duration-300"
            onClick={closePopup}>
            &times;
          </span>
          <p className="text-center mt-7 text-slate-950">
            🎉 Login As Admin <br />
            Email: <strong>admin@gmail.com</strong>
            <br />
            Pass: <strong>Aa@000</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default Popup;
