import { useRef } from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Layouts/AuthProvider";
import SocialSignup from "../Shared/SocialSignup/SocialSignup";

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const {signIn} = useContext(AuthContext)




// show password
  const [show, setShow] = useState(false);

  // login controls
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
  };


  const handleValidateCaptcha =()=>{
    const user_captcha_value = captchaRef.current.value
    // console.log(value);
    if(validateCaptcha(user_captcha_value)==true){
setDisabled(false)
    }
    else{
        setDisabled(true)
    }
    
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="py-20 bg-transparent z-20"
      style={{
        backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
      }}>
      <div
        className="my-container shadow-xl"
        style={{
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}>
        <h3 className="text-xl lg:text-4xl md:text-2xl text-slate-900 text-center font-bold pt-5 mb-5">
          Login
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
            <form onSubmit={handleLogin}>
              <div className="form-control mb-3">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="input hover:shadow-md input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label text-base font-medium text-slate-900 ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input hover:shadow-md input-bordered"
                  required
                  placeholder="Password"
                />
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
                    className="ml-2 text-base font-medium text-slate-900 "
                  >
                    Show password
                  </label>
                </div>
                <div className="form-control mb-3">
                  <LoadCanvasTemplate />
                </div>
                <div className="form-control mb-3">
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}

                    required
                    placeholder="Type here..."
                    className="input hover:shadow-md input-bordered"
                  />
                </div>
                
                <button
                onClick={handleValidateCaptcha}
                className="btn  btn-outline w-2/12 btn-xs text-[#d1a054b3] border-[#d1a054b3] hover:bg-[#d1a054b3] hover:border-[#d1a054b3]">Validate</button>
              </div>

              <div className="form-control mt-8">
                <input
                disabled={disabled}
                  type="submit"
                  value="Sign in"
                  className="btn rounded-md border-none text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]"
                />
              </div>
            </form>
            <h6 className="text-center my-4 text-[#D1A054]">
              New here?{" "}
              <Link to="/register" state={location.state}>
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
              <SocialSignup/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
