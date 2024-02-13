import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialSignup = () => {
  const { continueWithGoogle, continueWithFacebook, continueWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (signInFunction) => {
    return () => {
      signInFunction()
        .then((result) => {
          const loggedUser = result.user;
          // console.log(loggedUser);
          // take data to database
          const userData = {
            name: loggedUser?.displayName,
            email: loggedUser?.email,
            role: "user",
            emailVerified: loggedUser?.emailVerified,
            metadata: { ...loggedUser?.metadata },
          };
          fetch("https://bistro-boss-server-cyan-nu.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign in Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            });
        })
        .catch((error) => {
          console.log(error);
          const errorMessage = error.message.split('\n')[0]; // Get the first line of the error message
          Swal.fire({
            icon: "error",
            title: "Error login user",
            text: errorMessage,
          });
        });
    };
  };
  
  // Usage for login or sign up
  const handleGoogleSignIn = handleSignIn(continueWithGoogle);
  const handleGitHubSignIn = handleSignIn(continueWithGithub);
  const handleFacebookSignIn = handleSignIn(continueWithFacebook);
  

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
