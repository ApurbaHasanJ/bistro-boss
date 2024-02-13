import { FaUserLarge } from "react-icons/fa6";

import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UserDropdown from "./UserDropdown";

const UserAccount = () => {
  const { user } = useContext(AuthContext);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleToggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <>
      <div className="ml-auto z-50 flex items-center justify-center gap-3">
        <div className="relative">
          <div
            onClick={handleToggleDropDown}
            className=" z-50 items-center flex md:flex-row flex-col gap-2 duration-300 text-white hover:text-[#EEFF25] rounded-full">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-8 h-8 rounded-full ring ring-white dark:ring-gray-500"
                alt={user?.displayName}
              />
            ) : (
              <div className="">
                <FaUserLarge
                  className={`${user ? "text-[22px]" : "text-lg"}`}
                  title={user?.displayName}
                />
              </div>
            )}
            <div className="">{!user && <p>Login</p>}</div>
          </div>
          {showDropDown && (
            <div className="absolute right-0 z-40 md:top-14 top-[62px]">
              <UserDropdown handleToggleDropDown={handleToggleDropDown} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
