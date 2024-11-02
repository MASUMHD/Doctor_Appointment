import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = UseAuth();
  const axiosPublic = useAxiosPublic();

  // Navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handelSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result.user) {
          navigate(from);
        }

        // Create user info object with profile picture
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          profilePicture: result.user?.photoURL, // Store profile picture URL
        };

        // Store user in the database
        axiosPublic.post('/users', userInfo).then((res) => {
          console.log(res.data);
        });

        // Success notification
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error logging in with Google:", error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      <button
        onClick={() => handelSocialLogin(googleLogin)}
        className="w-full btn btn-outline btn-info text-xl"
      >
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
