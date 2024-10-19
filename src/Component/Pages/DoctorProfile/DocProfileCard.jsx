import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5"; // Import location icon
import { AiFillStar } from "react-icons/ai"; // Import star icon
import { Link } from "react-router-dom"; // For the "Get Directions" link

const DocProfileCard = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 flex  mt-14 mb-14 items-center w-2/3 gap-10">
        {/* Image Placeholder */}
        <div className="w-3/1 h-56 bg-gray-200 rounded-lg mr-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-grow">
          {/* Doctor's Name and Title */}
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-gray-600">{doctor.title}</p>

          {/* Star Rating and Reviews */}
          <div className="flex items-center my-2">
            <div className="text-yellow-400 flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar className="text-gray-300" />{" "}
              {/* One star lighter for 4.5 rating */}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({doctor.reviews} Reviews)
            </span>
          </div>

          {/* Location and Directions */}
          <div className="text-sm text-gray-500 flex items-center my-2">
            <IoLocationOutline className="mr-2" /> {doctor.location}
            <Link to="/" className="ml-2 text-orange-500 hover:underline">
              Get Directions
            </Link>
          </div>

          {/* Placeholder for future content like additional images */}
          <div className="flex space-x-3 my-4">
            {/* Add image placeholders */}
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          </div>

          {/* Services Buttons */}
          <div className="flex space-x-3">
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
  }).isRequired,
};
