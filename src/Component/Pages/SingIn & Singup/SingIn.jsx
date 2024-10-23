import { Link } from "react-router-dom";
import BackgroundImg from "../../../../public/image/Frame.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // switch alert ................................................................
    Swal.fire({
      title: "Login Successful!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* Left Side with Image and Background */}
      <div className="w-full lg:w-1/2 bg-[#07332F] flex justify-center items-center  relative">
        <div className="">
          <img
            src={BackgroundImg}
            alt="Background"
            className=" object-cover w-full h-1/2 p-10"
          />
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-3 lg:p-0 ">
        <div className="w-full max-w-md p-12 bg-white rounded-xl shadow-xl border">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
            Sign in to Doc House
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700  mb-2">
                Username or Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                placeholder="Enter your username or email"
                aria-label="Email"
                {...register("email")}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <div className="text-right">
                  <Link to="" className="text-sm text-[#F7A582]">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                placeholder="Enter your password"
                aria-label="Password"
                {...register("password")}
              />
            </div>

            <input
              type="submit"
              value="Create Account"
              className="w-full bg-[#F7A582] text-white py-2 rounded-md hover:bg-[#e6906b] transition duration-300"
            />
          </form>

          {/* Social Login */}
          <div className=" items-center justify-center">
            <p className="text-xl text-gray-600 font-semibold mt-2 mb-2 text-center">
              Social Login
            </p>
            <div>
              <SocialLogin />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Please register at first. Go to{" "}
              <Link to="/singUp" className="text-[#F7A582] hover:underline">
                SIGN UP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
