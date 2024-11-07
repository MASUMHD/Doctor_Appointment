import { FaHome, FaUsers } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SideBar = ({ SideBarToggle }) => {
  const location = useLocation();

  return (
    <div
      className={`${
        SideBarToggle ? "hidden" : "block"
      } w-64 bg-[#07332F] fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="w-40 h-10"
            src="../../../../public/image/Group 2.png"
            alt="Logo"
          />
        </Link>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <Link to="/dashboard">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard"
                ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <FaHome className="w-6 h-6 mr-2" />
              Dashboard Home
            </p>
          </li>
        </Link>
        <Link to="/dashboard/allUsers">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard/allUsers"
                ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <FaUsers className="w-6 h-6 mr-2" />
              All Users
            </p>
          </li>
        </Link>
        <Link to="/dashboard/dasAllServices">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard/dasAllServices"
                ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <FaUsers className="w-6 h-6 mr-2" />
              All Services
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  SideBarToggle: PropTypes.bool,
};

export default SideBar;
