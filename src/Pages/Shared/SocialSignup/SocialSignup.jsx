import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SocialSignup = () => {
  const { continueWithGoogle, continueWithFacebook, continueWithGithub } =
    useContext(AuthContext);

  // google sign up
  const handleGoogleSignIn = () => {
    continueWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error login user",
          text: "Please try again.",
        });
      });
  };

  // continue with github
  const handleGitHubSignIn = () => {
    continueWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error login user",
          text: "Please try again.",
        });
      });
  };

  // Continue with facebook login
  const handleFacebookSignIn = () => {
    continueWithFacebook()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error login user",
          text: "Please try again.",
        });
      });
  };

  return (
    <div className=" w-full  flex gap-8 justify-center items-center btn-sec">
      <button
        onClick={handleFacebookSignIn}
        className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
        <FaFacebookF className="w-6 h-6" />
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
        <BsGoogle className="w-6 h-6" />
      </button>
      <button
        onClick={handleGitHubSignIn}
        className="border-gray-700 p-2 hover:bg-[#d1a054b3] hover:text-white rounded-full border-2">
        <BsGithub className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialSignup;
