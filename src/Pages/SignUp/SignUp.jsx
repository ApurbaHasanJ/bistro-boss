import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialSignup from "../Shared/SocialSignup/SocialSignup";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  // show password
  const [show, setShow] = useState(false);

  // get auth Context
  const { createUser, userProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password } = data;
    // console.log(name, email, password);

    // create user functions
    createUser(email, password)
      .then((userCredential) => {
        userProfile(name)
          .then(() => {
            const loggedUser = userCredential.user;
            console.log(loggedUser);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign Up Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "Error updating profile",
              text: "Please try again.",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error creating user",
          text: "Please try again.",
        });
      });
  };

  return (
    <div
      className="py-20 bg-transparent px-3 z-20"
      style={{
        backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
      }}>
      <div
        className="my-container shadow-xl"
        style={{
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}>
        <h3 className="text-xl lg:text-4xl md:text-2xl text-slate-900 text-center font-bold pt-5 mb-5">
          Sign Up
        </h3>
        <div className=" grid lg:grid-cols-2  my-7 mt-0 lg:my-16 items-center">
          {/* Login Img */}
          <div className="w-full flex justify-center">
            <img
              src="https://i.postimg.cc/rmvDGfWb/authentication2.png"
              alt=""
            />
          </div>
          <div className=" p-10 mx-3 lg:mx-0 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-3">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: /^[A-Za-z\s]+$/i,
                  })}
                  placeholder="Your name"
                  className="input hover:shadow-md input-bordered"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.name?.message ||
                      "Please enter a valid name using only letters."}
                  </p>
                )}
              </div>
              <div className="form-control mb-3">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Your email"
                  className="input hover:shadow-md input-bordered"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                    pattern: /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.*[A-Z]).{6,}$/i,
                  })}
                  className="input hover:shadow-md input-bordered"
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password"
                />
                {errors.password && (
                  <p role="alert" className="text-red-500 mt-2">
                    {errors.password?.message ||
                      "Password must be at least 6 characters long, contain at least one number, one special character, and one uppercase letter."}
                  </p>
                )}
              </div>
              <div className="form-control  my-3">
                <div className="flex items-center  mb-6">
                  <input
                    id="showPassword"
                    type="checkbox"
                    value={show}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300  "
                    onChange={(e) => setShow(e.target.checked)}
                  />
                  <label
                    htmlFor="showPassword"
                    className="ml-2 text-base font-medium text-slate-900 ">
                    Show password
                  </label>
                </div>
              </div>

              <div className="form-control mt-8">
                <input
                  // disabled={disabled}
                  type="submit"
                  value="Sign in"
                  className="btn rounded-md border-none text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]"
                />
              </div>
            </form>
            <h6 className="text-center my-4 text-[#D1A054]">
              New here?{" "}
              <Link to="/login" state={location.state}>
                <span className="  font-semibold hover:underline">
                  Create a New Account
                </span>
              </Link>
            </h6>
            <div className="flex justify-center items-center gap-5">
              <div className="border-b h-1 w-full border-gray-300"></div>
              <span className="text-xl">or</span>
              <div className="border-b h-1 w-full border-gray-300"></div>
            </div>
            <div className="form-control  mt-4">
              <SocialSignup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
