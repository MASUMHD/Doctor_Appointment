import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = UseAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocialLogin = async (socialProvider) => {
    try {
      const result = await socialProvider();

      if (result.user) {
        const userEmail = result.user.email;
        
        // Check if user already exists
        const existingUserResponse = await axiosPublic.get(`/users?email=${userEmail}`);
        
        if (existingUserResponse.data.length === 0) {
          // If user doesn't exist, add to database
          const userInfo = {
            name: result.user.displayName,
            email: userEmail,
            profilePicture: result.user.photoURL,
            role: "user",
          };

          await axiosPublic.post('/users', userInfo);
        }

        // Redirect and show success message
        navigate(from);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Login Failed",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      <button
        onClick={() => handleSocialLogin(googleLogin)}
        className="w-full btn btn-outline btn-info text-xl"
      >
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
