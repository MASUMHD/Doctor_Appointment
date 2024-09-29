import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import ErrorAnimation from "../../assets/2404.json";

const Error = () => {
  return (
    <div>
      <div className="w-full absolute  h-screen md:h-screen flex flex-col justify-center items-center space-y-5">
        <Lottie animationData={ErrorAnimation} />
        <div className="text-center absolute bottom-10">
          <button className="primary-btn text-whit bg-[#F7A582] font-bold py-2 px-4 rounded hover:bg-[#f2936a] ">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
