import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = UseAuth();

  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Services</p>
        </li>
      </NavLink>
      
      <NavLink
        to="/appointment"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Appointment</p>
        </li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>About</p>
        </li>
      </NavLink>
      {!user && (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
              : "lg:text-white text-black"
          }
        >
          <li className="lg:hidden block">
            {" "}
            <p>Login</p>
          </li>
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/dashboard"
          // className={({ isActive }) =>
          //   isActive
          //     ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
          //     : "lg:text-white text-black"
          // }
        >
          <li className="lg:hidden block">
            {" "}
            <p>Dashboard</p>
          </li>
        </NavLink>
      )}

      {user && (
        <li>
          <button
            onClick={logOut}
            className="px-4 py-2 text-rose-600 font-semibold lg:hidden block"
          >
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-[#07332F] pl-3 lg:pl-28 pr-3 lg:pr-28">
        <div className="navbar-start w-full flex justify-between items-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="w-40 h-10"
              src="../../../public/image/Group 2.png"
              alt="Doc House Logo"
            />
          </Link>
          <div className="dropdown lg:hidden">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        {/* user */}
        <div className="hidden lg:flex items-center gap-4">
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <div className="avatar">
                  <div className=" ring-offset-base-100 w-8 rounded-full ring ">
                    {user?.photoURL ? (
                      <img src={user?.photoURL} alt="profile" />
                    ) : (
                      <div className="text-xl font-bold flex items-center justify-center m-1 text-white">
                        <span>
                          <FaUserAlt />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu  rounded-box z-[1] w-28  shadow "
              >
                {user && (
                  <Link to="/dashboard">
                    <li className="mb-1">
                      <button className="px-4 py-2 bg-gradient-to-r from-[#07332F] to-[#F7A582] text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-400 transition duration-300 ease-in-out">
                        Dashboard
                      </button>
                    </li>
                  </Link>
                )}
                {/* add logout */}
                {user ? (
                  <li>
                    <button
                      onClick={logOut}
                      className="px-4 py-2 bg-gradient-to-r from-[#07332F] to-[#F7A582] text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-red-400 transition duration-300 ease-in-out"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <Link to="/login">
                    <li>
                      <button className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#F7A582] to-[#07332F] text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-400 transition duration-300 ease-in-out w-full h-full">
                        Login
                      </button>
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
