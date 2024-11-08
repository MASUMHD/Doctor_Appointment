import Lottie from "lottie-react";
import ErrorAnimation from "../../../../public/doctorServces.json";


const DocBanner = () => {
  return (
    <div className="relative w-full h-auto bg-[#07332f] flex flex-col md:flex-row justify-around items-center overflow-hidden p-4 md:p-0">
      {/* Doctor's Name */}
      <div className="w-full md:w-1/2 text-center text-slate-300 mb-4 md:mb-0">
        <h1 className="text-xl md:text-4xl font-semibold uppercase">
          <span className="mr-2 md:mr-4">W e l c o m e</span>
          <span className="mr-2 md:mr-4"> t o </span>
          <span className="mr-2 md:mr-4"> o u r ' s </span> <br />{" "}
          <p className="mt-3">S e r v i c e s.</p>
        </h1>
      </div>

      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={ErrorAnimation}
          className="w-full h-40 md:w-full md:h-72" 
        />
      </div>
    </div>
  );
};

export default DocBanner;

