import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import PropTypes from 'prop-types';

const DashNavBar = ({ SideBarToggle, setSideBarToggle }) => {
  return (
    <div className="bg-gray-800 px-4 py-3 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center text-xl">
        <FaBars
          onClick={() => setSideBarToggle(!SideBarToggle)}
          className="text-white mr-4 cursor-pointer"
        />
        {/* <span className="text-white font-semibold">E-commerce</span> */}
      </div>

      <div className="flex items-center gap-x-5 pr-0 lg:pr-10">
        <div className="relative md:w-56">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" type="text" placeholder="Search products..." />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white">
              <ul className="py-2 text-gray-950 text-sm">
                <li><a href="">Home</a></li>
                <li><a href="">Log out</a></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashNavBar;

DashNavBar.propTypes = {
  SideBarToggle: PropTypes.bool.isRequired,
  setSideBarToggle: PropTypes.func.isRequired,
};