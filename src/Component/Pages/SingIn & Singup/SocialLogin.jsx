import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <>
        <button className="w-full btn btn-outline btn-info  text-xl">
          <FaGoogle />
          Login with Google
        </button>
      </>
    </div>
  );
};

export default SocialLogin;
