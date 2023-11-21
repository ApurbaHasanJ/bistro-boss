
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialSignup = () => {
    return (
        <div
                //   onClick={googleSignIn}
                className=" w-full  flex gap-8 justify-center items-center btn-sec">
                <div className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
                  <FaFacebookF className="w-6 h-6" />
                </div>
                <div className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
                  <BsGoogle className="w-6 h-6" />
                </div>
                <div className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
                  <BsGithub className="w-6 h-6" />
                </div>
              </div>
    );
};

export default SocialSignup;