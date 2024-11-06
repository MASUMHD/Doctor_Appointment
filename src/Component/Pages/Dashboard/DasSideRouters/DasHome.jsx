import Lottie from "lottie-react";
import ErrorAnimation from "../../../../../public/Animation - 1730886947035.json";

const DasHome = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full ">
        <Lottie animationData={ErrorAnimation} />
        <div className="text-center absolute bottom-96 justify-center t">
          <p className="primary-btn text-whit bg-[#F7A582] font-bold py-2 px-4 rounded hover:bg-[#f2936a] ">
            <h1 className="text-2xl font-bold text-gray-700">
              Dashboard Working in progress
            </h1>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DasHome;
