import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-xs mx-auto hover:shadow-xl transition duration-300 ease-in-out">
      <div className="p-5">
        <img
          src={profile.image}
          alt={profile.name}
          className="h-40 w-full object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.title}</p>
          <div className="flex items-center my-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-600 text-sm ml-2">(5 Reviews)</span>
          </div>
          <div className="text-sm text-zinc-500 flex items-center mb-2">
            <i className="fas fa-map-marker-alt mr-2">
              <IoLocationOutline />{" "}
            </i>
            {profile.location}
          </div>
          <div className="text-sm text-zinc-500 flex items-center mb-2">
            <i className="fas fa-calendar-alt mr-2">
              <CiCalendar />{" "}
            </i>
            {profile.availability}
          </div>
          <div className="text-sm text-zinc-500 flex items-center mb-4">
            <i className="fas fa-dollar-sign mr-2">
              <AiOutlineDollarCircle />
            </i>
            {profile.price}
          </div>
          <button className="w-full py-2 hover:bg-[#F7A582] text-[#F7A582] btn-outline border-2 hover:border-[#F7A582] rounded-md ">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired,
};