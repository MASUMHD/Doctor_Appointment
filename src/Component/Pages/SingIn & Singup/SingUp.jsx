import { Link, useLocation, useNavigate } from "react-router-dom";
import BackgroundImg from "../../../../public/image/Frame.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";


const SingUp = () => {
  const { createUser } = UseAuth();
  const [passwordError, setPasswordError] = useState("");

  const { register, handleSubmit } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const onSubmit = (data) => {
    // console.log(data);

    const { email, password } = data;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }

        // sweet alert

        let timerInterval;
        Swal.fire({
          title: "User created successfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        setPasswordError(error.message);
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
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-7">
            Sign Up to Doc House
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700  mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                placeholder="Enter your name"
                aria-label="name"
                required
                {...register("name")}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700  mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                placeholder="Enter your username"
                aria-label="username"
                required
                {...register("username")}
              />
            </div>
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
                required
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
                required
                {...register("password")}
              />
            </div>

            <input
              type="submit"
              value="Create Account"
              className="w-full bg-[#F7A582] text-white py-2 rounded-md hover:bg-[#e6906b] transition duration-300"
            />

            {passwordError && (
              <p className="text-red-500 text-center mt-2 mb-2">{passwordError}</p>
            )}
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
              Already registered? Go to{" "}
              <Link to="/login" className="text-[#F7A582] hover:underline">
                SIGN IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
