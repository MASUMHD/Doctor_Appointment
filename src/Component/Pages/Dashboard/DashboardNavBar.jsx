import { IoIosArrowDown } from "react-icons/io";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const DashboardNavBar = () => {
  const { user } = UseAuth();

  return (
    <div className="pl-3 lg:pl-20 pr-3 lg:pr-20 bg-[#07332F]">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img
                className="w-40 h-10"
                src="../../../../public/image/Group 2.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-10 h-10 border-2 border-[#F7A582] rounded-full ">
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
  );
};

export default DashboardNavBar;
