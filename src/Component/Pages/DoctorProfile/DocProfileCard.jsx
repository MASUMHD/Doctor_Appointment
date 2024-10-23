import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5"; 
import { AiFillStar } from "react-icons/ai"; 
import { Link } from "react-router-dom"; 

const DocProfileCard = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row mt-14 mb-14 items-center w-full md:w-4/5 lg:w-2/4 gap-10">
       
        <div className="w-full md:w-1/3 h-56 bg-gray-200 rounded-lg">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        
        <div className="flex-grow">
          
          <h1 className="text-2xl font-bold text-center md:text-left">{doctor.name}</h1>
          <p className="text-gray-600 text-center md:text-left">{doctor.title}</p>

          
          <div className="flex items-center justify-center md:justify-start my-2">
            <div className="text-yellow-400 flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar className="text-gray-300" />{" "}
          
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({doctor.reviews} Reviews)
            </span>
          </div>

        
          <div className="text-sm text-gray-500 flex justify-center md:justify-start items-center my-2">
            <IoLocationOutline className="mr-2" /> {doctor.location}
            <Link to="" className="ml-2 text-orange-500 hover:underline">
              Get Directions
            </Link>
          </div>

         
          <div className="flex justify-center md:justify-start space-x-3 my-4">
            {/* Add image placeholders */}
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          </div>

          
          <div className="flex justify-center md:justify-start space-x-3">
            <button className="border-2 border-gray-300 rounded-lg px-4 py-1 text-gray-700 hover:bg-gray-100">
              Dental Filling
            </button>
            <button className="border-2 border-gray-300 rounded-lg px-4 py-1 text-gray-700 hover:bg-gray-100">
              Teeth Whitening
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocProfileCard;

DocProfileCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
