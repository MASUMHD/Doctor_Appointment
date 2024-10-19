import PropTypes from "prop-types";

const DocBanner = ({ doctor }) => {
  return (
    <div>
      <div className="w-full h-72 flex justify-center items-center bg-[#07332f]">
        <div className="">
          <h1 className="text-xl md:text-2xl font-semibold text-start text-slate-300 uppercase ">
            <span className="mr-2 md:mr-4">W e l c o m e</span>{" "}
            <span className="mr-2 md:mr-4"> t o </span>{" "}
            <span className="mr-2 md:mr-4"> m y </span> P r o f i l e.
          </h1>

          <h1 className="text-xl text-center text-slate-300 mt-5">
            <i>Dr. {doctor.name}</i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DocBanner;

DocBanner.propTypes = {
  doctor: PropTypes.object.isRequired,
};
