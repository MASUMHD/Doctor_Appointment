import { FaBars, FaBell, FaSearch, } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import UseAuth from "../../Hooks/UseAuth";

const DashNavBar = ({ SideBarToggle, setSideBarToggle }) => {

  const { user } = UseAuth();

  return (
    <div className="bg-[#07332F] px-4 py-3 flex justify-between items-center transition-all duration-300 ">
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
        <div className="relative flex items-center justify-center">
          <div className="navbar-end flex items-center justify-center">
          <div className="avatar">
            <div className="w-8 h-8 border-2 border-[#F7A582] rounded-full ">
              <img
                className="object-cover"
                src={user?.photoURL}
                alt="profile"
              />
            </div>
          </div>
          {/* dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="text-white text-2xl hover:text-[#F7A582] m-1"
            >
              <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 p-2 shadow"
            >
              <Link to="/">
                <li className="hover:bg-[#F7A582] rounded hover:font-semibold">
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/services">
                <li className="hover:bg-[#F7A582] rounded hover:font-semibold">
                  <a>Services</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
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