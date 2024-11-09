
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import DoctorBanner from "../../../../public/dddddd.json";

const DocBanner = ({ doctor }) => {
  return (
    <div className="relative w-full h-auto bg-[#07332f] flex flex-col md:flex-row justify-around items-center overflow-hidden p-4 md:p-0">
      {/* Doctor's Name */}
      <div className="w-full md:w-1/2 text-center text-slate-300 mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-semibold uppercase">
          <span className="mr-2 md:mr-4">W e l c o m e</span>
          <span className="mr-2 md:mr-4"> t o </span>
          <span className="mr-2 md:mr-4"> m y </span> P r o f i l e.
        </h1>
        <h2 className="text-xl italic mt-2">Dr.: {doctor.name}</h2>
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center ">
        <Lottie
          animationData={DoctorBanner}
          className="w-full h-40 md:w-full md:h-72" 
        />
      </div>
    </div>
  );
};

export default DocBanner;

DocBanner.propTypes = {
  doctor: PropTypes.object.isRequired,
};
